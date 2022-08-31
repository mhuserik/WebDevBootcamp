import { createRequire } from "module";
const require = createRequire(import.meta.url);
// These lines make "require" available


import {franc} from 'franc';


const langs = require('langs');
const colors = require('colors');
 
const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und'){
    console.log("sorry couldn't figure it out, try again with more sample text".red)
} else {
    const language = langs.where('3',langCode);
    console.log(`our best guess is: ${language.name}`.green);
}
