import React from 'react'
import { connect } from 'react-redux'

const SongDetails = ({MySelectedsong}) => {
    if (!MySelectedsong) {
        return <div>Select a song</div>
    }
  return (
    <div>
        <h3>Details for:</h3>
        <p>
            Title: {MySelectedsong.title}
            <br />
            Duration: {MySelectedsong.duration}
        </p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return { MySelectedsong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)