import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Container, Navbar, NavLink } from 'react-bootstrap';
import Home from './component/home/Home';
import About from './component/About/About';
import Service from './component/service/Service';
import Notfound from './component/notfound/Notfound';
import Footer from './component/footer/Footer';
import Teacher from './component/Teacher/Teacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container>
  <Navbar fixed="top" expand="lg" variant="light" bg="primary">
    <Container>
      <Navbar.Brand className="tab display-3" href="/"> <h2>Learner School</h2> </Navbar.Brand>
      <Link className= "nav" to="/home" >Home</Link>
        <Link className= "nav" to = "/service" >Service</Link>
        <Link className= "nav" to ="/teacher"> Instractor </Link>
        <Link className= "nav" to = "/about" >About</Link>

    </Container>
  </Navbar>
</Container> <br /> <br />
      
          <Switch>
          <Route path = "/home">
          <Home></Home>
         </Route>

         <Route path = "/about">
            <About></About>
         </Route>

         <Route path = "/teacher">
           <Teacher></Teacher>
         </Route>

         <Route path = "/service">
           <Service></Service>

         </Route>

         <Route exact path ="/">
           <Home></Home>

         </Route>

         <Route exact = "*">
           <Notfound></Notfound>
         </Route>
          </Switch>
      
      </BrowserRouter>
      

      

      <Footer></Footer>
    </div>
  );
}

export default App;
