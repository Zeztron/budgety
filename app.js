

// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})();

//UI CONTROLLER
var UIController = (function() {

    // Some code

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        //1. Get the field input data

        //2. Add item to budget CONTROLLER

        //3. Add the item to the user interface.

        //4. Calculate budget.

        //5. Display budget.
        console.log("it works");
    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController, UIController);
