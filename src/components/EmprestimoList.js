import { useState, useEffect } from "react";
import styles from './EmprestimoList.module.css'

function EmprestimoList() { 
    const [pessoasEmprestadas, setPessoasEmprestadas] = useState([]);
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    
    useEffect(() => {
        const pessoasSalvas = JSON.parse(localStorage.getItem("pessoasEmprestadas"));
        if (pessoasSalvas) {
            setPessoasEmprestadas(pessoasSalvas);
        }
    }, []); 

    
    const salvarNoLocalStorage = (dados) => {
        localStorage.setItem("pessoasEmprestadas", JSON.stringify(dados));
    };

    const handleSubmit = (e) => {    
        e.preventDefault();
        if (nome && valor) {    
            const novaPessoa = {    
                nome: nome,
                valor: parseFloat(valor)
            };

            const novasPessoas = [...pessoasEmprestadas, novaPessoa];

            setPessoasEmprestadas(novasPessoas);
            salvarNoLocalStorage(novasPessoas);

            setNome('');
            setValor('');
        }
    };

    const handleDelete = (index) => {
        const novasPessoas = pessoasEmprestadas.filter((_, i) => i !== index); 
        setPessoasEmprestadas(novasPessoas);
        salvarNoLocalStorage(novasPessoas);
    };

    return (    
        <div className={styles.emprestimo_form}>   
            <h3>Empréstimos realizados:</h3>

            <form onSubmit={handleSubmit}>  
                <label> 
                    Nome da pessoa:
                    <input  
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome"
                        required
                    />
                </label>

                <label> 
                    Valor emprestado:
                    <input
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder="Digite o valor"
                        required
                    />
                </label>

                <button type="submit">Adicionar Emprestimo</button>
            </form>

            <ul>    
                {pessoasEmprestadas.map((pessoa, index) => (    
                    <li key={index}>    
                        <strong>{pessoa.nome}</strong> emprestou R${pessoa.valor.toFixed(2)}
                        <button onClick={() => handleDelete(index)}>Pago</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EmprestimoList;

