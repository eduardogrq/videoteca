
import { useState } from 'react';
import InputForm from '../../../components/form/InputForm';
import bgImage from './../../../assets/images/bg-login.png';

const PasswordRecovery = () => {

    const [email, setEmail] = useState('')

    return (
        <div className="flex h-screen">
            <section className="lg:w-1/2 h-full mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                ¿Tienes problemas para iniciar sesión?
                            </h1>

                            <form className="space-y-4 md:space-y-6">

                                {/* Email input */}
                                <InputForm
                                    name="email"
                                    placeholder="john@email.com"
                                    type="email"
                                    title="Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta."
                                    value={email}
                                    setValue={setEmail}
                                />

                                {/* Message error */}
                                {/* {error && <ErrorAlert error={error} />} */}

                                <div>
                                    <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 rounded'>Enviar</button>
                                </div>
                                <hr />
                                <p className="text-sm text-center font-light text-gray-500">
                                    ¿Aún no tienes cuenta? <a href="#" className="font-medium text-blue-500 hover:underline">Regístrate aquí</a>
                                </p>
                            </form>
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