var billAmt = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var checkBtn = document.querySelector(".check-btn");
var returnChange = document.querySelectorAll(".return-change");
var errMsg = document.querySelector(".err-msg")


const noteList = [1000,500,100,20,10,5,1]

checkBtn.addEventListener("click", ()=>{
    if(billAmt.value < 0){
        showErr("Invalid Bill Amount");
    }else if(billAmt.value < cashGiven.value){
        showErr("Do you wanna wash plates?");
    }else{
        var cashtoGive = cashGiven.value-billAmt.value;
        calculateNotes(cashtoGive);  
    }
})

function calculateNotes(cashtoGive){
    for (var i=0;i<noteList.length;i++){
        var noOfNotes = Math.trunc(cashtoGive/noteList[i]);
        var cashtoGive = cashtoGive%noteList[i];
        returnChange[i].innerText = noOfNotes;
    }
}

function showErr(msg){
    errMsg.innerText = msg;
}