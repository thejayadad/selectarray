

let listings = ["House", "Townhouse", "Condo", "Apartment"]

listings.forEach(function(item){
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    selection.appendChild(option)
})