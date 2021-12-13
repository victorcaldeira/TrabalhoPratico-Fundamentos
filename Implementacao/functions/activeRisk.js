export default function activeRisk(price) {
    let total = 0;
    try {
        for (let i = 0; i < price.length; i++) {
            total += price[i];
        }
    } catch (error) {
        console.error(`E000A: unexpected error: ${error}`)
    }
    return total / price.length;
}