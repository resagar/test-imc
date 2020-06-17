import React, { Fragment } from "react"
import { MDBInputGroup, MDBRow as Row, MDBCol as Col, MDBInput as Input  } from "mdbreact"
import { useField } from "formik"

export const FormInputs = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const [fieldCheck, metaCheck] = useField({ ...props, type:'checkbox' })
    const [fieldRadio, metaRadio] = useField({ ...props, type: 'radio' })
    const [fieldText, metaText] = useField(props)
    
    return (
        <Fragment>
                    {props.type === "number" &&
                        <Row center>
                             <Col size="5" sm="4" md="3" lg="2" xl="2">
                                <MDBInputGroup material { ...field } { ...props }/>    
                            </Col>
                        </Row>
                        
                    }
                    
                    {props.type === "radio" &&
                    <Row center>
                         <Col size="12">
                           <Row end>
                                <Col size="8" sm="7" md="7" lg="7" xl="7">
                                    <div className="form-check">
                                        <input id={ props.id } className="form-check-input" { ...fieldRadio } { ...props }/>
                                        <label className="form-check-label" htmlFor={ props.id }>
                                            { label }
                                        </label>
                                    </div>
                                </Col>
                           </Row> 
                        </Col>
                    </Row> 
                    }

                    {props.type === "checkbox" && 
                        <Row center>
                         <Col size="12">
                            <Row end>
                                <Col size="9" sm="8" md="8" lg="7" xl="7">
                                    <div className="form-check">
                                        <input id={ props.id } className="form-check-input" { ...fieldCheck } { ...props } />
                                        <label className="form-check-label" htmlFor={  props.id }>{ label }</label>

                                    </div>
                                </Col>
                            </Row> 
                        </Col>
                    </Row>
                    }
                    {props.type === "text" &&
                        <Row center>
                            <Col size="10" sm="6" md="6" lg="4" xl="4">
                                <Input id={ props.id } { ...fieldText } { ...props }/>
                            </Col>
                        </Row>
                    }
        </Fragment>
    )
}

export const FormContainer = ({ children, title }) => {

    return(
        <Fragment>
            <Row center className="mt-3 mb-3">
                <Col size="11">
                    <div style={{textAlign:"center", fontSize:"18px" }}>{ title }</div>
                </Col>
            </Row>
                { children }
        </Fragment>
    )
}