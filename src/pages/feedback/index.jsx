import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import axios from 'axios';
import Swal from 'sweetalert2';

function Feedback() {
    const [feedback, setFeedback] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        const url = 'http://localhost:5010/feedback';
        try {
            await axios.post(url, { feedback }); // Envie o feedback
            console.log('Feedback enviado:', feedback);
            
            // Mostrar a mensagem de sucesso após o envio do feedback
            Swal.fire("Seu feedback foi enviado com sucesso!", "", "success");

            setFeedback(''); // Limpar o campo de feedback
        } catch (error) {
            console.error("Erro ao enviar feedback:", error);
            // Mostrar a mensagem de erro
            Swal.fire("Erro ao enviar feedback!", "Tente novamente.", "error");
        }
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
