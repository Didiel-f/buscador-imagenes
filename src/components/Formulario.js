import React, { useState } from 'react';
import { Error } from './Error';

export const Formulario = ({ setBusqueda }) => {

  const [termino, setTermino] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();

      // Validar
      if ( termino.trim() === '' ) {
          setError(true);
          return;
      }

      // Enviar el termino de busqueda hacia el componente principal
      setBusqueda( termino );

  };
    
    return (
        <div>
            <form
                onSubmit={ handleSubmit }
            >
                <div className="row">
                    <div className="form-group col-md-8">
                        <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Busca una imagen, ejemplo: Futbol o Café"
                            value={ termino }
                            onChange={ (e) => setTermino(e.target.value) }
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input 
                            type="submit"
                            className="btn btn-lg btn-danger btn-block"
                            value="Buscar"
                        />
                    </div>
                </div>

                { error ? <Error mensaje="Agrega un término de búsqueda." /> : null }
            </form>
        </div>
    )
}
