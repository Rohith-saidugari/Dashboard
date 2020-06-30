import React, { Component } from 'react';
import NavBarPage from './components/NavbarPage/NavbarPage'
import FooterPage from './components/FooterPage/FooterPage'
import Table from './components/Table/Table'
class App extends Component {
    state = {
        active:"Recruiters"
    }

    navigationChangeHandler= (event)=>{
        this.setState({active:event.target.innerHTML})
    }
  render() {
    return (
        <div className="App ">
            <NavBarPage clicked={this.navigationChangeHandler} active={this.state.active}/>
            <Table title ={this.state.active}/>
            <FooterPage/>
        </div>
    );
  }
}

export default App;
