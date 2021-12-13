import data from "../..";
import activeRisk from "../activeRisk";
import activeArray from "./activeArray";

export default function riskArrayGreedy() {
    let value = data;
    let array = [];
    let arrayResult = [];

    let setActiveName = new Set(value.map(x => x.active));

    setActiveName.forEach(function (value) {
        value != 'ativo' &&
            array.push(value);
    });

    let riscoRetornoTotal = 0;

    array.forEach(function (value) {
        if (activeRisk(activeArray(value)) > 0) {
            riscoRetornoTotal += 1 - activeRisk(activeArray(value));
        } else {
            arrayResult.push({
                active: value,
                riskActive: activeRisk(activeArray(value)),
                weight: 0
            });
        }
    });

    array.forEach(function (value) {
        if (activeRisk(activeArray(value)) > 0) {
            arrayResult.push({
                active: value,
                riskActive: activeRisk(activeArray(value)),
                weight: (1 - activeRisk(activeArray(value)) / riscoRetornoTotal)
            });
        }
    });

    return arrayResult;
}