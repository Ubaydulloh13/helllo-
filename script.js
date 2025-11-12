
const textarea =document.getElementById('textarea');
const select =document.getElementById('select');
const btn =document.getElementById('btn');

let ovozlar=[];


function loadVoices(){
    ovozlar =window.speechSynthesis.getVoices();
    console.log(ovozlar);
    if(ovozlar.length>0){
        select.innerHTML="";
        ovozlar.map((ovoz,index)=>{
            const option = document.createElement('option');
            option.value = index;
            option.textContent = ovoz.lang +" - "+ ovoz.name;
            select.appendChild(option);
        });
    }else{
        select.innerHTML="<option value=''>Ovozlar yuklanmadi</option>";
    }
}
function tekshir(){
    if(ovozlar.length===0){
        loadVoices();
    }
    if(ovozlar.length==0){
        setTimeout(tekshir,500);
    }
}

tekshir();
loadVoices();

function gapir(){
    let msg = new SpeechSynthesisUtterance();
    msg.text = textarea.value;
    let ovoz = select.value;
    if(ovozlar.length === 0){
        msg.voice =ovozlar[ovoz];
    }
    speechSynthesis.speak(msg);
}
btn.addEventListener('click',()=>{
    gapir();
})