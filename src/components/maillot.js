import React, { Component } from 'react';

import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import back from '../images/back.png'
import traits from '../images/traits.png'

import col1 from '../images/col1.png'
import col2 from '../images/col2.png'
import col3 from '../images/col3.png'
import col4 from '../images/col4.png'
import col5 from '../images/col5.png'
import col6 from '../images/col6.png'
import col7 from '../images/col7.png'

import bottom1 from '../images/bottom1.png'
import bottom2 from '../images/bottom2.png'
import bottom3 from '../images/bottom3.png'

import main1 from '../images/main1.png'
import main2 from '../images/main2.png'
import main3 from '../images/main3.png'
import main4 from '../images/main4.png'
import main5 from '../images/main5.png'

import ls1 from '../images/ls1.png'
import ls2 from '../images/ls4.png'
import ls3 from '../images/ls3.png'

import rs1 from '../images/rs1.png'
import rs2 from '../images/rs2.png'
import rs3 from '../images/rs3.png'
import rs4 from '../images/rs4.png'
import rs5 from '../images/rs5.png'
import rs6 from '../images/rs6.png'


import d1 from '../images/d1.png'




class Maillot extends Component {
    render() {
        let imgCol = col1

        if (this.props.col === 1) {
            imgCol = col1
        } else if (this.props.col === 2) {
            imgCol = col2
        } else if (this.props.col === 3) {
            imgCol = col3
        }


        let imgBottom = bottom1
        if (this.props.bottom === 1) {
            imgBottom = bottom1
        } else if (this.props.bottom === 2) {
            imgBottom = bottom2
        } else if (this.props.bottom === 3) {
            imgBottom = bottom3
        }


        let imgLs = ls1
        if (this.props.leftSleeve === 1) {
            imgLs = ls1
        } else if (this.props.leftSleeve === 2) {
            imgLs = ls2
        } else if (this.props.leftSleeve === 3) {
            imgLs = ls3
        }



        let imgRs = rs1
        if (this.props.rightSleeve === 1) {
            imgRs = rs1
        } else if (this.props.rightSleeve === 2) {
            imgRs = rs2
        } else if (this.props.rightSleeve === 3) {
            imgRs = rs3
        }


        let imgMain = main1
        if (this.props.main === 1) {
            imgMain = main1
        } else if (this.props.main === 2) {
            imgMain = main2
        } else if (this.props.main === 3) {
            imgMain = main3
        }

        let imgDetails = d1

        return (
            <div className="maillot-archive" >
                <div className="maillot-archive__sub maillot-archive__back">
                    <StaticImage
                        src="../images/Back.png"
                        alt="Full 1"
                    />
                </div>
                <div className="maillot-archive__sub maillot-archive__trait">
                    <StaticImage
                        src="../images/Traits.png"
                        alt="Full 1"
                    />
                </div>
                <div className="maillot-archive__sub maillot__main">
                    <img src={imgMain} alt='bottom' />
                </div>
                <div className="maillot-archive__sub maillot__left-sleeve">
                    <img src={imgLs} alt='bottom' />
                </div>
                <div className="maillot-archive__sub maillot__right-sleeve">
                    <img src={imgRs} alt='bottom' />
                </div>
                <div className="maillot-archive__sub maillot__details">
                    <img src={imgDetails} alt='Col' />
                </div>
                <div className="maillot-archive__sub maillot-archive__bottom">
                    <img src={imgBottom} alt='rr' />
                </div>
                <div className="maillot-archive__sub maillot-archive__col">
                    <img src={imgCol} alt='rr' />
                </div>

            </div>
        )
    }
}


export default Maillot
