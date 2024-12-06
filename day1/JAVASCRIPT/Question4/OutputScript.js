const obj = {
  name: "Sidit",
  func: function () {
    console.log(`Hello ${this.name}`);
  },
};

const show = obj.func.bind(obj);

setTimeout(show, 2000);
