var arry=[]
function sort()
{
    var element=parseInt(document.getElementById("element").value);
    document.getElementById("element").value='';
    document.getElementById("txtsort").value='';
    arry.push(element);
    for(i=0;i<arry.length;i++)
    {
        for(j=0;j<arry.length-i-1;j++)
        {
            if(arry[j]<arry[j+1])
            {
                temp=arry[j];
                arry[j]=arry[j+1];
                arry[j+1]=temp;
            }
        }
    }
    for(i=0;i<arry.length;i++)
    {
    document.getElementById("txtsort").value+=arry[i]+" ";
    }
}
function find()
{
        var position=document.getElementById("searchtext").value;
        var index=position-1;
        document.getElementById("searchresult").innerHTML =arry[index];

}