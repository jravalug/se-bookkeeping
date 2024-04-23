// Using csv-parser to stream and parse CSV data
import csv from 'csv-parser'
import fs from 'fs'
const data = []
const csvFile = 'data-activities.csv'
const jsonFile = 'data-activities.json'

fs.createReadStream(csvFile)
  .pipe(csv({ separator: ';' }))
  .on('data', (row) => {
    data.push(row)
    console.log(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed.')
  })

// Escribe los datos JSON en un archivo
fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2))
console.log(`Datos del archivo CSV exportados exitosamente a ${jsonFile}.`)
