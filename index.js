const express=require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("Hola mi server en Express");
});

app.get("/nueva_ruta", (req, res) =>{
    res.send("Hola, soy una nueva ruta");
});

app.get("/products", (req, res) =>{
    res.json([
        {
        name : "producto_1",
        price : 1000
    },
    {
        name : "producto_2",
        price : 2000
    }
    ]);
});

app.get("/products/:id", (req, res) =>{
const { id } = req.params;
res.json({
    id,
    name : "producto_2",
    price : 2000
});
})

app.get("/categories/:categoryId/products/:productId", (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId
    });
})

app.listen(port, () =>{
    console.log("My port: " + port);
});
