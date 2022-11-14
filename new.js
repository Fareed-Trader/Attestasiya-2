class Message {
    constructor(author, message) {
      this.author = author;
      this.message = message;
      this.date = gettime();
    }
  
    toString() {
      return `${this.date} ${this.author}: ${this.message}`;
    }
  }
  
  class Messenger {
    constructor() {
      this.history = [];
    }
  
    show_history() {
      this.history.forEach((message) => {
        console.log(message.toString());
      });
    }
  
    send(author, text) {
      const message = new Message(author, text);
      this.history.push(message);
    }
  }
  
  function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  
  let messenger = new Messenger();
  messenger.send("Adil", "ilk mesaj");
  messenger.send("Meryem", "Ikinci mesaj");
  messenger.show_history();