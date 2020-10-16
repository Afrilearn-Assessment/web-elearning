import React, { PureComponent, Fragment } from 'react';
import { Link, Redirect } from "react-router-dom";
import Moment from 'moment';
import Loader from 'react-loader-spinner'
import Header1 from './public/header1';
import Footer from './public/footer';
import api from './public/api';
class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            loading:false,
            courses:[],
            totalcourses:"",
            topics:[],
            feedbacks:[],
            instructor:[]
        }
    }

    componentWillMount(){
        this.setState({loading:true})
        // api.get("/getcourses?limit=8&off=0").then((res)=>{
            
        //     if(res){
        //         // console.log(res.data.data.count)
        //         this.setState({totalcourses:res.data.data.count})
        //         this.setState({courses:res.data.data.rows})
        //     }
        // }).catch(err=>{
        //     console.log("courses: ",err)
        // });
        // api.get("/gettopics").then((res)=>{
        //     if(res){
        //         // console.log(res.data.data)
        //         this.setState({topics:res.data.data})
        //     }
        // }).catch(err=>{
        //     console.log("topics: ", err)
        // });
        // api.get("/getfeedbacks").then((resp)=>{
        //     if(resp){
        //         console.log(resp.data.data);
        //         this.setState({feedbacks:resp.data.data})
        //     }
        // }).catch(err=>{
        //     console.log("feedbacks: ", err)
        // });
    }

    render() {
        const {loading,courses,topics,totalcourses,feedbacks,instructor} = this.state
        
        let _topics = topics.map((data,index)=>{
           let topic= `/librarytopics?q=${data.name}`
           
            let value = data.name.substring(0,1).toUpperCase()+data.name.substring(1)
            return (
                <a href={topic} onClick={()=>{localStorage.setItem(`topic`,data.name)}} className="chip mb-16pt mb-md-0 chip-outline-secondary">{value}</a>
            )
        })
        
        // let _instructor = [];
        // let instructorname="";
        let srcs=""
        let _courses = courses.map((data,index)=>{
            srcs = `${data.subject_infos[0].image_logo}`
        
            // this.setState({instructor:res.data.data});
            // instructorname = _instructor.firstname+" "+ _instructor.lastname
            return (
                <Fragment>
                <div className="col-sm-6 col-md-4 col-lg-3">

                    <div className="card card--elevated card-course overlay js-overlay mdk-reveal js-mdk-reveal " data-partial-height="40" data-toggle="popover" data-trigger="click">
                        <a href="/course" className="js-image" data-position="center">
                            <img src={srcs} alt="course"/>
                            <span className="overlay__content">
                                <span className="overlay__action d-flex flex-column text-center">
                                    <i className="material-icons">play_circle_outline</i>
                                    <small>Preview course</small>
                                </span>
                            </span>
                        </a>

                        <div className="mdk-reveal__content">
                            <div className="card-body">
                                <div className="d-flex">
                                    <div className="flex">
                                        <a className="card-title" href="/course">{data.name}</a>
                                        {/* <small className="text-50 font-weight-bold mb-4pt">{instructorname}</small> */}
                                    </div>
                                    <a href="/course" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </Fragment>
            )
           
                
        });
      return (loading ==false)? 
        (
            <Fragment>
                <div className="preloader">
                <div className="sk-double-bounce">
                    <div className="sk-child sk-double-bounce1"></div>
                    <div className="sk-child sk-double-bounce2"></div>
                </div>
            </div>
            </Fragment>
        ):
        (
            <Fragment>
                <div className="mdk-header-layout js-mdk-header-layout">
                    {/* <!-- Header   --> */}
                    <Header1/>
                    {/* <!-- // END Header   --> */}

                    {/* <!-- Header Layout Content   --> */}
                    <div className="mdk-header-layout__content page-content ">

                        <div className="mdk-box mdk-box--bg-gradient-primary bg-dark js-mdk-box position-relative overflow-hidden mb-0" data-effects="parallax-background blend-background">
                            <div className="mdk-box__bg">
                                <div className="mdk-box__bg-front" style={{backgroundImage: "url(assets/images/1280_work-station-straight-on-view.jpg)"}} ></div>
                            </div>
                            <div className="mdk-box__content">
                                <div className="container page__container py-64pt py-md-112pt">
                                    <div className="row align-items-center text-center text-md-left">
                                        <div className="col-md-6 col-lg-5 order-1 order-md-0">
                                            <h1 className="text-white">Learn <span className="d-block d-md-inline-block text-scramble js-text-scramble">Development</span></h1>
                                            <p className="lead mb-32pt mb-lg-48pt text-white">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
                                            <a href="/library" className="btn btn-lg btn-white btn--raised mb-16pt">Browse Courses</a>
                                            <p className="mb-2"><a href="/login" className="text-white-70 text-underline"><strong>Are you a teacher?</strong></a></p>
                                        </div>
                                        <div className="col-md-6 col-lg-7 order-0 order-md-1 text-center mb-32pt mb-md-0">
                                            <img src="./assets/images/macbook.png" alt="macbook" className="home-macbook"/>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- <div className="hero container text-center py-112pt">
                <h1 className="text-white">Learn to Code</h1>
                <p className="lead measure-hero-lead mx-auto mb-48pt text-white">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
                <a href="/library" className="btn btn-lg btn-outline-white">Browse Courses</a>
                </div>   --> */}
                            </div>
                        </div>

                        <div className="bg-white border-bottom-2 py-16pt py-sm-24pt py-md-32pt ">
                            <div className="container page__container">
                                <div className="row align-items-center">
                                    <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                                        <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                                            <i className="material-icons text-primary-light">subscriptions</i>
                                        </div>
                                        <div className="flex">
                                            <p className="mb-0"><strong>4000+ Courses</strong></p>
                                            <p className="text-black-70 mb-0">Explore a wide range of skills.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                                        <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                                            <i className="material-icons text-primary-light">verified_user</i>
                                        </div>
                                        <div className="flex">
                                            <p className="mb-0"><strong>By Industry Experts</strong></p>
                                            <p className="text-black-70 mb-0">Professional development from the best people.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex col-md align-items-center">
                                        <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                                            <i className="material-icons text-primary-light">update</i>
                                        </div>
                                        <div className="flex">
                                            <p className="mb-0"><strong>Unlimited Access</strong></p>
                                            <p className="text-black-70 mb-0">Unlock Library and learn any topic with one subscription.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="page-section border-bottom-2">
                            <div className="container page__container">
                                <div className="row align-items-end mb-16pt mb-md-32pt">
                                    <div className="col-md-auto mb-32pt mb-md-0">
                                        <div className="page-headline page-headline--title text-center text-md-left p-0">
                                            <h2>Top Courses</h2>
                                        </div>
                                    </div>
                                    <div className="col-md text-center text-md-right d-flex justify-content-md-end align-items-center flex-wrap" style={{whiteSpace: "nowrap" }} >
                                        <h5 className="mr-24pt mb-md-0 d-md-inline-block">Popular topics</h5>
                                        {_topics}
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="card card--elevated card-course overlay js-overlay mdk-reveal js-mdk-reveal " data-partial-height={40} data-toggle="popover" data-trigger="click">
                                        <a href="/course" className="js-image" data-position="center">
                                        <img src="./assets/images/paths/angular_430x168.png" alt="course" />
                                        <span className="overlay__content">
                                            <span className="overlay__action d-flex flex-column text-center">
                                            <i className="material-icons">play_circle_outline</i>
                                            <small>Preview course</small>
                                            </span>
                                        </span>
                                        </a>
                                        <span className="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">NEW</span>
                                        <div className="mdk-reveal__content">
                                        <div className="card-body">
                                            <div className="d-flex">
                                            <div className="flex">
                                                <a className="card-title" href="/course">Learn Angular fundamentals</a>
                                                <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                            </div>
                                            <a href="/course" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
                                            </div>
                                            <div className="d-flex">
                                            <div className="rating flex">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                            <small className="text-50">6 hours</small>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                        <div className="media-left">
                                            <img src="./assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                        </div>
                                        <div className="media-body">
                                            <div className="card-title mb-0">Learn Angular fundamentals</div>
                                            <p className="lh-1 mb-0">
                                            <span className="text-black-50 small">with</span>
                                            <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                            </p>
                                        </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                        </div>
                                        </div>
                                        <div className="row align-items-center">
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                            </div>
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                            </div>
                                        </div>
                                        <div className="col text-right">
                                            <a href="/course" className="btn btn-primary">Watch trailer</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="card card--elevated card-course overlay js-overlay mdk-reveal js-mdk-reveal " data-partial-height={40} data-toggle="popover" data-trigger="click">
                                        <a href="/course" className="js-image" data-position="center">
                                        <img src="./assets/images/paths/swift_430x168.png" alt="course" />
                                        <span className="overlay__content">
                                            <span className="overlay__action d-flex flex-column text-center">
                                            <i className="material-icons">play_circle_outline</i>
                                            <small>Preview course</small>
                                            </span>
                                        </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                        <div className="card-body">
                                            <div className="d-flex">
                                            <div className="flex">
                                                <a className="card-title" href="/course">Build an iOS Application in Swift</a>
                                                <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                            </div>
                                            <a href="/course" className="ml-4pt material-icons text-accent card-course__icon-favorite">favorite</a>
                                            </div>
                                            <div className="d-flex">
                                            <div className="rating flex">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                            <small className="text-50">6 hours</small>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                        <div className="media-left">
                                            <img src="./assets/images/paths/swift_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                        </div>
                                        <div className="media-body">
                                            <div className="card-title mb-0">Build an iOS Application in Swift</div>
                                            <p className="lh-1 mb-0">
                                            <span className="text-black-50 small">with</span>
                                            <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                            </p>
                                        </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                        </div>
                                        </div>
                                        <div className="row align-items-center">
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                            </div>
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                            </div>
                                        </div>
                                        <div className="col text-right">
                                            <a href="/course" className="btn btn-primary">Watch trailer</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="card card--elevated card-course overlay js-overlay mdk-reveal js-mdk-reveal " data-partial-height={40} data-toggle="popover" data-trigger="click">
                                        <a href="/course" className="js-image" data-position="center">
                                        <img src="./assets/images/paths/wordpress_430x168.png" alt="course" />
                                        <span className="overlay__content">
                                            <span className="overlay__action d-flex flex-column text-center">
                                            <i className="material-icons">play_circle_outline</i>
                                            <small>Preview course</small>
                                            </span>
                                        </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                        <div className="card-body">
                                            <div className="d-flex">
                                            <div className="flex">
                                                <a className="card-title" href="/course">Build a WordPress Website</a>
                                                <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                            </div>
                                            <a href="/course" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
                                            </div>
                                            <div className="d-flex">
                                            <div className="rating flex">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                            <small className="text-50">6 hours</small>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                        <div className="media-left">
                                            <img src="./assets/images/paths/wordpress_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                        </div>
                                        <div className="media-body">
                                            <div className="card-title mb-0">Build a WordPress Website</div>
                                            <p className="lh-1 mb-0">
                                            <span className="text-black-50 small">with</span>
                                            <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                            </p>
                                        </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                        </div>
                                        </div>
                                        <div className="row align-items-center">
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                            </div>
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                            </div>
                                        </div>
                                        <div className="col text-right">
                                            <a href="/course" className="btn btn-primary">Watch trailer</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="card card--elevated card-course overlay js-overlay mdk-reveal js-mdk-reveal " data-partial-height={40} data-toggle="popover" data-trigger="click">
                                        <a href="/course" className="js-image" data-position="left">
                                        <img src="./assets/images/paths/angular_testing_430x168.png" alt="course" />
                                        <span className="overlay__content">
                                            <span className="overlay__action d-flex flex-column text-center">
                                            <i className="material-icons">play_circle_outline</i>
                                            <small>Preview course</small>
                                            </span>
                                        </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                        <div className="card-body">
                                            <div className="d-flex">
                                            <div className="flex">
                                                <a className="card-title" href="/course">Angular Unit Testing</a>
                                                <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                            </div>
                                            <a href="/course" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
                                            </div>
                                            <div className="d-flex">
                                            <div className="rating flex">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                            <small className="text-50">6 hours</small>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                        <div className="media-left">
                                            <img src="./assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                        </div>
                                        <div className="media-body">
                                            <div className="card-title mb-0">Angular Unit Testing</div>
                                            <p className="lh-1 mb-0">
                                            <span className="text-black-50 small">with</span>
                                            <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                            </p>
                                        </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                        </div>
                                        </div>
                                        <div className="row align-items-center">
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                            </div>
                                            <div className="d-flex align-items-center mb-4pt">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                            <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                            <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                            </div>
                                        </div>
                                        <div className="col text-right">
                                            <a href="/course" className="btn btn-primary">Watch trailer</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="pt-md-16pt text-center">
                                    <a href="/library" className="btn btn-outline-secondary">Browse Courses</a>
                                </div>
                            </div>
                        </div>

                        <div className="page-section bg-white border-bottom-2">
                            <div className="container page__container">
                                <div className="page-headline text-center">
                                    <h2>Learning Paths</h2>
                                    <p className="lead text-black-70 measure-lead mx-auto">Stop guessing what to learn next and start making progress faster based on your current skill level and experience.</p>
                                </div>

                                <div className="row d-block js-mdk-carousel">
                                    <div className="mdk-carousel__content">


                                        <div className="col-12 col-sm-6 col-md-4">

                                            <a href="/path" className="card stack stack--hidden-hover card-featured-path overlay js-overlay">
                                                <span className="card-featured-path__content">
                                                    <span data-position="center" className="js-image" data-height="96">
                                                        <img src="./assets/images/paths/angular_430x168.png" alt="course"/>
                                                    </span>
                                                    <span className="overlay__content">
                                                        <span className="overlay__action card-title mb-0">Angular</span>
                                                    </span>
                                                </span>
                                            </a>

                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">

                                            <a href="/path" className="card stack stack--hidden-hover card-featured-path overlay js-overlay">
                                                <span className="card-featured-path__content">
                                                    <span data-position="left" className="js-image" data-height="96">
                                                        <img src="./assets/images/paths/react_430x168.png" alt="course"/>
                                                    </span>
                                                    <span className="overlay__content">
                                                        <span className="overlay__action card-title mb-0">React Native</span>
                                                    </span>
                                                </span>
                                            </a>

                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">

                                            <a href="/path" className="card stack stack--hidden-hover card-featured-path overlay js-overlay">
                                                <span className="card-featured-path__content">
                                                    <span data-position="center" className="js-image" data-height="96">
                                                        <img src="./assets/images/paths/swift_430x168.png" alt="course"/>
                                                    </span>
                                                    <span className="overlay__content">
                                                        <span className="overlay__action card-title mb-0">Swift</span>
                                                    </span>
                                                </span>
                                            </a>

                                        </div>

                                    </div>
                                </div>

                                <div className="row mt-16pt mt-lg-32pt">
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">Angular</span>
                                                <span className="text-muted d-flex lh-1">24 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">React Native</span>
                                                <span className="text-muted d-flex lh-1">18 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">Swift</span>
                                                <span className="text-muted d-flex lh-1">22 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">WordPress</span>
                                                <span className="text-muted d-flex lh-1">13 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">Swift</span>
                                                <span className="text-muted d-flex lh-1">22 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">WordPress</span>
                                                <span className="text-muted d-flex lh-1">13 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">Development Tools</span>
                                                <span className="text-muted d-flex lh-1">5 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="col-i8-6 col-md-3 mb-16pt">
                                        <a href="/path" className="media">
                                            <img src="./assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded"/>
                                            <span className="media-body">
                                                <span className="card-title text-body d-block mb-0">React Native</span>
                                                <span className="text-muted d-flex lh-1">18 courses</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-8pt pt-md-32pt text-center">
                                    <a href="/paths" className="btn btn-outline-secondary">Browse Learning Paths</a>
                                </div>
                            </div>
                        </div>

                        <div className="page-section">
                            <div className="container page__container">
                                <div className="page-headline text-center">
                                    <h2>Feedback</h2>
                                    <p className="lead measure-lead mx-auto text-black-70">What other students turned professionals have to say about us after learning with us and reaching their goals.</p>
                                </div>

                                <div className="position-relative carousel-card">
                                    <div className="row d-block js-mdk-carousel" id="carousel-feedback">
                                        <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-feedback" role="button" data-slide="next">
                                            <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                        <div className="mdk-carousel__content" style={{width:"348px"}}>
                                        <div className="col-12 col-md-6 mdk-carousel__item" style={{width:"348px"}}>
                                            <div className="card card--elevated card-body">
                                                <blockquote className="mb-0">
                                                    <p className="text-70">What other students turned professionals have to say about us after learning with us and reaching their goals.</p>

                                                    <div className="media">
                                                        <div className="media-left">
                                                            <img src="./assets/images/people/110/guy-1.jpg" width="40" alt="avatar" className="rounded-circle"/>
                                                        </div>
                                                        <div className="media-body media-middle">
                                                            <p className="mb-0"><a href="" className="text-body"><strong>Adeleye Adewale</strong></a></p>
                                                            <div className="rating">
                                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </blockquote>
                                            </div>
                                        </div>
                                            
                                        </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>



                    <Footer/>

                    </div>
                    {/* <!-- // END Header Layout Content   --> */}

                </div>
                {/* <!-- // END Header Layout   --> */}

                <div className="navbar navbar-expand-sm navbar-mini navbar-dark fixed-bottom bg-dark d-none d-md-flex p-0" id="demo-navbar">
                    
                </div>
            
                <div className="modal courses-modal" id="courses" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-i8-plus bg-body pr-0">
                                        <div className="py-16pt pl-16pt menu">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#courses-development" data-toggle="tab">Development</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#courses-design" data-toggle="tab">Design</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#courses-photography" data-toggle="tab">Photography</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#courses-marketing" data-toggle="tab">Marketing</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#courses-business" data-toggle="tab">Business</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-6 col-i8-plus-auto tab-content">


                                        <div id="courses-development" className="tab-pane show active">
                                            <div className="row no-gutters">
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Courses</h5>
                                                            <ul className="nav flex-column mb-24pt">

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Web Development</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">JavaScript</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">HTML</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">CSS</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">WordPress</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">PHP</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">iOS Development</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <a href="/library" className="btn btn-block text-center btn-secondary">Library</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Learning Paths</h5>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Angular</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Swift</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">React Native</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">WordPress</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-24pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Development Tools</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="/paths" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div id="courses-design" className="tab-pane">
                                            <div className="row no-gutters">
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Courses</h5>
                                                            <ul className="nav flex-column mb-24pt">

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Illustration</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Design Skills</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Design Techniques</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Page Layout</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Projects</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Drawing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Typography</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <a href="/library" className="btn btn-block text-center btn-secondary">Library</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Learning Paths</h5>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Angular</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Swift</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">React Native</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">WordPress</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-24pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Development Tools</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="/paths" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div id="courses-photography" className="tab-pane">
                                            <div className="row no-gutters">
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Courses</h5>
                                                            <ul className="nav flex-column mb-24pt">

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Cameras</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Raw Processing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Masking</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Compositing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Portraits</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Photo Management</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Lighting</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <a href="/library" className="btn btn-block text-center btn-secondary">Library</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Learning Paths</h5>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Angular</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Swift</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">React Native</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">WordPress</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-24pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Development Tools</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="/paths" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div id="courses-marketing" className="tab-pane">
                                            <div className="row no-gutters">
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Courses</h5>
                                                            <ul className="nav flex-column mb-24pt">

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Small Business</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Marketing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Enterprise Marketing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Content Marketing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Online Marketing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Social Media Marketing</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Advertising</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <a href="/library" className="btn btn-block text-center btn-secondary">Library</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Learning Paths</h5>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Angular</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Swift</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">React Native</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">WordPress</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-24pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Development Tools</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="/paths" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div id="courses-business" className="tab-pane">
                                            <div className="row no-gutters">
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Courses</h5>
                                                            <ul className="nav flex-column mb-24pt">

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Business Skills</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Productivity</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Communication</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Leadership</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Management</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Career Development</a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a className="nav-link px-0" href="/library">Spreadsheets</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <a href="/library" className="btn btn-block text-center btn-secondary">Library</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-0">
                                                    <div className="p-24pt d-flex h-100 flex-column">
                                                        <div className="flex">
                                                            <h5 className="text-black-100">Learning Paths</h5>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/angular_40x40@2x.png" width="40" height="40" alt="Angular" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Angular</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">24 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Swift" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Swift</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">22 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/react_40x40@2x.png" width="40" height="40" alt="React Native" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">React Native</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">18 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-16pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/wordpress_40x40@2x.png" width="40" height="40" alt="WordPress" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">WordPress</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">13 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="mb-24pt">
                                                                <a href="/path" className="media text-black-100">
                                                                    <img src="./assets/images/paths/devops_40x40@2x.png" width="40" height="40" alt="Development Tools" className="media-left rounded"/>
                                                                    <span className="media-body">
                                                                        <span className="card-title d-block mb-0">Development Tools</span>
                                                                        <span className="text-muted text-black-70 d-flex lh-1">5 courses</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="/paths" className="btn btn-block text-center btn-outline-secondary">Learning Paths</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
        )
    }
}

export default Index
