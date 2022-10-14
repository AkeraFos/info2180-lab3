
    window.onload = function() {
    let squares = document.querySelectorAll("#board div");
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].className='square';
        squares[i].addEventListener('click', game, {once:true});
        squares[i].addEventListener('mouseover', cursor);
        squares[i].addEventListener('mouseout', nocursor);
        squares[i].addEventListener('click', selectWinner);
    }
    
    } 