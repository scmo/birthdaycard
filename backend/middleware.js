if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID

exports.verify = (req, res, next) => {
    if (!req.headers.authorization) res.sendStatus(403);
    else {
        const token = req.headers.authorization.split(" ")[1]
        const client = new OAuth2Client(CLIENT_ID);
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            // If request specified a G Suite domain:
            // const domain = payload['hd'];
            next()
        }
        verify().catch((error) => {
            res.sendStatus(401);
            console.error(error);
        });
    }
}