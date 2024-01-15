export function getPaginationItems(
    currentPage: number,
    lastPage: number,
    maxLength: number
){
    const res: Array<number> = [];

    if(lastPage <= maxLength){
        for(let i = 1; i <= lastPage; i++) {
            res.push(i);
        }
    }
    else
    {
        const firstPage = 1;
        const confirmedPageCount = 3;
        const deductedMaxLength = maxLength - confirmedPageCount;
        const sideLength = deductedMaxLength / 2;

    console.log(`Current Page : ${currentPage}`);
    console.log(`Last Page : ${lastPage}`);
    console.log(`MaxLength Page : ${maxLength}`);


        //handle ellipses in the middle
        if(currentPage - firstPage < sideLength || lastPage - currentPage < sideLength)
        {
            for(let j = 1; j <= firstPage + sideLength; j++)
            {
                res.push(j);
            }

            res.push(NaN);

            for(let k = lastPage - sideLength; k <= lastPage; k++)
            {
                res.push(k);
            }
        }

         //handle 2 ellipses
        else if(currentPage - firstPage >= deductedMaxLength && lastPage-currentPage >= deductedMaxLength)
        {
             const deductedSideLength = sideLength - 1;
             res.push(firstPage);
             res.push(NaN);

             for(let l = currentPage - deductedSideLength;
                 l <= currentPage + deductedSideLength;
                 l++)
             {
                 res.push(l);
             }

             res.push(NaN);
             res.push(lastPage);
        }

         //handle ellipse not in the middlw
        else
        {
             const isNearFirstPage = currentPage - firstPage < lastPage - currentPage;
             let remainingLength = maxLength;
             if(isNearFirstPage)
             {
                 //
                 for(let m = 1; m < currentPage + 1; m++)
                 {
                     res.push(m);
                     remainingLength -= 1;
                 }

                 res.push(NaN);
                 remainingLength -= 1;

                 for(let n = lastPage - (remainingLength - 1); n <= lastPage; n++)
                 {
                     res.push(n);
                 }
             }
             else
             {
                 for(let o = lastPage; o >= currentPage - 1; o--)
                 {
                     res.unshift(o);
                     remainingLength -= 1;
                 }

                 res.unshift(NaN);
                 remainingLength -= 1;

                 for(let p = remainingLength; p >= 1; p--)
                 {
                     res.unshift(p);
                 }
            }
        }
    }
    console.log({res});

    return res;
}

    // console.log(getPaginationItems(1,5,7));
    // console.log(getPaginationItems(5,7,7));
    // console.log(getPaginationItems(1,10,7));
    // console.log(getPaginationItems(9,10,7));
    // console.log(getPaginationItems(5,10,7));
    // console.log(getPaginationItems(6,10,7));

// console.log(getPaginationItems(1,5,7))