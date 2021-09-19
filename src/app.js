
function pressEnter() {
    event.preventDefault();
    if (event.key !== "Enter") {
        return "you need to click enter to continue"
    }
    if (event.key === "Enter") {
        calculateTip(document.getElementById('custom-Tip').value)
    } 
}
function clickOutside() {
    calculateTip(document.getElementById('custom-Tip').value)
}

function calculateTip(val) {
    let amount = document.querySelector('#bill').value;
    let person = document.querySelector('#people').value;
    let tip = val/100;

    let unitTip = (amount * tip)/person
    let unitAmount = parseInt((amount / person) + unitTip)
    
    unitTip = unitTip.toFixed(2);
    unitAmount = unitAmount.toFixed(2);
    
    if (person < 1) {
        document.getElementById('people-check').style.display="block"
        document.getElementById('people').style.borderColor="red"
    }
    
    if (person >= 1) {
        document.getElementById('per-person-tip').innerHTML = ` $${unitTip}`;
        document.getElementById('per-person-total').innerHTML = ` $${unitAmount}`;
        document.getElementById('reset-unit').style.backgroundColor="#26c0ab"
        document.getElementById('people-check').style.display="none";
        document.getElementById('people').style.borderColor="transparent"
    }
    
}


function resetResult() {
    document.getElementById('people-check').style.display="none";
    document.getElementById('people').style.borderColor="transparent"
    document.getElementById('per-person-tip').innerHTML = "$0.00";
    document.getElementById('per-person-total').innerHTML = "$0.00";
    document.querySelector('#bill').value = "";
    document.querySelector('#people').value = "";
    document.getElementById('reset-unit').style="btn-big"
}