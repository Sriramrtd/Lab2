//https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum( a,b )
{
  //initalizing variables
  let lower,higher;
  let sum=0;
   //returning either of the given integers if they are equal
   if(a == b)
   {
   	return a;
   }
   else{
      if(a < b){
        higher = b;
        lower = a;
      }else{
        higher = a;
        lower = b;
      }
      for(i=lower;i<=higher;i++){
       sum += i;
      }
 
   	}
    return sum;
}