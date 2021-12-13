import  absoluteDividend from "./absoluteDividend";
import  activeArray  from "./arrays/activeArray";


export default function effectiveReturnActive(active) {
    try {
        let array = activeArray(active), totalPrice = parseFloat(array[array.length - 1]);
        let initialPrice = parseFloat(array[0]), dividends = parseFloat(absoluteDividend(active));
        let result = (totalPrice + dividends - initialPrice) / initialPrice;

        return result.toFixed(4) * 100;
    } catch (error) {
        console.error(`E000A: unexpected error: ${error}`)
    }
}