import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';
import FormNoticias from '../../partials/components/FormNoticias';
import FormAddUsuario from '../../partials/components/FormAddUsuario';
import FormAddPlanos from '../../partials/components/FormAddPlanos';


export class AddPlanos extends Component {


    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="row">
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title="Novo Plano"/>
                            <PortletBody>
                                <FormAddPlanos />
                            </PortletBody>
                        </Portlet>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddPlanos
