module.exports = function pizzaCart(pizzas) {

    var pizzaTotals = pizzas || [];
    
    function addPizza(){
        //var orderPizza = //

    }

    function pizzaSize(){
        if(pizzaSize === "small") {
            return pizzaSize++
        }
        if( pizzaSize === "medium") {
            return pizzaSize++
        }
        if(pizzaSize === "large") {
            return pizzaSize++
        }

    }
    return {
        addPizza,
        pizzaSize
    }
}