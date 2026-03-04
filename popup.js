const saveButton = document.getElementById("save");

// collect form data
function getFormData() {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    return {
        firstName: firstName,
        lastName: lastName,
        fullName: document.getElementById("fullName").value || firstName + " " + lastName,

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


// listen for input changes (auto-save)
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {

    input.addEventListener("input", () => {

        const data = getFormData();

        chrome.storage.sync.set({ userData: data });

    });

});