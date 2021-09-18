// import './styles/style.css'
import {Post} from './Post.js'
import json from './assets/json'


console.log('hey, hey');
const post = new Post('Webpack Post Title')
console.log('Post to String', post.toString());
console.log('JSON:',json);


