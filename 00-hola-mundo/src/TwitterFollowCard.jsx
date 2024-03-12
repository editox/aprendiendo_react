import { useState } from 'react' 

export function TwitterFollowCard({formatUserName, children, userName, initialIsFollowing}){
    const [isFollowing, setIsFollwing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    const handleClick = ()=> {
        setIsFollwing(!isFollowing);
    }

    return(<article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img 
            className='tw-followCard-avatar'
            src={`http://unavatar.io/${formatUserName(userName)}`}
            alt="El avatar de midudev" />
        <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
    </header>
    <aside>
        <button className= {buttonClassName} onClick={handleClick}>
            {text}
        </button>
    </aside>
</article>)
}