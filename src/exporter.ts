//Modules
//To enable external modules TS relies on third-party libraries: require.js for browser apps and CommonJS for Node.js.
var sayHi = function(): void {
    console.log("Hello!");
}

export = sayHi;