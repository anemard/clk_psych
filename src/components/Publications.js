import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { db } from '../database/firebaseconfig'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../database/firebaseconfig'

function Publications() {
  const [publications, setPublications] = useState([]);
  const colRef = collection(db, "clk-publications")
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
  } )

  const getPublications = () => {
    let data = []
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => data.push({ ...doc.data(), id: doc.id }))
        setPublications(data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    getPublications()
  }, [])

  const addPublicationForm = document.querySelector('.addPublication')
  const addPublicationClick = (evt) => {
      evt.preventDefault()
      console.log('title:', addPublicationForm.title.value)
      console.log('link:', addPublicationForm.link.value)
      addDoc(colRef, {
           title: addPublicationForm.title.value,
           link: addPublicationForm.link.value,
      })
      .then(() => {
        getPublications()
        addPublicationForm.reset()
      })
  }

  const deletePublicationClick = (evt, id) => {
      evt.preventDefault()
      const docRef = doc(db, "clk-publications", id)
      deleteDoc(docRef)
      .then(() => {
        getPublications()
      })
  }


  return (
    <>
    <div className='publications-container'>
      <h1>Publications</h1>
      {user ? (
        <>
          <form className='addPublication'>
            <label>Title:</label>
            <input type='text' name='title' required></input>
            <label>Link:</label>
            <input type='text' name='link' required></input>
            <button onClick={(evt) => {addPublicationClick(evt)}}>Add Publication</button>
          </form>
          <ul className="PublicationsList">
            {publications.map((publication) => (
              <div key={publication.id}>
                <li className="publication-item">
                  <a href={publication.link} target="_blank">{publication.title}</a>
                </li>
                <button onClick={(evt) => {deletePublicationClick(evt, publication.id)}}>remove</button>
              </div>
            ))}
          </ul>
        </>
      ) : (

        // <a target="_blank" rel="noopener noreferrer" href="https://past-stonks.herokuapp.com/">Stonks!</a>

      <ul className="publicationsList">
        {publications.map((publication) => (
          <li className="publication-item" key={publication.id}>
            <a target='_blank' rel="noopener noreferrer" href={publication.link}>{publication.title}</a>
          </li>
        ))}
      </ul>
      )}
    </div>
    </>
  )
}

export default Publications