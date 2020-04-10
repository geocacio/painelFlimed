import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';
import FormNoticias from '../../partials/components/FormNoticias';
import FormAddUsuario from '../../partials/components/FormAddUsuario';


export class AddUsuarios extends Component {


    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="row">
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Novo Usuário"/>
                            <PortletBody>
                                <FormAddUsuario />
                            </PortletBody>
                        </Portlet>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddUsuarios
