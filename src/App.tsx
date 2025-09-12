import { useState } from "react";
import Modal from "./Modal";
import "./App.css";
import "./Mobile.css";
// import ProjectCard from "./ProjectCard";
// import ProjectsData from "./ProjectsData";
import CarouselProject from "./Carrousel";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openProject, setOpenProject] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenProject = () => {
    setOpenProject(true);
  };

  const handleCloseProject = () => {
    setOpenProject(false);
  };
  // const data = ProjectsData[0];

  return (
    <>
      <header>Igreja Batista de Marco II</header>
      <section className="header-box">
        <div className="hero-box">
          <h1 className="title">
            Sempre <br />
            Conectada
          </h1>
          <div>
            <button className="button" onClick={handleOpenModal}>
              Horários
            </button>
            <Modal isOpen={openModal} onClose={handleCloseModal} />
          </div>
        </div>
        <figure className="hero-logo">
          <img src="assets/logo-marcoII.png" alt="logo marco2" />
        </figure>
      </section>
      <article className="center">
        <p className="text">
          <span className="text1">Marco II</span> é uma Igreja que busca
          conectar pessoas a Cristo e umas às outras, seguindo o que está
          escrito em Romanos 12:5: <br />
          "assim também em Cristo nós, que somos muitos, formamos um corpo, e
          cada membro está ligado a todos os outros."
        </p>
      </article>
      <section className="box-insta">
        <h2 className="title2">
          Conecte-se <br />
          Mantenha Contato
        </h2>
        <p className="text2">
          Acompanhe tudo o que Deus tem feito em nossa igreja e faça parte dessa
          comunhão! <br />
          💙 Siga nosso Instagram ✨
        </p>
        <div className="container-img-insta">
          <figure className="img-insta">
            <a
              href="https://www.instagram.com/ib.marco2"
              target="_blank"
              rel="noreferer noopener"
            >
              <img src="assets/instacode.png" alt="QR CODE" />
            </a>
          </figure>
          <p>
            <a href="https://www.instagram.com/ib.marco2" target="_blank">
              @ib.marco2
            </a>
          </p>
        </div>
        <p className="text2">
          Queremos estar perto de você, orando e intercedendo pela sua vida. Se
          precisar de uma palavra, um conselho ou um pedido de oração, entre em
          contato! Estamos aqui para caminhar juntos em fé. 📖 <br />
          "Orem uns pelos outros para serem curados. A oração de um justo é
          poderosa e eficaz."
        </p>
      </section>
      <nav className="box-proj">
        <CarouselProject isOpen={openProject} onClose={handleCloseProject} />
        <h2 className="title2">Projetos</h2>
        <div className="container-project">
          <div className="box-img">
            <img
              className="proj-img"
              src="assets/entre-maes.png"
              alt="logo entre maes"
            />
            <img
              className="proj-img"
              src="assets/estudo-casais.png"
              alt="logo casais"
            />
            <img
              className="proj-img"
              src="assets/kravmaga.png"
              alt="logo KRAVMAGA"
            />
            <img
              className="proj-img"
              src="assets/homens.png"
              alt="logo homens"
            />
            <img
              className="proj-img"
              src="assets/mulheres.jpg"
              alt="logo Mulheres"
            />
            <img className="proj-img" src="assets/Pgm.png" alt="logo pgm" />
            <img
              className="proj-img"
              src="../public/assets/kids.png"
              alt="logo kids"
            />
          </div>
          <div className="box-tex">
            <p className="text2">
              Nossa igreja tem a missão de conectar vidas a Cristo de maneira
              transformadora. <br />
              Por isso, desenvolvemos projetos que atendem diferentes públicos e
              necessidades, proporcionando crescimento espiritual, comunhão e
              bem-estar.
              <br />
              Conheça nossos projetos:
            </p>
            <button className="button" onClick={handleOpenProject}>
              Saiba Mais
            </button>
          </div>
        </div>
      </nav>
      <div className="final">
        <section style={{ padding: "20px" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 40 }}
          >
            <img
              style={{ width: "5%" }}
              src="assets/logo-marcoII.png"
              alt="Logo Igreja Batista de Marco II"
            />
            <span className="subtitle"> Igreja Batista de Marco II</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 300 }}>
              <h2
                className="title2"
                style={{ color: "white", textAlign: "center" }}
              >
                Entre em contato conosco!
              </h2>
            </div>
            <div style={{ alignItems: "center" }}>
              <figure className="photo-pr">
                <img
                  src="assets/Pr.jpg"
                  alt="foto pastor Paulo"
                  height="400px"
                  width="300px"
                />
                <p className="subtitle" style={{ textAlign: "center" }}>
                  Pastor Paulo Malhaes
                </p>
              </figure>
            </div>
          </div>
        </section>
      </div>
      <footer
        style={{ backgroundColor: "#0f172a", padding: 8, textAlign: "center" }}
      >
        <div>
          <p className="subtitle">
            Endereço: Rua Manoel Ribeiro Marinho, 127 / Marco II
          </p>
          <p className="subtitle">Email: ibatistamarco2@gmail.com</p>
        </div>
      </footer>
    </>
  );
}

export default App;
