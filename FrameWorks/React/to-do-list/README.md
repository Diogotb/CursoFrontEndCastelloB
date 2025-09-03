use minhaLojaCastelloB;

db.produtos.insertOne(
    {nome: "NoteBook",
    marca: "Positivo",
    preco: 5000.00,
    especificacoes:{
        processador: "Intel i7 13º",
        ram: "16GB",
        armazenamento: "512GB"
    }}
);

db.produtos.find();

db.produtos.find({preco:{$gt:5000}});

db.produtos.updateOne({nome:"NoteBook"},{$set:{preco:5500.00}})