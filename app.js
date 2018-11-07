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
    };
    // Add new item to the budget controller
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            // push it into the data structure
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },
    }
})();

////////// U I  C O N T R O L L E R //////////
var UIController = (function() {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list"
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
        // Add the items on the list and update them to UI
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            if (type === "inc") {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === "exp") {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // Replace placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        // Clear the fields after input
        clearFields: function() {
            var fields, fieldsArr;
            // select the input fields
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            // turn them into array to slice
            fieldsArr = Array.prototype.slice.call(fields);
            // Reset them to empty string
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            // Focus on description
            fieldsArr[0].focus();
        },
        // Expose the private DOMstrings to make it public
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();
////////// G L O B A L  A P P  C O N T R O L L E R //////////
var controller = (function(budgetCtrl, UICtrl) {
    // Set up click and keypress listeners
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
        var input, newItem;
        //1. Get the field input data
        input = UICtrl.getInput();
        //2. Add item to budget CONTROLLER
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //3. Add the item to the user interface.
        UICtrl.addListItem(newItem, input.type);
        //4. Clearfields
        UICtrl.clearFields();
        //5 Calculate Budget.

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
