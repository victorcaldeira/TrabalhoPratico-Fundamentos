import riskArrayRamdom from "../functions/arrays/riskArrayRamdom";

export default function ramdomPortfolio() {
    let portfolio = riskArrayRamdom();
    let lowerRandomNumber = 0, highRandomNumber = 0;

    portfolio.sort(function (a, b) {
        return a.randomNumber < b.randomNumber ? -1 : a.randomNumber > b.randomNumber ? 1 : 0;
    });

    lowerRandomNumber = portfolio[0].randomNumber;
    console.log("\nPortfolio ramdom lower weight: ", portfolio[0].randomNumber.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.randomNumber > b.randomNumber ? -1 : a.randomNumber > b.randomNumber ? 1 : 0;
    });

    highRandomNumber = portfolio[0].randomNumber;
    console.log("Portfolio ramdom high weight: ", portfolio[0].randomNumber.toFixed(2));

    portfolio.sort(function (a, b) {
        return a.riskActive < b.riskActive ? -1 : a.riskActive > b.riskActive ? 1 : 0;
    });

    console.log("Portfolio ramdom lower risk: ", (portfolio[0].riskActive * lowerRandomNumber / 100).toFixed(2), "%");

    portfolio.sort(function (a, b) {
        return a.riskActive > b.riskActive ? -1 : a.riskActive > b.riskActive ? 1 : 0;
    });

    console.log("Portfolio ramdom high risk: ", (portfolio[0].riskActive * highRandomNumber / 100).toFixed(2), "%");

}