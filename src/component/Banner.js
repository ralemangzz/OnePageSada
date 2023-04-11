import { useState, useeff, useDebugValue, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = ()=>{

    const [loopNum, setLoopNum] =useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Desarrollo Web", "Diseño", "UI/UX"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return() => { clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length -1) : fulltext.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fulltext){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <span className="tagline">Sada Techno</span>
                        <h1>{`Servicio de `}<span className="wrap">{text}</span></h1>
                        <p>Dedicados de brindarle la mejor solución para su negocio.</p>
                        <button onClick={()=> console.log('conect')}>Contáctanos<ArrowRightCircle size={25} /></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}