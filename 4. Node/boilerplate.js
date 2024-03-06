const fs = require('fs');
const folderName = process.argv[2] || 'Project'; // Defaults to 'Project' if no arguments given

try {
    fs.mkdirSync(folderName);
    fs.mkdirSync(`${folderName}/javascript`); // Create the 'javascript' folder
    fs.mkdirSync(`${folderName}/stylesheets`); // Create the 'stylesheets' folder
    fs.writeFileSync(`${folderName}/index.html`,
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${folderName}</title>
    <link rel="stylesheet" href="stylesheets/styles.css">
</head>
<body>
    <h1>Welcome to ${folderName}</h1>
    <script src="javascript/app.js"></script>
</body>
</html>`);
    fs.writeFileSync(`${folderName}/javascript/app.js`, '');
    fs.writeFileSync(`${folderName}/stylesheets/styles.css`, '');
} catch (e) {
    console.log("Error! Something went wrong.", e);
}
