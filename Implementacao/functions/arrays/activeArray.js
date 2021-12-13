import data from "../..";

export default function activeArray (nameActive) {
    var array = [];
    try {
        for (var i = 0; i < data.length; i++) {
            if (data[i].active == nameActive) {
                array.push(parseFloat(data[i].price));
            }
        }
    } catch (error) {
        console.error(`E000A: unexpected  error: ${error}`)
    }
    return array;
}