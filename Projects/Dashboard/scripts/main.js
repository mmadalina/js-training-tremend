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
    // console.log("value is " + value + "\n type: " + typeof value);
    if (typeof value === "string" || typeof value === "number")
    {
        return value;
    };
    if (typeof value === "array")
    {
        for (var k = 0; k < value.length; k++)
        {
            // console.log ("property is " + k + "\n value is " + value[k]);
            return getValue (value[k]);
        }
    };
    if (typeof value === "object")
    // console.log("value is " + value + "\n type: " + typeof value);
    {
        for (var prop in value)
        {
            // console.log ("property is " + prop + "\n value is " + value[prop]);
            return getValue (value[prop]);
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

    // var idContainer = document.createElement("li");
    /**
     * innerHtml - only for html content
     * innerText - not supported by firefox
     * textContent - purrrfect
     */
    // idContainer.textContent = item.id;
    // itemDataContainer.appendChild(idContainer);

    // idContainer.textContent = item.name;

    // idContainer.textContent = item.details.description;

    // @TODO
    // var requirements = ["id", "name", {"details" : "description"}, "filesTypes" : "filename"];

    // for (var j = 0; j < requirements.length; j++) {
    //     var container = document.createElement("li");

    //     if (typeof requirements[j] === "object") {
    //         for (var prop in requirements[j]) {
    //             container.textContent = item[prop][requirements[j][prop]];
    //         }
    //     } else {
    //      container.textContent = item[requirements[j]];
    //     }
    // itemDataContainer.appendChild(container);  
    // }

    for (var j in item)
    {
        var container = document.createElement("li");
        console.log("property is " + j + "\n type " + typeof item[j]);
        container.textContent = getValue (item[j]);
        itemDataContainer.appendChild(container);  
    }

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
