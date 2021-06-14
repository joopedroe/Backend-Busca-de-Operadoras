const fs = require('fs');
const csv = require('fast-csv');


module.exports = {
  searchCSV(req, res) {
    var listSearch = [];
    const name = req.params.nameSearch;
    fs.createReadStream('Relatorio_cadop.csv')
      .pipe(csv.parse({
        delimiter: ';',
      }))
      .on('error', error => {
        return res.status(400).send({
          error: 'Bad Request'
        })
      })
      .on('data', row => {
        if (row[2].search(name.toLocaleUpperCase())>=0) {
          if (listSearch.length<20){
            listSearch.push(row);
          }
          
        }
      })
      .on('end', returnList => {
        if (listSearch.length > 0) {
          return res.status(200).send(listSearch)
        } else {
          return res.status(203).send({
            message: "Not Found"
          })
        }
      });
  }
  
};