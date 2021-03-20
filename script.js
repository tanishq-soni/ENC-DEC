document.getElementById("dec-main-id").style.display="none";
var enc_text = document.getElementById("ecn-text-id");
var dec_text = document.getElementById("dec-text-id");
var enc_key = document.getElementById("enc-key-id");
var dec_key = document.getElementById("dec-key-id");
var enc_output = document.getElementById("enc-output-id").value;
var dec_output = document.getElementById("dec-output-id").value;

function encview(){
    document.getElementById("dec-main-id").style.display="none";
    document.getElementById("enc-main-id").style.display="block";
}

function decview(){
    document.getElementById("dec-main-id").style.display="block";
    document.getElementById("enc-main-id").style.display="none";
}

function encrypt(){
    if(enc_text.value == '' || enc_key.value == ''){
        alert('Text or Key should not be empty!!!')
    }
    else{
    var EncryptED = CryptoJS.AES.encrypt(enc_text.value, enc_key.value);
    document.getElementById("enc-output-id").value=EncryptED.toString();
    }
}

function decrypt(){
    try{
        var DecryptED = CryptoJS.AES.decrypt(dec_text.value, dec_key.value);
        if (DecryptED.toString(CryptoJS.enc.Utf8).length > 0) {
            document.getElementById("dec-output-id").value=DecryptED.toString(CryptoJS.enc.Utf8);
        } else {
            alert("Encrypted text or Key is incorrect!!!");
        }
    }
    catch(e){
        alert("Encrypted text or Key is incorrect");
    }
}

