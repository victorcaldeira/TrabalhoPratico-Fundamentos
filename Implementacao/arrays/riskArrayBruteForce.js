import data from "../..";
import  activeRisk  from "../activeRisk";
import  activeArray  from "./activeArray";

export default function riskArrayBruteForce() {
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
            riskActive: activeRisk(activeArray(value))
        });
    });
    return arrayResult;
}