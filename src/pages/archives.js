import React, { Component } from 'react';
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import qs from 'qs'
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from 'axios';

import Maillot from '../components/maillot'



class Archives extends Component {

    state = {
        data: [],
        spe: '',
        popup: false,
        speName: ''
    }


    handlePop() {
        this.setState({ popup: !this.state.popup })
    }

    componentDidMount() {
        axios.get('https://gen-server.herokuapp.com/customers').then(
            (response) => {
                this.setState({ data: response.data });
                console.log(this.state.data)
            }, (error) => {
                console.log(error);
            });
        window.onscroll = function (ev) {
            if (document.getElementById("down") !== null || document.getElementById("down") !== null) {
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                    // you're at the bottom of the page
                    console.log("Bottom of page");
                    document.getElementById("down").style.display = "none";
                    document.getElementById("top").style.display = "block";

                } else {
                    document.getElementById("top").style.display = "none";
                    document.getElementById("down").style.display = "block";

                }
            }
        };
    }

    handleScrollDown(e) {
        window.scrollTo(0, document.body.scrollHeight);
    }

    handleScrollTop(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    openSpe(id) {
        axios.get(`https://gen-server.herokuapp.com/customers/${id}`).then(
            (response) => {
                this.setState({ spe: response.data, popup: !this.state.popup });
                console.log(this.state.spe)
            }, (error) => {
                console.log(error);
            });
    }




    render() {
        console.log(this.props.location.pathname)





        console.log(this.state.pos)

        return (

            <Layout>
                <Seo title="Archives" />



                <div className="archives">

                    {this.state.popup ?

                        <div className="archives__spe">
                            <div onClick={() => this.handlePop()} className="archives__spe__bd" ></div>

                            <div className="archives__spe__maillot">

                                <Maillot
                                    key={this.state.spe.id}
                                    col={this.state.spe.col}
                                    bottom={this.state.spe.bottom}
                                    main={this.state.spe.main}
                                    leftSleeve={this.state.spe.left_sleeve}
                                    rightSleeve={this.state.spe.right_sleeve}
                                    details={this.state.spe.details}
                                />

                                <p> *{this.state.spe.author}*</p>



                            </div>
                        </div>
                        : ' '}
                    <div className="archives__arrow">
                        <p id='down' onClick={(e) => this.handleScrollDown(e)}> DOWN ↓</p>
                        <p id='top' onClick={(e) => this.handleScrollTop(e)}> TOP ↑</p>
                    </div>

                    <div className="archives__title">
                        <p> JERSEY__TEMPLATE__ARCHIVES__</p>
                    </div>

                    <div className="archives__content">


                        <Grid container >
                            {this.state.data !== [] ?
                                this.state.data.map(d => (

                                    <Grid key={d.id} item xs={12} md={4}>
                                        <div onClick={(e) => this.openSpe(d.id)}>
                                            <div className='archives__maillot'>
                                                <Maillot
                                                    key={d.id}
                                                    col={d.col}
                                                    bottom={d.bottom}
                                                    main={d.main}
                                                    leftSleeve={d.left_sleeve}
                                                    rightSleeve={d.right_sleeve}
                                                    details={d.details}
                                                    author={d.author}
                                                />

                                            </div>
                                        </div>


                                    </Grid>
                                )) : ''}
                        </Grid>


                    </div>
                    <div className="archives__bottom">
                        <Link to="/" className="archives__bottom__link">
                            <div>
                                <p> ﹤----- BACK TO THE GENERATOR__</p>
                            </div>
                        </Link>
                    </div>





                </div>
            </Layout >
        )
    }

}


export default Archives
