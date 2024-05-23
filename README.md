# JavaScript-Todo-List
JavaScript, HTML, CSS based To Do list App
## Live Version hosted on GitHub Pages
https://1amal.github.io/JavaScript-Todo-List/
git s
## To Do List App with OOP and Webpack

This is a JavaScript To Do List application built with:

* **ES6 Modules:** For modular code organization.
* **Webpack:** For module bundling.
* **Object-Oriented Programming (OOP):** To manage projects and todos as objects.
* **Web Storage API (localStorage):** For data persistence.

### Features

* Create, edit, and delete todos within projects.
* Mark todos as completed/incomplete.
* View todos in a project (title and duedate).
* Expand a todo to see/edit details (description, priority, notes, checklist).
* Default project for initial todos.
* Create new projects.
* Choose which project a todo belongs to.

### Technologies Used

* HTML: Structure and content of the application.
* CSS: Styling and visual design of the application.
* JavaScript (ES6 Modules): Application logic and interactivity.
* Webpack: Module bundler for managing JavaScript modules.
* npm (Node Package Manager): Dependency management.
* date-fns: Library for date/time manipulation.

### Setup

1. Clone this repository:

   ```bash
   git clone git@github.com:1Amal/JavaScript-Todo-List.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the application

After this application is built with Webpack you can run this app in any Web Browser
Compiled code will be in the /dist folder and index.html contains the full app.

### Building the application for production

1. Build the production-ready version of the application:

   ```bash
   npm run build
   ```

   This will create an optimized production build of the application in the `dist` folder.

### Code Structure

The code is organized into several folders:

* **src:** Contains the source code for the application.
    * **models:** Defines `Todo` and `Project` classes.
    * **services:** Provides logic for data manipulation (CRUD operations).
    * **utils:** Contains utility functions (e.g., localStorage access).
    * **components:** Contains UI components for rendering todos and projects.
    * `index.js`: Main application entry point.
* **dist:** Contains static assets like HTML and CSS.
    * `index.html`
    * `index.css`
* **package.json:** Manages project dependencies.

### Data Persistence

The application uses localStorage to save and retrieve project data (including todos) as JSON strings. When the app loads, it retrieves data from localStorage and rebuilds the application state.

**Note:** Since localStorage cannot store functions, function references are stored as strings (function names) to be used later when calling methods on the restored objects.

### Future Development

* Implement functionalities to:
    * Add new projects.
    * Mark tasks as complete.
* Consider using a state management library (Redux or MobX) for complex data flows.
* Explore user authentication and data syncing across devices.

### Testing

Unit tests are encouraged for classes and services to ensure their functionality. Consider using a testing framework like Jest.

### Building with Webpack

A separate Webpack configuration file is used to bundle modules and handle code splitting for performance optimization. Loaders are used for processing different file types (e.g., Babel for transpiling ES6 to ES5, CSS loader for handling styles).

This README provides a high-level overview of the application. Feel free to explore the codebase for further details!

