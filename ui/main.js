console.log('Loaded!');
//Chamge the text
var element=document.getElementById('main-text');
element.innerHTML='New value'
//move the image
var img=document.getElementById('madi');
//console.log(img);
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 1;
    img.style.marginLeft=marginLeft + 'px';
};

img.onclick=function () {
    var interval=setInterval(moveRight,50)    
};
