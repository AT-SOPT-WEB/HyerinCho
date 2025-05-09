import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

const PokemonDetail = () => {
  const {name} = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('포켓몬 리스트를 불러오는 데 실패했습니다.', error);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemon) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <Link to={-1} style={{color: 'black'}}>⬅️ 목록으로</Link>
      <h1>{name}</h1>
      <img src={pokemon.sprites.front_default}/>
      <p>
        <strong>Type: </strong>
        {pokemon.types.map((t)=>t.type.name).join(', ')}
      </p>
    </div>
  );
};

export default PokemonDetail;