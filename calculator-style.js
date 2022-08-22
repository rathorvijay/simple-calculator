let scr=document.getElementById("scr");
function input(x){
   scr.value=scr.value+x;
}
function clr(){
 scr.value='';
}
function del(){
    scr.value=scr.value.slice(0,-1);
}
function result(){
    try{
    scr.value=eval(scr.value);
    }
    catch{
        scr.value="Error";
    }
}