function change_image(){
    var image,radio;
    image=document.getElementById('image');
    radio=document.getElementsByClassName('color1');
if (radio[0].checked) {
    image.src="phantom_black.jpg";
}
else if(radio[1].checked){
    image.src="phantom_silver.jpg";
}
}
function price(){
    var basePrice,ram,memory;
    basePrice=599;
    ram=document.getElementsByClassName('ram1');
    memory=document.getElementsByClassName('memory1');
    if(ram[0].checked&&memory[0].checked){
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[0].checked&&memory[1].checked){
        basePrice=basePrice+100;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[0].checked&&memory[2].checked){
        basePrice=basePrice+200;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[0].checked&&memory[3].checked){
        basePrice=basePrice+300;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    
    else if(ram[1].checked&&memory[0].checked){
        basePrice=basePrice+100;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[1].checked&&memory[1].checked){
        basePrice=basePrice+200;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[1].checked&&memory[2].checked){
        basePrice=basePrice+300;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[1].checked&&memory[3].checked){
        basePrice=basePrice+400;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[2].checked&&memory[0].checked){
        basePrice=basePrice+200;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[2].checked&&memory[1].checked){
        basePrice=basePrice+300;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[2].checked&&memory[2].checked){
        basePrice=basePrice+400;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if(ram[2].checked&&memory[3].checked){
        basePrice=basePrice+500;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if (ram[3].checked&&memory[0].checked) {
        basePrice=basePrice+300;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if (ram[3].checked&&memory[1].checked) {
        basePrice=basePrice+400;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if (ram[3].checked&&memory[2].checked) {
        basePrice=basePrice+500;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
    else if (ram[3].checked&&memory[3].checked) {
        basePrice=basePrice+600;
        document.getElementById('price').innerHTML=basePrice+"$";
    }
}
function submit(){
    alert('Thank you! Our team will contact you soon for your shipping and payment details.')
}