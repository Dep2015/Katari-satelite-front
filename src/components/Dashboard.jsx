import { useState } from 'react';
import Navbar from './Navbar';
import NewProjectModal from './NewProjectModal';
import './Dashboard.css';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState('01/07/2024-31/12/2024');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Sample data for the table
  const [projectsData, setProjectsData] = useState([
    { id: 'Fila 1', name: 'Proyecto 1', center: 'Unita Sur', status: 'En Entrega', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 2', name: 'Proyecto 2', center: 'Unita Sur', status: 'En Proceso', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+15', responsible: 'User' },
    { id: 'Fila 3', name: 'Proyecto 3', center: 'Unita Sur', status: 'Finalizado', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 4', name: 'Proyecto 4', center: 'Unita Sur', status: 'En Entrega', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 5', name: 'Proyecto 5', center: 'Unita Sur', status: 'En Entrega', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 6', name: 'Proyecto 6', center: 'Unita Sur', status: 'Finalizado', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 7', name: 'Proyecto 7', center: 'Unita Sur', status: 'En Entrega', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 8', name: 'Proyecto 8', center: 'Unita Sur', status: 'En Espera', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 9', name: 'Proyecto 9', center: 'Unita Sur', status: 'Finalizado', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
    { id: 'Fila 10', name: 'Proyecto 10', center: 'Unita Sur', status: 'En Entrega', amount: '$1,023.84', groups: 'A A', type: 'Carreteras', beneficiaries: '+13', responsible: 'User' },
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case 'En Entrega': return 'status-en-entrega';
      case 'En Proceso': return 'status-en-proceso';
      case 'Finalizado': return 'status-finalizado';
      case 'En Espera': return 'status-en-espera';
      default: return '';
    }
  };

  const handleSaveProject = (formData) => {
    // Create a new project based on form data
    const newProject = {
      id: `Fila ${projectsData.length + 1}`,
      name: formData.name,
      center: 'Unita Sur',
      status: 'Registrado',
      amount: '$0.00',
      groups: 'A A',
      type: formData.type || 'Carreteras',
      beneficiaries: '+0',
      responsible: formData.responsible || 'User'
    };

    // Add the new project to the data
    setProjectsData([newProject, ...projectsData]);
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="header">
          <h1>Obras por Impuestos</h1>
          <button className="blue-button" onClick={() => setIsModalOpen(true)}>
            Registrar Obra por Impuesto
          </button>
        </div>

       <div  className="container">

        <div className="filters">
          <div className="filters-left">
            <div className="date-filter">
              <label>Últimos 30 días</label>
              <div className="date-selector">
                <input type="text" value={dateRange} onChange={(e) => setDateRange(e.target.value)} />
                <span className="date-selector-button">Buscar</span>
              </div>
            </div>
            <div className="project-type">
              <label>Tipo de Proyecto</label>
              <select>
                <option>Carreteras (233)</option>
              </select>
            </div>
            <div className="project-status">
              <label>Estatus (Total N. 2035)</label>
              <select>
                <option>Obras (235)</option>
              </select>
            </div>
            <div className="responsible">
              <label>Buscar Actor Involucrado</label>
              <select>
                <option>Todos</option>
              </select>
            </div>
            <div className="responsible-list">
              <label>Responsables</label>
              <select>
                <option>Todos</option>
              </select>
            </div>
          </div>
        </div>
       
        <div className="panel">

        <div className="dashboard-stats">
          <div className="stats-card">
            <p>Obras por Impuesto en Total</p>
            <h2>52</h2>
          </div>
          <div className="stats-card">
            <p>Beneficiarios</p>
            <h2>680</h2>
          </div>
          <div className="stats-card">
            <p>Pagos Ejecutados</p>
            <h2>$ 8,304</h2>
          </div>
        </div>

        <div className="status-flow">
          <div className="status-box active">
            <div className="status-icon">2</div>
            <div className="status-label">Registrado</div>
          </div>
          <div className="status-connector"></div>
          <div className="status-box">
            <div className="status-icon">7</div>
            <div className="status-label">En Proceso</div>
          </div>
          <div className="status-connector"></div>
          <div className="status-box">
            <div className="status-icon">7</div>
            <div className="status-label">En Entrega</div>
          </div>
          <div className="status-connector"></div>
          <div className="status-box">
            <div className="status-icon">7</div>
            <div className="status-label">Finalizado</div>
          </div>
        </div>

        <div className="projects-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Centro de Desarrollo</th>
                <th>Estado</th>
                <th>Pagos Ejecutados</th>
                <th>Grupos de interés</th>
                <th>Tipo</th>
                <th>Beneficiarios</th>
                <th>Responsable</th>
                <th>Ver Más</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.center}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(project.status)}`}>
                      {project.status}
                    </span>
                  </td>
                  <td>{project.amount}</td>
                  <td>{project.groups}</td>
                  <td>{project.type}</td>
                  <td>{project.beneficiaries}</td>
                  <td>{project.responsible}</td>
                  <td>
                    <button className="view-more">→</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>←</button>
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <button onClick={() => setCurrentPage(currentPage + 1)}>→</button>
        </div>

        </div>

        </div>
        

      </div>

      {/* Add the modal component */}
      <NewProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProject}
      />
    </div>
  );
};

export default Dashboard;