import React, { useState } from 'react';

const GameSituationController = () => {
  const [gameSituation, setGameSituation] = useState({
    runnerOnFirst: false,
    runnerOnSecond: false,
    runnerOnThird: false,
    basesLoaded: false,
    outs: '1',
  });

  // Handle change in toggles or dropdown
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGameSituation(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      <h2>Game Situation</h2>
      <label>
        Running on 1st?
        <input
          type="checkbox"
          name="runnerOnFirst"
          checked={gameSituation.runnerOnFirst}
          onChange={handleChange}
        />
      </label>
      <label>
        Runner on 2nd?
        <input
          type="checkbox"
          name="runnerOnSecond"
          checked={gameSituation.runnerOnSecond}
          onChange={handleChange}
        />
      </label>
      <label>
        Runner on Third?
        <input
          type="checkbox"
          name="runnerOnThird"
          checked={gameSituation.runnerOnThird}
          onChange={handleChange}
        />
      </label>
      <label>
        Bases Loaded?
        <input
          type="checkbox"
          name="basesLoaded"
          checked={gameSituation.basesLoaded}
          onChange={handleChange}
        />
      </label>
      <label>
        How Many Outs?
        <select name="outs" value={gameSituation.outs} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
    </div>
  );
};

export default GameSituationController;
