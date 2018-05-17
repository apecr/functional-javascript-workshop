const getShortMessages = (messages) =>
  messages
    .filter(message => message.message.length < 50)
    .map(message => message.message);

module.exports = getShortMessages;