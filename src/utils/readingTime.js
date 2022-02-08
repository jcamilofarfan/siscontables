const readingTime =text =>{
    const wordsPerMinute = 200;
    const numOfWords = text.split(/\s/g).length;
    const numOfMinutes = Math.ceil(numOfWords / wordsPerMinute);
    return `📖 ${numOfMinutes} Min.`;
}

export default readingTime;