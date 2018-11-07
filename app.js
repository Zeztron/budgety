

// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})();

//UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    }
    return {
        getInput: function() {
            // Method to read input data from the user.
            return {
                // Will be either income or expenses
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() { // Expose the private DOMstrings to make it public
            return DOMstrings;
        }
    };


})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
        document.addEventListener("keypress", function(event) {
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        //1. Get the field input data
        var input = UICtrl.getInput();
        //2. Add item to budget CONTROLLER

        //3. Add the item to the user interface.

        //4. Calculate budget.

        //5. Display budget.
    };

    return {
        init: function() {
            console.log("Application has started");
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
