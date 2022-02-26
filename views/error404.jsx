const React = require('react')
const Def = require('./default')

function error404() {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Page does not exist!</p>
                <div>
                    <img src='/images/adi-goldstein-EUsVwEOsblE-unsplash.jpg' alt='Tech image' ></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@adigold1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adi Goldstein</a> on <a href="https://unsplash.com/s/photos/tech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404