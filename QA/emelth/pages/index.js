import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Galerialoca from "@/components/galerialoca";
import Carrusel from "@/components/carrusel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-16 py-14 ${inter.className} h-full bg-slate-100 text-slate-800`}
      >
        <div className="">
          {/* Esto es para web */}
          <div className="  justify-between hidden lg:flex mb-24">
            <div className="w-2/4 space-y-5  flex flex-col">
              <p className="text-5xl mb-7">
                Texto tipo slogan sobre la transformación de nuestro proyecto
              </p>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <button
                className="bg-green-400 p-2 px-4 items-center rounded-2xl w-32 mx-auto"
                id="div-1_input"
              >
                Registrarse
              </button>
            </div>
            {/* <div className="min-h-96 min-w-72 h-1/5 w-2/4 bg-slate-600 rounded-lg"></div> */}
            <div className="min-h-96 min-w-72  w-2/4 ">
              <img
                className="h-full w-full object-cover rounded-lg"
                src="https://cdn.bmeditores.mx/2019/12/WQHZA3YTYZE7TLW734FJ5AGPDI-696x375.jpg"
              ></img>
            </div>
          </div>

          {/* Esto es para movil */}
          <div className="  justify-between flex flex-col lg:hidden">
            <div className="subcontainer_div-1 space-y-6 mb-6">
              <p className="text-4xl">
                Texto tipo slogan sobre la transformación de nuestro proyecto
              </p>
              <p className="div-1_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <button
                className="bg-green-400 p-2 px-4 items-center rounded-2xl w-32 mx-auto block"
                id="div-1_input"
              >
                Registrarse
              </button>
            </div>
            {/* <div className="min-h-96 min-w-72 h-1/5 w-2/4 bg-slate-600 rounded-lg"></div> */}
            <div className="h-96 ">
              <img
                className="h-full w-full object-cover rounded-lg"
                src="https://cdn.bmeditores.mx/2019/12/WQHZA3YTYZE7TLW734FJ5AGPDI-696x375.jpg"
              ></img>
            </div>
          </div>

          {/* Esto es para web */}
          <div className="justify-between hidden lg:flex mb-24 -mx-16">
            <div className="min-h-96 min-w-72  w-2/4 ">
              <img
                className="h-full w-full object-cover rounded-l-lg"
                src="https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2023-08%2Fcheems-memes-perro.jpg%3Fitok%3DVKUSRRie&w=1920&q=80"
              ></img>
            </div>
            <div className="w-2/4 space-y-5  flex flex-col p-12 bg-slate-400 rounded-r-lg justify-center">
              <p className="text-3xl font-semibold	">¿Qué hacemos?</p>
              <div className="bg-slate-800 h-[3px] w-32"></div>
              <p className="text-balance text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                scelerisque pellentesque urna vel feugiat. Cras euismod
                hendrerit ligula, ut commodo massa volutpat eu. Donec at viverra
                nibh. Aenean luctus, enim eget eleifend blandit, nulla lectus
                sollicitudin arcu, finibus tempus lectus diam vel felis. Aliquam
                a placerat diam.{" "}
              </p>
            </div>
          </div>

          <div className="text-xl items-center flex flex-col space-y-14">
            <p className="text-4xl font-bold">¿Cómo funciona EMELTH?</p>
            <p className="w-1/2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              scelerisque pellentesque urna vel feugiat. Cras euismod hendrerit
              ligula, ut commodo massa volutpat eu. Donec at viverra nibh.
            </p>

            <Galerialoca></Galerialoca>
            {/* <div className="subcontainer_icon">
              <section className="benefit">
                <i className="fa-regular fa-heart"></i>
                <p className="div-1_text div-1_text-2 benefit-text">
                  Beneficio
                </p>
              </section>
              <section className="benefit">
                <i className="fa-solid fa-clock-rotate-left"></i>
                <p className="div-1_text div-1_text-2 benefit-text">
                  Beneficio
                </p>
              </section>
              <section className="benefit">
                <i className="fa-solid fa-truck-medical"></i>
                <p className="div-1_text div-1_text-2 benefit-text">
                  Beneficio
                </p>
              </section>
            </div>
            <div className="subcontainer_icon-2">
              <section className="characteristic">
                <i className="fa-regular fa-circle"></i>
                <p className="div-1_text div-1_text-2 characteristic-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </section>
              <section className="characteristic">
                <i className="fa-regular fa-circle"></i>
                <p className="div-1_text div-1_text-2 characteristic-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </section>
              <section className="characteristic">
                <i className="fa-regular fa-circle"></i>
                <p className="div-1_text div-1_text-2 characteristic-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </section>
            </div> */}
            <div className="subcontainer_incentive">
              <p className="div-1_text incentive_text">¡Comienza ahora!</p>
              <p className="div-1_heading div-1_heading-2 div-1_heading-3">
                Texto tipo slogan sobre la transformación de nuestro proyecto
              </p>
              <button id="div-1_input">Registrarse</button>
            </div>
          </div>
        </div>
        <Carrusel></Carrusel>
      </main>
    </Layout>
  );
}
