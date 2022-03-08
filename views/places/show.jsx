const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    return (
        <Def>
            <main>
                <div>
                    <h1>{place.name}</h1>
                    <h3>Located in {place.city}, {place.state}</h3>
                    <img src={place.pic}></img>
                    <h3>{place.showEstablished()}</h3>
                    <h4>Serving {place.cuisines}</h4>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                    <a href={`/places/${id}/edit`} className="btn btn-warning">Edit</a> 
                    <form method='POST' action={`/places/${id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger'>Delete</button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show