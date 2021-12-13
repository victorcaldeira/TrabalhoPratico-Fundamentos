import  activeArray  from "./arrays/activeArray.js";

export default function expectedReturnActive(active) {
    let average = 0, sum = 0, array = activeArray(active);
    try {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        average = sum / array.length;
    } catch (error) {
        console.error(`E000A: unexpected error: ${error}`)
    }

    return average.toFixed(2);
}