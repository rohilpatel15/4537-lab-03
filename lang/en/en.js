const messages = {
    greeting: "Hello",
    message: ", What a beautiful day. Server current date and time is ",
    landPage: "Add your name after the = then put it into the search bar. ",
    link: "For Example: https://squid-app-c8omt.ondigitalocean.app/COMP4537/labs/3/getDate?name=Rohil"
};

module.exports = {
    greetWithName: (name) => {
      return `${messages.greeting} ${name}${messages.message}`;
    },
    greetOnLoad: () =>{
      return `${messages.landPage} ${messages.link}`;
    }
  };
