import { parse } from "somebody";
import pkg from "../../package.json";
const author = pkg.author;
const parsedAuthor = parse(author);
const repoURL = pkg.repository.url;
const description = pkg.description;

const authorName = parsedAuthor.name;
const authorUrl = parsedAuthor.url;
const authorUrlString = authorUrl.toString();

export { authorName, authorUrl, repoURL, authorUrlString, description };
