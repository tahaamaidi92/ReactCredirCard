import React, { Component } from 'react';
import '../App.css';
import puce from './images/pus.png';
import visa from './images/visa.png';
class Card extends Component {
    constructor(props){
        super(props)
        this.state={
        number:'',
        name:'Your Name',
        date:'',
        
        }
    }
changeNumber=(e)=>{
  if(!isNaN(e.target.value) && (e.target.value.length<=16) ){
      this.setState({
          number:e.target.value,
          
      })
      
  }else{
      alert('Please write a number')
      e.target.value=this.state.number;
  }
    }
    changeName=(e)=>{
if(isNaN(e.target.value) && (e.target.value.length<=20)){
    this.setState({
        name:e.target.value.toUpperCase()
    })
    
}else{
    alert('Please write a caracter')
    e.target.value=this.state.name;
}
    }
    changeDate=(e)=>{
if(this.state.date.length<=5){
    if ((e.target.value.slice(0, 2)<=12) && (e.target.value.slice(3, 5) <=31)) {
        this.setState({ date: e.target.value });
    }
    else {
        this.setState({ date: "12/31" })
    }
   
}

}
    
    render() { 
        return ( 
            <div className="App">
                <section className="section">
                    <div className="div1">
                    <p class="title"> CREDIT CARD</p>
        <div className="div1-1">
         <img src={puce} className="logo" alt="logo"/>
         <p className="craditNumber">{this.state.number.padEnd(16, '*').split('').map((x, i) => { return i===4 || i===8  || i===12 ? " " + x : x }).join('')}</p>
        </div>
        <div className="div2-1">
        <h2 className="h-div2-1"> 5422</h2>
        <p className="valid">valid <br/> thru</p>
        <p className='month'>month/year <br/><span className="span">{this.state.date.padEnd(4, '-').split('').map((x, i) => { return i === 2 ? "/" + x : x }).join('')}</span></p>
        </div>
        <div className="div3-1">
         <h2 className="h-div3-1">{this.state.name}</h2>
         <img src={visa} className="visa" alt="visa"/>
        </div>

                    </div>
                    <div className="div4">
                     <div className="div4-1">
                     <label>Number:
                     <input type="text" onChange={this.changeNumber} placeholder="Ecrire votre nombre ici" /> 
                     </label>
                     </div>
                     <div className="div4-2">
                     <label>Name:
                     <input type="text" onChange={this.changeName} placeholder="Ecrire votre nom ici"/>  
                     </label>
                     </div> 
                     <div className="div4-3">
                    <label>validThru:
                     <input type="text" onChange={this.changeDate} placeholder="Ecrire votre date ici"/>
                     </label>
                     </div> 
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Card;