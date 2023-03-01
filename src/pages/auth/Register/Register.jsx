
import bgImage from './../../../assets/images/bg-login.png';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../../components/form/InputForm';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import ErrorAlert from '../../../components/common/alerts/ErrorAlert';

const Register = () => {

    let navigate = useNavigate()

    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState(3);

    const registerUser = async () => {
        try {
            await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    name: name,
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            })
            setStep(2)
        } catch (err) {
            console.log("🚀 ~ file: Register.jsx:28 ~ registerUser ~ err:", err)
            setError(err.message)
        }
    }

    const verifyUserAccount = async() => {
        try{
            await Auth.confirmSignUp(email, code)
            setStep(3)
        } catch (err) {
            console.log("🚀 ~ file: Register.jsx:43 ~ verifyUserAccount ~ err:", err)
            setError(err.message)
        }
    }

    useEffect(() => {
        if(step === 3){
            setTimeout(() => {
                navigate('/dashboard')
            }, 4000)
        }
    }, [step]);

    return (
        <div className="flex h-screen">
            <section className="lg:w-1/2 h-full mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {step === 1 &&
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
                                        {error && <ErrorAlert error={error} />}

                                        <div>
                                            <button
                                                // disabled={!isValidPassword}
                                                onClick={registerUser}
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
                            }
                            {step === 2 &&
                                <div className="space-y-10 lg:space-y-0">
                                    <div className="flex mb-12">
                                        <div className="w-full flex justify-center text-center">
                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Registro</h1>
                                        </div>

                                    </div>

                                    <div className="space-y-4">

                                        <p className="text-sm">Te enviamos un código para verificar tu correo electrónico. Por favor, ingrésalo en el siguiente campo.</p>

                                        <InputForm
                                            name="code"
                                            placeholder="Ingresa el código"
                                            type="text"
                                            title=""
                                            value={code}
                                            setValue={setCode}
                                        />

                                        {/* Message error */}
                                        {error && <ErrorAlert error={error} />}

                                        <div>
                                            <button
                                                // disabled={!isValidPassword}
                                                onClick={verifyUserAccount}
                                                className='bg-blue-500 w-full enabled:hover:bg-blue-700 text-white font-bold py-3 rounded disabled:opacity-50 disabled:hover:none'>
                                                Enviar
                                            </button>
                                        </div>

                                        <hr />

                                    </div>
                                </div>
                            }
                            {step === 3 &&
                                <div className="text-center py-5 animate__animated animate__fadeIn">
                                <span className="text-2xl font-extrabold text-gray-900">¡Cuenta creada!</span>
                                <div className="flex justify-center my-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-28 h-28 fill-green-500 animate__animated animate__flip">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-900">Tu cuenta se creo exitósamente</p>
                                <p className="text-xs text-gray-900">Serás redirigido al panel de administrador enseguida</p>
                                {/* <Link to="/login" className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-5 rounded'>Iniciar sesión</Link> */}
                            </div>
                            }
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