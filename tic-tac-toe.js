var $players = $pX = 'X', $pO = 'O', $player = 1 ;
    
    const $WINNING_COMBINATIONS = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
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
    var gameState = [ '' , '' , '' , '' , '', '' , '' , '' , ''];
    const $tries = Array.from(square);

    function game(e){
    
        $player == 1 ? (e.target.innerHTML = $pX, e.target.classList.add("X"), $player=2) :
        $player == 2 ? (e.target.innerHTML = $pO, e.target.classList.add("O"), $player=1) : alert("Error");
    }


