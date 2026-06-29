/*function displayStopWatch(remainingtime){
    console.log(`Time left ${remainingtime}`);
    if (remainingtime>0)
    {
        setTimeout(()=>{
            displayStopWatch(remainingtime-1);
        },1000)
    }
}*/
/*function acceptInput(duration) {
    let intervalId; // Pehle declare karein

    if (!isNaN(duration) && duration > 0) {
        // Interval set karein
        intervalId = setInterval(function() {
            duration -= 1;
            console.log(duration);

            if (duration <= 0) {
                console.log("Stopwatch Finished!");
                clearInterval(intervalId); // Ab ye sahi kaam karega
            }
        }, 1000);
    } else {
        console.log("stopwatch was not set");
    }
}

acceptInput(25);*/
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function getStudentData(){
    await sleep(2000);
    const studentData ={
        name: "Shivam kumar",
        age:20,
        course : "Computer Science"
    }

}