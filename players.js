import React from 'react';

function Players(props) {
    const { players = [] } = props;

    return (
        <>
            <h3>Player List</h3>

            {players.map(p => (
                // each player should have id and name
                <div key={p.id}>{p.name}</div>
            ))}
        </>
    );
}

export default Players;