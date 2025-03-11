import { useState } from "react";
import styles from './DiarioForm.module.css'

function DiarioForm({ onAdd }) {
  const [nota, setNota] = useState("");
  const [humor, setHumor] = useState("Neutro");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nota) {
      const data = new Date().toLocaleDateString();
      onAdd(nota, humor, data);
      setNota("");
      setHumor("");
    }
  };

  return (
    <form className={styles.diario_form} onSubmit={handleSubmit}>
      <label>
        Anotação:
        <textarea
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="Escreva aqui..."
          required
        />
      </label>
      <label>
        Humor do dia:
        <select value={humor} onChange={(e) => setHumor(e.target.value)}>
          <option value="Bom">Selecione</option>
          <option value="Triste">Triste</option>
          <option value="Neutro">Neutro</option>
          <option value="Feliz">Feliz</option>
        </select>
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default DiarioForm;
