import riskArrayBruteForce from "../functions/arrays/riskArrayBruteForce";

export default function bruteForcePortfolio() {
    let portfolio = riskArrayBruteForce();

    portfolio.sort(function (a, b) {
        return a.weight < b.weight ? -1 : a.weight > b.weight ? 1 : 0;
    });

    console.log("\nPortfolio brute force lower weight: ", portfolio[0].weight.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.weight > b.weight ? -1 : a.weight > b.weight ? 1 : 0;
    });

    console.log("Portfolio brute force high weight: ", portfolio[0].weight.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.riskActive < b.riskActive ? -1 : a.riskActive > b.riskActive ? 1 : 0;
    });

    console.log("Portfolio brute force lower risk: ", (portfolio[0].riskActive / 100).toFixed(2), "%");

    portfolio.sort(function (a, b) {
        return a.riskActive > b.riskActive ? -1 : a.riskActive > b.riskActive ? 1 : 0;
    });

    console.log("Portfolio brute force high risk: ", (portfolio[0].riskActive / 100).toFixed(2), "%");
}