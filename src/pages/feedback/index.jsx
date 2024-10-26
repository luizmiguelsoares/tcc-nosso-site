import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

function Feedback() {
    const [feedback, setFeedback] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setFeedback(''); 
        }
    };

    const handleSubmit = () => {
       
        console.log('Feedback enviado:', feedback); 
        setFeedback(''); 
    };

    return (
        <div className='pagina-feedback'>
            <div className='cabecario'>
                <div className='seta'>
                    <Link to="/">   
                        <img className='arrow' src="/assets/images/seta-esquerda.png" alt="" />
                    </Link>
                </div>
                <h1>Feedback</h1>
                <img className='logo' src="./assets/images/sise´s.jpg" alt="Logo" />
            </div>
            <div className='formulario-feedback'>
                <div className='but'>
                    <textarea 
                        className='input' 
                        placeholder="Deixe feedback aqui..." 
                        required 
                        rows="4" 
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)} 
                        onKeyDown={handleKeyDown}
                    />
                    <button type="button" onClick={handleSubmit}>Enviar</button> 
                </div>
            </div>
        </div>
    );
}

export default Feedback;
