const WebSocket = require("ws");
const { Pool } = require("pg");
const { Car } = require("./Car");
const { Owner } = require("./Owner");

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

const pgConfig = {
  user: "vansafepzuawhk",
  host: "ec2-54-247-89-181.eu-west-1.compute.amazonaws.com",
  database: "d88ac494ucfnca",
  password: "2742b6728b7aba6e3515a2c3d6092e20648312b39cc61406b1282dcb939bd370",
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
      type: type,
      message: message,
    })
  );
}

async function clearDB() {
  await pool.query("delete from car");
  await pool.query("delete from owner");
}

async function processDbRecords(ws, records, cleardb = false) {
  if (cleardb) {
    // clear DB
    sendMessage(ws, "info", "Очистка базы данных");
    try {
      await clearDB();
    } catch (e) {
      console.log("cleardb error", e);
      sendMessage(ws, "error", e.message);
      return;
    }
  }

  try {
    sendMessage(ws, "info", "Start inserting records");

    for (let i = 0; i < records.length; i++) {
      let owner_json = records[i];
      let owner_id = await owner.insert(owner_json);
      console.log("owner_id", owner_id);

      let cars = owner_json.cars;
      for (let j = 0; j < cars.length; j++) {
        let car_json = cars[j];
        await car.insert(car_json, owner_id);
      }
    }
  } catch (e) {
    console.log("processDbRecords error", e);
    sendMessage(ws, "error", e.message);
  }
}

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    let message_json;
    let content_json;
    try {
      message_json = JSON.parse(message);
      content_json = JSON.parse(message_json.content);
      //console.log("received: %s", content_json);
      sendMessage(ws, "success", "Успешная загрузка файла");
    } catch (e) {
      console.log("parse incoming message error: ", e.message);
      sendMessage(ws, "error", e.message);
      return;
    }

    processDbRecords(ws, content_json, message_json.cleardb);
  });
});
