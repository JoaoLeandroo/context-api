import { useContext } from "react"
import Nome from "../Nome"

import {UserContext} from '../../contexts/user'

export default function Aluno() {
    const {curso, setCurso, name} = useContext(UserContext);
    return(
        <div>
            <h3>Bem Vindo: <Nome/></h3>
            <p>{curso}</p>
            <button onClick={() => setCurso("APRENDENDO")}> trocar</button>
            {name}
        </div>
    )
}
