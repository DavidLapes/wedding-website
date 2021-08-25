import React, {Component} from "react";
import {connect} from "react-redux";
import Select from "react-select";
import {fetchGuests} from "./services/actions/guests/fetchGuests";
import {submitRSVP} from "./services/actions/guests/submitRSVP";

class App extends Component {

    state = {
        state:              null,
        city:               null,
        street:             null,
        orientation_number: null,
        descriptive_number: null,
        postal_code:        null,
        //TODO: Default YES
        accommodation:      null,
        email:              null,
        phone:              null,
        guest_id:           null,
        guests:             []
    }

    componentDidMount() {
        this.props.dispatch(fetchGuests());
        if(this.props.guests) {
            this.setState({
                guests: this.formatOptions(this.props.guests)
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.guests !== this.props.guests) {
            this.setState({
                guests: this.formatOptions(this.props.guests)
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleAccommodation = (e) => {
        this.setState({
            [e.target.id]: e.target.checked
        })
    };

    handleNameChange = (e) => {
        this.setState({
            guest_id: e.id
        });
    };

    formatOptions = (data) => {
        return data.map(x => {
            console.log(x)
            return {
                id: x.id,
                value: x.id,
                label: x.full_name
            }
        });
    }

    handleSubmit = () => {
        console.log("Submit!");
        console.log(this.state)
        //TODO: Submit
        //TODO: Validation of input fields
        //TODO: Response messages
        //TODO: Localization of default CZECH
        //TODO: Load guests to Select and use IDs
        /*this.props.dispatch(
            submitRSVP(
                this.state.guest_id,
                {
                    state: this.state.state,
                    city: this.state.city,
                    street: this.state.street,
                    orientation_number: this.state.orientation_number,
                    descriptive_number: this.state.descriptive_number,
                    postal_code: this.state.postal_code,
                    accommodation: this.state.accommodation,
                    email: this.state.email,
                    phone: this.state.email
                }
            )
        );*/
    };

    render() {
        return (
            <div>
                <nav id="navbar" className="navbar navbar-expand-lg fixed-top p-0 text-white">
                    <div className="d-lg-flex w-100 align-items-start">
                        <a className="navbar-brand text-primary page-scroll" href="#top">
                            <img className="d-none d-lg-block navbar-brand__img" src="img/logo.png" alt="logo"/>
                            <img className="d-lg-none navbar-brand__img" src="img/logo-small.png" alt="logo"/>
                        </a>
                        <button type="button" className="d-lg-none navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a data-localize="navigation.home" className="nav-link active page-scroll"
                                       href="#top">Introduction</a>
                                </li>
                                <li className="nav-item">
                                    <a data-localize="navigation.events" className="nav-link page-scroll"
                                       href="#events">Events</a>
                                </li>
                                <li className="nav-item">
                                    <a data-localize="navigation.gallery" className="nav-link page-scroll"
                                       href="#gallery">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a data-localize="navigation.rsvp" className="nav-link page-scroll"
                                       href="#rsvp">Attendance</a>
                                </li>
                                <li className="nav-item d-flex ml-lg-4">
                                    <a className="nav-link nav-link_social"
                                       href="https://www.facebook.com/terkaborkovcova31">
                                        <i className="fa fa-2x fa-facebook-square"></i>
                                    </a>
                                    <a className="nav-link nav-link_social"
                                       href="https://www.instagram.com/terkaborkovcova31">
                                        <i className="fa fa-2x fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="top" className="main-hero">
                    <div className="c-hero-banner c-hero-banner--main">
                        <div className="cover"></div>
                        <div className="c-hero-banner__section c-hero-banner__image">
                            <img className="lazyload" src="img/main-image.jpg" alt="cover"/>
                        </div>
                        <div className="mask">
                            <img src="img/mask.png" alt=""/>
                        </div>
                    </div>
                </div>
                <section className="love-story section position-relative text-center">
                    <div className="d-none d-sm-block love-story__flower-parallax position-absolute parallax">
                        <img src="img/ls-flower-prlx.png" alt="flower"/>
                    </div>
                    <div className="container">
                        <div className="love-story__flowers m-auto">
                            <img src="img/story-flowers.png" alt="flowers"/>
                        </div>
                        <h1 data-localize="love-story.title" className="title">Love story</h1>
                        <p data-localize="love-story.text" className="m-auto">-------------------</p>
                    </div>
                </section>
                <section className="date-section section section--blue countdown text-center">
                    <div className="container">
                        <div className="date-section__flowers m-auto">
                            <img src="img/date-flowers.png" alt="flowers"/>
                        </div>
                        <div className="date-section__block">
                            <div className="d-inline-block">
                                <h2 className="title--special">02. 09. 2022</h2>
                                <h3 data-localize="place" className="date-section__place">
                                    Stodola Suška
                                    <br/>
                                    Kravsko, Czech Republic
                                </h3>
                            </div>
                        </div>
                        <div id="timer" className="timer d-flex justify-content-center">
                            <div className="timer-item">
                                <span className="days timer__digit"></span>
                                <div data-localize="countdown.days" className="timer__text">days</div>
                            </div>
                            <div className="timer-item">
                                <span className="hours timer__digit"></span>
                                <div data-localize="countdown.hours" className="timer__text">hours</div>
                            </div>
                            <div className="timer-item">
                                <span className="minutes timer__digit"></span>
                                <div data-localize="countdown.minutes" className="timer__text">minutes</div>
                            </div>
                            <div className="timer-item">
                                <span className="seconds timer__digit"></span>
                                <div data-localize="countdown.seconds" className="timer__text">seconds</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="events" className="events section text-center">
                    <div className="container">
                        <h1 data-localize="events.title" className="title">Events</h1>
                        <p data-localize="events.paragraph" className="subtitle mx-auto">-------------</p>
                        <div id="accordion">
                            <div className="accordion__header d-flex justify-content-center">
                                <button data-localize="events.tab-ceremony.title" className="btn btn-link"
                                        data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                    Ceremony
                                </button>
                                <button data-localize="events.tab-reception.title" className="btn btn-link collapsed"
                                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                    Reception
                                </button>
                                <button data-localize="events.tab-accommodation.title" className="btn btn-link collapsed"
                                        data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    Accommodation
                                </button>
                            </div>
                            <div className="accordion__body">
                                <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                    <div className="row">
                                        <h2 data-localize="events.tab-ceremony.title"
                                            className="accordion__item-heading">Ceremony</h2>
                                        <div className="col-md-6">
                                            <img className="accordion__item-img" src="img/ceremony.png" alt="ceremony"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h3 data-localize="events.tab-ceremony.when-and-where.title"
                                                className="accordion__item-subheading">When and where</h3>
                                            <p data-localize="events.tab-ceremony.when-and-where.location"
                                               className="d-flex align-items-center"><i
                                                className="fa fa-2x fa-map-marker align-middle pr-1"></i>Stodola Suška, 671 51
                                                Kravsko, Czech Republic</p>
                                            <p data-localize="events.tab-ceremony.when-and-where.time"
                                               className="d-flex align-items-center"><i
                                                className="fa fa-2x fa-clock-o align-middle pr-1"></i>09:00 - 10:30, Sep 15,
                                                2018 </p>
                                            <p data-localize="events.tab-ceremony.when-and-where.code"
                                               className="font-weight-bold">Keep it classy</p>
                                            <div data-localize="events.tab-ceremony.when-and-where.show-on-map"
                                                 className="btn btn-outline-dark rounded-0 px-2 py-1">Show on map
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                    <div className="row">
                                        <h2 data-localize="events.tab-reception.title"
                                            className="accordion__item-heading">Reception</h2>
                                        <div className="col-md-6">
                                            <img className="accordion__item-img" src="img/dinner.jpg" alt="ceremony"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h3 data-localize="events.tab-reception.when-and-where.title"
                                                className="accordion__item-subheading">When and where</h3>
                                            <p data-localize="events.tab-reception.when-and-where.location"
                                               className="d-flex align-items-center"><i
                                                className="fa fa-2x fa-map-marker align-middle pr-1"></i>Stodola Suška, 671 51
                                                Kravsko, Czech Republic</p>
                                            <p data-localize="events.tab-reception.when-and-where.time"
                                               className="d-flex align-items-center"><i
                                                className="fa fa-2x fa-clock-o align-middle pr-1"></i>17:00 - 21:00, Sep 15,
                                                2018</p>
                                            <p data-localize="events.tab-reception.when-and-where.code"
                                               className="font-weight-bold">Keep it classy</p>
                                            <div data-localize="events.tab-reception.when-and-where.show-on-map"
                                                 className="btn btn-outline-dark rounded-0 px-2 py-1">Show on map
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseThree" className="collapse" data-parent="#accordion">
                                    <div className="row">
                                        <h2 data-localize="events.tab-accommodation.title"
                                            className="accordion__item-heading">Accommodation</h2>
                                        <div className="col-md-6">
                                            <img className="accordion__item-img" src="img/party.jpg" alt="ceremony"/>
                                        </div>
                                        <div className="col-md-6 text-left">
                                            <h3 data-localize="events.tab-accommodation.when-and-where.title"
                                                className="accordion__item-subheading">When and where</h3>
                                            <p data-localize="events.tab-accommodation.when-and-where.location"
                                               className="d-flex align-items-center"><i
                                                className="fa fa-2x fa-map-marker align-middle pr-1"></i>Kocanda, Kravsko 45,
                                                671 51 Kravsko, Czech Republic</p>
                                            <p data-localize="events.tab-accommodation.when-and-where.time"
                                               className="d-flex align-items-center"><i
                                                className="fa fa-2x fa-clock-o align-middle pr-1"></i>21:00 - 00:00, Sep 15,
                                                2018</p>
                                            <p data-localize="events.tab-accommodation.when-and-where.code"
                                               className="font-weight-bold">Keep it classy</p>
                                            <div data-localize="events.tab-accommodation.when-and-where.show-on-map"
                                                 className="btn btn-outline-dark rounded-0 px-2 py-1">Show on map
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="events__info">
                            <div className="row text-left">
                                <div className="col-md-4 event__info-item">
                                    <h6 data-localize="events.column-arrival.title"
                                        className="event__info-header font-weight-bold">How you get there</h6>
                                    <p data-localize="events.column-arrival.paragraph">-----------------</p>
                                </div>
                                <div className="col-md-4 event__info-item">
                                    <h6 data-localize="events.column-accommodation.title"
                                        className="event__info-header font-weight-bold">Accommodation place</h6>
                                    <p data-localize="events.column-accommodation.paragraph">-----------------</p>
                                </div>
                                <div className="col-md-4 event__info-item">
                                    <h6 data-localize="events.column-dresscode.title"
                                        className="event__info-header font-weight-bold">Dresscode</h6>
                                    <p data-localize="events.column-dresscode.paragraph">
                                        ----------------- <b>Semiformal dresscode</b>.
                                        -----------------
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="gallery" className="gallery section text-center">
                    <div className="d-none d-lg-block gallery__flower-prlx-l position-absolute parallax">
                        <img src="img/gallery-prlx-l.png" alt="flower"/>
                    </div>
                    <div className="d-none d-lg-block gallery__flower-prlx-r position-absolute parallax">
                        <img src="img/gallery-prlx-r.png" alt="flower"/>
                    </div>
                    <div className="container position-relative">
                        <h1 data-localize="gallery.title" className="title">Gallery</h1>
                        <p data-localize="gallery.paragraph" className="subtitle mx-auto">----------</p>
                        <div className="gallery__slider">
                            <div className="slick-gallery slick mb-0">
                                <div className="slider__item">
                                    <img src="img/slider/gallery1.jpg" alt="slider"/>
                                </div>
                                <div className="slider__item">
                                    <img src="img/slider/gallery2.jpg" alt="slider"/>
                                </div>
                                <div className="slider__item">
                                    <img src="img/slider/gallery3.jpg" alt="slider"/>
                                </div>
                                <div className="slider__item">
                                    <img src="img/slider/gallery4.jpg" alt="slider"/>
                                </div>
                                <div className="slider__item">
                                    <img src="img/slider/gallery5.jpg" alt="slider"/>
                                </div>
                                <div className="slider__item">
                                    <img src="img/slider/gallery6.jpg" alt="slider"/>
                                </div>
                                <div className="slider__item">
                                    <img src="img/slider/gallery7.jpg" alt="slider"/>
                                </div>
                                <div className="slider__item">
                                    <img src="img/slider/gallery8.jpg" alt="slider"/>
                                </div>
                            </div>
                            <div className="gallery__slider-num d-none d-lg-flex">
                                <div className="gallery__slider-current pr-1"></div>
                                <div data-localize="gallery.from-count" className="pr-1">z</div>
                                <div className="gallery__slider-all"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wishes section text-center">
                    <div className="container">
                        <h1 data-localize="bridesmaids-groomsmen.title" className="title">Bridesmaids and Groomsmen</h1>
                        <p data-localize="bridesmaids-groomsmen.paragraph"
                           className="subtitle m-auto">-----------------------------------</p>
                        <div className="wishes__slider">
                            <div className="slick slick-wishes mb-0">
                                <div className="slider__item">
                                    <div className="wishes__person">
                                        <img className="rounded-circle m-auto" src="img/person1.jpg" alt="slider"/>
                                    </div>
                                    <h4 data-localize="bridesmaids-groomsmen.denisa.title"
                                        className="wishes__title font-weight-bold">Denise Borkovcová</h4>
                                    <p data-localize="bridesmaids-groomsmen.denisa.paragraph" className="mx-auto">"With warm
                                        congratulations to a very special pair. May you always find in each other the love,
                                        laughter and happiness that only partners in life share!"</p>
                                </div>
                                <div className="slider__item">
                                    <div className="wishes__person">
                                        <img className="rounded-circle m-auto" src="img/person1.jpg" alt="slider"/>
                                    </div>
                                    <h4 data-localize="bridesmaids-groomsmen.janca.title"
                                        className="wishes__title font-weight-bold">Jane Elčknerová</h4>
                                    <p data-localize="bridesmaids-groomsmen.janca.paragraph" className="mx-auto">"With warm
                                        congratulations to a very special pair. May you always find in each other the love,
                                        laughter and happiness that only partners in life share!"</p>
                                </div>
                                <div className="slider__item">
                                    <div className="wishes__person">
                                        <img className="rounded-circle m-auto" src="img/person2.jpg" alt="slider"/>
                                    </div>
                                    <h4 data-localize="bridesmaids-groomsmen.kuba.title"
                                        className="wishes__title font-weight-bold">Jacob Lapeš</h4>
                                    <p data-localize="bridesmaids-groomsmen.kuba.paragraph" className="mx-auto">"True love
                                        stories never end! Happy wedding day and may there be many more chapters in the
                                        wonderful story of your love for one another."</p>
                                </div>
                                <div className="slider__item">
                                    <div className="wishes__person">
                                        <img className="rounded-circle m-auto" src="img/person3.jpg" alt="slider"/>
                                    </div>
                                    <h4 data-localize="bridesmaids-groomsmen.tom.title"
                                        className="wishes__title font-weight-bold">Tomas Tégl</h4>
                                    <p data-localize="bridesmaids-groomsmen.tom.paragraph" className="mx-auto">"A wedding wish
                                        for two special person: love is best when shared by two. You know that together you are
                                        stronger, together you are one. Have a wonderful married life!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gifts section section--blue text-center">
                    <div className="container">
                        <h1 data-localize="wedding-gifts.title" className="title">Wedding gifts</h1>
                        <p data-localize="wedding-gifts.paragraph" className="subtitle m-auto">Please, take this as an advice
                            that wedding is not about misery from choosing the right gift. If you decide to surprise us, we will
                            be really grateful to you, but please keep in mind that the most valuable thing for us is having you
                            there with us to spend the most important day of our lives together.</p>
                        <br/>
                        <p data-localize="wedding-gifts.paragraph-issues" className="subtitle m-auto">Possible issues might be
                            resolved by Ulysses S. Grant or Benjamin Franklin.</p>
                        <div className="wishes__slider">
                            <div className="slick slick-gifts mb-0 pb-0">
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift1.png" alt="gift"/>
                                </div>
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift2.png" alt="gift"/>
                                </div>
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift3.png" alt="gift"/>
                                </div>
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift4.png" alt="gift"/>
                                </div>
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift1.png" alt="gift"/>
                                </div>
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift2.png" alt="gift"/>
                                </div>
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift3.png" alt="gift"/>
                                </div>
                                <div className="slider__item">
                                    <img className="m-auto" src="img/gift4.png" alt="gift"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="rsvp" className="rsvp section">
                    <div className="container">
                        <div className="row">
                            <div className="d-none d-md-block col-sm-12 col-md-4">
                                <img src="img/rsvp-flower.png" className="parallax" alt="flower"/>
                            </div>
                            <div className="col-sm-12 col-md-8 align-self-center">
                                <h1 data-localize="rsvp.title" className="title">Attendance</h1>
                                <h6 data-localize="rsvp.paragraph" className="text-uppercase font-weight-bold mb-1">Will you
                                    attend?</h6>
                                <h6 data-localize="rsvp.note">Please fill every person, who is invited, separately. In case of
                                    troubles, please reach out to us by phone or email.</h6>
                                <div id="rsvp-form">
                                    <div className="row">
                                        <div className="col-md-8 mb-3 m-md-0">
                                            <div className="form-group">
                                                <Select className="form-control"
                                                        options={this.state.guests}
                                                        id="guest_id"
                                                        placeholder="Your name"
                                                        onChange={this.handleNameChange}
                                                    //TODO: Default value (localization)
                                                    //TODO: Fix React i18n localization
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Select className="form-control"
                                                        id="accommodation"
                                                        placeholder="Will you want an accommodation?"
                                                        options={[
                                                            {
                                                                id: 1,
                                                                value: true,
                                                                label: "Ano"
                                                            },
                                                            {
                                                                id: 2,
                                                                value: false,
                                                                label: "Ne"
                                                            }
                                                        ]}
                                                        onChange={this.handleNameChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label data-localize="rsvp.form.address" className="control-label" htmlFor="inputAddress"
                                                    //TODO: Google Address
                                                >
                                                    Your address (where should we send invitation)
                                                </label>
                                                <input type="text" className="form-control" id="inputAddress" required onChange={this.handleChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label data-localize="rsvp.form.email" className="control-label" htmlFor="inputEmail">
                                                    Your email (optional)
                                                </label>
                                                <input type="text" className="form-control" id="inputEmail" onChange={this.handleChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label data-localize="rsvp.form.phone" className="control-label" htmlFor="inputPhoneNumber">
                                                    Your phone (mandatory)
                                                </label>
                                                <input type="text" className="form-control" id="inputPhoneNumber" required onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 align-self-end">
                                            <button data-localize="rsvp.form.button"
                                                    className="btn btn-outline-dark rounded-0 px-3 py-1 font-weight-bold"
                                                    onClick={this.handleSubmit}
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="success-msg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="section">
                    <div className="container text-white position-relative">
                        <div className="footer__title">
                            <div data-localize="footer.save-our-date" className="text-center">Save our date</div>
                            <div data-localize="footer.names" className="text-center">David and Terka</div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-md-6 text-justify">
                                <p>-----------------------------------</p>
                            </div>
                            <div className="col-md-6 text-justify">
                                <p>-----------------------------------</p>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-md-12 border border mx-1">
                                <div className="row">
                                    <div className="col-md-4 text-center border-right border-bottom px-0">
                                        <div className="pt-1 pb-1">
                                            <i className="fa fa-phone fa-3x"></i>
                                        </div>
                                        <div className="pb-1">+420 735 825 886</div>
                                    </div>
                                    <div className="col-md-4 text-center border-right border-bottom px-0">
                                        <div className="pt-1 pb-1">
                                            <i className="fa fa-map-marker fa-3x"></i>
                                        </div>
                                        <div data-localize="footer.location" className="pb-1">Kravsko, Czech Republic</div>
                                    </div>
                                    <div className="col-md-4 text-center border-bottom px-0">
                                        <div className="pt-1 pb-1">
                                            <i className="fa fa-envelope-o fa-3x"></i>
                                        </div>
                                        <div className="pb-1">terkaborkovcova@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        guests: state.fetchGuests.data
    }
}

export default connect(mapStateToProps)(App);
