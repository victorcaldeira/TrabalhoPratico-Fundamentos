
import menu from "./menu.js";
import { default as readCsv } from "./read.js";

const data =  readCsv();
export default data;

menu();

