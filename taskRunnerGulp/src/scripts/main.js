var global = {

    data: {
        products: [
            
        ]
    },
    constante: {
        firstTitle: document.getElementById("#title")
    },
    methods: {
        initialize: () => {
            global.methods.console("Main.js chargé");
            global.methods.initializeProducts();
        },
        console: (maVariable) => {
            console.log("ma console : ", maVariable)
        },
        initializeProducts: function() {
            services.getData("./assets/json/products.json").then(function(data) {
                global.data.products = data;
                for( var i = 0; i < global.data.products.length ; i++) {
                    $("#productsCtn")
                        .append("<div class=\"product-ctn\" id=" + "product"+ global.data.products[i].id +"></div>")
                    $("#product" + global.data.products[i].id)
                        .append("<p class=\"product-label\">" + global.data.products[i].label +"</p>")
                        .append("<img class=\"product-img\" src=\"" + global.data.products[i].urlImg  + "\" alt=\"\">")
                        .append("<p class=\"product-price\">" + global.data.products[i].price +"</p>");
                }
            });
            
            
        }
    }
}

const init = (() => {
    global.methods.initialize();
})()
