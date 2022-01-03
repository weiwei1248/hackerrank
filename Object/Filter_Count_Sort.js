/**********
purpose: 
Count how many times has each team played and filtered the teams which played more than 30 times in desc order.

data:
matches: [
  {
    team1: 'x',
    team2: 'y'
  },
  {
    team1: 'xx',
    team2: 'yy'
  }
];

**********/

function Main() {
  let teams = {};

  //creat an object and count
  matches.map(m => {
   // if this team exisit +1, or set to 0
   teams[m.team1] = (teams[m.team1] || 0) + 1;
   teams[m.team2] = (teams[m.team2] || 0) + 1;
  });

  //filter if more than 30 times
  return Object.entries(teams)
        .filter(([,num]) => num >= 30)
        .map(([team]) => team)
        .sort();
}
