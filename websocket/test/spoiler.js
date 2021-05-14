const { EOL } = require('os');
const fs = require('fs');
const lineReader = require('readline').createInterface({
  input: fs.createReadStream('./spoiler.in.txt'),
});
const openBracket = '[';
const closeBracket = ']';
const openTag = openBracket + 'SPOILER=';
const closeTag = openBracket + '/SPOILER' + closeBracket;

status = {
  open: 'open',
  close: 'close',
};
type = { spoiler: 'spoiler', empty: 'empty' };

text = [];

const last = arr => arr[arr.length - 1];
const addNewBlock = spoilerStr => {
  if (spoilerStr.trim().length) {
    text.push({ status: status.open, type: type.spoiler, text: [spoilerStr] });
    return;
  }
  text.push({ status: status.open, type: type.empty, text: [] });
};
const addLinetoLastBlock = line => {
  if (!text.length || last(text).status === status.close) addNewBlock('');
  last(text).text.push(line);
};
const closeLastBlock = () => {
  if (text.length) {
    if (last(text).type === type.spoiler && last(text).status === status.open) {
      last(text).text.push(closeTag);
    }
    last(text).status = status.close;
  }
};

const printText = () => {
  out = [];
  text.forEach(block => {
    out.push(block.text.join(EOL));
  });
  return out.join(EOL);
};

lineReader.on('line', line => {
  const current = line.trim();
  if (current.startsWith(openTag) && current.endsWith(closeBracket)) {
    //close last spoiler block
    closeLastBlock();
    //add new spoiler block
    addNewBlock(line);
    return;
  }
  if (current.startsWith(closeTag)) {
    closeLastBlock();
    return;
  }
  addLinetoLastBlock(line);
});

lineReader.on('close', () => {
  fs.writeFileSync('./spoiler.out.txt', printText());
});
