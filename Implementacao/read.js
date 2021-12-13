import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default function read() {
  const fs = require("fs");
  const csv = fs.readFileSync("./csv/data.csv");
  const csvArray = [];
  const csvString = String(csv).split("\n");
  const csvObject = [];


  for (const complementer of csvString) {
    csvArray.push(complementer.split(","));
  }

  for (const complementer of csvArray) {
    csvObject.push({
      active: complementer[0],
      date: complementer[1],
      price: complementer[2],
      value: complementer[3],
      dividend: complementer[4],
    });
  }

  return csvObject;
}
