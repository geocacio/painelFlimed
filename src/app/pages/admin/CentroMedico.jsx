import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class CentroMedico extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Nome do Centro Médico',
                field: 'nome_centro_medico',
                sort: 'asc'
                },
                {
                label: 'Especialidades',
                field: 'especialidades'
                },
                {
                label: 'Total de Profissionais',
                field: 'total_profissionais'
                },
                {
                label: 'Nome do Responsável',
                field: 'nome_responsavel',
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
                label: 'E-mail',
                field: 'email'
                },
                {
                label: 'CNPJ',
                field: 'cnpj'
                },
                {
                label: 'Ações',
                field: 'acoes'
                },
            ],
            rows: [
                {
                nome_centro_medico: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                total_profissionais: 'Lorem Ipsum',
                nome_responsavel: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                email: 'Lorem Ipsum',
                cnpj: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_centro_medico: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                total_profissionais: 'Lorem Ipsum',
                nome_responsavel: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                email: 'Lorem Ipsum',
                cnpj: 'Lorem Ipsum',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                nome_centro_medico: 'Lorem Ipsum',
                especialidades: 'Lorem Ipsum',
                total_profissionais: 'Lorem Ipsum',
                nome_responsavel: 'Lorem Ipsum',
                endereco: 'Lorem Ipsum',
                cidade: 'Lorem Ipsum',
                estado: 'Lorem Ipsum',
                telefone: '(99) 9 9999-9999',
                celular: '(99) 9 9999-9999',
                email: 'Lorem Ipsum',
                cnpj: 'Lorem Ipsum',
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
                    <PortletHeader title="Centro Médico"
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
                                <MenuItem value={1}>Planos Mais Vendidos</MenuItem>
                                <MenuItem value={2}>Planos Menos Vendidos</MenuItem>
                                <MenuItem value={3}>Planos Gratuitos</MenuItem>
                                <MenuItem value={4}>Planos Vencidos</MenuItem>
                                <MenuItem value={5}>Planos Para Vencer</MenuItem>
                                <MenuItem value={6}>Planos Cancelados</MenuItem>
                                <MenuItem value={7}>Planos Bloqueados</MenuItem>
                                <MenuItem value={8}>Planos Não Finalizados</MenuItem>
                                <MenuItem value={9}>Empresas Cadastradas</MenuItem>
                                <MenuItem value={10}>Profissionais da Saúde Cadastrados</MenuItem>
                                <MenuItem value={11}>Profissionais da Saúde Renovado</MenuItem>
                                <MenuItem value={12}>Profissionais da Saúde Início de Cadastro</MenuItem>
                                <MenuItem value={13}>Centro Médico Cadastrado</MenuItem>
                                <MenuItem value={14}>Centro Médico Renovado</MenuItem>
                                <MenuItem value={15}>Centro Médico Início de Cadastro</MenuItem>
                                <MenuItem value={16}>Centro Médico Cancelado</MenuItem>
                                <MenuItem value={17}>Centro Médico Bloqueado</MenuItem>
                                <MenuItem value={18}>Centro Médico Ativado</MenuItem>
                                <MenuItem value={19}>Planos Centro Médico Starter</MenuItem>
                                <MenuItem value={20}>Planos Centro Médico Plus</MenuItem>
                                <MenuItem value={21}>Planos Centro Médico Pro</MenuItem>
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

export default CentroMedico
