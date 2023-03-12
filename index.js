const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000 , 500 , 100 , 50 , 20 , 10 , 5 , 1];

checkButton.addEventListener("click" , () => {
    message.style.display = "none";
    if(parseInt(billAmount.value) > 0)
    {
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value))
        {
            const changeAmount = parseInt(cashGiven.value) - parseInt(billAmount.value);
            calculateChange(changeAmount);
        }   
        else
        {
            for(let i = 0 ; i < availableNotes.length ; i++)
            {
                numberOfNotes[i].innerText = 0;
            }
            showMessage("Do you want to wash the plates ?");
        }
    }
    else
    {
        for(let i = 0 ; i < availableNotes.length ; i++)
            {
                numberOfNotes[i].innerText = 0;
            }
        showMessage("Bill amount cannot be negative!!!");
    }
});

function showMessage(msg)
{
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(changeAmount)
{
    var notes = 0;
    for(let i = 0 ; i < availableNotes.length ; i++)
    {
        notes = Math.trunc(changeAmount / availableNotes[i]);
        numberOfNotes[i].innerText = notes;
        changeAmount = changeAmount % availableNotes[i];
    }
}