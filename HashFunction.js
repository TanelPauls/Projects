function hash(key){
    let hash=0
    //iterate through the key
    for(let i=0;i<key.length;i++){
        let char=key.charCodeAt(i)
        console.log(char)
    }
}

hash("test")