import data from "../..";
import  activeRisk  from "../activeRisk";
import  activeArray  from "./activeArray";

export default function riskArrayRamdoms() {
    let value = data;
    let array = [];
    let arrayResult = [];

    var setActiveName = new Set(value.map(x => x.active));

    setActiveName.forEach(function(value) {
        value != 'ativo' &&
        array.push(value);
    });

    array.forEach(function(value){
        arrayResult.push({
            active: value,
            riskActive: activeRisk(activeArray(value)),
            randomNumber: Math.random() * (10 - 0) + 0
        });
    });
    return arrayResult;
}