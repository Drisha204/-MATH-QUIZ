player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;

document.getElementById("player_answer").innerHTML = "answer Turn - " + player2_name ;

function send()
{
    get_word= document.getElementById("word").valu;
   
    word=get_word.toLowerCase();
    console.log(word);

    c1=word.charAt(1);
    console.log(c1);

    
    lenght_divide_2 = Math.floor(word.length/2);
     c2 = word.charAt(lenght_divide_2);
      console.log(c2);

      minus=word.length-1;

      c3 = word.charAt(minus);
      console.log(c3);
    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");
    console.log(r3);







}
