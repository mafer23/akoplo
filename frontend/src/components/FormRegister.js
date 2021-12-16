import React from 'react';
import { useForm } from 'react-hook-form';
import Ico from "./img/icono-akoplo-1.png";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
        <h2><img className='imgLogin' src={Ico}/>Registro</h2>
      <input type="text" placeholder="Nombre" {...register("name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Número de celular" {...register("cel", {required: true, maxLength: 12})} />
      <input type="text" placeholder="Ciudad" {...register("city", {})} />
      <p className='tipo'>Tipo de usuario</p>
      <select  {...register("tipoUsuario", { required: true })}>
        <option value="Generador">Generador</option>
        <option value="Recolector">Recolector</option>
        <option value="Transformador">Transformador</option>
      </select>
      <input type="password" placeholder="Contraseña" {...register("password", {})} />

      <input type='submit' value='Registrar' className='button'/>
    </form>
  );
}