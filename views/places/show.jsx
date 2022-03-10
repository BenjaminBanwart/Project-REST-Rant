const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (place.comments.length) {
        comments = place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
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
                    {comments}
                    <a href={`/places/${id}/edit`} className="btn btn-warning">Edit</a> 
                    <form method='POST' action={`/places/${id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger'>Delete</button>
                    </form>
                </div>
                <hr />
                <h2>Got Your Own Rant or Rave?</h2>
                <form action={`/places/${place.id}/comment`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" name="content" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input id="author" name="author" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" id="rant" name="rant"  />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show