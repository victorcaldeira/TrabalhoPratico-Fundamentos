import data from "..";

export default  function absoluteDividend (activeName) {
    let sum = 0;
    try {
        for (var i = 0; i < data.length; i++) {
            if (data[i].active == activeName) {
                sum += parseFloat(data[i].dividend);
            }
        }
    } catch (error) {
        console.error(`E000A: unexpected error: ${error}`)
    }
    return sum.toFixed(2);
}