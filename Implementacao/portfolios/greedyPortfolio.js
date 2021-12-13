import riskArrayGreedy from "../functions/arrays/riskArrayGreedy";

export default function greedyPortfolio() {
    let portfolio = riskArrayGreedy();
    let lowerWeight = 0, highWeight = 0;

    portfolio.sort(function (a, b) {
        return a.weight < b.weight ? -1 : a.weight > b.weight ? 1 : 0;
    });

    lowerWeight = portfolio[0].weight;
    console.log("\nPortfolio greedy lower weight: ", portfolio[0].weight.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.weight > b.weight ? -1 : a.weight > b.weight ? 1 : 0;
    });

    highWeight = portfolio[0].weight;
    console.log("Portfolio greedy high weight: ", portfolio[0].weight.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.riskActive < b.riskActive ? -1 : a.riskActive > b.riskActive ? 1 : 0;
    });

    console.log("Portfolio greedy lower risk: ", (portfolio[0].riskActive * lowerWeight / 100).toFixed(2), "%");

    portfolio.sort(function (a, b) {
        return a.riskActive > b.riskActive ? -1 : a.riskActive > b.riskActive ? 1 : 0;
    });

    console.log("Portfolio greedy high risk: ", (portfolio[0].riskActive * highWeight / 100).toFixed(2), "%");
}