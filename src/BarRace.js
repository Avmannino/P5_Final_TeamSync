import React, { useEffect, useState } from 'react';
import ChartRace from 'react-chart-race';

const BarRaceChart = () => {
  const [data, setData] = useState([]);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentGame, setCurrentGame] = useState('');

  const goalsData = [
    { game: '1', player1: 1, player2: 3, player3: 1, player4: 2, player5: 0, player6: 2 },
    { game: '2', player1: 0, player2: 3, player3: 0, player4: 0, player5: 0, player6: 1 },
    { game: '3', player1: 2, player2: 0, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '4', player1: 0, player2: 0, player3: 2, player4: 0, player5: 0, player6: 0 },
    { game: '5', player1: 3, player2: 0, player3: 0, player4: 4, player5: 3, player6: 0 },
    { game: '6', player1: 0, player2: 1, player3: 0, player4: 0, player5: 2, player6: 0 },
    { game: '7', player1: 0, player2: 0, player3: 4, player4: 0, player5: 0, player6: 3 },
    { game: '8', player1: 0, player2: 0, player3: 0, player4: 1, player5: 0, player6: 0 },
    { game: '9', player1: 2, player2: 0, player3: 0, player4: 1, player5: 1, player6: 0 },
    { game: '10', player1: 0, player2: 1, player3:3, player4: 0, player5: 1, player6: 2 },
    { game: '11', player1: 0, player2: 3, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '12', player1: 0, player2: 2, player3: 1, player4: 1, player5: 0, player6: 1 },
    { game: '13', player1: 0, player2: 0, player3: 0, player4: 0, player5: 1, player6: 0 },
    { game: '14', player1: 1, player2: 0, player3: 1, player4: 0, player5: 0, player6: 0 },
    { game: '15', player1: 0, player2: 1, player3: 0, player4: 2, player5: 0, player6: 1 },
    { game: '16', player1: 0, player2: 0, player3: 3, player4: 0, player5: 2, player6: 0 },
    { game: '17', player1: 1, player2: 0, player3: 0, player4: 0, player5: 0, player6: 1 },
    { game: '18', player1: 0, player2: 0, player3: 0, player4: 1, player5: 2, player6: 1 },
    { game: '19', player1: 2, player2: 0, player3: 1, player4: 1, player5: 0, player6: 1 },
    { game: '20', player1: 0, player2: 2, player3: 0, player4: 1, player5: 1, player6: 0 },
    { game: '21', player1: 1, player2: 0, player3: 1, player4: 0, player5: 1, player6: 2 },
    { game: '22', player1: 0, player2: 2, player3: 0, player4: 0, player5: 1, player6: 0 },
    { game: '23', player1: 0, player2: 1, player3: 2, player4: 1, player5: 0, player6: 0 },
    { game: '24', player1: 1, player2: 2, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '25', player1: 2, player2: 2, player3: 1, player4: 0, player5: 0, player6: 2 },
    { game: '26', player1: 1, player2: 2, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '27', player1: 0, player2: 1, player3: 1, player4: 1, player5: 1, player6: 0 },
    { game: '28', player1: 1, player2: 2, player3: 0, player4: 0, player5: 0, player6: 2 },
    { game: '29', player1: 0, player2: 0, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '30', player1: 2, player2: 1, player3: 1, player4: 2, player5: 0, player6: 1 },
    { game: '31', player1: 0, player2: 0, player3: 0, player4: 2, player5: 0, player6: 0 },
    { game: '32', player1: 0, player2: 1, player3: 0, player4: 0, player5: 2, player6: 0 },
    { game: '33', player1: 0, player2: 0, player3: 1, player4: 0, player5: 1, player6: 0 },
    { game: '34', player1: 3, player2: 1, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '35', player1: 0, player2: 0, player3: 2, player4: 1, player5: 2, player6: 1 },
    { game: '36', player1: 2, player2: 1, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '37', player1: 1, player2: 2, player3: 0, player4: 0, player5: 1, player6: 0 },
    { game: '38', player1: 1, player2: 0, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '39', player1: 1, player2: 0, player3: 0, player4: 1, player5: 1, player6: 1 },
    { game: '40', player1: 0, player2: 1, player3: 2, player4: 0, player5: 0, player6: 0 },
    { game: '41', player1: 0, player2: 3, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '42', player1: 1, player2: 0, player3: 0, player4: 2, player5: 2, player6: 0 },
    { game: '43', player1: 0, player2: 1, player3: 1, player4: 0, player5: 0, player6: 1 },
    { game: '44', player1: 2, player2: 1, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '45', player1: 0, player2: 1, player3: 2, player4: 2, player5: 1, player6: 0 },
    { game: '46', player1: 0, player2: 0, player3: 0, player4: 0, player5: 1, player6: 2 },
    { game: '47', player1: 1, player2: 1, player3: 1, player4: 1, player5: 0, player6: 0 },
    { game: '48', player1: 0, player2: 1, player3: 0, player4: 2, player5: 1, player6: 0 },
    { game: '49', player1: 0, player2: 0, player3: 1, player4: 0, player5: 0, player6: 0 },
    { game: '50', player1: 3, player2: 1, player3: 1, player4: 2, player5: 2, player6: 3 },
    { game: '51', player1: 0, player2: 3, player3: 0, player4: 1, player5: 0, player6: 0 },
    { game: '52', player1: 1, player2: 1, player3: 0, player4: 0, player5: 1, player6: 0 },
    { game: '53', player1: 0, player2: 2, player3: 3, player4: 0, player5: 0, player6: 1 },
    { game: '54', player1: 2, player2: 1, player3: 0, player4: 1, player5: 1, player6: 2 },
    { game: '55', player1: 0, player2: 0, player3: 0, player4: 0, player5: 0, player6: 2 },
    { game: '56', player1: 1, player2: 0, player3: 1, player4: 1, player5: 0, player6: 0 },
    { game: '57', player1: 0, player2: 1, player3: 0, player4: 0, player5: 2, player6: 0 },
    { game: '58', player1: 2, player2: 0, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '59', player1: 0, player2: 0, player3: 3, player4: 1, player5: 1, player6: 2 },
    { game: '60', player1: 1, player2: 1, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '61', player1: 0, player2: 0, player3: 1, player4: 1, player5: 1, player6: 0 },
    { game: '62', player1: 1, player2: 0, player3: 1, player4: 0, player5: 0, player6: 1 },
    { game: '63', player1: 0, player2: 1, player3: 0, player4: 0, player5: 2, player6: 1},
    { game: '64', player1: 0, player2: 0, player3: 0, player4: 1, player5: 0, player6: 1},
    { game: '65', player1: 0, player2: 0, player3: 2, player4: 0, player5: 2, player6: 0 },
    { game: '66', player1: 2, player2: 2, player3: 1, player4: 0, player5: 3, player6: 2 },
    { game: '67', player1: 0, player2: 1, player3: 0, player4: 1, player5: 0, player6: 0 },
    { game: '68', player1: 0, player2: 0, player3: 2, player4: 0, player5: 0, player6: 2 },
    { game: '69', player1: 0, player2: 1, player3: 0, player4: 0, player5: 2, player6: 0 },
    { game: '70', player1: 2, player2: 0, player3: 0, player4: 2, player5: 0, player6: 2 },
    { game: '71', player1: 0, player2: 1, player3: 1, player4: 0, player5: 0, player6: 0 },
    { game: '72', player1: 0, player2: 1, player3: 0, player4: 0, player5: 1, player6: 0 },
    { game: '73', player1: 1, player2: 1, player3: 0, player4: 3, player5: 1, player6: 1 },
    { game: '74', player1: 1, player2: 1, player3: 1, player4: 0, player5: 1, player6: 0 },
    { game: '75', player1: 0, player2: 1, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '76', player1: 2, player2: 2, player3: 0, player4: 3, player5: 0, player6: 1 },
    { game: '77', player1: 0, player2: 1, player3: 1, player4: 0, player5: 0, player6: 0 },
    { game: '78', player1: 0, player2: 0, player3: 1, player4: 0, player5: 2, player6: 0 },
    { game: '79', player1: 1, player2: 0, player3: 2, player4: 1, player5: 0, player6: 2 },
    { game: '80', player1: 0, player2: 1, player3: 0, player4: 0, player5: 0, player6: 0 },
    { game: '81', player1: 1, player2: 2, player3: 1, player4: 0, player5: 0, player6: 0 },
    { game: '82', player1: 1, player2: 0, player3: 1, player4: 1, player5: 0, player6: 1 }
  ];
    
  useEffect(() => {
    setPlayers(Object.keys(goalsData[0]).filter(key => key !== 'game'));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleChange();
    }, 650);

    return () => clearInterval(interval);
  }, [currentMonthIndex]);

  const handleChange = () => {
    if (currentMonthIndex < goalsData.length) {
      setCurrentGame(goalsData[currentMonthIndex].game); // Set the current game label
      const monthData = goalsData[currentMonthIndex];
      let cumulativeTotals = {};
      for (let i = 0; i <= currentMonthIndex; i++) {
        const month = goalsData[i];
        players.forEach(player => {
          if (!cumulativeTotals[player]) cumulativeTotals[player] = 0;
          cumulativeTotals[player] += month[player];
        });
      }
      
      const newData = players.map((player, id) => ({
        id,
        title: getPlayerName(player),
        value: cumulativeTotals[player],
        color: getPlayerColor(id),
      }));
      setData(newData);
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const getPlayerName = (playerKey) => {
    const playerNames = {
      player1: 'Zach Hyman',
      player2: 'A. Matthews',
      player3: 'Sam Reinhart',
      player4: 'Petr Forsberg',
      player5: 'Nathan MacKinnon',
      player6: 'Artemi Panarin'
    };
    return playerNames[playerKey] || playerKey;
  };

  const getPlayerColor = (id) => {
    const colors = ['#fc4c02', '#00205b', '#c8102e', '#ffb81c', '#6f263d', '#0033a0'];
    return colors[id];
  };

  return (
    <div className='bar-race'>
      <h2 style={{fontSize:'20px'}}>'23-'24 NHL Scoring Leaders (goals - all-games) | Game: {currentGame}</h2>
      <ChartRace
        data={data}
        backgroundColor='#ff000000'
        width={900}
        padding={12}
        itemHeight={30}
        gap={12}
        position='absolute'
        titleStyle={{ font: 'normal 400 16px Arial', color: '#fff' }}
        valueStyle={{ font: 'bold 22px Arial', color: 'white', textAlign: 'right' }}
      />
    </div>
  );
};

export default BarRaceChart;