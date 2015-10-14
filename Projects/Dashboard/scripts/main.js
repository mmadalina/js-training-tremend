var dataContainer = document.querySelector("#data");

var itemsContainer = document.createElement("ul");

var mainCheckbox = document.createElement("input");
mainCheckbox.setAttribute("type", "checkbox");
mainCheckbox.addEventListener("change", function() {
    var checkboxes = document.querySelectorAll(".checkbox_item");
    console.log(mainCheckbox.checked);
    for (var i = 0; i < checkboxes.length; i++) {
        // add check for checkbox
        checkboxes[i].checked = mainCheckbox.checked;
    }
});

function getValue (value) {
    if (typeof value === "string" || typeof value === "number")
    {
        var container = document.createElement("li");
        itemDataContainer.appendChild(container);
        container.textContent = value
        console.log(value);
    };
    if (typeof value === "array")
    {
        for (var k = 0; k < value.length; k++)
        {
             getValue (value[k]);
        }
    };
    if (typeof value === "object")
    {
        for (var prop in value)
        {
             getValue (value[prop]);
        }
    };
}

dataContainer.appendChild(mainCheckbox);

for (var i = 0; i < items.length; i++) 
{
    var item = items[i];
    console.log(item)

    var itemContainer = document.createElement("li");
    var itemDataContainer = document.createElement("ul");

    getValue(item);

    var checkboxContainer = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox_item");
    checkboxContainer.appendChild(checkbox);
    itemDataContainer.appendChild(checkboxContainer);

    itemContainer.appendChild(itemDataContainer);
    itemsContainer.appendChild(itemContainer);
}


dataContainer.appendChild(itemsContainer);
