function getName(){
    var gender = document.getElementById("gender").checked;
    
if(gender == true){
    Akannames = ["Kwasi", "Kwandwo", "Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var names = Akannames[day];
    document.getElementById("Akan").value = names;
    alert("male");
}else if(gender == false){
    Akannames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    alert("female");
}

}