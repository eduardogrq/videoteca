
import bgImage from './../../../assets/images/bg-login.png';
import { Link } from 'react-router-dom';
import InputForm from '../../../components/form/InputForm';
import { useState } from 'react';
// import RegisterForm from './RegisterForm';

const Register = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="flex h-screen">
            <section className="lg:w-1/2 h-full mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="space-y-10 lg:space-y-0">
                                <div className="flex mb-12">
                                    <Link to="/login" className="h-6 md:h-8 w-6 md:w-8 md:absolute flex items-center text-center">
                                        <svg fill="none" className='w-4 h-4' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                                        </svg>
                                    </Link>
                                    <div className="w-full flex justify-center text-center">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Registro</h1>
                                    </div>

                                </div>

                                <div className="space-y-4">

                                    <InputForm
                                        name="name"
                                        placeholder="John Doe"
                                        type="text"
                                        title="Nombre completo"
                                        value={name}
                                        setValue={setName}
                                    />
                                    <InputForm
                                        name="email"
                                        placeholder="john@email.com"
                                        type="email"
                                        title="Correo electrónico"
                                        value={email}
                                        setValue={setEmail}
                                    />
                                    <InputForm
                                        name="password"
                                        placeholder="••••••••"
                                        type="password"
                                        title="Contraseña"
                                        value={password}
                                        setValue={setPassword}
                                    />
                                    <InputForm
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        type="password"
                                        title="Confirmar contraseña"
                                        value={confirmPassword}
                                        setValue={setConfirmPassword}
                                    />

                                    {/* Message error */}
                                    {/* {error && <ErrorAlert error={error} />} */}

                                    <div>
                                        <button
                                            // disabled={!isValidPassword}
                                            // onClick={handlePasswordResetSubmit}
                                            className='bg-blue-500 w-full enabled:hover:bg-blue-700 text-white font-bold py-3 rounded disabled:opacity-50 disabled:hover:none'>
                                            Crear cuenta
                                        </button>
                                    </div>

                                    <hr />
                                    <p className="text-sm text-center font-light text-gray-500">
                                        ¿Aún no tienes cuenta? <Link to="/register" className="font-medium text-blue-500 hover:underline">Regístrate aquí</Link>
                                    </p>

                                </div>
                            </div>
                            {/* <RegisterForm /> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-cover bg-no-repeat w-1/2 h-full hidden lg:block" style={{ backgroundImage: `url(${bgImage})` }}>
            </section>
        </div>
    )
}

export default Register;