import "dotenv/config"
import { Langbly } from "langbly";

const client = new Langbly(process.env.API_KEY);

// Translate text
const result = await client.translate("Hello world", { target: "nl" });
console.log(result.text); // "Hallo wereld"

// Batch translate
const results = await client.translate(["Hello", "Goodbye"], { target: "nl" });
results.forEach((r) => console.log(r.text));

// Detect language
const detection = await client.detect("Bonjour le monde");
console.log(detection.language); // "fr"

// List supported languages
const languages = await client.languages({ target: "en" });