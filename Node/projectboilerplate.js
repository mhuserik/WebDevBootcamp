// Project
//     touch indexed.html
//     touch StyleSheet.css
//     touch app.js 

const fs = require('fs');
//Accept argument for file path where project is created. If no name is chosen it will default to Project.
const folderName = process.argv[2] || 'NewProject'


try{


//A syncrounous function. It will run in order listed and not move no until process is completed. 
fs.mkdirSync(folderName);
//Create the files within the project
fs.writeFileSync(`${folderName}/index.html`, '');
fs.writeFileSync(`${folderName}/style.css`, '');
fs.writeFileSync(`${folderName}/app.js`, '');
} catch(e){
    console.log('"There was a problem creating the new project.');
    console.log(e);
}





//A non syncronous fuction. It could run in any order. Probs not going to use this one. 

/* fs.mkdir('Project', { recursive: true }, (err) => {
    console.log('In the calback')
    if (err) throw err;   });

    console.log('I come after the directory is made.') */

