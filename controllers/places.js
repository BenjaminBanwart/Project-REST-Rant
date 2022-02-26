const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/shawnanggg-nmpW_WwwVSc-unsplash.jpg'
        }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/michal-parzuchowski-ItaV89TNkks-unsplash.jpg'
        }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    res.send('POST /places')
})

module.exports = router