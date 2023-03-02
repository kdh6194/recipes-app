import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes_ko.json";  //한국어
//import data from "./data/recipes.json";   // 영어

ReactDOM.render(<Menu recipes={data} />,
    document.getElementById("root"));


