import riskArrayRamdom from "../functions/arrays/riskArrayRamdom";

export default function ramdomPortfolio() {
    let portfolio = riskArrayRamdom();

    portfolio.sort(function (a, b) {
        return a.randomNumber < b.randomNumber ? -1 : a.randomNumber > b.randomNumber ? 1 : 0;
    });


    console.log("\nPortfolio ramdom lower weight: ", portfolio[0].randomNumber.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.randomNumber > b.randomNumber ? -1 : a.randomNumber > b.randomNumber ? 1 : 0;
    });


    console.log("Portfolio ramdom high weight: ", portfolio[0].randomNumber.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.riskActive * a.randomNumber < b.riskActive * b.randomNumber ? -1 : a.riskActive * a.randomNumber > b.riskActive * b.randomNumber ? 1 : 0;
    });

    console.log("Portfolio ramdom lower risk: ", (portfolio[0].riskActive * portfolio[0].randomNumber / 100).toFixed(2), "%");

    portfolio.sort(function (a, b) {
        return a.riskActive * a.randomNumber > b.riskActive * b.randomNumber ? -1 : a.riskActive * a.randomNumber > b.riskActive * b.randomNumber ? 1 : 0;
    });

    console.log("Portfolio ramdom high risk: ", (portfolio[0].riskActive * portfolio[0].randomNumber / 100).toFixed(2), "%");

}