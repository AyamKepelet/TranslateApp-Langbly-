
import { Langbly } from "https://esm.sh/langbly@0.3.0";


const client = new Langbly({apiKey: api});

// Translate text 
export async function translateText(text, targetLang) {
    const result = await client.translate(text, { target: targetLang });
    return result.text;
}

// Translate multiple text
export async function translateBatch(texts, targetLang) {
    const results = await client.translate(texts, { target: targetLang });
    return results.map((r) => r.text);
}

// detection language
export async function detectLanguage(text) {
    const detection = await client.detect(text);
    return detection.language;
}

// List all supported languages
export async function listLanguages(users) {
    const languages = await client.languages({ target: users});
    return languages;
}
