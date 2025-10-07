let uscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userboard = document.querySelector("#you");
const compboard = document.querySelector("#comp");

const gencompchoice = () => {
    const option = ["Stone", "paper", "scissor"];
    const random = Math.floor(Math.random()*3); //this line is generating the random output for comp player we used math * 3 to gngerate the output from 1-3 because there are three option if we given grater than 3 then sometime comp get undifined option
    return option [random];
};

const draw = () => {
    // console.log("draw");
    msg.innerText ="draw play again";
    msg.style.backgroundColor = "black";
};

const winner = (userwin ,userchoice ,compchoice) => {
    if(userwin){
        uscore++;
        userboard.innerText= uscore;
        // console.log("you win");
        msg.innerText = ` you win ! ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compboard.innerText= compscore;
        // console.log("computer win");
        msg.innerText = `you lose ! ${compchoice} beats ${userchoice}` ;
         msg.style.backgroundColor = "blue";
    }
}

const playgame = (userchoice) => {
    // console.log("user = " , userchoice);
    // comp choice 
    const compchoice = gencompchoice();
    // console.log("comp = " , compchoice);
    if (userchoice === compchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice === "Stone") {
            // paper , scissor
            userwin = compchoice ==="paper" ? false : true;
        }
        else if(userchoice === "paper") {
            // scissor , stone
            userwin = compchoice ==="scissor" ? false : true;
        }
        else  {  //(userchoice === "scissor")
            //  stone ,paper
            userwin = compchoice ==="Stone" ? false : true;
        }
        winner (userwin ,userchoice , compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);
    });
});

