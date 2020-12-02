const express = require('express');
const app = express();

// Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req,res) => {

  res.send('you made it')
})
app.use('/api/convert', require('./routes/api/convert'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))