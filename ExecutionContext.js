var primaryColor = "Red";
var secondaryColor = "Blue";
var combinedColor = primaryColor + secondaryColor;

function getColorData() {
    let firstShade = "Light Red"; 
    let secondShade = "Dark Blue"; 
    
    console.log("Combined Color: " + combinedColor); 
    console.log("First Shade: " + firstShade);  
    console.log("Second Shade: " + secondShade); 
}

getColorData();

//  Global execution context (GEC)

// Creation Phase 

globalExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            primaryColor: undefined,
            secondaryColor: undefined,
        
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            combinedColor: undefined,
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
}

// Execution phase

globalExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            primaryColor: 'Red',
            secondaryColor: 'Blue',
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            combinedColor: 'RedBlue',
        },
        outer: "null",
        ThisBinding: "global object or window object"
    },
}

// Function execution context (FEC)

// Creation Phase 

FunctionExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            firstShade: undefined,
            secondShade: undefined,
        },
        outer: "Global Execution context",
        ThisBinding: getColorData()
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
        },
        outer: "Global Execution context",
        ThisBinding: getColorData()
    },
}

// Execution phase 

FunctionExecutionContext: {
    LexicalEnvironment: {
        EnvironmentRecord:  {
            type: "object",
            firstShade: 'Light Red',
            secondShade: 'Dark Blue', 
        },
        outer: "Global Execution context",
        ThisBinding: getColorData()
    },
    VariableEnvironment: {
        EnvironmentRecord:  {
            type: "object",
        },
        outer: "Global Execution context",
        ThisBinding: getColorData()
    },
}