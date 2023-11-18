import { useContext } from "react"
import { UserContext } from '../../contexts/user'

export default function Nome() {
    const {name, setName} = useContext(UserContext);
    return(
        <div>
            <strong>
                {name}
            </strong>  

            <button  onClick={() => setName("João Leandro")}>Trade you Name</button>
        </div>
    )
}