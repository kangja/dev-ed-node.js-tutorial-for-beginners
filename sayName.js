const sayName = () => {
  console.log("Hello there Jason");
};

const sayAddress = () => {
  console.log("Seattle");
};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
