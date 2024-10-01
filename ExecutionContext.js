// Execution Context
var fruitName = 'Apple';

function getFruitDetails() {
  var fruitColor; 

  function setFruitColor() {
    fruitColor = 'Green'; 
  }

  // Creation Phase
  
  var FunctionExecutionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        fruitColor: undefined 
      },
      outer: null, 
      ThisBinding: "global object or window object"
    },
    VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
      },
      outer: null,
      ThisBinding: "global object or window object"
    }
  }

  // Execution Phase
  
  var ExecutionPhase = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        fruitColor: 'Red' 
      },
      outer: null,
      ThisBinding: "global object or window object"
    },
    VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
      },
      outer: null,
      ThisBinding: "global object or window object"
    }
  }
  
  fruitColor = 'Red'; 
  console.log("Before color change: " + fruitColor); 
  setFruitColor(); 
  console.log("After color change: " + fruitColor); 
}

getFruitDetails();
