function writeCards(namesArray, event) {
    let thankYouMessage = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouMessage.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouMessage
}


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
    return number
}
countDown(number)