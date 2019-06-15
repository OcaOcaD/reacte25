import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Carousel from './components/Carousel/Carousel'
import CardList from './components/CardList/Cardlist';
import Showscreen from './components/Showscreen/Showscreen';
import './App.css';
/*This is the array that contains the card info. Just a preview*/
let cards = [
  {
  id:1,  
  tit: 'Some title for the lols',
  desc: 'Random description for a building that hasn\'t been constructed yet',
  img: 'Project1'
  },  {
  id:2,
  tit: 'Secando taitalus',
  desc: 'Descriptao for da bildingao dat jasenti\'ba bilut ieto',
  img: 'Project1'
  },  {
  id:3,
  tit: 'Nose jaja, algo',
  desc: 'Sikesi ahre. sí jalo jaja. Aila vato loco',
  img: 'Project1'
  }
];
class App extends Component {
  /*Setting a new img in the Showscreen as it is clicked on the smallCarousel*/
  constructor(){
    super();
    this.state = {
      screenDesc:"DONEM IPSUM"
    }
  }
  onChangeDesc ( nuDesc ) {
    this.setState({
      screenDesc: nuDesc
    });
  }
  /** */
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backdropClickHandler = () => {
    this.setState( {sideDrawerOpen: false} );
  };
  render(){
    var backdrop;
    if ( this.state.sideDrawerOpen ){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main className="main__container">
          <div className="carousel__container">
            <Carousel />
          </div>
          <section id="proyectos__1">
              
          </section>
          <CardList cards={cards}/>
          <br/><br/><br/><br/><br/><br/>
          <Showscreen 
            intialDesc={this.state.screenDesc}
            changeDesc = {onChangeDesc.bind(this)}
          />
          <h1>This is the page content</h1>
        </main>
      </div>
    );
  }
}
export default App; 
