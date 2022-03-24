import React from 'react';
import { useState, useEffect } from 'react';
import { getTeams } from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getTeams();
      setTeams(data);
    };
    getData();
  }, []);

  return (
    <div className="teams">
      <h1>Teams</h1>
      <ul className="teams-list">
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}
