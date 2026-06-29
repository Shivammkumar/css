/*console.log("the program is starting");
setTimeout(()=>{
    console.log("I have appeared after 2 second")
},2000);
console.log("we have reached at the and of the program, but still watin for the program to end");*/
/*function waitfororsometime()
{
    console.log("I have appered after 2 second");

}
console.log("the program is starting");
console.log("we have reached at the end of the program ,but still waiting for the program to end");*/
console.log("the program is stating");
const timerid =setTimeoout(()=>{
    console.log('Delayed message');
},2000);
console.log("we have reached at the end of the program ,but still waiting for the program to end" );
clearTimeout(timerid);