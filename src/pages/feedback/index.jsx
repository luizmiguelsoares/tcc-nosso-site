import './index.scss';
import { Link } from 'react-router-dom';

function feedback() {
    return (
        <div className='pagina-feedback'>
            <div className='cabecario'>
                <div className='seta'>
                <Link to="/">   <img className='arrow' src="/assets/images/seta-esquerda.png" alt="" /></Link>
                </div>

                <h1>feedback</h1>
                <img className='logo' src="./assets/images/sise´s.jpg" alt="Logo" />

            </div>
        </div>
    )

}
export default feedback;