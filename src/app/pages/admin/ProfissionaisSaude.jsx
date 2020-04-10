import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class ProfissionaisSaude extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Foto',
                field: 'foto',
                width: 150
                },
                {
                label: 'Primeiro Nome',
                field: 'primeiro_nome',
                sort: 'asc',
                width: 150
                },
                {
                label: 'Último Nome',
                field: 'ultimo_nome',
                sort: 'asc',
                width: 150
                },
                {
                label: 'Departamento',
                field: 'departamento',
                sort: 'asc',
                width: 270
                },
                {
                label: 'Endereço de E-mail',
                field: 'endereco_email',
                width: 200
                },
                {
                label: 'WHATSAPP',
                field: 'whatsapp',
                width: 200
                },
                {
                label: 'Sexo',
                field: 'sexo',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Estado',
                field: 'estado',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Cidade',
                field: 'cidade',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Papel do Usuário',
                field: 'papel_usuario',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Criado em',
                field: 'criado_em',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Ações',
                field: 'acoes',
                width: 200
                },
            ],
            rows: [
                {
                foto: <Image src="_metronic/_assets/images/perfil.png" thumbnail />,
                primeiro_nome: 'John Doe',
                ultimo_nome: 'John Doe',
                departamento: 'Emergencia',
                endereco_email: 'John@email.com',
                whatsapp: '(99) 9 9999-9999',
                sexo: 'Masculino',
                estado: 'SP',
                cidade: 'São Paulo',
                papel_usuario: 'Toalha',
                criado_em: '03/03/2020',
                status: 'Ativo',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                foto: <Image src="/../.././_metronic/_assets/images/perfil.png" thumbnail />,
                primeiro_nome: 'John Doe',
                ultimo_nome: 'John Doe',
                departamento: 'Emergencia',
                endereco_email: 'John@email.com',
                whatsapp: '(99) 9 9999-9999',
                sexo: 'Masculino',
                estado: 'SP',
                cidade: 'São Paulo',
                papel_usuario: 'Toalha',
                criado_em: '03/03/2020',
                status: 'Ativo',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-ban text-muted" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-window-close text-danger" title="Cancelar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                foto: <Image src="../../../_metronic/_assets/images/perfil.png" thumbnail />,
                primeiro_nome: 'John Doe',
                ultimo_nome: 'John Doe',
                departamento: 'Emergencia',
                endereco_email: 'John@email.com',
                whatsapp: '(99) 9 9999-9999',
                sexo: 'Masculino',
                estado: 'SP',
                cidade: 'São Paulo',
                papel_usuario: 'Toalha',
                criado_em: '03/03/2020',
                status: 'Ativo',
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
                    <PortletHeader
                    title={(
                        <div class="mr-3 custom-btn-table">
                            
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"><i key="cell1" className="fas fa-plus mr-1" aria-hidden="true"></i> Adicionar</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Categorias de Profissionais</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Especialidades</Dropdown.Item>
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
                                <MenuItem value={1}>Nomes dos Profissionais de Saúde</MenuItem>
                                <MenuItem value={2}>Profissionais de Saúde</MenuItem>
                                <MenuItem value={3}>Pacientes</MenuItem>
                                <MenuItem value={4}> Pacientes que realizaram consulta</MenuItem>
                                <MenuItem value={5}>Pacientes que realizaram consulta online</MenuItem>
                                <MenuItem value={6}>Pacientes que realizaram Exames</MenuItem>
                                <MenuItem value={7}>Avaliação dos Médicos</MenuItem>
                                <MenuItem value={8}>Profissionais de Saúde Pendente</MenuItem>
                                <MenuItem value={9}>Profissionais de Saúde Pagos</MenuItem>
                                <MenuItem value={10}>Profissionais de Saúde Cancelado</MenuItem>
                                <MenuItem value={11}>Profissionais de Saúde Bloqueado</MenuItem>
                                <MenuItem value={12}>Profissionais de Saúde em Atraso</MenuItem>
                                <MenuItem value={13}>Profissionais de Saúde PLANO PRO</MenuItem>
                                <MenuItem value={14}>Profissionais de Saúd  PLANO PLUS</MenuItem>
                                <MenuItem value={15}>Profissionais de Saúde PLANO STARTER</MenuItem>
                                <MenuItem value={16}>Número de Profissionais</MenuItem>
                                <MenuItem value={17}>Número do Centro Médico</MenuItem>
                                <MenuItem value={18}>Especialidade</MenuItem>
                                <MenuItem value={19}>Responsáveis do Médicos</MenuItem>
                                <MenuItem value={20}>Profissionais de Saúde  PLANO PRO</MenuItem>
                                <MenuItem value={21}>Profissionais de Saúde  PLANO PLUS</MenuItem>
                                <MenuItem value={22}>Profissionais de Saúde  PLANO STARTER</MenuItem>

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

export default ProfissionaisSaude
