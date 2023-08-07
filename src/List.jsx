import Player from './Player'

const List = ({players}) => {
    return <section>
        {players.map((player) => {
            return <Player key={player.id} {...player} />
        } )}
        </section>
        
    
}
export default List;