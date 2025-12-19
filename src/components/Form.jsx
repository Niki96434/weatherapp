import { useState } from "react"
import './Form.css'
export default function Form({getData, onClickSearch}) {
    return (
       <form className='form-search'>
        <div className="control">
        <input onChange={getData} className="input is-focused" type="text" placeholder="Искать" />
        </div>
        <button onClick={onClickSearch} type="button" className="button is-focused">Поиск</button>
      </form>
    )
}
