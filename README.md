This is an example how to use include files into a svelte project when svelte does not compile certain functanalities. For example, the Loopring API uses "Buffer", which when building and deploying ontto vercel does not properly compile and causes a build error, such as "Buffer is not defined" and the project fails to deploy/load.

1. Set up your svelte project with NPM init vite
2. Create a "index.js" file in the root of your project.
3. If you will be using "require" to import libraries, install browserify: https://www.npmjs.com/package/browserify
4. Put all your code that won't be compiled with svelte into index.js
5. In the index.html file created by svelte, include the index.js file, or if using browserify include the bundle.js file instead.


This template is  work in progress. Please feel free to make comments if a step has been skipped or does not work as intended.