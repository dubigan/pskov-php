const process = require('process');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

const timeout = 60 * 1000;
const queue = [];
const queue_copy = [];

const writeMessageToDB = async message => {
  await console.log('writeMessageToDB', message);
};

const processMessages = async () => {
  queue_copy.push(...queue.splice(0, queue.length));
  try {
    let message;
    while ((message = queue_copy.pop())) await writeMessageToDB(message);
    console.log('processMessages', '-------------- end ----------');
  } catch (e) {
    console.log('error', e);
  }
};

setInterval(processMessages, timeout);

wss.on('connection', ws => {
  ws.on('message', message => {
    queue.push(message);
  });
});

let i = 0;
setInterval(() => {
  i += 1;
  queue.push('message ' + i);
}, 1000);
