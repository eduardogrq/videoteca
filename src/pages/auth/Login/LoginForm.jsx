

import { Auth, Amplify } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
import { useContext, useState } from 'react';
import { DataContext } from '../../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../../components/common/alerts/ErrorAlert';
import logo from './../../../assets/images/logo-siayec.png';
import InputForm from '../../../components/form/InputForm';

Amplify.configure(awsconfig);

const LoginForm = () => {
    // Variables to get user login fields
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Using context to get and set UserData
    const { userData, setUserData } = useContext(DataContext)
    const navigate = useNavigate();

    // Submit function that use Auth from amplify and set userData in userData Context
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await Auth.signIn(email, password);
            setUserData(response);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-36 h-28" src={logo} alt="logo" />
            </a>
            <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Iniciar Sesión
                    </h1>

                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                        {/* Email input */}
                        <InputForm
                            name="email"
                            placeholder="john@email.com"
                            type="email"
                            title="Correo electrónico"
                            value={email}
                            setValue={setEmail}
                        />

                        {/* Password input */}
                        <InputForm
                            name="password"
                            placeholder="Escribe tu contraseña"
                            type="password"
                            title="Contraseña"
                            value={password}
                            setValue={setPassword}
                        />

                        {/* Message error */}
                        {error && <ErrorAlert error={error} />}

                        <div className="lg:flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                    />
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
                        <p className="text-sm text-center font-light text-gray-500">
                            ¿Aún no tienes cuenta? <a href="#" className="font-medium text-blue-500 hover:underline">Regístrate aquí</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm