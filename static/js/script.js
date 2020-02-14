function passGender(gender){
    var birth = document.getElementById("date").nodeValue;
    var day = new Date(birth).getDay();


    if(document.getElementById("gender").checked) {
        var gender = 'male';
    }
    else {
        var gender = 'female';
    }
    if(gender == 'M'){
        Akannames = ["Kwasi","Kwandwo","Kwaku","Yaw","Kofi","Kwame"];
        var display = Akannames[day];
        document.getElementById("Akan").value=display;
    }
}