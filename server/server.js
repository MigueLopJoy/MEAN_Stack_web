express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),

    app = express(),
    PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/catalogdb', { useNewUrlParser: true, useUnifiedTopology: true })

const Product = mongoose.model('Product', {
    name: String,
    description: String,
    price: Number,
})

mongoose.connection.once('open', async () => {
    try {
        const db = mongoose.connection.db,
            collectionExists = await db.listCollections({ name: 'products' }).hasNext()

        if (!collectionExists) {
            await db.createCollection('products')
        } else {
            console.log('Collection "products" already exists.')
        }

        const sampleProducts = [
            { name: 'Producto 1', description: 'Descripción del Producto 1', price: 19.99 },
            { name: 'Producto 2', description: 'Descripción del Producto 2', price: 29.99 },
            { name: 'Producto 3', description: 'Descripción del Producto 3', price: 39.99 },
        ]

        await Product.insertMany(sampleProducts)
    } catch (error) {
        console.error('Error during database setup:', error.message)
    }
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).send(error.message)
  } 
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
