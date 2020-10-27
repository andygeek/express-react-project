const express = require("express");
const reactViews = require("express-react-views");
const app = express();
const port = 8003;

app.use("/public", express.static("public")); // For serving static files
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

app.get("/", require("./routes").index);

app.listen(port, () => {
  console.log(`Te estamos escuchando en http://localhost:${port}`);
});
