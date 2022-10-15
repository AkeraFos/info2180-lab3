
    var $plX = 'X', $plO = 'O', $player = 1 ;
    var $WINNING_COMBINATIONS = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
   
    window.onload = function() {
    let squares = document.querySelectorAll("#board div");

    for (let i = 0; i < squares.length; i++) {
        squares[i].className='square';
        squares[i].addEventListener('click', game, {once:true});
        squares[i].addEventListener('mouseover', cursor);
        squares[i].addEventListener('mouseout', nocursor);
        squares[i].addEventListener('click', chooseWinner);
    }
    
    }
    var $gameState = [ '' , '' , '' , '' , '', '' , '' , '' , ''];
    const $tries = Array.from(square);

    function game(e){
        $player == 1 ? (e.target.innerHTML = $plX, e.target.classList.add("X"), $player=2) :
        $player == 2 ? (e.target.innerHTML = $plO, e.target.classList.add("O"), $player=1) : alert("Error");
    }

    function cursor(e){
        e.target.classList.add("hover");
    }
    function nocursor(e){
        e.target.classList.remove("hover");
    }

    var element = document.getElementById("status");

    function chooseWinner(){
        for(i=0; i < $WINNING_COMBINATIONS.length; i++) {
            if ($tries[$WINNING_COMBINATIONS[i][0]].innerHTML=="X" && $tries[$WINNING_COMBINATIONS[i][1]].innerHTML=="X" && 
                $tries[$WINNING_COMBINATIONS[i][2]].innerHTML=="X") {
                    element.innerHTML= "Congratulations! X is the Winner!";
                    element.classList.add("you-won");
            }else if ($tries[$WINNING_COMBINATIONS[i][0]].innerHTML=="O" && $tries[$WINNING_COMBINATIONS[i][1]].innerHTML=="O" && 
                $tries[$WINNING_COMBINATIONS[i][2]].innerHTML=="O"){
                    element.innerHTML= "Congratulations! O is the Winner!";
                    element.classList.add("you-won");
            }
        }
    }
