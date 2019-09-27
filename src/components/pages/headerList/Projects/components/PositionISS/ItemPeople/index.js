import React from 'react';

function ItemPeople({ peoples }) {
    if (peoples.length !== undefined) {
        return peoples.map(people => 
        <p key={people.name}>{people.name}</p>
        );
    }

    return null;
}

export default ItemPeople;
