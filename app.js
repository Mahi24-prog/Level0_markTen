var billAmt = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var checkBtn = document.querySelector(".check-btn");
var returnChange = document.querySelectorAll(".return-change");
var errMsg = document.querySelector(".err-msg")


const noteList = [2000,500,100,20,10,5,1]

checkBtn.addEventListener("click", ()=>{;
    errMsg.style.display = "none";
    if(parseInt(billAmt.value) < 0){
        errMsg.style.display = "block";
        showErr("Invalid Bill Amount");

        for (var i=0;i<noteList.length;i++){
            returnChange[i].innerText = "";
        }
    }else if(parseInt(billAmt.value) > parseInt(cashGiven.value)){
        errMsg.style.display = "block";
        showErr("Do you wanna wash plates?");

        for (var i=0;i<noteList.length;i++){
            returnChange[i].innerText = "";
        }
    }else{
        var cashtoGive = parseInt(cashGiven.value)-parseInt(billAmt.value);
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