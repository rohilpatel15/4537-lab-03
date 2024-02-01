const messages = {
    greeting: "Hello",
    message: ", What a beautiful day. Server current date and time is "
};

module.exports = (name) => {
    return `${messages.greeting} ${name}${messages.message}`;
};