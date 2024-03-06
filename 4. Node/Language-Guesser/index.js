import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';


const input = process.argv.slice(2).join(' ');
const languageCode = franc(input);

if (languageCode === 'und') {
    console.log(colors.red("Sorry, couldn't figure it out! Try with more sample text."));
} else {
    const language = langs.where('3', languageCode);
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`Sorry, couldn't find a language for code: ${languageCode}`));
    }
}