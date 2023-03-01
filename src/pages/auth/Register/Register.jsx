
import bgImage from './../../../assets/images/bg-login.png';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../../components/form/InputForm';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import ErrorAlert from '../../../components/common/alerts/ErrorAlert';
import Loader from '../../../components/common/Loader';
import { CheckIcon } from '../../../assets/icons';
import { Tooltip } from 'react-tooltip';
import {
    containsNumbers,
    containsCapitalLetters,
    containsLowercaseLetters,
    containsSpecialChars
} from '../../../utils';

const Register = () => {

    let navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    // password validations
    const [hasNumbers, setHasNumbers] = useState(false);
    const [hasCapitalLetters, setHasCapitalLetters] = useState(false);
    const [hasLowercaseLetters, setHasLowercaseLetters] = useState(false);
    const [hasSpecialCharacters, setHasSpecialCharacters] = useState(false);
    const [hasEightChars, setHasEightChars] = useState(false);

    // step validations
    const [stepOneValidation, setStepOneValidation] = useState(false);
    const [stepTwoValidation, setStepTwoValidation] = useState(false);

    // Function to register user account adding autoSignIn method to login after register and verify account
    const registerUser = async () => {
        setLoading(true);
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
        } finally {
            setLoading(false)
        }
    }


    const verifyUserAccount = async () => {
        setLoading(true)
        try {
            await Auth.confirmSignUp(email, code)
            setStep(3)
        } catch (err) {
            console.log("🚀 ~ file: Register.jsx:43 ~ verifyUserAccount ~ err:", err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // Function to hide or animate "password not match" icon
    const getConfirmPasswordClass = (password, confirmPassword) => {
        if (confirmPassword.length < 7) {
            return 'hidden'
        }
        if (password === confirmPassword) {
            return 'hidden'
        }
        return 'animate__animated animate__fadeIn'
    }

    // Function to check password validations
    const validatePassword = (password, confirmPassword, code) => {
        const validation = {
            hasNumbers: containsNumbers(password),
            hasCapitalLetters: containsCapitalLetters(password),
            hasLowercaseLetters: containsLowercaseLetters(password),
            hasSpecialCharacters: containsSpecialChars(password),
            hasEightCharacters: password.length >= 8,
        }

        const isValid =
            validation.hasNumbers &&
            validation.hasCapitalLetters &&
            validation.hasLowercaseLetters &&
            validation.hasSpecialCharacters &&
            validation.hasEightCharacters &&
            password === confirmPassword

        return { validation, isValid }
    }

    useEffect(() => {
        const { validation, isValid } = validatePassword(password, confirmPassword, code)

        setHasNumbers(validation.hasNumbers)
        setHasCapitalLetters(validation.hasCapitalLetters)
        setHasLowercaseLetters(validation.hasLowercaseLetters)
        setHasSpecialCharacters(validation.hasSpecialCharacters)
        setHasEightChars(validation.hasEightCharacters)

        if (isValid && email.length >= 3 && name.length >= 3) {
            setStepOneValidation(true)
        } else {
            setStepOneValidation(false)
        }

        if (code.length >= 3) {
            setStepTwoValidation(true)
        } else {
            setStepTwoValidation(false)
        }

    }, [password, confirmPassword, code, name, email])

    // Function to fill progress bar and navigate to login route
    useEffect(() => {
        if (step === 3) {
            const intervalId = setInterval(() => {
                setProgress(prevProgress => prevProgress + 1);
            }, 40);
            if (progress === 100) {
                navigate('/dashboard');
            }
            return () => clearInterval(intervalId);
        }
    }, [step, progress, navigate]);

    // Conditional to show loading spinner if promises are not solved yet
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

                                        {/* check icons section */}
                                        <div className={`pl-4 ${!password ? "hidden" : "animate__animated animate__fadeIn"}`}>
                                            <ul className="text-xs">
                                                <li className="flex items-center">
                                                    <span className="mr-1">
                                                        <CheckIcon isChecked={hasEightChars} />
                                                    </span>Longitud mínima de 8 caracteres
                                                </li>

                                                <li className="flex items-center">
                                                    <span className="mr-1">
                                                        <CheckIcon isChecked={hasLowercaseLetters} />
                                                    </span>Al menos una minúscula (a-z)
                                                </li>

                                                <li className="flex items-center">
                                                    <span className="mr-1">
                                                        <CheckIcon isChecked={hasCapitalLetters} />
                                                    </span>Al menos una mayúscula (A-Z)
                                                </li>

                                                <li className="flex items-center">
                                                    <span className="mr-1">
                                                        <CheckIcon isChecked={hasNumbers} />
                                                    </span>Al menos un número (0-9)
                                                </li>

                                                <li className="flex items-center">
                                                    <span className="mr-1">
                                                        <CheckIcon isChecked={hasSpecialCharacters} />
                                                    </span>
                                                    <span
                                                        className="underline cursor-pointer"
                                                        data-tooltip-id="my-tooltip"
                                                        data-tooltip-place="top"
                                                        data-tooltip-content=" ^ $ * . [ ] { } ( ) ? &quot; - ! @ # % &amp; / \ , &gt; &lt; ' : ; | _ ~ ` + = "
                                                    >
                                                        Al menos un caracter especial
                                                    </span>
                                                    <Tooltip id="my-tooltip" />
                                                </li>
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

                                        <div className={`pl-4 ${getConfirmPasswordClass(password, confirmPassword)}`}>
                                            <ul className="text-xs">
                                                <li className="flex items-center">
                                                    <span className="mr-1">
                                                        <CheckIcon isChecked={false} />
                                                    </span>Las contraseñas no coinciden
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Message error */}
                                        {error && <ErrorAlert error={error} />}

                                        <div>
                                            <button
                                                disabled={!stepOneValidation}
                                                onClick={registerUser}
                                                className='bg-blue-500 w-full enabled:hover:bg-blue-700 text-white font-bold py-3 rounded disabled:opacity-50 disabled:hover:none'>
                                                Crear cuenta
                                            </button>
                                        </div>

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
                                                disabled={!stepTwoValidation}
                                                onClick={verifyUserAccount}
                                                className='bg-blue-500 w-full enabled:hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded '>
                                                Enviar
                                            </button>
                                        </div>

                                        <hr />

                                    </div>
                                </div>
                            }
                            {step === 3 &&
                                <div className="text-center py-5 animate__animated animate__fadeIn">
                                    <span className="text-2xl font-extrabold text-gray-900">¡Registro Exitoso!</span>
                                    <div className="flex justify-center my-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-28 h-28 fill-blue-500 animate__animated animate__flip">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm mb-7 text-gray-900">Tu cuenta se ha creado exitósamente</p>

                                    {/* Progress bar */}
                                    <div className="h-3 w-full bg-gray-300 rounded-md overflow-hidden">
                                        <div
                                            className="h-full bg-blue-500"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-900">En breve serás redirigido al panel de administrador</p>
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