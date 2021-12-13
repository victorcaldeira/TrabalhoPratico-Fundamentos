import data from "../..";
import activeRisk from "../activeRisk";
import activeArray from "./activeArray";

export default function riskArrayBruteForce() {
    let value = data;
    let array = [], arrayResult = [], arrayOrdered = [];

    let setActiveName = new Set(value.map(x => x.active));

    setActiveName.forEach(function (value) {
        value != 'ativo' &&
            array.push(value);
    });

    array.forEach(function (value) {
        arrayOrdered.push({
            active: value,
            riskActive: activeRisk(activeArray(value)),
        });
    });

    arrayOrdered.sort(function (a, b) {
        return a.riskActive < b.riskActive ? -1 : a.riskActive > b.riskActive ? 1 : 0;
    });

    let count = arrayOrdered.length;

    arrayOrdered.map(x => x.active).forEach(function (value) {
        arrayResult.push({
            active: value,
            riskActive: activeRisk(activeArray(value)),
            weight: count
        })
        count--
    })

    return arrayResult;
}