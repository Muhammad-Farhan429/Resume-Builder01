function addNewWEField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    // newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder", "Enter here");
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    // newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("aq");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
// generating CV
function generateCV() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    // console.log("generating CV");
    var nameField = document.getElementById("nameField").value;
    var nameT1 = document.getElementById("nameT1");
    nameT1 === null || nameT1 === void 0 ? void 0 : nameT1.innerHTML = nameField;
    // let nameT2 = document.getElementById("nameT2");
    // nameT2?.innerHTML = nameField;
    (_a = document.getElementById("nameT2")) === null || _a === void 0 ? void 0 : _a.innerHTML = nameField;
    (_b = document.getElementById("contactT")) === null || _b === void 0 ? void 0 : _b.innerHTML =
        document.getElementById("contactField").value;
    (_c = document.getElementById("addressT")) === null || _c === void 0 ? void 0 : _c.innerHTML =
        document.getElementById("addressField").value;
    (_d = document.getElementById("fbT")) === null || _d === void 0 ? void 0 : _d.innerHTML =
        document.getElementById("fbField").value;
    (_e = document.getElementById("instaT")) === null || _e === void 0 ? void 0 : _e.innerHTML =
        document.getElementById("instaField").value;
    (_f = document.getElementById("linkedT")) === null || _f === void 0 ? void 0 : _f.innerHTML =
        document.getElementById("linkedField").value;
    //Objective
    (_g = document.getElementById("objectiveT")) === null || _g === void 0 ? void 0 : _g.innerHTML =
        document.getElementById("objectiveField").value;
    //(we) Work Experience
    var wes = document.getElementsByClassName("weField");
    var str = "";
    for (var _i = 0, wes_1 = wes; _i < wes_1.length; _i++) {
        var e = wes_1[_i];
        str = str + "<li> ".concat(e.value, " </li>");
    }
    document.getElementById("weT").innerHTML = str;
    //(aq) Academic Qualification
    var aqs = document.getElementsByClassName("aqField");
    var str1 = "";
    for (var _l = 0, aqs_1 = aqs; _l < aqs_1.length; _l++) {
        var a = aqs_1[_l];
        str1 = str1 + "<li> ".concat(a.value, " </li>");
    }
    (_h = document.getElementById("aqT")) === null || _h === void 0 ? void 0 : _h.innerHTML = str1;
    // Code For Setting Image
    var file = document.getElementById("imageField").files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    // set the image to template
    reader.onloadend = function () {
        document.getElementById("imageTemplate").src = reader.result;
    };
    (_j = document.getElementById("cv-form")) === null || _j === void 0 ? void 0 : _j.style.display = "none";
    (_k = document.getElementById("cv-template")) === null || _k === void 0 ? void 0 : _k.style.display = "block";
}
//print CV
function printCV() {
    document.getElementById("btn-template").style.display = "none";
    window.print();
}
