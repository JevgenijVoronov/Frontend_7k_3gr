window.addEventListener("DOMContentLoaded", () => {
  // because JS file is included in the head of HTML document, therefore this script will be processed before any HTML on the page
  // HTML elements using DOM APIs (application programming interface), a medium to fetch or send data between interfaces
  const tiles = Array.from(document.querySelectorAll(".tile")); // "all" selektors, jo ir vairaki speles laucini
  const playerDisplay = document.querySelector(".display-player"); //.querySelector returns the first element
  const resetButton = document.querySelector("#reset");
  const announcer = document.querySelector(".announcer");

  let board = ["", "", "", "", "", "", "", "", ""]; // array with 9 empty strings because we have 9 tiles
  let currentPlayer = "X"; // storing the current player
  let isGameActive = true; // storing the end game result or if the game is still active

  const PLAYERX_WON = "PLAYERX_WON"; // in the isGameActice variable there are 3 constant string values where each of them represents the game outcome and they will be used to announce endgame state
  const PLAYERO_WON = "PLAYERO_WON";
  const TIE = "TIE";

  /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

  const winningConditions = [
    //collecting and storing all the winning condition states in the game
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleResultValidation() {
    // checking if there is a winner or not by looping through the winning conditions which are set below
    // if any of the 3 elements is an empty string we will skip the iteration using the "continue" keyword
    // if they are equal the roundWon variable is TRUE and exit our loop using the "break" keyword
    // if we have a winner we will use announce function
    // if we don't have any winners and there are no empty space on board, we will announce a TIE
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }

    if (!board.includes("")) announce(TIE);
  }

  const announce = (type) => {
    //this function helps to annunce the endgame state
    switch (type) {
      //recieving string TYPE it will modify the announcers in inner HTML
      case PLAYERO_WON:
        announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
        break;
      case PLAYERX_WON:
        announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
        break;
      case TIE:
        announcer.innerText = "Tie";
    }
    announcer.classList.remove("hide");
    // removing "hide" class to show the announcer to the user
  };

  const isValidAction = (tile) => {
    // this function checks wether the tile already has a value and if it has, it returns FALSE, otherwise it returns TRUE
    // this function is needed to make sure that the players play only empty tiles in their turns
    if (tile.innerText === "X" || tile.innerText === "O") {
      return false;
    }

    return true;
  };

  const updateBoard = (index) => {
    // sets the value of the element into board array at the given position to be equal to the value of the current player variable
    board[index] = currentPlayer;
  };

  const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    // removing the classList of the current player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    // changing the class of the player to X if it was O or O if it was X
    playerDisplay.innerText = currentPlayer;
    // updating the playerDisplay to display the current player
    playerDisplay.classList.add(`player${currentPlayer}`);
  };

  const userAction = (tile, index) => {
    // this function represents turn in the game and will be called when user clicks on the tile
    if (isValidAction(tile) && isGameActive) {
      // checking if step is a valid action and if game is active
      tile.innerText = currentPlayer;
      // if both above conditions are true then we assign the game to currentPlayer
      tile.classList.add(`player${currentPlayer}`);
      //``(template literals) to define string... in {} there will be X or O player depending on which turn is it
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  const resetBoard = () => {
    // function will reset the game state and the board
    board = ["", "", "", "", "", "", "", "", ""];
    // set the board to contain 9 empty strings
    isGameActive = true;
    announcer.classList.add("hide"); // Hide the announcer by adding the 'hide' class

    if (currentPlayer === "O") {
      changePlayer();
    } // by def player X always starts the game, so, if it is turn for player O, we changePlayer

    tiles.forEach((tile) => {
      // this updates UI
      tile.innerText = ""; // for every tile we set innerText to be an empty string
      // and remove any player related classes
      tile.classList.remove("playerX");
      tile.classList.remove("playerO");
    });
  };

  tiles.forEach((tile, index) => {
    // adding eventListener for every single tile on CLICK and saving in memory index board array
    tile.addEventListener("click", () => userAction(tile, index));
  });
  resetButton.addEventListener("click", resetBoard);
});
