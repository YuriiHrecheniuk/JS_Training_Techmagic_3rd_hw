# TechMagic JS Training Center
## Third homework

There were 2 task to do:
1. Create an async function with a known response shape (Promise generic), use https://jsonplaceholder.typicode.com/posts - iterate over them and for each post and append them to the DOM as new nodes
2. Create a function updateObjectInArray.ts - which has to update an object of a given shape in an array of uni-shaped objects and return a cloned array. (the function has to be called as `updateObjectInArray<ObjectShape>(initialArray, keyToFind, keyValueToFind, patch))`, where ***initialArray*** is the initial array (you should clone it before performing the update), ***keyToFind*** is the key value of which is known to you (**id**, for example), ***keyValueToFind*** is the value of that key, known to you, patch is the update that need to be applied (has a `Partial<ObjectShape>` interface)

***I have done them on different branches, they have corresponding names***

I have been using the JetBrains WebStorm IDE, so to start the project you need to launch it on a server by WebStorm. To do this you need to open the index.html file in WebStorm and click the icon (in the upper right corner) of the browser you use (personally I used Chrome).

Also I used lodash library to do the functionality in the 2nd task. I bundled everything with Webpack. There weren't any prohibitions in task description, so I decided to use it.

Enjoy!
