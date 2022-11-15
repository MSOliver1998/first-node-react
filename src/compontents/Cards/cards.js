import './cards.css'

const CardsUsers=({name,country,age})=>{
    return(
        <div className='card'>
            <h1>Dev: {name}</h1>
            <h2>País: {country}</h2>
            <span>Idade: {age} anos</span>
            <button>contratar</button>
        </div>
    )
}

const CardsPets=({nome,raca,especie})=>{
    return(
        <div>
            <h1>{nome}</h1>
            <p>{raca}</p>
            <p>{especie}</p>
            <button>Adotar</button>
        </div>
    )
}

export {CardsUsers, CardsPets}