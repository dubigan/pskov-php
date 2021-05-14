const process = require('process');
const WebSocket = require('ws');
const { Pool } = require('pg');
const { Car } = require('./Car');
const { Owner } = require('./Owner');
const { ValidationError } = require('./Item');

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

const pgConfig = {
  user: 'vansafepzuawhk',
  host: 'ec2-54-247-89-181.eu-west-1.compute.amazonaws.com',
  database: 'd88ac494ucfnca',
  password: '2742b6728b7aba6e3515a2c3d6092e20648312b39cc61406b1282dcb939bd370',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(pgConfig);
const car = new Car(pool);
const owner = new Owner(pool);

function sendMessage(ws, type, message) {
  ws.send(
    JSON.stringify({
      type,
      message,
    })
  );
}

async function clearDB() {
  await pool.query('delete from car');
  await pool.query('delete from owner');
}

async function processDbRecords(ws, records, cleardb = false) {
  if (cleardb) {
    // clear DB
    sendMessage(ws, 'info', 'Удаление данных...');
    try {
      await clearDB();
      sendMessage(ws, 'success', 'Удаление данных завершено');
    } catch (e) {
      //console.log('cleardb error', e);
      sendMessage(ws, 'error', e.message);
      return;
    }
  }

  try {
    sendMessage(ws, 'info', 'Загрузка данных в BD...');

    for (let i = 0; i < records.length; i++) {
      let owner_json = records[i];
      let owner_id = await owner.insert(owner_json);
      //console.log("owner_id", owner_id);

      let cars = owner_json.cars;
      for (let j = 0; j < cars.length; j++) {
        let car_json = cars[j];
        await car.insert(car_json, owner_id);
      }
    }
    sendMessage(ws, 'success', 'Загрузка данных завершена');
  } catch (e) {
    //console.log('error', e);
    if (e instanceof ValidationError) {
      e.messages.forEach(error => {
        sendMessage(ws, error.type, error.message);
      });
    } else sendMessage(ws, 'error', e.message);
  }
}

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    let message_json;
    let content_json;
    try {
      message_json = JSON.parse(message);
      content_json = JSON.parse(message_json.content);
      sendMessage(ws, 'success', 'Успешная загрузка файла');
      processDbRecords(ws, content_json, message_json.cleardb);
    } catch (e) {
      //console.log('error: ', e.message);
      sendMessage(ws, 'error', 'Ошибка чтения данных. Используйте формат файла JSON');
    }
  });
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
