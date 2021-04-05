const app = require('./index')

// starting the server
app.listen(3001, (err) => {
    if (err) throw err
    console.log('Server running in http://127.0.0.1:3001')
})
