import React from 'react';
import Ico from "./img/icono-akoplo-1.png";


const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label  >{label}</label>
        <input ref={ref} type={type} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const useremailRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            useremail: useremailRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form className='login' onSubmit={handleSubmit} >
        
        <h2><img className='imgLogin' src={Ico}/>Login</h2>
        <input placeholder="Email" className='etiquet' ref={useremailRef} label="Useremail:" type="text"  />
        <input placeholder="Contraseña" className='etiquet' ref={passwordRef} label="Password:" type="password" />
        <div>
          <button  type="submit">Iniciar sesión</button>
        </div>
      </form>
    );
};

// Usage example:

const Login = () => {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default Login;