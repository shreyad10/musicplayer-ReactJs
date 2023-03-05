import React, { useState, useEffect } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai"
import { SiApplemusic } from "react-icons/si"
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import MusicPlayer from "./MusicPlayer";
import { useNavigate } from "react-router-dom";


const data = [
  {
    "id": 1,
    "name": "ranjha",
    "source": "youtube",
    "addon": "5 march"

  },
  {
    "id": 2,
    "name": "heer",
    "source": "youtube",
    "addon": "5 march"

  },
  {
    "id": 3,
    "name": "ghagra",
    "source": "youtube",
    "addon": "5 march"

  }
]
export default function Dashboard() {
  const navigate = useNavigate()

  function logout(){
    navigate('/')
  }

  return (
    <>
      <nav className="navbar">
        <h1 className="song">Songs</h1>
        <Popup
          trigger={<button className="btn"> Add Song </button>}
          modal
          nested
        >

          {(close) => (
            <div className="modal">

              <button className="close" onClick={close}>
                &times;

              </button>
              <div className="header"> Add Song
              </div>
              <div className="content">
                <label>Song Name:
                  <input type='text' />
                </label>
                <label>Song Link:
                  <input type='text' />
                </label>
                <label>Song Source:
                  <input type='text' />
                </label>

              </div>

              <div className="actions">

                <Popup
                  trigger={<button className="button"> Add Song </button>}
                  position="top center"
                  nested
                >
                  <span>
                    Song Added
                  </span>
                </Popup>
                <button
                  className="button"
                  onClick={() => {
                    console.log("popup closed ");
                    close();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </Popup>
      </nav>


      <nav className="sidenav" >
        <h2>Logo</h2>
        <a href="#top-songs" >Top Songs</a>
        <a href="#recent-songs">Recent Songs</a>
        <a href="#my-playlists">My Playlists</a>
        <button className="logout" onClick={logout}>Logout</button>
      </nav>
      <br />
      <table>
        <thead>
          <tr>
            <th></th>
            <th >SONG NAME</th>
            <th>SOURCE</th>
            <th>ADD ON</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {data.map(item => (
            <tr key={item.id}>
              <td><SiApplemusic style={{ fontSize: '30px', color: "#e81f63" }} /></td>
              <td>{item.name}</td>
              <td>{item.source}</td>
              <td>{item.addon}</td>
              <td><BsPlayCircleFill  style={{ color: 'green', fontSize: '30px' }} /></td>
              <td><AiOutlineDelete style={{ fontSize: '15px' }} /></td>

            </tr>
          ))}
        </tbody>
      </table>
      <nav className="bottom-player">
        <MusicPlayer />
      </nav>
    </>
  )
}


