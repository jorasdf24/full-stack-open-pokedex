const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

//This is setting up the middleware
app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
