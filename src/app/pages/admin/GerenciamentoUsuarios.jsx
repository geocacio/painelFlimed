import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';

export class GerenciamentoUsuarios extends Component {

    state = {
        tableData: {
            columns: [
                {
                label: 'Foto',
                field: 'foto',
                width: 150
                },
                {
                label: 'Nome',
                field: 'nome',
                sort: 'asc',
                width: 200
                },
                {
                label: 'E-mail',
                field: 'email',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Tipo de Usuário',
                field: 'tipo_usuario',
                sort: 'asc',
                width: 200
                },
                {
                label: 'Telefone',
                field: 'telefone',
                width: 200
                },
                {
                label: 'Criado Em',
                field: 'criado_em',
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
                nome: 'John Doe',
                email: 'John@email.com',
                tipo_usuario: 'John@email.com',
                Telefone: '(99) 9 9999-9999',
                criado_em: '03/03/2020',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-eye text-success" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                foto: <Image src="_metronic/_assets/images/perfil.png" thumbnail />,
                nome: 'John Doe',
                email: 'John@email.com',
                tipo_usuario: 'John@email.com',
                Telefone: '(99) 9 9999-9999',
                criado_em: '03/03/2020',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-eye text-success" title="Bloquear" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-dark"><i key="cell1" className="fas fa-trash text-danger" title="Excluir" aria-hidden="true"></i></Button>
                    </ButtonToolbar>,
                },
                {
                foto: <Image src="_metronic/_assets/images/perfil.png" thumbnail />,
                nome: 'John Doe',
                email: 'John@email.com',
                tipo_usuario: 'John@email.com',
                Telefone: '(99) 9 9999-9999',
                criado_em: '03/03/2020',
                acoes: <ButtonToolbar style={{'flex-wrap': 'nowrap'}}>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-edit text-warning" title="Editar" aria-hidden="true"></i></Button>
                        <Button style={{'min-width': 'auto', 'padding': '6px'}} variant="outline-warning"><i key="cell1" className="fas fa-eye text-success" title="Bloquear" aria-hidden="true"></i></Button>
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
                            <a href="novo-usuario" className="btn btn-success"><i key="cell1" className="fas fa-plus mr-1" aria-hidden="true"></i> Adicionar</a>

                        </div>
                    )}/>
                    <PortletBody>
                        <DataTable data={this.state.tableData} />
                    </PortletBody>
                </Portlet>
            </React.Fragment>
        )
    }
}

export default GerenciamentoUsuarios
