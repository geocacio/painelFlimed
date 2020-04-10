import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class PacientesDetalhe extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Paciente',
                field: 'nome_paciente',
                sort: 'asc'
                },
                {
                label: 'Idade',
                field: 'idade'
                },
                {
                label: 'Profissão',
                field: 'profissao',
                sort: 'asc'
                },
                {
                label: 'Profissional de saúde',
                field: 'profissional_saude',
                sort: 'asc'
                },
                {
                label: 'Clínicas',
                field: 'clinicas',
                sort: 'asc'
                },
                {
                label: 'Prescritos',
                field: 'prescritos'
                },
                {
                label: 'Planos de saúde',
                field: 'plano_saude',
                sort: 'asc'
                },
                {
                label: 'Atendimento Particulares',
                field: 'atendimento_particulares'
                },
                {
                label: 'Atendimento por Plano',
                field: 'atendimento_plano'
                },
                {
                label: 'Cadastro Incompleto',
                field: 'cadastro_incompleto'
                },
                {
                label: 'Relatórios',
                field: 'relatorios'
                },
                {
                label: 'Prontuário',
                field: 'prontuario'
                },
                {
                label: 'Valor Total',
                field: 'valor_total'
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
                idade: '22',
                profissao: 'Doutor',
                profissional_saude: 'John Doe',
                clinicas: 'Lorem ipsum',
                prescritos: 'Lorem ipsum',
                plano_saude: 'Lorem ipsum',
                atendimento_particulares: 'Lorem ipsum',
                atendimento_plano: 'Lorem ipsum',
                cadastro_incompleto: 'Lorem ipsum',
                relatorios: 'Lorem ipsum',
                prontuario: 'Lorem ipsum',
                valor_total: 'R$ 1.200,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: 'John Doe',
                idade: '22',
                profissao: 'Doutor',
                profissional_saude: 'John Doe',
                clinicas: 'Lorem ipsum',
                prescritos: 'Lorem ipsum',
                plano_saude: 'Lorem ipsum',
                atendimento_particulares: 'Lorem ipsum',
                atendimento_plano: 'Lorem ipsum',
                cadastro_incompleto: 'Lorem ipsum',
                relatorios: 'Lorem ipsum',
                prontuario: 'Lorem ipsum',
                valor_total: 'R$ 1.200,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: 'John Doe',
                idade: '22',
                profissao: 'Doutor',
                profissional_saude: 'John Doe',
                clinicas: 'Lorem ipsum',
                prescritos: 'Lorem ipsum',
                plano_saude: 'Lorem ipsum',
                atendimento_particulares: 'Lorem ipsum',
                atendimento_plano: 'Lorem ipsum',
                cadastro_incompleto: 'Lorem ipsum',
                relatorios: 'Lorem ipsum',
                prontuario: 'Lorem ipsum',
                valor_total: 'R$ 1.200,00',
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
                    <PortletHeader title="Pacientes Detalhe"
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
                                <MenuItem value={1}>Pacientes que realizaram consulta online</MenuItem>
                                <MenuItem value={2}>Profissionais da saúde  que realizaram consulta online</MenuItem>
                                <MenuItem value={3}>Consultas onlines canceladas</MenuItem>
                                <MenuItem value={4}>Consultas onlines aprovadas</MenuItem>
                                <MenuItem value={5}>Consultas onlines Bloqueadas</MenuItem>
                                <MenuItem value={6}>Consultas</MenuItem>
                                <MenuItem value={7}>Exames</MenuItem>

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

export default PacientesDetalhe
