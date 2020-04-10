import React, { Component } from 'react'
import DataTable from '../../partials/components/DataTable'
import { Box, Container, CssBaseline, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Portlet, PortletBody, PortletHeader, PortletHeaderToolbar } from '../../partials/content/Portlet';
import { MDBBtn } from 'mdbreact';
import { ButtonToolbar, Image, Dropdown } from 'react-bootstrap';
import FormTermos from '../../partials/components/FormTemos';


export class PoliticaPrivacidade extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="row">
                    <div className="col-12">
                        <Portlet>
                            <PortletHeader title= "Política de Privacidade"/>
                            <PortletBody>
                                <FormTermos />
                            </PortletBody>
                        </Portlet>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PoliticaPrivacidade