import Content from "./Content"
import Carte from "./Carte"
import Marche from "../Overview/Marché"

function Home() {

  return (
    <>
      <Content/>
      <div className=" bg-white ">
        <h1 className="text-center text-2xl lg:text-5xl uppercase font-bold py-5 lg:py-20"> Résumé des marchés </h1>
        < Marche/>
      </div>
      <Carte/>
    </>
  )
}

export default Home
