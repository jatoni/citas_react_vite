import Paciente from "./Paciente";


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 ">
            <h2 className="font-black text-3xl text-center">{pacientes.length > 0 ? "Listado Pacientes" : "No Hay Pacientes "}</h2>
            <p className="text-lg mt-5 mb-10 text-center">
            {pacientes.length > 0 ? "Administra tus " : "Comienza agregando pacientes "}
                <span className="text-indigo-600 font-bold">{pacientes.length > 0 ? "Pacientes y Citas" : "y apareceran en este lugar"}</span>
            </p>
            <div className="md:h-screen overflow-scroll">
                {pacientes.map( elemento => (

                    <Paciente
                        paciente={elemento}
                        key={elemento.id}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />

                ))}
            </div>
        </div>
    );
};

export default ListadoPacientes;
