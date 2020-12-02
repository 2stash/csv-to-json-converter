const fs = require("fs");

 const dataConverter = (data, fileName) => {
  // create list of unique page numbers from data
  let pageNumbers = new Set();
  for (let i = 0; i < data.length; i++) {
    pageNumbers.add(data[i].page);
  }

  // create skeleton on data structure up to array where data will be added
  let pages = {};
  for (let item of pageNumbers) {
    pages[item] = {};
    pages[item].vocab = [];
  }

  // push data to vocab array
  for (let i = 0; i < data.length; i++) {
    let page = data[i].page;
    pages[page].vocab.push(data[i]);

  }
  
  fs.writeFile(`./convertedfiles/${fileName}`, JSON.stringify(pages), (err) => {
    if (err) throw err;
  });
};

module.exports = dataConverter;