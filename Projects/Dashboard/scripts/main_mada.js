
for (k=0; k < items.length; k++)
{
    console.log("k = " + k + ", id = " + items[k].id + ", name = " + items[k].name + ", description = " + items[k].details.description);
    //loop for filetypes
    var filesTypes= items[k].filesTypes;
    var filetext = "filename = ";
    var fileextension = "extension = ";
    var distributionsName = "name = ";
    var distributionsPrice = "price = ";

    // display data as html
    var container =  document.createElement('ul');     // create container
    //display id
    var containerElement =  document.createElement('li');     // create container element
    containerElement.innerHTML = items[k].id;
    container.appendChild(containerElement);

    //display name
    var containerElement2 =  document.createElement('li');     // create container element
    containerElement2.innerHTML = items[k].name;
    container.appendChild(containerElement2);

    //display description
    var containerElement3 =  document.createElement('li');     // create container element
    containerElement3.innerHTML = items[k].details.description;
    container.appendChild(containerElement3);


    for (x=0; x < filesTypes.length; x++)
    {
        filetext += filesTypes[x].filename+", ";
        fileextension += filesTypes[x].extension+", ";

        //display FileTypes filename
        var containerElement4 =  document.createElement('li');     // create container element
        var containerElement4ul =  document.createElement('ul');     // create sub container element
        var containerElementulli =  document.createElement('li');     // create sub list container element for FileTypes name
        containerElementulli.innerHTML = filetext;
        var containerElementullieExtension =  document.createElement('li');     // create sub list container element for FileTypes extension
        containerElementullieExtension.innerHTML = fileextension;


        containerElement4ul.appendChild(containerElementulli);
        containerElement4ul.appendChild(containerElementullieExtension);


        containerElement4.appendChild(containerElement4ul);
        container.appendChild(containerElement4);


        //loop for filesTypes distributions
        var filesTypesdistributions = filesTypes[x].distributions;

        for (y=0; y < filesTypesdistributions.length; y++)
        {
            distributionsName += filesTypesdistributions[y].name+", ";
            distributionsPrice += filesTypesdistributions[y].price+", ";

            var containerElement4ulDistribution =  document.createElement('li');     // create sub container element for distribution
            var containerElement4ulDistributionUl =  document.createElement('ul');     // create sub list container element for FileTypes distribution name
            var containerElement4ulDistributionUlLi =  document.createElement('li');     // create sub container element for distribution
            containerElement4ulDistributionUlLi.innerHTML = distributionsName;

            var containerElement4ulDistributionprice =  document.createElement('li');     // create sub container element for distribution price
            containerElement4ulDistributionprice.innerHTML = distributionsPrice;

            containerElement4ulDistributionUl.appendChild(containerElement4ulDistributionUlLi);
            containerElement4ulDistributionUl.appendChild(containerElement4ulDistributionprice);
            containerElement4ulDistribution.appendChild(containerElement4ulDistributionUl);
            containerElement4ul.appendChild(containerElement4ulDistribution);
        }
    }
    console.log(filetext);
    console.log(fileextension);
    console.log(distributionsName);
    console.log(distributionsPrice);
    console.log('');



    document.getElementById("data").appendChild(container);

}



