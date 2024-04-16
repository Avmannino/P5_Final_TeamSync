import React, { useEffect, useState } from 'react';
import ChartRace from 'react-chart-race';

const BarRaceChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleChange();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleChange = () => {
    const newData = [
      { id: 0, title: 'Ayfonkarahisar', value: getRandomInt(10, 90), color: '#fe591b' },
      { id: 1, title: 'Kayseri', value: 38, color: '#e5533d' },
      { id: 2, title: 'Muğla', value: getRandomInt(10, 90), color: '#5a3600' },
      { id: 3, title: 'Uşak', value: getRandomInt(10, 90), color: '#a01e05' },
      { id: 4, title: 'Sivas', value: 58, color: '#fe9f25' },
      { id: 5, title: 'Konya', value: 16, color: '#035ba6' }
    ];
    setData(newData);
  };

  return (
    <div className='bar-race'>
      <ChartRace
        data={data}
        backgroundColor='#ff000000'
        width={730}
        padding={12}
        itemHeight={58}
        gap={12}
        position='absolute'
        titleStyle={{ font: 'normal 400 13px Arial', color: '#fff' }}
        valueStyle={{ font: 'normal 400 11px Arial', color: 'rgba(255,255,255, 0.42)' }}
      />
    </div>
  );
};

export default BarRaceChart;
