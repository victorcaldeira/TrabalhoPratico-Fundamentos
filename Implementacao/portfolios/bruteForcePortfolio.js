import riskArrayBruteForce from "../Array/riskArrayBruteForce";

export default function bruteForcePortfolio() {
    let portfolio = riskArrayBruteForce();

    const lengthOfText = text.length;
    for (let i = 0; i < portfolio.length; i++) {
        for (let j = 0; j < weigh; j++) {
            if (text.charAt(i + j) !== pattern.charAt(j)) {
                break;
            }
        }
        if (j === weigh) return i;
    }
    return lengthOfText;
}