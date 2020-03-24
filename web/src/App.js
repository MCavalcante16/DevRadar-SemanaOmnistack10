import React, { useEffect, useState } from 'react';
import api from './services/api';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';
import DevList from './components/DevList';
import DevForm from './components/DevForm';



//TRES COISAS COMPOEM O REACT
//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação (Classe ou bloco)
//Estado: Informações variáveis mantidas pelo componente (Vide OBS) (Valores variáveis)
//Propriedade: Atributos que um componente PAI passa para o componente FILHO (Atributos obrigatórios)

//OBS: No react, se busca sempre criar um dado a partir do anterior, ao inves de atualizar

function App() {

  //===========================================================================================================================
  //LEARNING--LEARNING--LEARNING
  ////A função useState (Invocada nos parenteses do react) é uma função do react para usar o valor que sera dinamizado na aplicação
  ////useState retorna o valor que adicinei e em seguida a funcao que vai usar o primeiro valor pra gerar um novo
  //const [counter, setCounter] = useState(0);
  //
  //Quando uma função precisa existir como parte do componente, ela é unida ao arquivo do componente
  //function IncrementCounter() {
  //  setCounter(counter + 1);
  //}

  //return (
  //  <>
  //    <h1>Contador: {counter}</h1>
  //    <button onClick={IncrementCounter}>Incrementar</button>
  //  </>
  //);
  //==============================================================================================================

  //As "Variaveis" da aplicação, no react, devem ser trabalhadas assim \/
  const [devs, setDevs] = useState([]);




  //Cadastrar dev
  async function handleAddDev(data) {
    //Adicionando o novo dev
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  //Carrega devs na variavel devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, [])

  //HTML
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevList key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );


}

export default App;
