import data from "../..";
import activeRisk from "../activeRisk";
import activeArray from "./activeArray";

export default function riskArrayBruteForce() {
    let value = data;
    let array = [], arrayResult = [], count = 1, sumRiskWeight = 0, arraySumRiskWeight = [], arraySumRiskWeightOrder = [];
    let highValueSumRiskWeight = 0, index = 0;


    var setActiveName = new Set(value.map(x => x.active));

    setActiveName.forEach(function (value) {
        value != 'ativo' &&
            array.push(value);
    });

    array.forEach(function (value) {
        let i = 0;
        array.forEach(function (value) {
            sumRiskWeight += activeRisk(activeArray(value)) * count
            count++;
        })
        if (count > array.length) {
            count = 1;
        }
        arraySumRiskWeight.push(sumRiskWeight);
        count = i
    })

    arraySumRiskWeightOrder = arraySumRiskWeight;

    arraySumRiskWeightOrder.sort(function (a, b) {
        return a > b ? -1 : a > b ? 1 : 0;
    });

    highValueSumRiskWeight = arraySumRiskWeightOrder[0];

    arraySumRiskWeight.forEach(function (value) {
        let count = 0;
        if (value == highValueSumRiskWeight) {
            index = count;
        }
        count++;
    })

    array.forEach(function (value) {
        arrayResult.push({
            active: value,
            riskActive: activeRisk(activeArray(value)),
            weight: index
        });
    });

    return arrayResult;
}