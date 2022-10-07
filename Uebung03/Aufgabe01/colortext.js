


function faerben(){
    
    var Texteingabe = document.querySelector("#src_Ausgabe");
    var Textausgabe = document.querySelector("#src_Eingabe");

    var random = Math.floor(Math.random()*16777215).toString(16)

    var farbe = "#"+random;

    Texteingabe.style["color"] = farbe;
    Texteingabe.style["text-align"]= "center";
    Texteingabe.style["font-size"] = "50px";


    var Feld = Textausgabe.value;
    Texteingabe.setAttribute("value", Feld);

}