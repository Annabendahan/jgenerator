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
        data: []
    }

    componentDidMount() {
        axios.get('https://gen-server.herokuapp.com/customers').then(
            (response) => {
                this.setState({ data: response.data });
                console.log(this.state.data)
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (

            <Layout>
                <Seo title="Archives" />

                <div className="archives">
                    <div className="archives__title">
                        <p> JERSEY__TEMPLATE__ARCHIVES__</p>
                    </div>

                    <div className="archives__content">


                        <Grid container >
                            {this.state.data !== [] ?
                                this.state.data.map(d => (

                                    <Grid key={d.id} item xs={12} md={4}>
                                        <Maillot
                                            key={d.id}
                                            col={d.col}
                                            bottom={d.bottom}
                                            main={d.main}
                                            leftSleeve={d.left_sleeve}
                                            rightSleeve={d.right_sleeve}
                                            details={d.details} />
                                    </Grid>
                                )) : ''}
                        </Grid>


                    </div>
                    <div className="archives__bottom">
                        <Link to="/" className="archives__bottom__link">
                            <div>
                                <p> -------> BACK TO THE GENERATOR__</p>
                            </div>
                        </Link>
                    </div>





                </div>
            </Layout>
        )
    }

}


export default Archives
