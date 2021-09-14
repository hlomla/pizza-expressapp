module.exports = function pizzaCart() {

    let pizzaTotals = [];
    var smallPizzaCost = 0; 
    var medPizzaCost = 0;
    var largePizzaCost = 0;
    
    function addPizza(cost){
        smallPizzaCost = Number(cost.smallPizzaCost);
        medPizzaCost = Number(cost.medPizzaCost);
        largePizzaCost = Number(cost.largePizzaCost)
    }
    function getPizza(){
        return{
            smallPizzaCost,
            medPizzaCost,
            largePizzaCost
        }
    }

    function allPizzas(){
        return pizzaTotals.length
    }

	function removePizza(){
        smallPizzaCost = 0; 
        medPizzaCost = 0;
        largePizzaCost = 0;
    }

    function pizzaSize(pizza){
        let pizzaCost = 0;
        if(pizza === "small") {
            pizzaCost++;
        }
        else if( pizza === "medium") {
            pizzaCost++;
        }
        else if(pizza === "large") {
            pizzaCost++;
        }
        if(pizza !== undefined){
            pizzaTotals.push({
                type: pizza,
                pizzaCost

            })
        }

    }
    function pizzaTot(type){
        let total = 0;
        for(let i = 0; i < pizzaTotals.length; i++){
            const ipiztsa = pizzaTotals[i];
            if(ipiztsa.type === type) {
                total += ipiztsa.pizzaCost;
            }
        }
        return total;
    }
    function totalPizzaCost(){
        return pizzaTot('small') + pizzaTot('medium') + pizzaTot('large')
    }
    function totals(){
        let smallTotal = pizzaTot('small').toFixed(2)
        console.log(smallTotal)
        let mediumTotal = pizzaTot('medium').toFixed(2)
        let largeTotal = pizzaTot('large').toFixed(2)
        return{
            smallTotal,
            mediumTotal,
            largeTotal,
            totalPizzaCost : totalPizzaCost().toFixed(2)
        }
    }
    return {
        addPizza,
        getPizza,
        pizzaSize,
        allPizzas,
        removePizza,
        pizzaTot,
        totals,
        totalPizzaCost
    }
}