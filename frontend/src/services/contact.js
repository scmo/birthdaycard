export function getContacts(tokenId) {
    return fetch('http://localhost:3001/contacts',
        {
            headers: new Headers({
                'Authorization': 'Bearer ' + tokenId,
            }),
        })
        .then(data => data.json())
}