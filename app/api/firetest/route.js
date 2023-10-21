import { readFile } from "fs/promises"
/* 
    Route Path To The GET function...
    api/fire/

*/



async function GET (req, {params}) {
 
   
  return Response.json({name:1})
}

export {GET}