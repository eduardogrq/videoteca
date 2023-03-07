import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Auth } from "aws-amplify"
import {DataContext} from "../../context/DataContext"

const Home = () => {

    const navigate = useNavigate();

    const {setUserData} = useContext(DataContext)

    // Provitional function to singOut, only for proobs
    const signOut = async () => {
        try {
          await Auth.signOut();
          setUserData(null);
        } catch (e) {
          console.log(e);
        } finally {
          navigate('/login');
        }
      };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto my-8 px-4">
                <h2 className="text-2xl font-bold mb-4">¿Qué ofrecemos?</h2>
                <p className="text-lg mb-4">Ofrecemos un servicio excepcional para nuestros clientes, con una amplia variedad de productos y una atención al cliente inigualable.</p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Productos de alta calidad</li>
                    <li className="mb-2">Precios competitivos</li>
                    <li className="mb-2">Atención al cliente excepcional</li>
                </ul>
                <button className="btn" onClick={signOut}>Cerrar sesión</button>
            </main>
            <Footer />
        </div>
    )
}

export default Home;