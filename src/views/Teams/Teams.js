import React from 'react';
import { useState, useEffect } from 'react';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getTeams();
      setTeams(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="teams">
      <h1>Teams</h1>
      <ul className="teams-list">
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
