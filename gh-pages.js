const ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/polBachelin/WAITR_landingPage.git', // Update to point to your repository
        user: {
            name: 'Pol Bachelin', // update to use your name
            email: 'pol.bachelin@epitech.eu' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)