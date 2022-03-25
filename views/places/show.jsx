const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated!
        </h3>
    )
    if (place.comments.length) {
        let sumRatings = place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😄'}</h2>
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
                <div className='row'>
                    <div className='col-sm-8'>
                        <h1 className='col-sm-4'>{place.name}</h1>
                        <h3 className='col-sm-4'>Located in {place.city}, {place.state}</h3>
                    </div>
                    <img src={place.pic} className='col-sm-4'></img>
                    <h3 className='col-sm-4'>{place.showEstablished()}</h3>
                    <h4 className='col-sm-4'>Serving {place.cuisines}</h4>
                    <h2>Rating</h2>
                    {rating}
                    <br />
                    <h2>Comments</h2>
                    <div className='col-sm-6'>
                        {comments}
                    </div>
                    <a href={`/places/${place.id}/edit`} className="btn btn-warning" >Edit</a> 
                    <form method='POST' action={`/places/${place.id}?_method=DELETE`}>
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