const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

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
