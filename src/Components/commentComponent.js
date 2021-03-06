import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Input, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.username, values.message);
    }

    render() {
        const maxLength = (len) => (val) => !(val) || (val.length <= len);

        return ( <
            div >
            <
            Button outline color = "secondary"
            onClick = { this.toggleModal } > < span className = "fa fa-pencil fa-lg" / > Submit Comment < /Button> <
            Modal isOpen = { this.state.isModalOpen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } > Submit Comment < /ModalHeader> <
            ModalBody >
            <
            LocalForm onSubmit = {
                (values) => this.handleSubmit(values) } >
            <
            Row className = "form-group" >
            <
            Label htmlFor = "rating"
            md = { 2 } > Rating < /Label> <
            Col md = { 10 } >
            <
            Control.select model = ".rating"
            name = "rating"
            className = "form-control" >
            <
            option > 1 < /option> <
            option > 2 < /option> <
            option > 3 < /option> <
            option > 4 < /option> <
            option > 5 < /option> <
            /Control.select> <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Label htmlFor = "username"
            md = { 2 } > Username < /Label> <
            Col md = { 10 } >
            <
            Control.text model = ".username"
            id = "username"
            name = "username"
            placeholder = "Your Name"
            className = "form-control"
            validators = {
                {
                    maxLength: maxLength(15)
                }
            }
            /> <
            Errors className = "text-danger"
            model = ".username"
            show = "touched"
            messages = {
                {
                    maxLength: 'Must be 15 characters or less'
                }
            }
            /> <
            /Col> <
            /Row>

            <
            Row className = "form-group" >
            <
            Label htmlFor = "message"
            md = { 2 } > Comment < /Label> <
            Col md = { 10 } >
            <
            Control.textarea model = ".message"
            id = "message"
            name = "message"
            rows = "6"
            className = "form-control" / >
            <
            /Col> <
            /Row> <
            Row className = "form-group" >
            <
            Col md = {
                { size: 10, offset: 2 } } >
            <
            Button type = "submit"
            color = "primary" >
            Submit <
            /Button> <
            /Col> <
            /Row> <
            /LocalForm>  <
            /ModalBody> <
            /Modal> <
            /div>
        );
    }
}

export default CommentForm;