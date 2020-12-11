## Initiva AB - React startup package
This startup package is made by [Initiva AB](https://www.initiva.se) and it's purpose is to quickly create a React components that can be used together with Initiva's own Content Management System (Dynamix CMS). 

This package can be used both for creating single components but also creating whole wee applications. The development script is compiling into a faster development version with comments and the production script is compiling into a minified and uglified version without comments.

### Install / clone
1. Start by cd into the folder you want your project to be in.
2. Use Git Clone to clone the project into your chosen folder.
3. Update Helper.cs to fit your project structure.
4. Update ReactComponent.cshtml to fit your project structure.
5. Update ReactComponentModel.cs to fit your project structure.
6. Run "npm install" to install dependencies from package.json.
7. Run "npm run dev" in order to compile script and to see if your configurations have worked.

### CMD commands
1. Compile development version (Will trigger watchmode)
```sh
   npm run dev
```
2. Compile production version
```sh
   npm run production
```

### Usage
#### Adding components to compile script
You can add new components to the compile script by requiring them into Component_CompileScript.tsx in the src folder. If you are building a web application only the master component should be declared in App.tsx. If you are building single components that can be installed individually in Dynamix CMS, you should declare the individual components in Component_CompileScript.tsx