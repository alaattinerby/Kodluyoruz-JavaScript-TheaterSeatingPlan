var idNumber = document.querySelectorAll("#idNumber");
var checkboxes = document.querySelectorAll("#check");
var numberTxt = document.querySelectorAll("#number");
var saveBtn = document.getElementById("save");
var result = [];

checkboxes.forEach((checkbox,i) => {
    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            numberTxt[i].disabled=false;
            numberTxt[i].placeholder="Numara Giriniz...";
        }
    
        else{
            numberTxt[i].disabled=true;
            numberTxt[i].value="";
            numberTxt[i].placeholder="Numara Girilemez...";
        }        
    });
});

saveBtn.addEventListener("click",function(){
    
    console.clear();
    
    checkboxes.forEach((checkbox,i) => {
            if(checkbox.checked){

                result.push({"id":idNumber[i].innerText,"SıraNumarası":numberTxt[i].value});
            
            }
    });

    alert("Gelecek Kişilerin ID ve SIRA NUMARASI Console.log'a Aktarılmıştır..." + "!!! Bu Sayfadan Güncelleme Yapabilirsiniz !!!")    
    result.forEach(e => console.log(`id: ${e.id}  Sıra Numarası: ${e.SıraNumarası}`));
    result = [];
    
});




    