function fillforms(){

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


        //to handle labels 

        let labelText = "";
        if (input.labels && input.labels.length >0) {
            lableText = input.labels[0].innerText.toLowerCase();
        }

        
        const combinedInfo = fieldInfo + labelText;

        
        if (combinedInfo.includes("email")) {
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
}

//function call 
fillforms();


//creating a mutation observer - whenever the DOM changes it will run fillforms()

const observer = new MutationObserver(() => {
    fillforms();
});


//telling observer to watch changes in DOM tree
// document.body -> tells observer to watch from the body so it watches whole webpage
//childList -> watches of new dic , labels
//subtree -> watches all nested elements inside body 

observer.observe(document.body, {
    childList: true,
    subtree: true
});

