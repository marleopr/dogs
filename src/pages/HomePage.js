import EasterEgg from "../components/EasterEgg"
import styled from "styled-components"
import DogAndCat from '../assets/DogAndCat.png'
import RadioButtonPets from "../components/RadioButtonPets"

const HomePage = () => {

    return (
        <Main>
            <RadioButtonPets />
            <EasterEgg />
            <div style={{ marginTop: '50px' }}>
            </div>
        </Main>
    )
}
export default HomePage

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    margin-top: 20px;
    box-sizing: border-box;
    text-align: center;
    background-image: url(${DogAndCat});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(1,21,34,1) 100%);
    background-size: 550px;
`