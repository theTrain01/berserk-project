import React from 'react'
import ReactPlayer from 'react-player'

import './WatchAnime.scss'

import { Header } from '../Header/Header'

export const WatchAnime = ({state}) => {
    const [episodeIndex, setEpisodeIndex] = React.useState(0)
    const [episodeTitle, setEpisodeTitle] = React.useState(0)
    console.log(episodeTitle)
    const handleEpisodeChange = (index) => {
        setEpisodeIndex(index)
        setEpisodeTitle(index)
    }
    return (
        <>
            <Header/>
            <div className = 'watch_wrapper'>
                <div className='player__wrapper'>
                    <ReactPlayer 
                        url = {state.length && state[episodeIndex].animUrl} 
                        controls 
                        width= '50%' 
                        height='80%' 
                        volume 
                        muted
                        playbackRate 
                        playing = {true} 
                        onReady = {() => true}
                    />
                    
                    <div className='episode_wrap'>
                    <h4>{state.length && state[episodeIndex].title}</h4>

                        {
                            state.map((item) => (
                                <div>
                                    <span 
                                        className={episodeIndex === item.id ? "active_button" : ''} 
                                        onClick = {() => handleEpisodeChange (item.id)}
                                    >
                                        Episode {item.episode}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </>
    )
} 
