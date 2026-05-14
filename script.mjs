
import { translateText, detectLanguage, listLanguages, translateBatch } from "./call.mjs";
console.log(listLanguages());

const bahasa = document.getElementsByClassName("langOption")
const btn = document.getElementById("Submit");
const inputField = document.getElementById("Input");
const outputField = document.getElementById("Output");

async function language(){
    try{
    for (let i = 0; i < bahasa.length; i++) {
    if(bahasa[i].value === "Chinese"){
        return "zh"
    }else if(bahasa[i].value === "Indonesia"){
        return "id"
    }
     else if(bahasa[i].value === "English"){
        return "en"
    } 
     else if(bahasa[i].value === "Sunda"){
        return "su"
    }
        }
    }catch(error){
        console.log("There's something wrong on " + error);
    }
}


btn.addEventListener("click", async function () {
    try{
        let dataText = await translateText(inputField.value, await language())
        outputField.textContent = dataText
    }catch(err){
        console.log(`There is something wrong on ${err}`);
    }
});
