import {readFile } from "fs/promises";
import { join } from "path";
import {fileURLToPath}from 'url';
const __filename = fileURLToPath(import.meta.url);


// const filePath = join(__dirname, "/data/local-employee-data.json")

const filePath = __filename

export {filePath}
 