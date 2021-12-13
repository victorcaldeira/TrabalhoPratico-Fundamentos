import expectedReturnActive from "./ExpectedReturnActive.js";
import standardDeviation from "./standardDeviation.js";

export default function riskNormalized(active) {
    try {
        return standardDeviation(active) / expectedReturnActive(active);
    } catch (error) {
        console.error(`E000A: unexpected  error: ${error}`)
    }
}