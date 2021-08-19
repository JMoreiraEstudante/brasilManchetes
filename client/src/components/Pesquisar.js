import { useState } from "react"

const Pesquisar = ({onPesquisa}) => {
    const [data, setData] = useState('')
    const [jornal, setJornal] = useState('g1')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!data){
            alert('Por favor adicione uma data')
            return
        }
        onPesquisa({data, jornal})
        setData('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="left">
            <div className='form-control'>
                <input type="text" placeholder="dia-mes-ano" value={data} onChange={(e) => setData(e.target.value)}/>
            </div>
            <div className="form-control">
                <select name="jornais" value={jornal} onChange={(e) => setJornal(e.target.value)}>
                    <option value="g1">G1</option>
                    <option value="estadao">Estadão</option>
                    <option value="cnn">CNN</option>
                </select>
            </div>
            </div>
            <input type="submit" value="Pesquisar" className="btn"/>
        </form>
    )
}

export default Pesquisar
