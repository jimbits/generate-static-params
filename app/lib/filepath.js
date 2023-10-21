import {readFile } from "fs/promises";
import { join } from "path";
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));



const filePath = join(__dirname, "/data/local-employee-data.json")

return filePath
 