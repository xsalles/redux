import { useState } from "react"
import { login } from "../actions"
import { useDispatch } from "react-redux"

const Login = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleLoggin = () => {
        dispatch(login({name: username}))
    }


return (
    <div>
        <h1>Faça o login</h1>

        <input type="text" value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Coloque o seu username"/>

        <button onClick={handleLoggin}>Confirme o seu login</button>
    </div>
)

};


export default Login;



