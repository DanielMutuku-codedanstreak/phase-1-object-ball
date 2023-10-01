//
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          // ... (you may add other players for the home team)
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          // ... (you may add other players for the away team)
        }
      }
    };
}
  
console.log(gameObject());
//
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
}
  
function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
}
  
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
}
  
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
  
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (const team in game) {
      if (game[team].teamName === teamName) {
        for (const player in game[team].players) {
          numbers.push(game[team].players[player].number);
        }
      }
    }
    return numbers;
}
  
function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
}
  
function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let maxRebounds = 0;
    for (const team in game) {
      for (const player in game[team].players) {
        const playerShoeSize = game[team].players[player].shoe;
        if (playerShoeSize > maxShoeSize) {
          maxShoeSize = playerShoeSize;
          maxRebounds = game[team].players[player].rebounds;
        }
      }
    }
    return maxRebounds;
}
  
// Bonus Questions
  
// 1. Which player has the most points?
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = "";
    for (const team in game) {
      for (const player in game[team].players) {
        const playerPoints = game[team].players[player].points;
        if (playerPoints > maxPoints) {
          maxPoints = playerPoints;
          playerWithMostPoints = player;
        }
      }
    }
    return playerWithMostPoints;
}
  
// 2. Which team has the most points?
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (const player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    for (const player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}
  
// 3. Which player has the longest name?
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (const team in game) {
      for (const player in game[team].players) {
        const playerName = player;
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    return longestName;
}
  
// Super Bonus
// 4. Does the player with the longest name have the most steals?
function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";
    for (const team in game) {
      for (const player in game[team].players) {
        const playerSteals = game[team].players[player].steals;
        if (playerSteals > mostSteals) {
          mostSteals = playerSteals;
          playerWithMostSteals = player;
        }
      }
    }
    return longestName === playerWithMostSteals;
}
  
// Testing the functions
console.log(numPointsScored("Bismak Biyombo")); // Example usage
console.log(shoeSize("Alan Anderson"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
  