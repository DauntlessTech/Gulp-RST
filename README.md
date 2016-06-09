# Gulp-RST (Gulp, React, and Skeleton Template)

Gulp-RST is a simple no-frills template for anyone looking to start a new web app project.

## Instructions

- git clone <https://github.com/DauntlessTech/Gulp-RST> MyApp
- cd MyApp
- npm install
- npm start

  **OR**

- gulp

### DOCS

Feature    | Location                                                  | Description
---------- | --------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Routing    | [z_routes.jsx](src/assets/js/src/components/z_routes.jsx) | It works by getting the last index of the page url, and using that to determine the current page. For example, loading a page can be done by checking for an empty url and then using ReactDOM to render the component.
SASS       | [SASS Folder](src/assets/sass)                            | SCSS Is compiled using gulp. You can modify the order, and the files being compiled there. By default skeleton-framework is compiled first to ensure that it's components make it into production.
JavaScript | [JS Folder](src/assets/js/src/)                           | JS files are compiled and minified manually by adding them to the gulpfiles [jsFiles](gulpfile.js#L35) variable
