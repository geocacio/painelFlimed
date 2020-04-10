import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class ProfissionalCentroMedico extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Perfil do Médico',
                field: 'perfil_medico'
                },
                {
                label: 'Sobre o Médico',
                field: 'sobre_medico'
                },
                {
                label: 'Especialidades',
                field: 'especialidades'
                },
                {
                label: 'Profissional responsável',
                field: 'profissional_responsavel'
                },
                {
                label: 'Local de Atendimento do Médico',
                field: 'local_atendimento_medico'
                },
                {
                label: 'Usuários Funcionários',
                field: 'usuarios_funcionarios'
                },
                {
                label: 'Usuários Médicos',
                field: 'usuarios_medicos'
                },
                {
                label: 'Histórico de Atendimento',
                field: 'historico_atendimento'
                },
                {
                label: 'Plano Flimed',
                field: 'plano_flimed'
                },
                {
                label: 'Plano de Atendimento',
                field: 'plano_atendimento'
                },
                {
                label: 'Cartão',
                field: 'cartao'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                perfil_medico: 'Lorem Ipsum',
                sobre_medico: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                profissional_responsavel: 'Lorem Ipsum',
                local_atendimento_medico: 'Lorem Ipsum',
                usuarios_funcionarios: 'Lorem Ipsum',
                usuarios_medicos: 'Lorem Ipsum',
                historico_atendimento: 'Lorem Ipsum',
                plano_flimed: 'Lorem Ipsum',
                plano_atendimento: 'Lorem Ipsum',
                cartao: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                perfil_medico: 'Lorem Ipsum',
                sobre_medico: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                profissional_responsavel: 'Lorem Ipsum',
                local_atendimento_medico: 'Lorem Ipsum',
                usuarios_funcionarios: 'Lorem Ipsum',
                usuarios_medicos: 'Lorem Ipsum',
                historico_atendimento: 'Lorem Ipsum',
                plano_flimed: 'Lorem Ipsum',
                plano_atendimento: 'Lorem Ipsum',
                cartao: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                perfil_medico: 'Lorem Ipsum',
                sobre_medico: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                profissional_responsavel: 'Lorem Ipsum',
                local_atendimento_medico: 'Lorem Ipsum',
                usuarios_funcionarios: 'Lorem Ipsum',
                usuarios_medicos: 'Lorem Ipsum',
                historico_atendimento: 'Lorem Ipsum',
                plano_flimed: 'Lorem Ipsum',
                plano_atendimento: 'Lorem Ipsum',
                cartao: 'Lorem Ipsum',
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
                    <PortletHeader title="Profissional"
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
                                <MenuItem value={1}>Lorem Ipsum</MenuItem>
                                <MenuItem value={2}>John Doe</MenuItem>
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

export default ProfissionalCentroMedico
