import React, { Component } from 'react';
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import qs from 'qs'

import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from 'axios';

import Maillot from '../components/maillot'



class Archives extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/maillots').then(
            (response) => {
                this.setState({ data: response.data });
                console.log(this.state.data)
            }
        );
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


                        {this.state.data !== [] ?

                            this.state.data.map(d => (
                                <Maillot
                                    key={d.id}
                                    col={d.col}
                                    bottom={d.bottom}
                                    main={d.main}
                                    leftSleeve={d.leftSleeve}
                                    rightSleeve={d.rightSleeve} />
                            )) : ''}

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
