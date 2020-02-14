function passGender(gender){
    var birth=document.getElementById("date").value;
var day= new Date(birth).getDay();

    if(gender == "M"){
        AkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var names = AkanNames(day;
            document.getElementById("Akan").value=names;
    }else{
        AkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        var names = AkanNames(day);
        document.getElementById("Akan").value=names;

    }
}