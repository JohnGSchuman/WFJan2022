var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
    
function getRandom(min, max){
    return Math.floor(Math.random() * ((max+1) - min) + min);
}

function getRandomFromArr(arr){
    return arr[getRandom(0, arr.length - 1)];
}


while(true){
    console.log(getRandomFromArr(lifesAnswers));
}
