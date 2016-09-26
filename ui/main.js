console.log('Loaded!');
//Chamge the text
/*var element=document.getElementById('main-text');
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
*/

var button=document.getElementById('conter');
var counter=0;
button.onclick=function () {
    //create a requst objt
    var request=new XMLHttpRequest();

    //Capture the respn and store it in a variable
    request.onreadystatechange=function () {
        if (request.readyState===XMLHttpRequest.DONE) {
            //Take some action
            if (request.status===200) {
                //render the variable in correct span
                counter=counter+1;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
 
    //Make a reqst to counter endpoint
    request.open('GET','http://senthilkumarl.imad.hasura-app.io/counter',true);
    request.send(null);
};


var submit=document.getElementById('submit_btn');
submit.onclick=function() {
    //console.log('submit clicked..')
   //create a requst objt
    var request=new XMLHttpRequest();

    //Capture the respn and store it in a variable
    request.onreadystatechange=function () {
        if (request.readyState===XMLHttpRequest.DONE) {
            //Take some action
            if (request.status===200) {
                    //render the variable in correct span
                    var names=request.responseText;
                    names=JSON.parse(names);
                    var list=';'
                    for (var i=0;i<names.length;i++) {
                        list += '<li>'+names[i]+'</l i>'; 
                    }
                    var ul=document.getElementById('namelist');
                    ul.innerHTML=list;
                }
            }
      
    };
var nameInput=document.getElementById('name');
var name=nameInput.value;
//Make a reqst to counter endpoint
    request.open('GET','http://senthilkumarl.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);

};




