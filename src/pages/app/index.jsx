import './index.scss';

function App() {
  return (
    <div className="pagina-inicial">
      <div className='cabecalho'>
        <img className='logo' src="./assets/images/sise´s.jpg" alt="" />
        <h3 className='sobre'>sobre nós</h3>
        <h3 className='contato'>contato</h3>
        <h3 className=' feedback'>feedback</h3>
      </div>
      <div className='slogan'>
        <h1>
          Empresa Desenvolvedora de Web’s Sites
        </h1>
        <h3>
          Expêriencia no Desenvolvimento de Web’s Sites para o Aprimoramento de seu Negócio
        </h3>
        <div className='seta'>
          <img src="./assets/images/seta-direita.png" alt="" />


          <h4>
            Sites 100% responsívos Desenvolvimento feito apartir de suas necessidades
          </h4>
        </div>
        <div className=' texto'>
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
          <h1 className='titulo'>SOBRE NÓS</h1>
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
          <h1 className='titulo'>projetos</h1>

        </div>
      </div>
      <div className='texto3 '>
        <h1>contato</h1>

        <img className='whatsap' src="./assets/images/whatsapp.png" alt="" />
        <div className='redes-sociais'>
          <h3>Siga-nos nas redes sociais!</h3>
          <div className='icones'>
            <a href="https://www.facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
              <img className='ico' src="./assets/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
              <img className='ico' src="./assets/images/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
