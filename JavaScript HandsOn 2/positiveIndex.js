function positiveIndex(x)
{
    for(let i=0; i<=x.length; i++) //check if the number of let is less than or equal to i
    {
        if(x[i]>0) //check if the value index of is greater than 0, x[0]= {1,10,10}, x[1]= {3,5,5}, x[2]=[-10,-5,5], x[3]= [15,15]
        {
            console.log(i);
        }
    }
}
console.log("Positive Index:");
positiveIndex([1,3,-10]);
console.log("Positive Index:");
positiveIndex([10,5,-5,15]);
console.log("Positive Index:");
positiveIndex([10,5,5,15]); 


