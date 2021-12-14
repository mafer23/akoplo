import React from 'react';

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label  >{label}</label>
        <input ref={ref} type={type} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form className='login' onSubmit={handleSubmit} >
        <h2>Registro</h2>
        <input placeholder="Nombre de usuario" className='etiquet' ref={usernameRef} label="Username:" type="text"  />
        <input placeholder="Email" className='etiquet' ref={usernameRef} label="Email:" type="email"  />
        <input placeholder="Celular" className='etiquet' ref={usernameRef} label="Celular:" type="tel"  />
        <input placeholder="Contraseña" className='etiquet' ref={passwordRef} label="Password:" type="password" />
        <div>
          <button  type="submit">Registrarme</button>
        </div>
      </form>
    );
};

// Usage example:

const Register = () => {
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

export default Register;