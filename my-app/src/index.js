import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoList from './ToDoList/TodoList';
//import Example from './Counter/Example'
import CounterApp from './Counter/CounterApp';
//import CounterApp from './Counter/CounterApp'
import UserProfileCard from './UserFrofileCard/UserProfileCard';
import FormComponent from './FormComponent/formComponent';
import ContactForm from './ContactForm/contactForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

{/*}<CounterApp />*/}

 <UserProfileCard name="Ahmed" age="30" email="Ahmed@gmial.com"/>
    
      {/*}<FormComponent/>*/}
   {/*} <ContactForm/>*/}

    {/*}<ToDoList/>*/}

    

  



  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
