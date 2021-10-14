
import './App.css';
import counter from "./components/counter"
import SamplePage from "./components/SamplePage"
// import LoginForm from "./components/LoginForm"
import assets from "./assets/login-form.css"

// import User from "./components/list"

// // import FormName from "./components/LoginForm/Form"

// import Main from "./components/lifeCycleMethods/ClassComponent"

import UsersList from "./components/axios/User"


// import AxiosTable from "./components/crudOperation"

// import BasicTextFields from "./components/RegistrationPage"

import Header from "./components/Header"

import { BrowserRouter, Switch, Route} from "react-router-dom";

import LoginForm from './components/LoginForm/Form';

import RegistrationPage from "./components/RegistrationPage"
import Counter from './components/counter';

import Task1 from "./components/crudOperationTask1/Hooks"

import Task2 from "./components/crudOperationTask2/Hooks"

import Task3 from "./components/crudOperation"

import Home from "./components/Home"

import PostDetails from './components/crudOperation/PostDetails';

import ReduxCounter from "./components/reduxCounter"

import SimpleForm from './components/SimpleForm';

import ReduxForm from './components/ReduxForm';

function App() {
  return (
    // <BrowserRouter>
      
    // <Header/>
    // <Switch>
    //   <Route exact path="/" component={Home} />
    // <Route  path="/RegistrationPage" component={RegistrationPage} />
    //   <Route  path="/Login-Form" component={LoginForm} />
    //  <Route path="/Counter" component={Counter} />
    //  <Route path="/Users-List" component={UsersList} />
    //  <Route path="/Users-Details" component={Task1} />
    //  <Route path="/CrudOperation" component={Task2} />
    //  <Route  path="/posts" exact component={Task3} />
    //  <Route path="/postsDetails/:id" exact component={PostDetails}/>
    //  <Route path="/redux" component={ReduxCounter}/>
    // </Switch>

    // </BrowserRouter>
    // <ReduxCounter/>

       <ReduxForm/>
    
  );
}

export default App;
