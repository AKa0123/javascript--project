let buttons=document.querySelectorAll(".btn")
let head=document.getElementById('heading')
let reset=document.getElementById('reset')
let turn=true
let count=0
const arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
]

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("box was click")
        if(turn){
            btn.innerHTML="O"
            
            
            turn=false
        }
        else{
            btn.innerHTML="X"
            turn=true;
            // count++
        }
        btn.disabled=true
        

            // if(count==9){
            //   head.innerHTML="you are winner"
            // //   count=0
            // }
        
        if(reset){
             reset.addEventListener('click',()=>{
                btn.innerHTML=" "
                btn.disabled=false
                head.innerHTML="tic tac teo"
             })
        }
        
        checkWinner()
        
    })
})
   function checkWinner(){
       for (let pattern of arr) {
        //   console.log(pattern[0],pattern[1],pattern[2])
          const box1=buttons[pattern[0]].innerHTML
          let box2=buttons[pattern[1]].innerHTML
          let box3=buttons[pattern[2]].innerHTML
          if(box1!=""&&box2!=""&&box3!=""){
             if(box1===box2&&box2===box3){
                won()
             }
          }
          function won(){
            head.innerHTML=box1+ " is winner"
           }
       }
   }
//    function won(){
//     head.innerHTML=box1,"is are winner"
//    }