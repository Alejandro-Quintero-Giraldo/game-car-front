import React from 'react';

export function PlayerList({players}) {

    return(
        <>
            <ul>
                {
                    players?.map((player) => (<li>{player}</li>))
                }
                
            </ul>
        </>
    )
}