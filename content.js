function fillforms(userData){

    // finding all inputs in the form
    const inputs = document.querySelectorAll("input, textarea");

    // looping through inputs
    inputs.forEach((input) => {

        const field = (
            (input.name || "") +
            (input.id || "") +
            (input.placeholder || "")
        ).toLowerCase();

        // already filled then skip
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

        // trigger input event (important for React / Angular sites)
        input.dispatchEvent(new Event("input", { bubbles: true }));

    });
}


// Get stored user data from extension storage
chrome.storage.sync.get("userData", (data) => {

    if (!data.userData) return;

    const userData = data.userData;

    // fill form if data exists
    fillforms(userData);

    // observe DOM changes
    const observer = new MutationObserver(() => {
        fillforms(userData);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});