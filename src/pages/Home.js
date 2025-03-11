import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DiarioForm from "../components/DiarioForm";
import styles from './Home.module.css';

function Home() {   

    const [anotacoes, setAnotacoes] = useState([]);

    useEffect(() => {   
        const savedAnotacoes = localStorage.getItem("anotacoes");
        if (savedAnotacoes) {   
            setAnotacoes(JSON.parse(savedAnotacoes));
        }
    }, []);

    const handleAddAnotacao = (nota, humor) => {
        if(!nota || !humor){    
            alert("Por favor, insira um texto e selecione seu humor do dia!")
            return;
        }
        
        const data = new Date().toLocaleDateString(); 

        const novaAnotacao = {
          id: Date.now(), 
          texto: nota,
          humor: humor,
          data: data, 
        };

        setAnotacoes((prevAnotacoes) => [...prevAnotacoes, novaAnotacao]);

        const updateAnotacoes = [...anotacoes, novaAnotacao];

        setAnotacoes(updateAnotacoes);
        localStorage.setItem("anotacoes", JSON.stringify(updateAnotacoes));  
    };

    const handleDeleteAnotacao = (id) => {
        const updatedAnotacoes = anotacoes.filter(anotacao => anotacao.id !== id);
        setAnotacoes(updatedAnotacoes);
        localStorage.setItem("anotacoes", JSON.stringify(updatedAnotacoes));
    };

    return (    
        <div className={styles.home_container}>
            <h1>Bem-vindo ao seu Diário Pessoal Juan</h1>
            
            <DiarioForm onAdd={handleAddAnotacao} />

            <div>
                <h2>Minhas Anotações:</h2>
                <ul>
                    {anotacoes.map((anotacao) => (
                        <li key={anotacao.id} className={styles.anotacao_item}>
                        <div className={styles.anotacao_humor}>
                          <strong>Humor:</strong> {anotacao.humor}
                        </div>
                        <div className={styles.anotacao_texto}>
                          <strong>Texto:</strong> {anotacao.texto}
                        </div>
                        <div className={styles.anotacao_data}>
                          <strong>Data:</strong> {anotacao.data}
                        </div>
                        <button className="delete" onClick={() => handleDeleteAnotacao(anotacao.id)}>Excluir</button>
                      </li>
                    ))}
                </ul>
            </div>

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/emprestimos">Ir para Empréstimos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Home;
