import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class TelemedicinaOnlineProfissionalSaude extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Profissional',
                field: 'nome_profissional',
                sort: 'asc'
                },
                {
                label: 'Especialidades',
                field: 'especialidades',
                sort: 'asc'
                },
                {
                label: 'Atende no Centro Médico',
                field: 'atende_centro_medico'
                },
                {
                label: 'Consultas Online',
                field: 'consultas_online'
                },
                {
                label: 'Valor',
                field: 'valor'
                },
                {
                label: 'Nome do Paciente',
                field: 'nome_paciente',
                sort: 'asc'
                },
                {
                label: 'Endereço',
                field: 'endereco'
                },
                {
                label: 'Cidade',
                field: 'cidade'
                },
                {
                label: 'Estado',
                field: 'estado'
                },
                {
                label: 'Telefone',
                field: 'telefone'
                },
                {
                label: 'Celular',
                field: 'celular'
                },
                {
                label: 'CNPJ',
                field: 'cnpj'
                },
                {
                label: 'Cartão',
                field: 'cartao'
                },
                {
                label: 'Total Pago',
                field: 'total_pago'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                nome_profissional: 'John Doe',
                especialidades: 'John Doe',
                atende_centro_medico: 'Lorem Ipsum',
                consultas_online: '3',
                valor: 'R$ 450,00',
                nome_paciente: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                cnpj: 'Lorem Ipsum',
                cartao: 'Lorem Ipsum',
                total_pago: 'R$ 450,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_profissional: 'John Doe',
                especialidades: 'John Doe',
                atende_centro_medico: 'Lorem Ipsum',
                consultas_online: '3',
                valor: 'R$ 450,00',
                nome_paciente: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                cnpj: 'Lorem Ipsum',
                cartao: 'Lorem Ipsum',
                total_pago: 'R$ 450,00',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_profissional: 'John Doe',
                especialidades: 'John Doe',
                atende_centro_medico: 'Lorem Ipsum',
                consultas_online: '3',
                valor: 'R$ 450,00',
                nome_paciente: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                cnpj: 'Lorem Ipsum',
                cartao: 'Lorem Ipsum',
                total_pago: 'R$ 450,00',
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
                    <PortletHeader title="Online Dados Centro Médico"
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
                                <MenuItem value={3}>Profissionais de Saúde que Realizaram Consulta Online</MenuItem>
                                <MenuItem value={4}>Consultas Online Canceladas</MenuItem>
                                <MenuItem value={5}>Consultas Online Aprovadas</MenuItem>
                                <MenuItem value={6}>Consultas Online Bloqueadas</MenuItem>
                                <MenuItem value={7}>Consultas Online Pagas</MenuItem>
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

export default TelemedicinaOnlineProfissionalSaude
