import React, { Component } from 'react'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Carousel from './components/Carousel/Carousel'
import CardList from './components/CardList/Cardlist'
import Showscreen from './components/Showscreen/Showscreen'
import SmallCarousel from './components/smallCarousel/smallCarousel'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css';
 

/*This is the array that contains the card info. Just a preview*/
let cards = [
  {
  id:1,  
  tit: 'Obras para gobierno',
  desc: 'Random description for a building that hasn\'t been constructed yet',
  img: 'Project1'
  },  {
  id:2,
  tit: 'Proyctos provados',
  desc: 'Descriptao for da bildingao dat jasenti\'ba bilut ieto',
  img: 'Project2'
  },  {
  id:3,
  tit: 'Proyectos públicos',
  desc: 'Descripcinio foe eto biluto on constricteinsce. It should be at least this alrge I guess',
  img: 'Project3'
  }
];
class App extends Component {
  /*Setting a new img in the Showscreen as it is clicked on the smallCarousel*/
  constructor(){
    super();
    this.state = {
      screenDesc:"FIRST DESCRIPTION"
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
          <Showscreen 
            intialDesc={this.state.screenDesc}
          />
          <div className="small__container">
            <SmallCarousel 
              changeDesc = {this.onChangeDesc.bind(this)}
            />
          </div>
          <Contact/>
        </main>
        <Footer/>
      </div>
    );
  }
}
export default App; 
