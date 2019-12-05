import React, {useEffect} from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //Http request...
      setTimeout(() => {
        alert('Salvo dado na nuvem!');
      }, 1000);
      return() => {
        console.log('[Cockpit.js] cleanup trabalha no useEffect');
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2º useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup trabalha no 2º useEffect')
      };
    });

    const classesAssinaladas = [];
    let botaoClasse = '';
    if (props.mostrarPessoas) {
        botaoClasse = classes.vermelho;
    }
    
    if (props.pessoas.length <= 2) {
      classesAssinaladas.push(classes.vermelho);  
    }
    if (props.pessoas.length <= 1) {
      classesAssinaladas.push(classes.negrito);  
    }
   
    return (
     <div className={classes.Cockpit}>  
        <h1>{props.title}</h1>
        <p className={classesAssinaladas.join(' ')}>Isto está funcionando</p>
        <button 
        className={botaoClasse}
        onClick={props.clicked}>Alternancia de Pessoas
        </button>
     </div>
   );
};


export default cockpit;