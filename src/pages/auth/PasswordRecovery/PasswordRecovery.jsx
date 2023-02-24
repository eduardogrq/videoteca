
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import InputForm from '../../../components/form/InputForm';
import bgImage from './../../../assets/images/bg-login.png';
import { Link } from 'react-router-dom';
import ErrorAlert from '../../../components/common/alerts/ErrorAlert';
import Loader from "../../../components/common/Loader"

const PasswordRecovery = () => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [code, setCode] = useState('')
    const [step, setStep] = useState(2)
    const [isActive, setIsActive] = useState(false)

    const handleForgotPassword = async () => {
        setLoading(true)
        try {
            await Auth.forgotPassword(email)
            setError('')
            setStep(2)
        } catch (err) {
            setError(err.message)
            setEmail('')
            console.log("🚀 ~ file: PasswordRecovery.jsx:21 ~ handleForgotPassword ~ err:", err)
        } finally {
            setLoading(false)
        }
    }

    const handlePasswordResetSubmit = async () => {

        // Conditional to check if password and confirm password are equal, otherwise send error that passwords do not match
        if (password === confirmPassword) {
            setLoading(true)
            try {
                await Auth.forgotPasswordSubmit(email, code, password)
                setStep(3)
            } catch (err) {
                setError(err.message)
                console.log("🚀 ~ file: PasswordRecovery.jsx:37 ~ handleForgotPasswordSubmit ~ err:", err)
            } finally {
                setLoading(false)
            }
        }
        else {
            setError('Passwords do not match')
        }
    }

    function activeInputPassword() {
        setIsActive(true)
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="flex h-screen">
            <section className="lg:w-1/2 h-full mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">


                    <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            {step === 1 &&
                                <div className="space-y-10 lg:space-y-0">

                                    <div className="flex mb-5">
                                        <Link to="/login" className="h-6 md:h-8 w-6 md:w-8 md:absolute flex items-center text-center">
                                            <svg fill="none" className='w-4 h-4' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                                            </svg>
                                        </Link>
                                        <div className="w-full flex justify-center text-center">
                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">¿Has olvidado tu contraseña?</h1>
                                        </div>

                                    </div>

                                    <div className="space-y-4">

                                        <p className="text-sm">Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.</p>
                                        {/* Email input */}
                                        <InputForm
                                            name="email"
                                            placeholder="john@email.com"
                                            type="email"
                                            title=""
                                            value={email}
                                            setValue={setEmail}
                                        />

                                        {/* Message error */}
                                        {error && <ErrorAlert error={error} />}

                                        <div>
                                            <button
                                                onClick={handleForgotPassword}
                                                className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 rounded'>
                                                Enviar código
                                            </button>
                                        </div>

                                        <hr />
                                        <p className="text-sm text-center font-light text-gray-500">
                                            ¿Aún no tienes cuenta? <Link to="/register" className="font-medium text-blue-500 hover:underline">Regístrate aquí</Link>
                                        </p>
                                    </div>
                                </div>
                            }
                            {step === 2 &&
                                <div>
                                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5">
                                        Restablecer contraseña
                                    </h1>


                                    <div className="space-y-4">

                                        <p className="text-sm text-gray-900 font-medium text-center">Te enviamos un código para restablecer tu contraseña. Por favor, ingrésalo en el siguiente campo.</p>

                                        {/* Email input */}
                                        <InputForm
                                            name="code"
                                            placeholder="Ingresa el código"
                                            type="text"
                                            title=""
                                            value={code}
                                            setValue={setCode}
                                        />

                                        <InputForm
                                            name="newPassword"
                                            placeholder="••••••••"
                                            type="password"
                                            title="Ingresa tu nueva contraseña"
                                            value={password}
                                            setValue={setPassword}
                                            onClickAction={activeInputPassword}
                                        />

                                        <div className={`pl-4 ${!isActive ? "hidden" : ""}`}>
                                            <ul className="text-xs">
                                                <li className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-3 h-3 fill-green-500">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg>
                                                </span>    Longitud mínima de 8 caracteres</li>
                                                <li className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-3 h-3 fill-green-500">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg>
                                                </span>Al menos una minúscula (a-z)</li>
                                                <li className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-3 h-3 fill-green-500">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg>
                                                </span>Al menos una mayúscula (A-Z)</li>
                                                <li className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-3 h-3 fill-green-500">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg>
                                                </span>Al menos un número (0-9)</li>
                                                <li className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-3 h-3 fill-green-500">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg>
                                                </span>Al menos un caracter especial ($#*%&?!)</li>
                                            </ul>
                                        </div>

                                        <InputForm
                                            name="confirmPassword"
                                            placeholder="••••••••"
                                            type="password"
                                            title="Confirmar contraseña"
                                            value={confirmPassword}
                                            setValue={setConfirmPassword}
                                        />

                                        {/* Message error */}
                                        {error && <ErrorAlert error={error} />}

                                        <div>
                                            <button
                                                onClick={handlePasswordResetSubmit}
                                                className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 rounded'>
                                                Restablecer contraseña
                                            </button>
                                        </div>

                                        <hr />
                                        <p className="text-sm text-center font-light text-gray-500">
                                            ¿Aún no tienes cuenta? <Link to="/register" className="font-medium text-blue-500 hover:underline">Regístrate aquí</Link>
                                        </p>
                                    </div>
                                </div>
                            }
                            {step === 3 &&
                                <div className="text-center py-5 animate__animated animate__fadeIn">
                                    <span className="text-2xl font-extrabold text-gray-900">Contraseña Actualizada</span>
                                    <div className="flex justify-center my-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-28 h-28 fill-green-500 animate__animated animate__flip">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                    <h2 className="text-sm mb-7 text-gray-900">tu contraseña se actualizó éxitosamente</h2>
                                    <Link to="/login" className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-5 rounded'>Iniciar sesión</Link>

                                </div>
                            }

                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-cover bg-no-repeat w-1/2 h-full hidden lg:block" style={{ backgroundImage: `url(${bgImage})` }}>
            </section>
        </div>
    )
}

export default PasswordRecovery;