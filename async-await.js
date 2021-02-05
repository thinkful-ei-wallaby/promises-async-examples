const axios = require("axios");
const BASE_URL = "http://localhost:5000";
 	
async function getConstellationNameById(id) {
   const url = `${BASE_URL}/constellations/${id}`;
   try {
     const { data } = await axios.get(url);
     return data.name;
   } catch (error) {
     throw `Constellation with id of ${id} could not be found.`;
   }
 }
  
 getConstellationNameById("n2OEOzp").then(console.log);
 //> "Libra"
  
 getConstellationNameById("error").catch(console.log);
 //> Constellation with id of error could not be found.