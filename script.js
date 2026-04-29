import "dotenv/config"
import {Langbly} from "Langbly"

// Call Id
let InputUser = document.getElementById("Input")
let form = document.getElementById("formulir")
let OutputUser = document.getElementById("Output")
// ========

const client = new Langbly({apiKey: `${process.env.API_KEY}`})
form.addEventListener("submit",function(e){
    e.preventDefault()
})

// Translate Text
InputUser.addEventListener("submit",smallText())
async function smallText(user){
const result = await client.translate(user, {target: "id"})
    
}
smallText(InputUser.values)

async function resultText(user) {
    
}
resultText(smallText())
// Batch Translate
const results = await client.translate(["Hello","Goodbye"], {target: "id"})
results.forEach((r) => console.log(r.text))

// Detect Langguage
const detection = await client.detect("Pilot Terhebat")
console.log(detection.language)

// List supported languages
const languages = await client.languages({target: "id"})
