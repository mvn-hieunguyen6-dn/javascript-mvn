// - Give an example for each of the following methods in Javascript
// + find
function ExFind() {
    const array1 = [5, 12, 8, 130, 44];
    const found = array1.find(element => element > 10);
    console.log(found);
}
console.log(ExFind());

//- Give an example for add a new element to an array[] (at the end)

const addtheend = ['A', 'B', 'C'];
addtheend.push('D');
console.log(addtheend)

//- Give an example for add a new element to an array[] (at the beginning)
const arr1 = [3, 2, 1]
const new1 = 4
const addthebegin = [new1].concat(arr1) 
console.log(addthebegin);

// - Give an example for removing an element in array[]
​var remove = [26, 19, 30, 14, 27, 16];
 remove.length = 5; 
    console.log( remove ); 

//### Playground

// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function Q1 (a, b) 
{
    if (a == b)
     {
      return 3 * (a + b);
      } 
     else
     {
      return (a + b);
     }
   }
  console.log(Q1(2, 4));
  console.log(Q1(2, 2));

  //2.Write a JavaScript program to compute the absolute difference between a specified number and 19. 
  //Returns triple their absolute difference if the specified number is greater than 19.
  function Q2(x) 
  {
    if (x <= 19) 
    {
      return (19 - x);
    }
    else
      {
       return (x - 19) * 3;
      }
  }
  console.log(Q2(12));
  console.log(Q2(19));
  console.log(Q2(22));

  //3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
  function Q3 (n){
    let output=[]
    for(i=0;i<10;i++){
      let m = n.replace('*',i)
      if(m%3===0){
        output.push(m)
      }
    }
    return output
  }

  //4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
  function n4 (a){
    let output=[]
    for(i=0;i<10;i++){
      let m = n.replace('*',i)
      if(m%6===0){
        output.push(m)
      }
    }
    return output
  }
