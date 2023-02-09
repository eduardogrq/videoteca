
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

import { useState } from 'react';

Amplify.configure(awsconfig);

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        let response = await Auth.signIn(email, password);
        console.log('respuestita', response);
    }

    const signOut = async() => {
        try {
            await Auth.signOut();
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <div className='container mx-auto'>
            <form className="container mx-auto" onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="text" onChange={(event) => setEmail(event.target.value)} />
                <hr />
                <label htmlFor="">Password</label>
                <input type="password" onChange={(event) => setPassword(event.target.value)} />
                <hr />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>

            <button onClick={signOut}>Cerrar sesión</button>
        </div>
    )
}

export default Login;