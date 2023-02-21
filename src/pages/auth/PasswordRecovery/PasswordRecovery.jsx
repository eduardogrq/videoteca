
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import InputForm from '../../../components/form/InputForm';
import bgImage from './../../../assets/images/bg-login.png';
import { Link } from 'react-router-dom';
import ErrorAlert from '../../../components/common/alerts/ErrorAlert';
import Loader from "../../../components/common/Loader"

const PasswordRecovery = () => {

    const [error, setError] = useState('')
    const [loaging, setLoading] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [step, setStep] = useState(1)

    const handleForgotPassword = async () => {
        setLoading(true)
        try {
            await Auth.forgotPassword(email)
            setStep(2)
        } catch (err) {
            setError(err.message)
            setEmail('')
            console.log("🚀 ~ file: PasswordRecovery.jsx:21 ~ handleForgotPassword ~ err:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleForgotPasswordSubmit = async () => {
        setLoading(true)
        try {
            await Auth.forgotPasswordSubmit(email, code, password)
            setStep(3)
        } catch (err) {
            console.log("🚀 ~ file: PasswordRecovery.jsx:37 ~ handleForgotPasswordSubmit ~ err:", err)
        } finally {
            setLoading(false)
        }
    }

    if (loaging) {
        return <Loader />
    }

    return (
        <div className="flex h-screen">
            <section className="lg:w-1/2 h-full mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            {step === 1 &&
                                <div>
                                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-3">
                                        ¿Tienes problemas para iniciar sesión?
                                    </h1>

                                    <div className="space-y-4 md:space-y-6">

                                        <p className="text-sm mb-3">Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.</p>
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
                                                Enviar
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

                                    <div className="space-y-4 md:space-y-6">

                                        {/* Email input */}
                                        <InputForm
                                            name="code"
                                            placeholder="Ingresa el código"
                                            type="text"
                                            title="¡Revisa tu correo! Te enviamos un código para restablecer tu contraseña. Por favor, ingrésalo en el siguiente campo."
                                            value={code}
                                            setValue={setCode}
                                        />

                                        <InputForm
                                            name="newPassword"
                                            placeholder="••••••••"
                                            type="password"
                                            title="Ingresa tu nueva contraseña."
                                            value={password}
                                            setValue={setPassword}
                                        />

                                        {/* Message error */}
                                        {error && <ErrorAlert error={error} />}

                                        <div>
                                            <button
                                                onClick={handleForgotPasswordSubmit}
                                                className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 rounded'>
                                                Enviar
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
                                <div>
                                    <h1>Contraseña restablecida</h1>
                                    <Link to="/login">Ir a Login</Link>
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