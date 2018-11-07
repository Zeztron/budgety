

////////// B U D G E T  C O N T R O L L E R //////////
var budgetController = (function () {
    // Create expense and income function contructors.
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Store the income and expense data in arrays
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

})();

////////// U I  C O N T R O L L E R //////////
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

////////// G L O B A L  A P P  C O N T R O L L E R //////////
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
