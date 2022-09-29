import React from 'react'

const Website = ({match}) => {
    return (
        <div>
            <h1>I am in {match.params.website} Team</h1>
        </div>
    )
}

export default Website;
