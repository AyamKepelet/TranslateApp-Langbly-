import {Langbly} from "Langbly"

// Call Id
// let InputUser = document.getElementById("Input")
// let OutputUser = document.getElementById("Output")
// ========

const client = new Langbly({apiKey: "WvqPhgJ75JmzCLRcpbSsgQ"})

// Translate Text 
const result = await client.translate("Hello World", {target: "id"})
console.log(result.text)

// Batch Translate
const results = await client.translate(["Hello","Goodbye"], {target: "id"})
results.forEach((r) => console.log(r.text))

// Detect Langguage
const detection = await client.detect("Pilot Terhebat")
console.log(detection.language)

// List supported languages
const languages = await client.languages({target: "id"})
