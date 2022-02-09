// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("pozdrav")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("djesi ba")) {
      this.actionProvider.djesiba();
    }

    if (lowerCaseMessage.includes("sta ima")) {
      this.actionProvider.staima();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
  }
}

export default MessageParser;
