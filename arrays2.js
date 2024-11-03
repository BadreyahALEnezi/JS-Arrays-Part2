/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
    // Your code here
    const sizeOfArray = numbers.length;
    if (sizeOfArray % 2){
        return true ;
     } else{
        return false;
     }
  }
  //console.log(isArrayLengthOdd([1 , 2, 3 , 4, 5]));

  function  isArrayLengthEven(numbers){
    if (numbers.length % 2){
        return false ;
     } else{
        return true;
     }
  }

 // console.log(isArrayLengthEven([1 , 2, 3 , 4]));

 function addLailaToArray(instructors){

    const newInstructors = instructors ;

    newInstructors.push("Lila");

    return newInstructors;
 }

 //console.log(addLailaToArray(["Mshary", "Hasan"]));

 function eliminateTeam(teams){
   const lastTeam = teams.pop();

    return lastTeam ;

 }
 //console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

 function secondHalfOfArrayIfItIsEven(fruits){
    if(isArrayLengthEven(fruits)){
        return fruits.slice(fruits.length / 2 , fruits.length);
    } else{
        return[];
    }


 }
 //console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "pear" , /*"coconut"*/]));

 function youGottaCalmDown(shout){
    if(shout[shout.length -1 ] !=="!"){
        return shout;

    }
    const shoutOneExlamationMarck = shout.slice(0, shout.indexOf("!") + 1);
    return shoutOneExlamationMarck;
 }
  console.log(youGottaCalmDown("Hello!!!!!!!"));