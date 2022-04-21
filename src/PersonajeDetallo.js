import "./PersonajeDetallo.css"
const PersonajeDetallo = ({selCharacter}) => {

    return selCharacter.thumbnail ? (
        <div className="character-detail">


            <div className="top-part">
                <img src={selCharacter.thumbnail.path + "/portrait_fantastic." + selCharacter.thumbnail.extension} alt=""/>
                <div>
                    <h3>{selCharacter.name}</h3>
                    <p className="subtitle">ID {selCharacter.id} - {selCharacter.description}</p>
                    <div className="buttons">
                        {selCharacter.urls.map((url)=>{
                            return (
                                <a href={url.url} ><button>{url.type}</button> </a>
                            )
                        })}
                    </div>
                    <h4>Series</h4>
                    {selCharacter.series.available > 0 && <ul>
                        {selCharacter.series.items.map(serie => (
                            <li>{serie.name}</li>
                        ))}
                    </ul>}
                </div>
            </div>

            <div className="bottom-part">
                <div>
                    <h4>Comics</h4>
                    {selCharacter.comics.available > 0 && <ul>
                        {selCharacter.comics.items.map(comic => (
                            <li>{comic.name}</li>
                        ))}
                    </ul>}
                </div>
                <div>
                    <h4>Stories</h4>
                    {selCharacter.stories.available > 0 && <ul>
                        {selCharacter.stories.items.map(item => (
                            <li>{item.name}</li>
                        ))}
                    </ul>}
                </div>
            </div>
        </div>
    ) : <div className="character-thumb"/>
}
export default PersonajeDetallo
