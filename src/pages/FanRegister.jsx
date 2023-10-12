import React, { useRef, useState } from 'react'
import "./fanRegister.css"
import axios from 'axios'
import { toast } from 'react-toastify';

export default function FanRegister() {
  const [loading, setLoading] = useState(false)
  const BASEURL = import.meta.env.VITE_BASE_URL
  const nombres = useRef()
  const apellidos = useRef()
  const cedula = useRef()
  const edad = useRef()
  const sexo = useRef()
  const telefono = useRef()
  const email = useRef()
  const profesion = useRef()
  const institucion = useRef()
  const tipoParticipacion = useRef("aficionado")
  const estado = useRef()


  async function HandleSubmit(e) {

    e.preventDefault()
    setLoading(true)

    try {
      await axios.post("https://astronomy-register-backend.onrender.com/" + "api/participantes/", {
        nombres: nombres.current.value,
        apellidos: apellidos.current.value,
        ci: cedula.current.value,
        edad: edad.current.value,
        sexo: sexo.current.value,
        telefono: telefono.current.value,
        email: email.current.value,
        profesion: profesion.current.value,
        institucion: institucion.current.value,
        tipoDeParticipante: "aficionado",
        estado: estado.current.value,

      })
      nombres.current.value = ""
      apellidos.current.value = ""
      cedula.current.value = ""
      edad.current.value = ""
      telefono.current.value = ""
      email.current.value = ""
      profesion.current.value = ""
      institucion.current.value = ""


      toast.success('Registrado correctamente', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      toast.error('Error al registrar', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(err)
    } finally {
      setLoading(false)

    }

  }


  return (
    <div className="back">
      <div className="background">
        <div className="imgsWrapper">
          <img className="imgE" src="./mincyt.png" alt="" />
          <img className="imgE" src="./logo erace.png" alt="" />
          <img className="imgE" src="./logo semilleros.png" alt="" />
        </div>
        <form className="formWrapper" onSubmit={HandleSubmit}>
          <h2 style={{ marginBottom: "30px", color: "#4D92A8" }}>REGISTRO AFICIONADOS ERACE MIRANDA</h2>
          <div>
            <input ref={nombres} placeholder="Nombres" className="input" name="text" type="text" required />
          </div>
          <div>
            <input ref={apellidos} type="text" placeholder='Apellidos' className="input" required />
          </div>
          <div>
            <input ref={cedula} type="text" placeholder='Cédula' className="input" required />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "0 auto", gap: "50px" }}>
              <input ref={edad} type="number" placeholder='Edad' className="input" required />

              <select ref={sexo} name="Estado" id="Estado" placeholder='Estado' className="select" required>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
              {/* <input ref={sexo} type="text" placeholder='Sexo' className="input" /> */}

          </div>
          <div>
            <input ref={telefono} type="text" placeholder='Teléfono' className="input" required />
          </div>
          <div>
            <input ref={email} type="email" placeholder='Email' className="input" required />
          </div>
          <div>
            <input ref={profesion} type="text" placeholder='Profesión' className="input" required />
          </div>
          <div>
            <input ref={institucion} type="text" placeholder='Institución' className="input" required />
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>

            <div>
              {/* Estado: */}
              <select ref={estado} name="Estado" id="Estado" placeholder='Estado' className="select" required>
                <option value="Amazonas">Amazonas</option>
                <option value="Anzoátegui">Anzoátegui</option>
                <option value="Apure">Apure</option>
                <option value="Aragua">Aragua</option>
                <option value="Barinas">Barinas</option>
                <option value="Bolívar">Bolívar</option>
                <option value="Carabobo">Carabobo</option>
                <option value="Cojedes">Cojedes</option>
                <option value="Delta Amacuro">Delta Amacuro</option>
                <option value="Distrito Capital">Distrito Capital</option>
                <option value="Falcón">Falcón</option>
                <option value="Guárico">Guárico</option>
                <option value="Lara">Lara</option>
                <option value="Mérida">Mérida</option>
                <option value="Miranda">Miranda</option>
                <option value="Monagas">Monagas</option>
                <option value="Nueva Esparta">Nueva Esparta</option>
                <option value="Portuguesa">Portuguesa</option>
                <option value="Sucre">Sucre</option>
                <option value="Táchira">Táchira</option>
                <option value="Trujillo">Trujillo</option>
                <option value="Vargas">Vargas</option>
                <option value="Yaracuy">Yaracuy</option>
                <option value="Zulia">Zulia</option>
              </select>
            </div>
          </div>
          <button className="button" type="submit" disabled={loading}>
            {loading ? <div style={{ display: "flex", justifyContent: "center" }}> <div className="loader"></div> </div> : "Registrar"}
          </button>
        </form>




      </div>
    </div>
  )
}
