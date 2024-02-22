import LogoRojo from '../assets/prefooter.png';

const LogoMcRojo = ({logoGrande}) => {
    let tamano = logoGrande ? 100 : 60;
    return (
        <img src={LogoRojo} alt="Logo Rojo MC" width={tamano} />
    )
}

export default LogoMcRojo;