{
    //
    function removeDuplicates(arr:number[]): number[] {
        const newArray: number[] = [];
        
        arr.forEach(value => {
            if (!newArray.includes(value)) {
                newArray.push(value);
            }
        })

        return newArray;
    }

    removeDuplicates([1, 2, 2, 3, 4, 4, 5])
     
    

    //
}