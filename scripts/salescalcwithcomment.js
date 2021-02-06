addEventListener("load", main)

function main() {
    btCalcSales.addEventListener("click", calculateSales)
}

function calculateSales() {
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
    Tax=Price*TaxRate
    Total=Price+Tax
    spTotal.innerHTML=Total.toFixed(2)
}
// This comment is here to remind us all that there must be adjustments to our code.

