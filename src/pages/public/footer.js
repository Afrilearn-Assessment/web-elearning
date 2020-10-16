import React, { PureComponent, Fragment } from 'react'
import Moment from "moment"
class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let dated = Moment().format('YYYY')
    
        let profile = (localStorage.getItem("userprofile") && (localStorage.getItem("userprofile") !== null || localStorage.getItem("userprofile") !==undefined))? "/student-profile":"/login"
        let discussions = (localStorage.getItem("userprofile") && (localStorage.getItem("userprofile") !== null || localStorage.getItem("userprofile") !==undefined))? "/student-discussions":"/login"
        let discussionask = (localStorage.getItem("userprofile") && (localStorage.getItem("userprofile") !== null || localStorage.getItem("userprofile") !==undefined))? "/student-discussions-ask":"/login"
        return (
            <Fragment>
                 <div className="js-fix-footer bg-white border-top-2">
                <div className="container page-section py-lg-48pt">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-6 col-md-4 mb-24pt mb-md-0">
                                    <h4 className="text-70">Learn</h4>
                                    <nav className="nav nav-links nav--flush flex-column">
                                        <a className="nav-link" href="/library">Library</a>
                                        <a className="nav-link" href="/library-featured">Featured</a>
                                        <a className="nav-link" href="/library-filters">Explore</a>
                                        <a className="nav-link" href="/paths">Learning Paths</a>
                                    </nav>
                                </div>
                                <div className="col-6 col-md-4 mb-24pt mb-md-0">
                                    <h4 className="text-70">Join us</h4>
                                    <nav className="nav nav-links nav--flush flex-column">
                                        <a className="nav-link" href="/pricing">Pricing</a>
                                        <a className="nav-link" href="/login">Login</a>
                                        <a className="nav-link" href="/signup">Sign Up</a>
                                        <a className="nav-link" href="/signup-payment">Payment</a>
                                    </nav>
                                </div>
                                <div className="col-6 col-md-4 mb-32pt mb-md-0">
                                    <h4 className="text-70">Community</h4>
                                    <nav className="nav nav-links nav--flush flex-column">
                                        <a className="nav-link" href={discussions}>Discussions</a>
                                        <a className="nav-link" href={discussionask}>Ask Question</a>
                                        <a className="nav-link" href={profile}>Student Profile</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-md-right">
                            <p className="text-70 brand justify-content-md-end">
                                <img className="brand-icon" src="./assets/images/logo.png" width="50" alt="E-learning"/> Afrilearn
                            </p>
                            <p className="text-muted mb-0 mb-lg-16pt">E-learning is an online learning platform that helps anyone achieve their personal and professional goals.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-footer page-section py-lg-32pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-4 mb-24pt mb-md-0">
                                <p className="text-white-70 mb-8pt"><strong>Follow us</strong></p>
                                <nav className="nav nav-links nav--flush">
                                    <a href="#" className="nav-link mr-8pt"><img src="./assets/images/icon/footer/facebook-square@2x.png" width="24" height="24" alt="Facebook"/></a>
                                    <a href="#" className="nav-link mr-8pt"><img src="./assets/images/icon/footer/twitter-square@2x.png" width="24" height="24" alt="Twitter"/></a>
                                    <a href="#" className="nav-link mr-8pt"><img src="./assets/images/icon/footer/vimeo-square@2x.png" width="24" height="24" alt="Vimeo"/></a>
                                    <a href="#" className="nav-link"><img src="./assets/images/icon/footer/youtube-square@2x.png" width="24" height="24" alt="YouTube"/></a>
                                </nav>
                            </div>
                            <div className="col-md-6 col-sm-4 mb-24pt mb-md-0 d-flex align-items-center">
                                <a href="/" className="btn btn-outline-white">English <span className="icon--right material-icons">arrow_drop_down</span></a>
                            </div>
                            <div className="col-md-4 text-md-right">
                                <p className="mb-8pt d-flex align-items-md-center justify-content-md-end">
                                    <a href="/" className="text-white-70 text-underline mr-16pt">Terms</a>
                                    <a href="/" className="text-white-70 text-underline">Privacy policy</a>
                                </p>
                                <p className="text-white-50 mb-0">Copyright {dated} &copy; All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Footer