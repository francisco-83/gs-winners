const Player = ({name, titles, image }) => {
    return <article>
        <img src={image} />
        <h3>{name}</h3>
        <h4>{titles}</h4>
        </article>
        
}

export default Player;