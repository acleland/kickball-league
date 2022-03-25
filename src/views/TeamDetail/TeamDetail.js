import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTeamById } from '../../services/teams';

export default function TeamDetail() {
  const params = useParams();
  const [team, setTeam] = useState({ players: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getTeamById(params.id);
      setTeam(data);
      setLoading(false);
    };
    getData();
  }, [params]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="team-detail">
      <h1>{team.name}</h1>
      <h3>{`${team.city}, ${team.state}`}</h3>
      <h4>Members</h4>
      <ul className="player-list">
        {team.players.map((player) => (
          <li key={player.id}>
            {`${player.position}: `}
            <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
