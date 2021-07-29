const fs = require("fs");
const path = require("path");

const pathOfFile = path.join(
  path.dirname(process.mainModule.filename),
  "data", //folder were file will be created
  "products.json" //name of file created
);

const getProductsFromFile = (callback) => {
  fs.readFile(pathOfFile, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(titleOFPage) {
    this.title = titleOFPage;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathOfFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
