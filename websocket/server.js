const WebSocket = require("ws");

const PORT = process.env.WS_PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    message_json = JSON.parse(message);
    console.log("received: %s", message_json.content);
    ws.send(
      JSON.stringify({
        type: "success",
        message: "Успешная загрузка файла",
      })
    );
  });

  //ws.send('something');
});
