import React from 'react';
import './Bitacora.css';

const Bitacora = () => {
  return (
    <div className="bitacora-container">
      <div className="bitacora-header">
        <h1>Ingreso de Bitácora</h1>
        <div className="bitacora-logo"></div>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="nombre-bitacora">Nombre Bitácora:</label>
          <input type="text" id="nombre-bitacora" placeholder="Nombre Bitácora" />
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="text" id="fecha" placeholder="DD/MM/AA" />
          <label htmlFor="hora">Hora:</label>
          <input type="text" id="hora" placeholder="Hora" />
        </div>

        <div className="form-group">
          <label htmlFor="localizacion">Localización:</label>
          <input type="text" id="localizacion" placeholder="GPS" />
          <label htmlFor="condenadas">Condenadas:</label>
          <input type="text" id="condenadas" placeholder="Coordenadas" />
        </div>

        <div className="form-group">
          <label htmlFor="clima">Clima:</label>
          <input type="text" id="clima" placeholder="Seco, Húmedo..." />
          <label htmlFor="vegetacion">Tipo Vegetación:</label>
<select id="vegetacion">
  <option value="">Seleccione un tipo</option>
  <option value="bosque">Bosque</option>
  <option value="selva">Selva</option>
  <option value="desierto">Desierto</option>
  <option value="pradera">Pradera</option>
  <option value="humedal">Humedal</option>
  <option value="tundra">Tundra</option>
</select>
        </div>

        <div className="form-group">
          <label htmlFor="altitud">Altitud:</label>
          <input type="text" id="altitud" placeholder="Altitud" />
        </div>

        <div className="photo-section">
          <h3>Foto Muestreo</h3>
          <div className="photo-box">FOTO MUESTREO</div>
          <div className="buttons-group">
            <button type="button" className="button">Subir foto</button>
            <button type="button" className="button">Eliminar foto</button>
            <button type="button" className="button">Actualizar foto</button>
          </div>
        </div>

        <textarea className="textarea" placeholder="Observaciones"></textarea>

        <h2>Detalles de la especie recolectada</h2>

        <div className="form-group">
          <label htmlFor="nombre-cientifico">Nombre Científico:</label>
          <input type="text" id="nombre-cientifico" />
        </div>

        <div className="form-group">
          <label htmlFor="nombre-comun">Nombre Común:</label>
          <input type="text" id="nombre-comun" />
        </div>

        <div className="form-group">
          <label htmlFor="familia">Familia:</label>
          <input type="text" id="familia" />
        </div>

        <div className="form-group">
          <label htmlFor="cantidad-muestras">Cantidad de muestras:</label>
          <input type="text" id="cantidad-muestras" />
          <label htmlFor="estado-planta">Estado de la planta:</label>
<select id="estado-planta">
  <option value="">Seleccione un estado</option>
  <option value="viva">Viva</option>
  <option value="muerta">Muerta</option>
  <option value="seca">Seca</option>
  <option value="floreciendo">Floreciendo</option>
  <option value="fructificando">Fructificando</option>
</select>
        </div>

        <textarea className="textarea" placeholder="Observaciones"></textarea>

        <div className="photo-section">
          <h3>Foto Planta</h3>
          <div className="photo-box">FOTO PLANTA</div>
          <div className="buttons-group">
            <button type="button" className="button">Subir foto</button>
            <button type="button" className="button">Eliminar foto</button>
            <button type="button" className="button">Actualizar foto</button>
          </div>
        </div>

        <div className="buttons-group">
          <button type="button" className="button">Editar Bitácora</button>
          <button type="button" className="button">Eliminar Bitácora</button>
        </div>
      </form>
    </div>
  );
}

export default Bitacora;
