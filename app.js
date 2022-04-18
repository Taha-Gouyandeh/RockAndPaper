//variable
const resultDOM=document.querySelector(".result");
const userScore=document.querySelector("#user-score");
const computerScore=document.querySelector("#comp-score")

//eventlistener
addEventListener()

function addEventListener(){
    document.querySelector(".choices").addEventListener('click',choose)
    
}

//function 
function choose(e){

    e.preventDefault();
    if(e.target.parentElement.classList=="choice"){
        let id=e.target.parentElement.id;
        let random=Math.floor(Math.random()*3)
        let computerChoice=''
        let yourChoice=''
        let computerChar;
        let result='equalised';


        switch (random) {
            case 0:
                computerChoice=" سنگ ";
                computerChar="r";
                break;
            case 1:
                computerChoice=" کاغذ ";
                computerChar="p"
                break
            case 2:
                computerChoice=" قیچی ";
                computerChar="s"
                break
            
        }
        switch (id) {
            case 'r':
                yourChoice=" سنگ ";
                yourNum=0;
                break;
            case 'p':
                yourChoice=" کاغذ ";
                yourNum=1;
                break
            case 's':
                yourChoice=" قیچی ";
                yourNum=2;
                break
            
        }
        
        
        if(id==computerChar){
            result="equalised"
        }else{
            switch (id) {
                case "r":
                    if(computerChar=="p"){
                        result="lose"
                    }else{
                        result='win'
                    }
                    break;
                case 'p':
                    if(computerChar=="s"){
                        result='lose'
                    }else{
                        result='win'
                    }
                    break;    
                case 's':
                    if(computerChar=='r'){
                        result='lose'
                    }else{
                        result='win'
                    }
                    break;
            }
        }
        
        DOM(yourChoice,computerChoice,result);
        score(result);
    }
   

}

function DOM(yourChoice,computerChoice,result){

    let message="شما" +yourChoice +"  را انتخاب کردید و کامپیوتر" + computerChoice+ " انتخاب کرد"


    switch (result) {
        case 'equalised':
            message+=" مساوی شدید "
            break;
        case 'win':
            message+=" شما برنده شدید "
            break;
        case 'lose':
            message+=" شما باختید "
        break;
    }
    
    resultDOM.innerHTML=`<p>${message} <p>`

}

function score(result){

    console.log(userScore.textContent);
    switch (result) {
        case 'win':
            userScore.innerHTML=parseInt(userScore.textContent)  +1
            break;
        case 'lose':
            
            computerScore.innerHTML=parseInt(computerScore.textContent)+1
        break;
    }
}