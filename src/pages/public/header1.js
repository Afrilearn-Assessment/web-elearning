import React, { PureComponent,Fragment } from 'react'
import api from './api'

class Header1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            login:false,
            getstarted:{},
            user:{}
        }
    }
    componentWillMount(){
        
    }
    render() {
        const {login,user} = this.state
        
        return (
            
            <Fragment>
            {/* <!-- Header   --> */}

            <div id="header" className="mdk-header bg-dark js-mdk-header mb-0" data-effects="waterfall blend-background" data-fixed data-condenses>
            <div className="mdk-header__content">

                <div className="navbar navbar-expand-sm navbar-dark bg-dark pr-0 pr-md-16pt" id="default-navbar" data-primary>

                    {/* <!-- Navbar toggler   --> */} 
                    <button className="navbar-toggler navbar-toggler-right d-block d-md-none" type="button" data-toggle="sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Navbar Brand   --> */}
                    <a href="/index" className="navbar-brand">
                        <img className="navbar-brand-icon mr-0 mr-md-8pt" src="./assets/images/logo.png" width="50" alt="E-learning"/>
                        <span className="d-none d-md-block">Afrilearn</span>
                    </a>

                    <button className="btn btn-black mr-16pt" data-toggle="modal" data-target="#courses">Courses <i className="material-icons">arrow_drop_down</i></button>

                    <form className="search-form search-form--black search-form-courses d-none d-md-flex" action="library-filters">
                        <input type="text" className="form-control" placeholder="What would you like to learn?"/>
                        <button className="btn" type="submit" role="button"><i className="material-icons">search</i></button>
                    </form>

                    {/* <!-- Main Navigation   --> */}

                    <ul className="nav navbar-nav ml-auto flex-nowrap" style={{whiteSpace: "nowrap"}}>
                    <li className="d-none d-sm-flex nav-item"><a href="/login" className="btn btn-accent">Get started</a></li>
                    </ul>

                    {/* <!-- // END Main Navigation   --> */}

                </div>

            </div>
        </div>
        </Fragment>
        )
    }
}

export default Header1