let game_board = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];

player = 1;

function countMark(array, player) {

    count = array.filter(x => x === player).length;

    return count;
}

function isEmpty(row, column) {

    return game_board[row][column] === 0;

}

function setMark(row, column, player) {

    game_board[row][column] = player;
    document.getElementById("d" + row + column).className = 'jugador' + player;

}

function changePlayer() {

    if (player == 1) {

        player = 2;
    }

    else

        player = 1;
}

function boardComplete() {

    white_spaces = 0;
    for (let i = 0; i < game_board.length; i++) {

        for (let j = 0; j < game_board[i].length; j++) {

            if (game_board[i][j] !== 0) {

                white_spaces++;
            }

        }
    }

    return white_spaces === 9;
}

function threeInARow(player) {

    for (let k = 0; k < game_board.length; k++) {

        if (countMark(game_board[k], player) === 3) {

            return true;
        }

    }
}

function threeInAColumn(player) {

    var column = [];

    for (let l = 0; l < game_board.length; l++) {


        for (let m = 0; m < game_board[l].length; m++) {

            column.push(player);

            if (countMark(column, player) === 3) {

                return true;
            }

            column.length = 0;

        }
    }
}

function threeInDiagonal(player) {

    let first_diagonal = [game_board[0][0], game_board[1][1], game_board[2][2]];

    let second_diagonal = [game_board[2][0], game_board[1][1], game_board[0][2]];

    if ((countMark(first_diagonal, player) === 3) || (countMark(second_diagonal, player) === 3)) {

        return true;
    }

}

function checkWinner(player) {

    return ((threeInARow(player)) || (threeInAColumn(player)) || (threeInDiagonal(player)));
}

function someoneWon() {

    return (checkWinner(1) || checkWinner(2));

}

function gameFinished() {


    if (someoneWon()) {

        document.getElementById('finalizado').innerHTML = 'El juego ha terminado. Hay un ganador.';
        return true;
    }

    else if (boardComplete()) {

        document.getElementById('finalizado').innerHTML = 'El juego ha terminado. Es un empate.';
        return true;
    }

    else {

        return false;
    }
}

function refreshGame() {

    document.getElementById('finalizado').innerHTML = '';

    for (let i = 0; i < game_board.length; i++) {

        for (let j = 0; j < game_board[i].length; j++) {

            game_board[i][j] = 0;
            document.getElementById("d" + i + j).className = '';

        }
    }
}

function randomNumber(){

    return Math.floor(Math.random()*3);
}

function botPlay(){

    if (!gameFinished()){
        colocado = false;

        while(!colocado){

            row = Math.floor(Math.random()*3);
            column = Math.floor(Math.random()*3);

            if (isEmpty(row,column)){
                setMark(row, column, player);
                changePlayer();
                gameFinished();
                colocado = true;
            }
        }
}
}

function play(row, column) {

    if (!gameFinished()) {

        if (isEmpty(row, column)) {
            setMark(row, column, player);
            changePlayer();
            gameFinished();
            botPlay();
        }

        else {

            alert("No puedes colocar aquí la ficha.")
        }
    }
}