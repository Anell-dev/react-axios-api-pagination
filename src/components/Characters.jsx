import { useContext } from 'react'
import { CharactersContext } from '../context/CharactersContext'
import { GeneralInfo } from './GeneralInfo'

export const Characters = () => {
  const { characters } = useContext(CharactersContext)

  return (
    <div className='row'>
      <GeneralInfo />
      {characters.map((character) => {
        return (
          <div className='col-3' key={character.id}>
            <div className='card mt-4'>
              <img
                src={character.image}
                className='card-img-top'
                alt={'image of' + character.name}
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  <b>Status: </b> {character.status}
                  <br />
                  <b>Species: </b> {character.species}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
