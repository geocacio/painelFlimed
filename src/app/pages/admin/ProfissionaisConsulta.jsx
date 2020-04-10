import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class ProfissionaisConsulta extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Paciente',
                field: 'nome_paciente',
                sort: 'asc'
                },
                {
                label: 'Nome da Consulta',
                field: 'nome_consulta',
                sort: 'asc'
                },
                {
                label: 'Consulta Online',
                field: 'consulta_online',
                sort: 'asc'
                },
                {
                label: 'Plano',
                field: 'plano',
                sort: 'asc'
                },
                {
                label: 'Profissional',
                field: 'profissional',
                sort: 'asc'
                },
                {
                label: 'Categoria',
                field: 'categoria',
                sort: 'asc'
                },
                {
                label: 'Valor Consulta Online',
                field: 'valor_consulta_online'
                },
                {
                label: 'Ações',
                field: 'acoes',
                width: 200
                },
            ],
            rows: [
                {
                nome_paciente: 'John Doe',
                nome_consulta: 'Lorem ipsum',
                consulta_online: 'Lorem ipsum',
                plano: 'Lorem ipsum',
                profissional: 'John Doe',
                categoria: 'Lorem ipsum',
                valor_consulta_online: 'R$ 1.200,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: 'Adenilton',
                nome_consulta: 'Teste consulta',
                consulta_online: 'Lorem ipsum',
                plano: 'Lorem ipsum',
                profissional: 'John Doe',
                categoria: 'Lorem ipsum',
                valor_consulta_online: 'R$ 1.200,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: 'Flávio',
                nome_consulta: 'Flavio Consulta',
                consulta_online: 'Lorem ipsum',
                plano: 'Lorem ipsum',
                profissional: 'John Doe',
                categoria: 'Lorem ipsum',
                valor_consulta_online: 'R$ 1.200,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
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
                    <PortletHeader title="Consultar Profissionais"
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
                                <MenuItem value={1}>Pacientes que realizaram consulta</MenuItem>
                                <MenuItem value={2}>Pacientes que realizaram consulta online</MenuItem>
                                <MenuItem value={3}>Pacientes que faltaram a Consulta</MenuItem>
                                <MenuItem value={4}> Pacientes que cancelaram a Consulta</MenuItem>
                                <MenuItem value={5}>Pacientes que não realizaram Consulta</MenuItem>

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

export default ProfissionaisConsulta
