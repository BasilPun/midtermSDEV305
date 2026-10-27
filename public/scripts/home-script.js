document.querySelector('#book-form').onsubmit = () =>{
    let isValid = true;
    clearErrors();

    //check num of travelers
    let travelers_num = document.querySelector('#travelers').value;
    if (travelers_num <= 0){
        document.querySelector('#err-travelers').style.display = "block";
        isValid = false;
    }
    //destination
    let dest = document.querySelector('#destination').value;
    if (dest == "none"){
        document.querySelector('#err-dest').style.display = "block";
        isValid = false;
    }

    //date
    let date = document.querySelector('#date').value;
    if (date == "") {
        document.querySelector('#err-dep').style.display = "block";
        isValid = false;
    }

    return isValid
}

function clearErrors(){
    //creates an array of errors
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i< errors.length; i++){
        //for each error, make it disappear.
        errors[i].style.display = "none";
    }
}