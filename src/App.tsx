import './App.css'
import HeaderComponent from "./components/header/header.tsx";
import MainScreen from "./screens/first.tsx";
import SecondScreen from "./screens/second.tsx";
import ThirdScreen from "./screens/third.tsx";
import FourthScreen from "./screens/forth.tsx";
import Fifth from "./screens/fifth.tsx";
import Sixth from "./screens/sixth.tsx";
import Seventh from "./screens/seventh.tsx";
import Eights from "./screens/eights.tsx";
import Footer from "./components/footer/footer.tsx";
import {css, Global} from "@emotion/react";


const globalStyles = css`
    html, body {
        overflow-x: hidden;
    }
`;

function App() {
  return (
    <>
        <Global styles={globalStyles} />
    <HeaderComponent></HeaderComponent>
        <MainScreen></MainScreen>
        <SecondScreen></SecondScreen>
        <ThirdScreen></ThirdScreen>
        <FourthScreen></FourthScreen>
        <Fifth></Fifth>
        <Sixth></Sixth>
        <Seventh></Seventh>
        <Eights></Eights>
    <Footer></Footer>
    </>
  )
}

export default App
