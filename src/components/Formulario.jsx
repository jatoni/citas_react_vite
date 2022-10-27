import { useState, useEffect } from 'react'
import Error from './Error';


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [value, setValue] = useState({
        nombre: '',
        propetario: '',
        email: '',
        alta: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setValue(paciente);
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return fecha + random;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, propetario, email, alta, sintomas } = value
        if ([nombre, propetario, email, alta, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        if (paciente.id) {
            // Editando el registro
            const pacientesActualizador = pacientes.map(pacientesState => pacientesState.id === paciente.id ? value : pacientesState)
            setPacientes(pacientesActualizador);
            setPaciente({})
        } else {
            //    Nuevo registro
            value.id = generarId();
            setPacientes([...pacientes, value]);
        }

        // Reiniciar Formulario

        setValue({
            nombre: '',
            propetario: '',
            email: '',
            alta: '',
            sintomas: '',
            id: ''
        })
    }

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
            >
                {!error
                    ? null
                    : <Error>Todos los campos son obligatorios</Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        name='nombre'
                        type='text'
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={handleChange}
                        value={value.nombre}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propetario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propetario
                    </label>
                    <input
                        id="propetario"
                        name='propetario'
                        type='text'
                        placeholder="Nombre del Propetario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={handleChange}
                        value={value.propetario}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        name='email'
                        type='email'
                        placeholder="Email Contacto Propetario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={handleChange}
                        value={value.email}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        name='alta'
                        type='date'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={handleChange}
                        value={value.alta}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        name='sintomas'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        onChange={handleChange}
                        value={value.sintomas}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 uppercase w-full font-bold text-white p-3 hover:bg-indigo-700 cursor-pointer transition duration-700 ease-in-out"
                    value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario

