import React from 'react';
import { Box, Col } from 'adminlte-2-react';

export default props => (
    <Col xs={12} sm={6} md="4">
        <Box className={`small-box  bg-${props.color}`} >
            <div className="inner">
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
            <div className="icon">
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </Box>
    </Col>
)