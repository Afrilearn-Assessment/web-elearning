import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

const NotFound = () => (
  <Fragment>
<div className="wrapper-content">
  <div className="container center-contents">


            <h1 className="display-2 text-primary"><strong>404</strong></h1>
            <h2 className="">Page not found</h2>
            <p className="">Sorry! There might be some error on this page...</p>
            <Link to="/" className="btn btn-primary" >Go back to Home</Link>

  </div>
  
</div>
  </Fragment>
);

export default NotFound;