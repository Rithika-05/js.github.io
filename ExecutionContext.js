var primaryColor = "Red";
let secondaryColor = "Blue";

function ColorMix() {
    let mixedColor = "Purple";
    const shades = ["Light Purple", "Dark Purple", "Lavender"];

    const result = mixedColor + " is a mixture of " + primaryColor + " and " + secondaryColor;

    console.log(result);

    function shadesInfo() {
        let light = "Light Purple";
        let dark = "Dark Purple";

        console.log("Shades available: " + light + " and " + dark);
    }
    shadesInfo();
}
ColorMix();

/*

Global Execution context (CREATION){

Lexical Environment{

Environment Record{
 primaryColor: undefined, => Declarative
 secondaryColor: declared but not initialized. => Declarative
 function: ColorMix(); => Object

 }
}
}
OUTER: null
THIS: window


Global Execution context (EXECUTION){

Lexical Environment{

Environment Record{
 primaryColor: "Red"
 secondaryColor: "Blue"
 function: ColorMix();

 }
}
}
OUTER: null
THIS: window


-------Function ColorMix() Execution Context--------

Function Execution context (CREATION){

Lexical Environment{

Environment Record{
 mixedColor: declared but not initialized. => Declarative
 shades: declared but not initialized. => Object
 result: declared but not initialized. => Object
 function: shadesInfo() => Object
 }
}
}
OUTER: Global Execution Context
THIS: ColorMix()


Function Execution context (EXECUTION){

Lexical Environment{

Environment Record{
 mixedColor: "Purple"                                 => Declarative
 shades: ["Light Purple", "Dark Purple", "Lavender"]  => Object
 result: "Purple is a mixture of Red and Blue"       => Object
 console.log(result); // output "Purple is a mixture of Red and Blue"
 function: shadesInfo()                                 => Object
 }
}
OUTER: Global Execution Context
THIS: ColorMix()


-------Function shadesInfo() Execution Context--------

Function Execution context (CREATION){

Lexical Environment{

Environment Record{
 light: declared but not initialized. => Declarative
 dark: declared but not initialized. => Declarative

 }
}
}
OUTER: ColorMix() Execution Context
THIS: shadesInfo()


Function Execution context (EXECUTION){

Lexical Environment{
Environment Record{
 light: "Light Purple"       => Declarative
 dark: "Dark Purple"         => Declarative

 console.log("Shades available: " + light + " and " + dark); // outputs : Light Purple and Dark Purple"

 }
}
}
OUTER: ColorMix() Execution Context
THIS: shadesInfo()

*/