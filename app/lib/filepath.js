import {readFile } from "fs/promises";
import { join } from "path";
import {fileURLToPath}from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname =  fileURLToPath(new URL('', import.meta.url));



 const filePath = process.cwd() + "/data/local-employee-data.json"
 
 async function getEmployees(){
    const file = await readFile(filePath, 'utf-8')
    const employees = JSON.parse(file)
    return employees
 }

 export {getEmployees}
 