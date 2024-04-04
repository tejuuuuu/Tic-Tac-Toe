let boxes=document.querySelectorAll(".box");

let content=document.querySelector(".content");

let rstBtn=document.querySelector("#rst");
let turnX=true;

const winIdx=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        count++;

        if(turnX){
            box.innerText="X"
            box.classList.add("x");
            turnX=false;
        }else{
            box.innerText="O";
            box.classList.add("o");
            turnX=true;
        }
        
        box.disabled=true;

        checkWinner();
    })
})

console.log(count);
    rstBtn.addEventListener("click",()=>{
        location.reload();
    })

const checkWinner=()=>{
    for(win of winIdx){
        let pos1=boxes[win[0]].innerText;
        let pos2=boxes[win[1]].innerText;
        let pos3=boxes[win[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2===pos3){
                content.innerText=`winner is ${pos1}`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }else if(count==9){
                content.innerText=`Game Draw`;
            }
            
        }
    }
}
