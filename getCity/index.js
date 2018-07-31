const request =require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const reqUrl = 'http://maoyan.com/ajax/cities';
request(reqUrl,(error,response,body)=>{
    writeData(body);
})
function writeData(body){
  fs.writeFile('./cities.json',body,{flag:'w'},function(err,data){
    if(err){
      throw err;
    }
    console.log(data);
  });
}
