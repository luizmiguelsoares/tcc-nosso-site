import './index.scss';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="pagina-inicial">
      <div className='cabecalho'>
        <img className='logo' src="./assets/images/sise´s.jpg" alt="Logo" />
        <h2 className='sobre'>
          <a className='clana' href="#sobre-nos">sobre nós</a>
        </h2>
        <h2 className='contato'>
          <a className='cont' href="#contato">contato</a>
        </h2>

        <Link className='link' to="./feedback"> <h2 className='feedback'>feedback</h2></Link>
      </div>

      <div className='slogan'>
        <h1>Empresa Desenvolvedora de Web’s Sites</h1>
        <h3>Experiência no Desenvolvimento de Web’s Sites para o Aprimoramento de seu Negócio</h3>
        <div className='seta'>
          <img className='arrow' src="./assets/images/seta-direita.png" alt="Seta" />
          <h4>Sites 100% responsivos Desenvolvimento feito a partir de suas necessidades</h4>
        </div>
        <div className='texto'>
          <h1 className='titulo'>INICIO</h1>
          <p>
            Nós entendemos que um site bem projetado é crucial para a visibilidade e o crescimento do seu negócio.<br />
            Em um mundo cada vez mais digital, a presença online é fundamental.<br />
            Por isso, cada projeto que realizamos é uma combinação perfeita de design inovador e tecnologia de ponta.<br />
            Nossos sites são desenvolvidos para serem completamente responsivos, garantindo uma experiência de navegação otimizada em dispositivos móveis e desktops.
          </p>
          <p>
            Nosso foco é construir experiências digitais que conectem você ao seu público-alvo.<br />
            Utilizamos as melhores práticas de SEO (Search Engine Optimization) para garantir que seu site seja facilmente encontrado por potenciais clientes.<br />
            Além disso, implementamos ferramentas analíticas que permitem que você acompanhe o desempenho do seu site e faça ajustes estratégicos conforme necessário.
          </p>
          <p>
            Acreditamos que a colaboração com nossos clientes é fundamental para alcançar os melhores resultados.<br />
            Por isso, estamos sempre abertos a feedbacks e sugestões, assegurando que o resultado final não apenas atenda, mas supere suas expectativas.
          </p>
          <h1 className='titulo' id="sobre-nos">SOBRE NÓS</h1>
          <p>
            Nossa missão é transformar ideias em realidade através do desenvolvimento de websites impactantes.<br />
            Com uma equipe de profissionais dedicados e apaixonados, buscamos constantemente inovações que tragam valor real ao seu negócio.<br />
            Cada membro da nossa equipe traz uma experiência única, garantindo que cada projeto seja tratado com a expertise necessária.
          </p>
          <p>
            Acreditamos que um site bem projetado não é apenas uma vitrine, mas uma ferramenta essencial para o crescimento e a prosperidade da sua empresa.<br />
            Por isso, oferecemos suporte contínuo após a entrega do projeto, garantindo que você tenha todas as ferramentas necessárias para manter e atualizar seu site conforme necessário.
          </p>
          <p>
            Estamos comprometidos em oferecer um serviço de alta qualidade, desde a concepção até a entrega final do projeto.<br />
            Nossa abordagem centrada no cliente garante que você sempre receba um atendimento excepcional, com comunicação clara e transparente durante todo o processo.
          </p>
          <p>
            Junte-se a nós e leve o seu negócio para o próximo nível!<br />
            Com nossa expertise e sua visão, podemos criar algo verdadeiramente extraordinário.
          </p>
        </div>

        <div className='projetos'>
          <h1 className='titulo'>projeto em destaque!!!</h1>
          <img className='setabaixo' src="./assets/images/seta-para-baixo.png" alt="" />


        </div>
        <Card className="card" sx={{ maxWidth: 400, margin: '20px auto' }}>
          <div className="card-image">
            <img
              src="assets/images/image.webp" // Caminho da imagem
              alt="Logo Venus"
              className="image"
            />
          </div>
          <div className="card-content">
            <h5 className="card-title">VENUS</h5>
            <p className="card-description">
              Venus foi o primeiro projeto criado pela sizes
            </p>
          </div>
        </Card>

      </div>


      <div className='texto3'>
        <div className='redes-sociais'>
          <div className='icones'>
            <div className='contato-section' id="contato">
              <h1>Contato</h1>
              <p>Entre em contato conosco através <br /> das redes sociais ou WhatsApp.</p>
              <img className='whatsap' src="./assets/images/whatsapp.png" alt="WhatsApp" />
            </div>
            <div className='parte-2'>
              <h3>Siga-nos nas redes sociais!</h3>
              <div className='insta'>
                <a href="https://www.facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                  <img className='ico' src="./assets/images/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/yluiz19" target="_blank" rel="noopener noreferrer">
                  <img className='ico' src="./assets/images/instagram.png" alt="Instagram" />
                </a>
              </div>
            </div>
            <div className='ultimo'>
              <img className='log' src="./assets/images/sise´s.jpg" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
