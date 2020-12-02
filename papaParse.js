const fs = require('fs');
const Papa = require('papaparse');
const jsonReformater = require('./jsonReformater');

const parseCSV = (filepath, fileName) => {
  const csvFilePath = filepath

  const file = fs.createReadStream(csvFilePath);
  
  var csvData=[];
  Papa.parse(file, {
    header: true,
    step: function(result) {
      csvData.push(result.data)
    },
    complete: function(results, file) {
      console.log('Complete', csvData.length, 'records.'); 
      let formatedData = jsonReformater(csvData, fileName)
    }
  });
}

module.exports = parseCSV;
