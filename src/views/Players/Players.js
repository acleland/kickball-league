import React from 'react';
import { useState, useEffect } from 'react';
import { getPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getPlayers();
      setPlayers(data);
    };
    getData();
  }, []);
  return (
    <div className="players">
      <h1>Players</h1>
      <ul className="players-list">
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}
