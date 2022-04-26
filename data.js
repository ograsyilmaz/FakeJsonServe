const { faker } = require('@faker-js/faker');
const fs = require("fs");

module.exports = ()=>{
    const data ={
        products:[]

   }

   for(let i=0;i<1000 ;i++){
       data.products.push({
           id:i,
           nameSurname:faker.name.firstName(),
		Company:faker.company.companyName(),
		Email:faker.internet.email(),
		Date:faker.date.between() ,
		Country:faker.address.country(),
		City:faker.address.city()
       })
   }


   fs.writeFileSync(
    "./db.json",
    JSON.stringify({ users: data.products })
  );


   return data
}