import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown, InputGroup } from 'react-bootstrap';
import { Form } from 'formik';
import FormCategoriasProfissionais from '../../partials/components/FormCategoriasProfissionais';

export class AddCategoriasProfissionais extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Portlet>
                    <PortletHeader title="Cadastro de Categorias Profissionais"/>
                    <PortletBody>
                        <FormCategoriasProfissionais />
                    </PortletBody>
                </Portlet>
            </React.Fragment>
        )
    }
}

export default AddCategoriasProfissionais
