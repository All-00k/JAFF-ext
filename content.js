function fillforms(){

    //finding all inputs in the form 

    const inputs = document.querySelectorAll("input, textarea");

  

    //looping thorugh every inputs to know there input type
    inputs.forEach((input) => {
    
        const field = (
            input.name  +
            input.id +
            input.placeholder 
        ).toLowerCase();

        //already filled then return 
        if (input.value) return;


      // FIRST NAME
        if (field.includes("first") && field.includes("name") && userData.firstName) {
            input.value = userData.firstName;
        }

     // LAST NAME
        else if (field.includes("last") && field.includes("name") && userData.lastName) {
            input.value = userData.lastName;
        }

      // FULL NAME
        else if (
            (field.includes("fullname") || field.includes("full_name") || field.includes("name")) 
            && userData.fullName
        ) {
            input.value = userData.fullName;
        }

        // EMAIL
        else if (field.includes("email") && userData.email) {
            input.value = userData.email;
        }

        // PHONE
        else if (field.includes("phone") && userData.phone) {
            input.value = userData.phone;
        }

         // ROLL NUMBER
        else if (field.includes("roll") && userData.rollNumber) {
            input.value = userData.rollNumber;
        }

         // ERP
        else if (field.includes("erp") && userData.erp) {
            input.value = userData.erp;
        }

         // SECTION
        else if (field.includes("section") && userData.section) {
            input.value = userData.section;
        }

        // BRANCH
        else if (field.includes("branch") && userData.branch) {
            input.value = userData.branch;
        }


        // ADDRESS
        else if (field.includes("address") && userData.address) {
            input.value = userData.address;
        }

        // Trigger event so that it works on website that does not directly permit to change values directly
        input.dispatchEvent(new Event("input", { bubbles: true }));

    });
}

//Get stored user data from extension storage

chrome.storage.sync.get("userData", (data) => {
    
    if(!data.userData) return;

    const userData = data.userData;

    //fill form if data exists
    fillforms(userData);


    //setting observer to see changes in DOM
    const observer = new MutationObserver(() => {
        fillforms(userData);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})



