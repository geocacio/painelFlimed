import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class PacientesDetalhes extends Component {

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
                field: 'profissao'
                },
                {
                label: 'Profissional de Saúde',
                field: 'profissional_saude'
                },
                {
                label: 'Clínicas',
                field: 'clinicas'
                },
                {
                label: 'Prescitos',
                field: 'prescitos'
                },
                {
                label: 'Planos de Saúde',
                field: 'planos_saude'
                },
                {
                label: 'Atendimentos Particulares',
                field: 'atendimentos_particulares'
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
                label: 'Valor Total',
                field: 'valor_total'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                nome_paciente: '03/03/2020',
                idade: 'John Doe',
                profissao: '03/03/2020',
                profissional_saude: 'R$ 450,00',
                clinicas: 'Cartão',
                prescitos: '999.999.999-99',
                planos_saude: 'Lorem Ipsum',
                atendimentos_particulares: 'Lorem Ipsum',
                atendimento_plano: 'Lorem Ipsum',
                cadastro_incompleto: 'Lorem Ipsum',
                relatorios: 'Lorem Ipsum',
                valor_total: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: '03/03/2020',
                idade: 'John Doe',
                profissao: '03/03/2020',
                profissional_saude: 'R$ 450,00',
                clinicas: 'Cartão',
                prescitos: '999.999.999-99',
                planos_saude: 'Lorem Ipsum',
                atendimentos_particulares: 'Lorem Ipsum',
                atendimento_plano: 'Lorem Ipsum',
                cadastro_incompleto: 'Lorem Ipsum',
                relatorios: 'Lorem Ipsum',
                valor_total: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_paciente: '03/03/2020',
                idade: 'John Doe',
                profissao: '03/03/2020',
                profissional_saude: 'R$ 450,00',
                clinicas: 'Cartão',
                prescitos: '999.999.999-99',
                planos_saude: 'Lorem Ipsum',
                atendimentos_particulares: 'Lorem Ipsum',
                atendimento_plano: 'Lorem Ipsum',
                cadastro_incompleto: 'Lorem Ipsum',
                relatorios: 'Lorem Ipsum',
                valor_total: 'Lorem Ipsum',
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
                    <PortletHeader title="Pacientes Detalhes"
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
                                <MenuItem value={1}>Pacientes</MenuItem>
                                <MenuItem value={2}>Pacientes que Realizaram Consulta Online</MenuItem>
                                <MenuItem value={3}>Profissionaisde Saúde que Realizaram Consulta Online</MenuItem>
                                <MenuItem value={4}>Consultas Online Canceladas</MenuItem>
                                <MenuItem value={5}>Consultas Online Aprovadas</MenuItem>
                                <MenuItem value={6}>Consultas Online Bloqueadas</MenuItem>
                                <MenuItem value={7}>Consultas</MenuItem>
                                <MenuItem value={8}>Exames</MenuItem>
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

export default PacientesDetalhes
