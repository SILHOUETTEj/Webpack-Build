// import './styles/style.css'
import {Post} from './Post.js'
import img from './assets/img/picture.jpg';
import './styles/style.css'


// const title = document.createElement('h1');
// title.textContent = "Webpack"
// const root = document.querySelector('#root')
// root.append(title)



class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

// создаем элемент заголовка
const title = document.createElement('h1')
title.textContent = 'Как интересно!'




// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root')
root.append(title, p)





console.log('hey, hey');
const post = new Post('Webpack Post Title')
console.log('Post to String', post.toString());



