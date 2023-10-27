const endDate="27 oct 2023 04:10 PM";
document.getElementById("enddate").innerHTML=endDate;
function work(){
    const end=new Date(endDate)
    const now=new Date();
    const diff=end-now;
    if(diff<0){
        return;
    }
    // console.log(diff)
    const sec=diff/1000
    // console.log(days/3600/60/24)
    // console.log(Math.floor(days/86400))
    let day=document.getElementById("day")
    let hours=document.getElementById("hours");
    let second=document.getElementById("second")
    let minutes=document.getElementById("minutes")
   day.value=Math.floor(sec/3600/24)
   hours.value=Math.floor((sec/3600)%24)
   minutes.value=Math.floor((sec/60)%60)
   second.value=Math.floor(sec%60)

}

setInterval(
    ()=>{
        work();
    },1000

)

