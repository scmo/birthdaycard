import React, { useState, useEffect } from 'react';
import { getContacts } from '../../services/contact'

export default function Contacts(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    let mounted = true;
    getContacts(props.tokenId)
      .then(
        (result) => {
          if (mounted) {
            setIsLoaded(true);
            setContacts(result)
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    return () => mounted = false;
  }, [props])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="wrapper">
        <h1>Contacts</h1>
        <ul>
          {contacts.map(contact => (
            <li key={contact.ID}>{contact.Name}</li>
          ))}
        </ul>
      </div>
    );
  }

}