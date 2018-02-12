const csvFilePath='./customer-data.csv'
const csv=require('csvtojson')
const fs = require('fs')
const path = require('path')
var arr = []; 

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{ 
    arr.push(jsonObj);     
})
.on('done',(error)=>{           
    fs.writeFileSync('costumer-data.json', JSON.stringify(arr , null, 2 ))
}) ;  
