let rollCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function diceRoll1() {

    return Math.floor(Math.random() * 6) + 1
}


function diceRoll2() {

    return Math.floor(Math.random() * 6) + 1
}




function iUsedToRollTheDice() {

    rollCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for (let i = 0; i < 1000; i++) {
        
        let dices = diceRoll1() + diceRoll2();
        
        rollCount[dices - 2]++
    }

    return rollCount
}





const btn = document.getElementById('btn');
btn.addEventListener('click', function() {

    const boxResults = document.getElementById('boxResults')
    boxResults.innerHTML = '';

    const diceResults = iUsedToRollTheDice();

    for(let i = 0; i < diceResults.length; i++) {
        
        const singleResult = document.createElement('div');
        singleResult.innerText = `${i + 2}: ${diceResults[i]}`
        singleResult.className = 'singleResult';
        singleResult.style.width = `${diceResults[i] * 3}px`
        boxResults.append(singleResult) 
    }

})
