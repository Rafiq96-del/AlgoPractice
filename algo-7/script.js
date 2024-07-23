function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of word) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}
