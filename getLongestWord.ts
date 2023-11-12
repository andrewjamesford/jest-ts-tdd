export const getLongestWord = (sentence: string): string => {
    const wordsArray: string[] = sentence.split(' ');

    let longestWord = wordsArray[0];

    wordsArray.forEach((word: string) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
};