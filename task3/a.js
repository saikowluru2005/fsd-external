function greetings(name){
    return `hello ${name}`;
}

function sending(callback){
    console.log(callback('john'))
}

sending(greetings);