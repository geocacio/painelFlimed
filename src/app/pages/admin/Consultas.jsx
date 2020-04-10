import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class Consultas extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Consulta',
                field: 'consulta',
                sort: 'asc'
                },
                {
                label: 'Consulta Online',
                field: 'consulta_online',
                sort: 'asc'
                },
                {
                label: 'Exames',
                field: 'exames'
                },
                {
                label: 'Medicamentos',
                field: 'medicamentos'
                },
                {
                label: 'Profissional',
                field: 'profissional'
                },
                {
                label: 'Categoria',
                field: 'categoria'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                consulta: 'John Doe ?',
                consulta_online: 'Lorem ipsum',
                exames: 'Lorem ipsum',
                medicamentos: 'Lorem ipsum',
                profissional: 'Lorem ipsum',
                categoria: 'Lorem ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-thumbs-up text-success" title="Aprovar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                consulta: 'John Doe ?',
                consulta_online: 'Lorem ipsum',
                exames: 'Lorem ipsum',
                medicamentos: 'Lorem ipsum',
                profissional: 'Lorem ipsum',
                categoria: 'Lorem ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-thumbs-up text-success" title="Aprovar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                consulta: 'John Doe ?',
                consulta_online: 'Lorem ipsum',
                exames: 'Lorem ipsum',
                medicamentos: 'Lorem ipsum',
                profissional: 'Lorem ipsum',
                categoria: 'Lorem ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-thumbs-up text-success" title="Aprovar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
            ]
        }
    };
    select = {
        value: ""
    };


    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Portlet>
                    <PortletHeader 
                    title={(
                        <div class="mr-3 custom-btn-table">
                            
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"><i key="cell1" className="fas fa-plus mr-1" aria-hidden="true"></i> Adicionar</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Exames</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Consultas</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Consultas Online</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    )}
                    toolbar={(
                        <PortletHeaderToolbar>
                            <div class="mr-3  custom-btn-table">
                                
                            <Dropdown className="d-inline-block">
                                <Dropdown.Toggle variant="primary" id="dropdown-basic"><i key="cell1" className="fas fa-upload mr-1" aria-hidden="true"></i> Importar</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Excel</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">PDF</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                
                            <Dropdown className="d-inline-block">
                                <Dropdown.Toggle variant="primary" id="dropdown-basic"><i key="cell1" className="fas fa-download mr-1" aria-hidden="true"></i> Exportar</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Excel</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">PDF</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            </div>

                            <Select value={0} name="filter">
                                <MenuItem value={0}>Todos</MenuItem>
                                <MenuItem value={1}>Pacientes que Realizaram Consulta</MenuItem>
                                <MenuItem value={2}>Pacientes que Realizaram Consulta Online</MenuItem>
                                <MenuItem value={3}>Pacientes que Realizaram Exames</MenuItem>
                                <MenuItem value={4}>Exames</MenuItem>
                                <MenuItem value={5}>Consultas</MenuItem>
                                <MenuItem value={6}>Consultas Online</MenuItem>
                            </Select>
                        </PortletHeaderToolbar>)}/>
                    <PortletBody>
                        <DataTable data={this.state.tableData} />
                    </PortletBody>
                </Portlet>
            </React.Fragment>
        )
    }
}

export default Consultas
