// https://honghaine.onrender.com
const express = require("express");
const path = require("path");
const app = express();
const ngl = require("./controller/ngl");
const cons = require("consolidate");
const cors = require("cors");
const PORT = process.env.PORT || 3030;
app.engine("html", cons.swig);
app.use(cors());
app.use(express.json());

app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); //serve static file
app.use("/styles", express.static(__dirname + "public/styles"));
app.use("/script", express.static(__dirname + "public/script"));
app.use("/images", express.static(__dirname + "public/images"));

app.use(ngl);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
