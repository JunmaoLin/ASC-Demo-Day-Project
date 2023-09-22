let organizationNameElement = document.querySelector("#organizationName");
let descriptionElement = document.querySelector("#description");
let imageAddressElement = document.querySelector("#imageAddress");
let urlToHomePageElement = document.querySelector("#urlToHomePage");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:
let database = firebase.database().ref();


button.onclick = function updateDB(event){
    event.preventDefault(); 
    let organizationName = organizationNameElement.value;
    let imgAddress = imageAddressElement.value;
    let description = descriptionElement.value;
    let urlToHomePage = urlToHomePageElement.value;

    organizationNameElement.value = "";
    descriptionElement.value  = "";
    urlToHomePageElement.value = "";
    imageAddressElement.value = "";
    
    let newData = {
        OrganizationName: organizationName,
        ImageAddress: imgAddress,
        Description: description,
        URL: urlToHomePage
    }

    database.push(newData);
}