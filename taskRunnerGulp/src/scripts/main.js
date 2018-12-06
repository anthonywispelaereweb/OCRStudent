
var global = {

    data: {
        title : "Ma Demo Task Runner et sass incluant une decouverte javasripts",
        products: []
    },
    constante: {
        firstTitle: $("#title")
    },
    methods: {
        initialize: () => {
            //global.methods.console("Main.js chargé");
            global.methods.initializeProducts();
            //global.constante.firstTitle.html(global.data.title);
        },
        console: (maVariable) => {
            console.log("ma console : ", maVariable)
        },
        initializeProducts: function() {
            console.log('1 - J\'appel le service pour trouver un resultat');
            services.getData("./assets/json/products.json").then(function(data) {
                console.log('4 - Le service me renvoi le resultat trouve');
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
