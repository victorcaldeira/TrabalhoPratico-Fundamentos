import activeRisk from "./ActiveRisk.js";
import activeArray from "./Array/activeArray.js";

export default function standardDeviation(active) {
    let price = activeArray(active), risk = activeRisk(price), variation = 0;
    try {
        for (let i = 0; i < price.length; i++) {
            variation += (price[i] - risk) ^ 2;
        }
    } catch (error) {
        console.error(`E000A: unexpected error: ${error}`)
    }
    return Math.sqrt(variation / price.length);
}