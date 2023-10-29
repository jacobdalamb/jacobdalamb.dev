import pkg from '../../package.json';
const author = pkg.author;
const repoURL = pkg.repository.url;

let authorName = '';
let authorUrl = '';

const regex = /^(.+)\s+<(.+)> \((.+)\)$/;
const match = author.match(regex);

if (match) {
	authorName = match[1];
	authorUrl = match[3];
} else {
	console.log('Author information could not be parsed.');
}

export { authorName, authorUrl, repoURL };
