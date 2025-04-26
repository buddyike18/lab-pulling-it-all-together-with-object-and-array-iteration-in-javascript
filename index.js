// index.js

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  const allPlayers = () => {
    const game = gameObject();
    const players = {};
    Object.assign(players, game.home.players);
    Object.assign(players, game.away.players);
    return players;
  };
  
  const numPointsScored = (playerName) => {
    const players = allPlayers();
    if (players[playerName]) {
      return players[playerName].points;
    }
    return null;
  };
  
  const shoeSize = (playerName) => {
    const players = allPlayers();
    if (players[playerName]) {
      return players[playerName].shoe;
    }
    return null;
  };
  
  const teamColors = (teamName) => {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) return team.colors;
    }
    return null;
  };
  
  const teamNames = () => {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  };
  
  const playerNumbers = (teamName) => {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        return Object.values(team.players).map(player => player.number);
      }
    }
    return [];
  };
  
  const playerStats = (playerName) => {
    const players = allPlayers();
    if (players[playerName]) {
      return players[playerName];
    }
    return null;
  };
  
  const bigShoeRebounds = () => {
    const players = allPlayers();
    let largestShoe = -Infinity;
    let rebounds = 0;
  
    for (const player of Object.values(players)) {
      if (player.shoe > largestShoe) {
        largestShoe = player.shoe;
        rebounds = player.rebounds;
      }
    }
  
    return rebounds;
  };
  
  module.exports = {
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    gameObject,
  };
  