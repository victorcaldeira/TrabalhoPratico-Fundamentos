import riskArrayGreedy from "../functions/arrays/riskArrayGreedy";

export default function greedyPortfolio() {
    let portfolio = riskArrayGreedy();


    portfolio.sort(function (a, b) {
        return a.weight < b.weight ? -1 : a.weight > b.weight ? 1 : 0;
    });

    console.log("\nPortfolio greedy lower weight: ", portfolio[0].weight.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.weight > b.weight ? -1 : a.weight > b.weight ? 1 : 0;
    });

    console.log("Portfolio greedy high weight: ", portfolio[0].weight.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.riskActive * a.weight < b.riskActive * b.weight ? -1 : a.riskActive * a.weight > b.riskActive * b.weight ? 1 : 0;
    });
    
    console.log("Portfolio greedy lower risk: ", (portfolio[0].riskActive * portfolio[0].weight / 100).toFixed(2), "%");

    portfolio.sort(function (a, b) {
        return a.riskActive * a.weight > b.riskActive * b.weight ? -1 : a.riskActive * a.weight > b.riskActive * b.weight ? 1 : 0;
    });

    console.log("Portfolio greedy high risk: ", (portfolio[0].riskActive * portfolio[0].weight / 100).toFixed(2), "%");
}