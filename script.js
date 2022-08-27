function changeitem1() {

    var Model = document.getElementById("Brand1").value;
    if (Model == "pencil") {
        document.getElementById("product-image1").src = "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-typo/default/dwc6fb0339/140123/140123-05-1.jpg?sw=800&sh=1200&sm=fit";
        document.getElementById("product-name1").innerHTML = "Mars® Lumograph®";

        document.getElementById("Product-Details1").innerHTML = "<li>Brand: TYPO</li>" + "<li>Product: Mars® Lumograph®</li>" + "<li>Price: 1,290</li>";
    }

    else if(Model=="color Markers")
    {
        document.getElementById("product-image1").src = "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-typo/default/dwe6777d64/145645/145645-05-2.jpg?sw=1920&sh=2880&sm=fit";
        document.getElementById("product-name1").innerHTML = "Dual Markers 6Pk";

        document.getElementById("Product-Details1").innerHTML = "<li>Brand: TYPO</li>" + "<li>Product: Mars® Lumograph®</li>" + "<li>Price: 1,290</li>";
    }


    else if(Model=="Books")
    {
        document.getElementById("product-image1").src = "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-typo/default/dw6770c167/145663/145663-189-2.jpg?sw=640&sh=960&sm=fit";
        document.getElementById("product-name1").innerHTML = "College Spinout Notebook";

        document.getElementById("Product-Details1").innerHTML = "<li>Brand: TYPO</li>" + "<li>Product: Mars® Lumograph®</li>" + "<li>Price: 1,290</li>";
    }

}


function changeitem2() {

    var Model = document.getElementById("Brand2").value;
    if (Model == "pencil") {
        document.getElementById("product-image2").src = "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-typo/default/dwc6fb0339/140123/140123-05-1.jpg?sw=800&sh=1200&sm=fit";
        document.getElementById("product-name2").innerHTML = "Mars® Lumograph®";

        document.getElementById("Product-Details2").innerHTML = "<li>Brand: TYPO</li>" + "<li>Product: Mars® Lumograph®</li>" + "<li>Price: 1,290</li>";
    }

    else if(Model=="color Markers")
    {
        document.getElementById("product-image2").src = "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-typo/default/dwe6777d64/145645/145645-05-2.jpg?sw=1920&sh=2880&sm=fit";
        document.getElementById("product-name2").innerHTML = "Dual Markers 6Pk";

        document.getElementById("Product-Details2").innerHTML = "<li>Brand: TYPO</li>" + "<li>Product: Mars® Lumograph®</li>" + "<li>Price: 1,290</li>";
    }

    else if(Model=="Books")
    {
        document.getElementById("product-image2").src = "https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-typo/default/dw6770c167/145663/145663-189-2.jpg?sw=640&sh=960&sm=fit";
        document.getElementById("product-name2").innerHTML = "College Spinout Notebook";

        document.getElementById("Product-Details2").innerHTML = "<li>Brand: TYPO</li>" + "<li>Product: Mars® Lumograph®</li>" + "<li>Price: 1,290</li>";
    }
}