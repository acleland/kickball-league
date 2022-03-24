import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

export default function PlayerDetail() {
  const params = useParams();
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getPlayerById(params.id);
      setPlayer(data);
      setLoading(false);
    };
    getData();
  }, [params.id]);
  console.log('player', player);
  console.log('player team', player.teams);

  if (loading) {
    return <p>Loadin...</p>;
  }

  return (
    <div className="player-detail">
      <p>
        {`${player.name} plays ${player.position.toLowerCase()} for the `}
        <Link to={`/teams/${player.teams.id}`}>{player.teams.name}</Link>
        {` in ${player.teams.city}, ${player.teams.state}`}
      </p>
    </div>
  );
}
