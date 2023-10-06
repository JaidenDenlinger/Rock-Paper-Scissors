let compScore = 0;  
let playerScore = 0;
let ties = 0;



function thingy(playerChoice){
    let compChoices = ["rock", "paper", "scissors"];
    let rando = Math.floor(Math.random()*3)
    let compChoice = compChoices[rando];
    let images = ["https://img.buzzfeed.com/buzzfeed-static/complex/images/kwitgomixcskkafwyixo/the-rock.jpg?output-format=jpg&output-quality=auto", "https://a.pinatafarm.com/560x678/1be5c7767b/spongebob-burning-paper.jpg", "https://i.imgflip.com/6tq6dn.jpg"]

    document.getElementsByTagName("img")[1].src = images[rando];
    
    if(playerChoice == "rock" && compChoice == "scissors")
    {
        document.getElementsByTagName("img")[0].src = images[0];
        playerScore++;
        document.getElementsByTagName("h2")[3].innerHTML = "You Win!!!!!";
        document.body.getElementsByTagName("h2")[3].style.color = "green";
    }
    
    else if(playerChoice == "rock" && compChoice == "paper")
    {
        document.getElementsByTagName("img")[0].src = images[0];
       compScore++;
       document.getElementsByTagName("h2")[3].innerHTML = "You Lose. . .";
       document.body.getElementsByTagName("h2")[3].style.color = "red";
    }
    
    else if(playerChoice == "paper" && compChoice == "scissors")
    {
        document.getElementsByTagName("img")[0].src = images[1];
        compScore++;
        document.getElementsByTagName("h2")[3].innerHTML = "You Lose. . .";
        document.body.getElementsByTagName("h2")[3].style.color = "red";
    }

    else if(playerChoice == "paper" && compChoice == "rock")
    {
        document.getElementsByTagName("img")[0].src = images[1];
        playerScore++;
        document.getElementsByTagName("h2")[3].innerHTML = "You Win!!!!!";
        document.body.getElementsByTagName("h2")[3].style.color = "green";
    }

    else if(playerChoice == "scissors" && compChoice == "rock")
    {
        document.getElementsByTagName("img")[0].src = images[2];
        compScore++
        document.getElementsByTagName("h2")[3].innerHTML = "You Lose. . .";
        document.body.getElementsByTagName("h2")[3].style.color = "red";
    }
    
    else if(playerChoice == "scissors" && compChoice == "paper")
    {
        document.getElementsByTagName("img")[0].src = images[2];
        playerScore++;
        document.getElementsByTagName("h2")[3].innerHTML = "You Win!!!!!";
        document.body.getElementsByTagName("h2")[3].style.color = "green";
    }

    else if(playerChoice == compChoice)
    {
        document.getElementsByTagName("img")[0].src = images[rando];
        ties++
        document.getElementsByTagName("h2")[3].innerHTML = "Tie";
        document.body.getElementsByTagName("h2")[3].style.color = "black";
    }

    document.getElementsByTagName("h2")[0].innerHTML = "Score: You - " + playerScore + ", Computer - " + compScore + ", Ties - " + ties;
    document.getElementsByTagName("h2")[1].innerHTML = "Your Pick: " + playerChoice
    document.getElementsByTagName("h2")[2].innerHTML = "Computer's Pick: " + compChoice


}   