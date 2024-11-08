{
    //
    function countWordOccurrences(input1: string, input2: string): number {
        const sentence = input1.toLowerCase();
        const word = input2.toLowerCase()

        let count: number = 0;
        const arr: string[] = sentence.split(" ");
        arr.forEach(value => {
            if (value === word) {
                count++;
            }
        })
        return count;
    }

    countWordOccurrences("I love typescript", "typescript");
     




    //
}