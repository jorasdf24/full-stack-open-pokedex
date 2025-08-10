const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080


app.use(express.static('dist'))

//Listening
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
});

app.get('/health', (req, res) => {
  
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})
