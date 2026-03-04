const saveButton = document.getElementById("save");

// function to collect form data
function getFormData() {
    return {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        fullName: document.getElementById("fullName").value,

        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,

        rollNumber: document.getElementById("rollNumber").value,
        erp: document.getElementById("erp").value,
        section: document.getElementById("section").value,
        branch: document.getElementById("branch").value,

        address: document.getElementById("address").value
    };
}


// save data when button clicked
saveButton.addEventListener("click", () => {

    const data = getFormData();

    if (!data.email) {
        alert("Email is required");
        return;
    }

    chrome.storage.sync.set({ userData: data }, () => {
        alert("Data Saved Successfully");
    });

});


// input event listener for all inputs
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {

    input.addEventListener("input", () => {

        const data = getFormData();

        chrome.storage.sync.set({ userData: data });

    });

});