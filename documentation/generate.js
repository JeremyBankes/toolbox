import jsdoc2md from 'jsdoc-to-markdown';
import fs from 'fs';

const documentation = jsdoc2md.renderSync({
    files: 'build/*.js'
});

let readMeContent = fs.readFileSync('documentation/README.template.md', 'utf8');
readMeContent = readMeContent.replace(new RegExp('DOCUMENTATION', 'g'), documentation);

fs.writeFileSync('README.md', readMeContent);