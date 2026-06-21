function Longestword(str){
    let word=str.split(' ');
    let longestWord=' ';
    for (let i=0;i<word.length;i++){
        if(word[i].length>longestWord.length){
            longestWord=word[i];
        }
    }
    return longestWord;
}
console.log(Longestword('Web Development Tutorial'))