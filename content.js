console.log("Form filler is running");

//finding all inputs in the form 

const inputs = document.querySelectorAll("input, textarea");

console.log("Detected inputs:", inputs);

//looping thorugh every inputs to know there input type
inputs.forEach((input) => {
   
    const fieldInfo = (
        (input.name || "") +
        (input.id || "") +
        (input.placeholder || "")
    ).toLowerCase();

    
    if (fieldInfo.includes("email")) {
        input.value = "ay879018@gmail.com";
        //webiste made from react angular does not allow direct value changes so we trigger an input event 
        //it triggers an input event taht user typed something
        input.dispatchEvent(new Event("input", { bubbles: true}));
    }

    if (fieldInfo.includes("name")) {
        input.value = "Alok Yadav";
        input.dispatchEvent(new Event("input", { bubbles: true}));
    }

    if (fieldInfo.includes("phone")) {
        input.value = "9682818068" ;
        input.dispatchEvent(new Event("input", { bubbles: true}));
    }

});