import { useState } from 'react';
import './NewProjectModal.css';

const NewProjectModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    conclusionDate: '',
    reimbursementDate: '',
    responsible: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Nueva Obra por Impuestos</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="modal-columns">
                <div className="left-column">
                  <div className="form-group">
                    <h3>Unidad de Gestión</h3>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input type="checkbox" id="todas" name="managementUnit" value="todas" />
                        <label htmlFor="todas">Todas</label>
                      </div>
                      <div className="checkbox-item">
                        <input type="checkbox" id="cieneguilla" name="managementUnit" value="cieneguilla" />
                        <label htmlFor="cieneguilla">Cieneguilla</label>
                      </div>
                      <div className="checkbox-item">
                        <input type="checkbox" id="zonaMinera" name="managementUnit" value="zonaMinera" />
                        <label htmlFor="zonaMinera">Zona Minera</label>
                      </div>
                      <div className="checkbox-item">
                        <input type="checkbox" id="limaSur" name="managementUnit" value="limaSur" />
                        <label htmlFor="limaSur">Lima Sur</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <h3>Centro de Operación</h3>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input type="checkbox" id="todos" name="operationCenter" value="todos" />
                        <label htmlFor="todos">Todos</label>
                      </div>
                      <div className="checkbox-item">
                        <input type="checkbox" id="centro1" name="operationCenter" value="centro1" />
                        <label htmlFor="centro1">Centro nº 1</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-column">
                  <div className="form-group">
                    <label htmlFor="name">Nombre<span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Título"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Tipo<span className="required">*</span></label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar</option>
                      <option value="carreteras">Carreteras</option>
                      <option value="puentes">Puentes</option>
                      <option value="escuelas">Escuelas</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="conclusionDate">Fecha de Conclusión</label>
                    <div className="date-input">
                      <input
                        type="text"
                        id="conclusionDate"
                        name="conclusionDate"
                        placeholder="dd/mm/yy"
                        value={formData.conclusionDate}
                        onChange={handleChange}
                      />
                      <div className="calendar-icon">📅</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="reimbursementDate">Fecha de Reembolso</label>
                    <div className="date-input">
                      <input
                        type="text"
                        id="reimbursementDate"
                        name="reimbursementDate"
                        placeholder="dd/mm/yy"
                        value={formData.reimbursementDate}
                        onChange={handleChange}
                      />
                      <div className="calendar-icon">📅</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="responsible">Responsable</label>
                    <select
                      id="responsible"
                      name="responsible"
                      value={formData.responsible}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar</option>
                      <option value="user1">Usuario 1</option>
                      <option value="user2">Usuario 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
              <button type="submit" className="save-button">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProjectModal;