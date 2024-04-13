const colorPicker=document.getElementById("colorPicker");
const canvacolor=document.getElementById("canvasColor");
const mycanva=document.getElementById("mycanvass");
const FontPicker=document.getElementById("font-size");
const clearB=document.getElementById("clearButton");
const saveB=document.getElementById("save");
const retriveB=document.getElementById("Retrive");

const ctx=mycanva.getContext("2d");


colorPicker.addEventListener("change",function(){
    ctx.strokeStyle=event.target.value;
    ctx.fillStyle=event.target.value;
})

mycanva.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    lastX=e.offsetX;
    lastY=e.offsetY;

})

mycanva.addEventListener("mousemove",(e)=>{
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(event.offsetX,e.offsetY);
        ctx.stroke()

        lastX=event.offsetX;
        lastY=event.offsetY;
    }
})

mycanva.addEventListener("mouseup",(e)=>{

    isDrawing=false;

})

canvacolor.addEventListener("change",(e)=>{
    ctx.fillStyle=e.target.value;
    ctx.fillRect(0,0,800,500);
})


FontPicker.addEventListener("change",(e)=>{
    ctx.lineWidth=e.target.value;

})

clearB.addEventListener("click",()=>{
    ctx.clearRect(0,0,mycanva.width,mycanva.height);
})

saveB.addEventListener("click",()=>{
    localStorage.setItem('canvasContents',mycanva.toDataURL());
    let link=document.createElement('a');

    link.download='mysign.png';

    link.href=mycanva.toDataURL();

    link.click();

})

retriveB.addEventListener("click",()=>{
    let savedC=localStorage.getItem('canvasContents');

    if(savedC){
        let img=new Image();
        img.src=savedC;
        ctx.drawImage(img,0,0);
    }
})

