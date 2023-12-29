import { Wrapper, Image } from "./HomeStyle";
import landscape from "../../../assets/landscape.jpg"
import landscape_original from "../../../assets/landscape_original.jpg"
import test4 from "../../../assets/test4.jpg"

const Home = () => {
    return (
        <Wrapper>
                <Image id="home" src={test4} />
        </Wrapper>
    )
}

export default Home