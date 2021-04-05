const express = require('express')

module.exports = {
    getContacts: (req, res) => {
        const contacts = [
            {
                'ID': 1,
                'Name': 'Moritz',
                'Bday': '11.02.1990'
            },
            {
                'ID': 2,
                'Name': 'Max',
                'Bday': '11.12.1990'
            }
        ]

        return res.status(200).json(contacts)
    }
}
