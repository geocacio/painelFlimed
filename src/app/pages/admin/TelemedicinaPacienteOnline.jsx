import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class TelemedicinaPacienteOnline extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Data da Consulta',
                field: 'data_consulta',
                sort: 'asc'
                },
                {
                label: 'Recebido de',
                field: 'recebido_de',
                sort: 'asc'
                },
                {
                label: 'Data Vencimento',
                field: 'data_vencimento'
                },
                {
                label: 'Valor',
                field: 'valor'
                },
                {
                label: 'Tipo de Pagamento',
                field: 'tipo_pagamento'
                },
                {
                label: 'Banco',
                field: 'banco'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                data_consulta: '03/03/2020',
                recebido_de: 'John Doe',
                data_vencimento: '03/03/2020',
                valor: 'R$ 450,00',
                tipo_pagamento: 'Cartão',
                banco: 'Santander',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                data_consulta: '03/03/2020',
                recebido_de: 'John Doe',
                data_vencimento: '03/03/2020',
                valor: 'R$ 450,00',
                tipo_pagamento: 'Cartão',
                banco: 'Santander',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                data_consulta: '03/03/2020',
                recebido_de: 'John Doe',
                data_vencimento: '03/03/2020',
                valor: 'R$ 450,00',
                tipo_pagamento: 'Cartão',
                banco: 'Santander',
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
                    <PortletHeader title="Paciente Online"
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

export default TelemedicinaPacienteOnline
