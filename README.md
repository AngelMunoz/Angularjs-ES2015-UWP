# Angularjs-ES2015-UWP
Angularjs (1.7.x) inside a windows universal application, it not might the best way to do things (no webpack or bundler currently  also not planed) but it seems to be working and wth the help of ES2015 modules, it seems to work just fine


It is a weird setup to be fair, but as far as I've seen it shoud work without any problem at all there are some sligt modifications I made 
[here](https://github.com/AngelMunoz/WinJS-ES2015-UWP) that are not present in this repo, because after all those changes
are opinionated on my way to do things (a class to manage application cicle which is almost unnecesary, to be real but if it grows perhaps not so much)

# Angular modules
Just pick the home module and create a copy, rename it, register it in `main.js` and there you go you have another module ready to go

# ES2015 Imports
Please be warned that `ES2015 Imports` must include the extension, and they resolve from the base url
for example
```
src
  home
    index.js
  main.js
index.js
index.html
```

in your index.html
```html
<!-- this will work -->
<script type="module" src="index.js"></script>
```
Also note that `any import inside of a es2015 module script that fails, will also make that module fail` and the web engine will silently fail and discard that import


main.js
```js
import Home from './home/home.js' // this will fail and cause main.js to not be imported from anything that imports this file
import Home from './home/home' // this will fail and cause main.js to not be imported from anything that imports this file
import Home from '/src/home/home.js' // this will actually work
```
index.js
```js
import main from '/src/main.js'
// if any of the first two imports in the main.js is present even if this is well written it wil also silently fail
```

It is a weird setup to be fair, I didn't bother to use a bundler to make it nice and shining, but I believe this is going to work well
both angular and UWP are battle tested technologies, you can always use a bundle and spit the html, js you need to load it if necessary, but

![Hey! as long as it works](http://i0.kym-cdn.com/photos/images/original/001/075/794/3e1.png)


