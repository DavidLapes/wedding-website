import React, {Component} from "react";
import {connect} from "react-redux";
import Select from "react-select";
import {fetchGuests} from "./services/actions/guests/fetchGuests";
import {submitRSVP} from "./services/actions/guests/submitRSVP";

class App extends Component {

    state = {
        street:        null,
        city:          null,
        postal_code:   null,
        state:         null,
        accommodation: null,
        email:         null,
        phone:         null,
        guest_id:      null,
        guests:        []
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
            accommodation: e.value
        })
    };

    handleNameChange = (e) => {
        this.setState({
            guest_id: e.id
        })
    };

    formatOptions = (data) => {
        return data.map(x => {
            return {
                id: x.id,
                value: x.id,
                label: x.full_name
            }
        })
    }

    handleSubmit = () => {
        this.props.dispatch(
            submitRSVP(
                this.state.guest_id,
                {
                    street: this.state.street,
                    city: this.state.city,
                    postal_code: this.state.postal_code,
                    state: this.state.state,
                    accommodation: this.state.accommodation,
                    email: this.state.email,
                    phone: this.state.email
                }
            )
        )
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="d-none d-md-block col-sm-12 col-md-4">
                        <img src="img/rsvp-flower.png" className="parallax" alt="flower"/>
                    </div>
                    <div className="col-sm-12 col-md-8 align-self-center">
                        <h1 className="title">Účast</h1>
                        <h6 className="text-uppercase font-weight-bold mb-1">
                            Zúčastníš se?
                        </h6>
                        <h6>
                            Prosím vyplň za každou osobu, která je pozvána, zvlášť.<br/>V případě problémů s vyplněním nám zavolejte.
                        </h6>
                        <div id="rsvp-form">
                            <div className="row">
                                <div className="col-md-8 mb-3 m-md-0">
                                    <div className="form-group">
                                        <Select className="form-control"
                                                options={this.state.guests}
                                                id="guest_id"
                                                placeholder="Tvé jméno"
                                                onChange={this.handleNameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Select className="form-control"
                                                id="accommodation"
                                                placeholder="Budeš chtít ubytování?"
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
                                                onChange={this.handleAccommodation}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">
                                            <b>Adresa (kam ti zašleme pozvánku?)</b>
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               style={{
                                                   borderStyle: "none",
                                                   backgroundColor: "transparent"
                                               }}
                                               readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="street">
                                            Ulice
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               id="street"
                                               required
                                               onChange={this.handleChange}
                                               value={this.state.street}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="city">
                                            Město
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               id="city"
                                               required
                                               onChange={this.handleChange}
                                               value={this.state.city}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="postal_code">
                                            PSČ
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               id="postal_code"
                                               required
                                               onChange={this.handleChange}
                                               value={this.state.postal_code}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="state">
                                            Stát
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               id="state"
                                               required
                                               onChange={this.handleChange}
                                               value={this.state.state}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">
                                            <b>Jak tě můžeme zkontaktovat?</b>
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               style={{
                                                   borderStyle: "none",
                                                   backgroundColor: "transparent"
                                               }}
                                               readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="inputEmail">
                                            Tvůj e-mail (volitelné)
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               id="email"
                                               onChange={this.handleChange}
                                               value={this.state.email}/>
                                    </div>
                                    <div className="form-group">
                                        <label data-localize="rsvp.form.phone" className="control-label" htmlFor="phone">
                                            Tvůj telefon
                                        </label>
                                        <input type="text"
                                               className="form-control"
                                               id="phone"
                                               required
                                               onChange={this.handleChange}
                                               value={this.state.phone}/>
                                    </div>
                                </div>
                                <div className="col-md-4 align-self-end">
                                    <button data-localize="rsvp.form.button"
                                            className="btn btn-outline-dark rounded-0 px-3 py-1 font-weight-bold"
                                            onClick={this.handleSubmit}
                                    >
                                        Odeslat
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="success-msg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
