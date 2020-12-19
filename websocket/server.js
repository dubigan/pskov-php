const WebSocket = require("ws");
const { Pool, Client } = require("pg");

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

async function processDbRecords(ws, records, cleardb = false) {
  if (cleardb) {
    // clear DB
    ws.send(
      JSON.stringify({
        type: "info",
        message: "Очистка базы данных",
      })
    );
  }

  try {
    records.map((owner) => {
      cars = owner.cars;
      if (len(cars) > 0) {
        cars.map((car) => {});
      }
    });
    res = await pool.query("select * from owner");
    //await pool.end();
    console.log(res.rows);
  } catch (e) {
    console.log("query error", e);
  }
}

function getInsertOwnerString(o) {
  //const table = "owner";
  const qs = `insert into owner `;
  qs += `( name, patronymic , last_name, age, gender, comment ) values `;
  qs += `(${o.name}, ${o.patronymic}, ${o.last_name}, ${o.age}, ${o.gender}, ${o.comment})`;
  qs += `returning id`;
  return qs;
}

function getInsertCarString(c, owner_id) {
  const qs = `insert into car `;
  qs += `( model, color, production , power, manufacturer, owner, comment, mileage ) values `;
  qs += `(${c.model}, ${c.color}, ${c.production}, ${c.power}, `;
  qs += `${c.manufacturer}, ${owner_d}, ${c.comment}, ${c.mileage})`;
  return qs;
}

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    try {
      message_json = JSON.parse(message);
      //console.log("received: %s", message_json.content);
      ws.send(
        JSON.stringify({
          type: "success",
          message: "Успешная загрузка файла",
        })
      );
    } catch (e) {
      console.log("parse incoming message error: ", e.getMessage());
      ws.send(
        JSON.stringify({
          type: "error",
          message: e.getMessage(),
        })
      );
    }

    processDbRecords(ws, message_json.content, message_json.cleardb);
  });

  //ws.send('something');
});
