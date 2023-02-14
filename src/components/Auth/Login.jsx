
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import bgImage from './../../images/bg-login.png';
import logo from './../../images/logo-siayec.png';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';

Amplify.configure(awsconfig);

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userData, setUserData } = useContext(DataContext)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await Auth.signIn(email, password);
            setUserData(response)

        } catch (err) {
            console.log("🚀 ~ err", err.message)
        }
    }

    const signOut = async () => {
        await Auth.signOut()
        setUserData(null)
    }

    return (
        <div className="flex h-screen">
            <section className="w-1/2 h-full">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-36 h-28" src={logo} alt="logo" />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Iniciar Sesión
                            </h1>
                            <button className='btn button-blue' onClick={signOut}>Cerrar sesión</button>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="john@email.com"
                                        required=""
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">Recordar sesión</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium bluetext text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
                                </div>
                                <div>
                                    <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 rounded'>Entrar</button>
                                </div>
                                <hr />
                                {/* <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 pb-2.5 text-center">Sign in</button> */}
                                <p className="text-sm text-center font-light text-gray-500">
                                    ¿Aún no tienes cuenta? <a href="#" className="font-medium text-blue-500 hover:underline">Regístrate aquí</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-cover bg-no-repeat w-1/2 h-full" style={{ backgroundImage: `url(${bgImage})` }}>
            </section>
        </div>
    )
}

export default Login;