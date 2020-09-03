const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
app.use(express.static(path.resolve(__dirname, "public")));

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "server", "views"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server up on port ::${PORT}`));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Royal Kaban" });
});
