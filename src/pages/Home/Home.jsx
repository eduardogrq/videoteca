import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div class="flex flex-col min-h-screen">
            <Header />
            <main class="flex-grow container mx-auto my-8 px-4">
                <h2 class="text-2xl font-bold mb-4">¿Qué ofrecemos?</h2>
                <p class="text-lg mb-4">Ofrecemos un servicio excepcional para nuestros clientes, con una amplia variedad de productos y una atención al cliente inigualable.</p>
                <ul class="list-disc list-inside">
                    <li class="mb-2">Productos de alta calidad</li>
                    <li class="mb-2">Precios competitivos</li>
                    <li class="mb-2">Atención al cliente excepcional</li>
                </ul>
                <button class="bg-blue-500 text-white py-2 px-4 rounded mt-8">Contratar ahora</button>
            </main>
            <Footer />
        </div>
    )
}

export default Home;