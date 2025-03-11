import { useEffect, useState } from "react";
import DiarioForm from "../components/DiarioForm";
import styles from './Home.module.css'


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
        
        
        const novaAnotacao = {
          id: Date.now(), 
          texto: nota,
          humor: humor
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
      <DiarioForm onAdd={handleAddAnotacao} />

      <div>
        <h2>Minhas Anotações:</h2>
        <ul>
          {anotacoes.map((anotacao) => (
            <li key={anotacao.id}>
              <strong>Humor:</strong> {anotacao.humor} <br />
              <strong>Texto:</strong> {anotacao.texto}
              <button className="delete" onClick={() => handleDeleteAnotacao(anotacao.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}

export default Home;