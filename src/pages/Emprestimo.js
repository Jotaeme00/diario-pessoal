import styles from './Emprestimo.module.css'
import EmprestimoList from '../components/EmprestimoList'

function Emprestimo() { 
    return (    
        <div className={styles.home_container}>   
            <h1>Emprestimos</h1>
            <EmprestimoList />
        </div>
    )
}

export default Emprestimo