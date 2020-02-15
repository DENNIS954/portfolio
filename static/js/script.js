function passGender(gender){
    var birth = document.getElementById("date").nodeValue;
    var day = new Date(birth).getDay();

    if(gender == "M"){
        Akannames = ["Kwasi","Kwandwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var names = Akannames[day];
        document.getElementById("Akan").value=names;
    }else
    Akannames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var names = Akannames[day];
    document.getElementById("Akan").value=names; 
}
