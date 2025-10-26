import logo from './assets/micara.jpeg';
import './App.css';
import { useState } from 'react';

export function TwitterFollowCard({children, userName = "unknown", name = "unknown", initialisFollowing}){
    const addAt = (userName) => `@${userName}`

    const [isFollowing, setIsFollowing] = useState(initialisFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="El Avatar de Midudev" src={logo}
                className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <b className='tw-followCard-infoUserName'>{children}</b>
                    <span>{addAt(userName)}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}