
import absoluteDividend from "./functions/absoluteDividend.js";
import activeRisk from "./functions/activeRisk.js";
import activeArray from "./functions/arrays/activeArray.js";
import effectiveReturnActive from "./functions/effectiveReturnActive.js";
import expectedReturnActive from "./functions/expectedReturnActive.js";
import riskNormalized from "./functions/riskNormalized.js";
import standardDeviation from "./functions/standardDeviation.js";
import bruteForcePortfolio from "./portfolios/bruteForcePortfolio.js";
import greedyPortfolio from "./portfolios/greedyPortfolio.js";
import ramdomPortfolio from "./portfolios/ramdomPortfolio.js";


export function activeMenu(activeName){
    console.log(`\nAbout active ${activeName} :`);
    console.log(`\nEffective return on active:`);
    console.log(effectiveReturnActive(activeName));
    console.log(`\nExpected return on active:`);
    console.log(expectedReturnActive(activeName));
    console.log(`\nStandard Deviation about the active:`);
    console.log(standardDeviation(activeName))
    console.log(`\nRick the active:`);
    console.log(activeRisk(activeArray(activeName)))
    console.log(`\nAbsolute dividend active:`);
    console.log(absoluteDividend(activeName))
    console.log(`\nRisk normalized active:`);
    console.log(riskNormalized(activeName))
    console.log(`\nArray active`);
    console.log(activeArray(activeName))

}

export default function menu() {
    console.log("Investment Portfolio");
    console.log("\nIf you want change csv, please replace the file data.csv");

    activeMenu("hgre");
    ramdomPortfolio();
    greedyPortfolio();
    bruteForcePortfoliolio();
}


