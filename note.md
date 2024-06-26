## npm
`node -v`
`npm -v`


* Next we will an npm project
* make sure to hit enter for capture defaults... "a bunch of enter's"
`npm init`
* This creates the package.json file

## install a package

* to do so.... go to website of module to look for complete "install command"....
`npm install moment --save`

* when you install you FIRST package it creates the node_modules folder
* this is where all the packages are placed
* this updates the package.json file to show dependencies


==========================================
## Webpack
Here starts the bundler

* installing with save-dev - is installed as development in package.json
* this will install the 2 packages PLUS any other things THEY might need... see a bunch of folders on node_modules after install
 `npm install --save-dev webpack webpack-cli`

## create bundle
./node_modules/./bin/webpack index.js -o dist/bungle.js
node_modules/webpack/bin/webpack.js
node_modules/webpack/bin/webpack index.js -o dist/bungle.js
* now in your page just link the script dist/bundle.js

### create config file for webpack

#### webpack.config.js

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: "source-map"
};




* Some notes
* this line `devtool: "source-map"`
    * makes it so that the line numbers on browser errors match the index.je with the bundle.js.
    * Just nice for debugging if need be in the original file.
* this line `mode: 'development'`
    * Allows you to run in development mode..miniing it won't create a minified bundle file..the bundle.js will be readable
    * remove it before going live

* Now to create the bundle just run webpack it will look for config file automatically
  ./node_modules/./bin/webpack

NOW TO RUN so it uses the config file
`npx webpack`
Some notes: 
on Top of **main.js** file we need
`import moment from 'moment';`
The assumption here is that we are using modern JavaScript.. no "babel" needed to convert "require"

### transpiling code - converting from one lang to another
SASS, LESS, babel,
babel converts to compatible js
npm install --save-dev @babel/core @babel/preset-env babel-loader
SEE "webpack.config.js" file instead
https://actualize.teachable.com/courses/347362/lectures/5396450


### Test Runner
use npm
under script in package.json
"scripts": {
  ..."test":...
  "build": "webpack --progress --mode=production",
  "watch": "webpack --progress --watch",
}
* TO Run
  `npm run build`
  `npm run watch`

The "Watch" automatically RE-BUILDS the bundles.. it watches for changes

## Dev Server with live reloading
`npm install --save-dev webpack-dev-server`
"scripts": {
  ..."test":...
  ....
[  "server": "webpack-dev-server --open"
]()}

* also need to change "webpack.config.js"   
  output: {
  ...filename...
  publicPath: 'dist'
  }

to RUN.....
`npm run server`




Webpack html plugin
npm install --save-dev html-webpack-plugin

Take base webpack.config.js and add:
To top"
`const HtmlWebpackPlugin = require('html-webpack-plugin');`
Inside:
```
plugins: [
  new HtmlWebpackPlugin({
    title: "Webpack Practice",
    filename: 'index.html',
    inject: 'body',
  }),
],
```

```
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
  }),
],
```
