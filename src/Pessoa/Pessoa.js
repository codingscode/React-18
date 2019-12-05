
import React, {Component} from 'react';

import classes from './Pessoa.css'

class Pessoa extends Component {

   render() {
      console.log('[Pessoa.js] rendering...') 
      return (
         <div className={classes.Pessoa} >
            <p onClick={this.props.click}>Eu sou {this.props.nome}, Eu sou uma Pessoa e tenho {this.props.idade} anos !</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.nome}></input>
         </div>
      )   
   }
   
}

export default Pessoa;
