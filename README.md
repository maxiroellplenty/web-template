# web-template
A quick template for creating a website using scss and bootstrap
* Also providing a `github` & `ssh` (`ftp`coming soon) deploy script.
* Build script to create a minified compressed publish (dist) folder.

## Getting started
* Run: `npm install` (requires [NodeJs](https://nodejs.org/en/))
* Open: `web-template/dist/index.html` at your favorite browser.
## Build
* Run: ` sh build.sh `
* Edit paths at gulpfile.js

## Deploy
* Run: ` sh deploy.sh `
* Update the branch & ssh connection at `deploy.sh` file.

## Create new view
* Method to create a new view with all needed files (html,css,js).
* Run: `sh cv.sh`
