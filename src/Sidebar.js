import {getParams} from "./App";
import "./Sidebar.css"

const Sidebar = ({characters, selCharacter, setSelCharacter}) => {

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                {characters.map(character => {
                    let classname = "character-thumb"
                    if (character.id === selCharacter.id)
                        classname += " selected-character-thumb"
                    return(
                        <div className={classname} onClick={()=> setSelCharacter(character)}>
                            <img src={character.thumbnail.path+ "/standard_medium." + character.thumbnail.extension}
                                 alt={`${character.name} - ${character.id}`}
                                 title={`${character.name} - ${character.id}`}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Sidebar
