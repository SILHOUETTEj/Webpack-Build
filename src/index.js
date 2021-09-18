// import './styles/style.css'
import {Post} from './Post.js'


const title = document.createElement('h1');
title.textContent = "Webpack"
const root = document.querySelector('#root')
root.append(title)



console.log('hey, hey');
const post = new Post('Webpack Post Title')
console.log('Post to String', post.toString());



