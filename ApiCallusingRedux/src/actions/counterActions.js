export function incrementAction(){
    console.log("Increment Action");

    return {type:"INCREMENT"};
}


export function decrementAction(){
console.log("Decrement Action");
return {type:"DECREMENT"};
}
