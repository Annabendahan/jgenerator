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
import main6 from '../images/main6.png'
import main7 from '../images/main7.png'
import main8 from '../images/main8.png'
import main9 from '../images/main9.png'
import main10 from '../images/main10.png'
import main11 from '../images/main11.png'


import ls1 from '../images/ls1.png'
import ls2 from '../images/ls2.png'
import ls3 from '../images/ls3.png'
import ls4 from '../images/ls4.png'
import ls5 from '../images/ls5.png'
import ls6 from '../images/ls6.png'
import ls7 from '../images/ls7.png'
import ls8 from '../images/ls8.png'


import rs1 from '../images/rs1.png'
import rs2 from '../images/rs2.png'
import rs3 from '../images/rs3.png'
import rs4 from '../images/rs4.png'
import rs5 from '../images/rs5.png'
import rs6 from '../images/rs6.png'
import rs7 from '../images/rs7.png'
import rs8 from '../images/rs8.png'



import d1 from '../images/d1.png'
import d2 from '../images/d2.png'
import d3 from '../images/d3.png'
import d4 from '../images/d4.png'
import d5 from '../images/d5.png'




class Maillot extends Component {
    render() {
        let imgCol = col1
        if (this.props.col === 1) {
            imgCol = col1
        } else if (this.props.col === 2) {
            imgCol = col2
        } else if (this.props.col === 3) {
            imgCol = col3
        } else if (this.props.col === 4) {
            imgCol = col4
        } else if (this.props.col === 5) {
            imgCol = col5
        } else if (this.props.col === 6) {
            imgCol = col6
        } else if (this.props.col === 7) {
            imgCol = col7
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
        } else if (this.props.leftSleeve === 4) {
            imgLs = ls4
        } else if (this.props.leftSleeve === 5) {
            imgLs = ls5
        } else if (this.props.leftSleeve === 6) {
            imgLs = ls6
        } else if (this.props.leftSleeve === 7) {
            imgLs = ls7
        } else if (this.props.leftSleeve === 8) {
            imgLs = ls8
        }



        let imgRs = rs1
        if (this.props.rightSleeve === 1) {
            imgRs = rs1
        } else if (this.props.rightSleeve === 2) {
            imgRs = rs2
        } else if (this.props.rightSleeve === 3) {
            imgRs = rs3
        } else if (this.props.rightSleeve === 4) {
            imgRs = rs4
        } else if (this.props.rightSleeve === 5) {
            imgRs = rs5
        } else if (this.props.rightSleeve === 6) {
            imgRs = rs6
        } else if (this.props.rightSleeve === 7) {
            imgRs = rs7
        } else if (this.props.rightSleeve === 8) {
            imgRs = rs8
        }




        let imgMain = main1
        if (this.props.main === 1) {
            imgMain = main1
        } else if (this.props.main === 2) {
            imgMain = main2
        } else if (this.props.main === 3) {
            imgMain = main3
        } else if (this.props.main === 4) {
            imgMain = main4
        } else if (this.props.main === 5) {
            imgMain = main5
        } else if (this.props.main === 6) {
            imgMain = main6
        } else if (this.props.main === 7) {
            imgMain = main7
        } else if (this.props.main === 8) {
            imgMain = main8
        } else if (this.props.main === 9) {
            imgMain = main9
        } else if (this.props.main === 10) {
            imgMain = main10
        } else if (this.props.main === 11) {
            imgMain = main1
        }

        let imgDetails = d1
        if (this.props.details === 1) {
            imgDetails = d1
        } else if (this.props.details === 2) {
            imgDetails = d2
        } else if (this.props.details === 3) {
            imgDetails = d3
        } else if (this.props.details === 4) {
            imgDetails = d4
        } else if (this.props.details === 5) {
            imgDetails = d5
        }

        return (

            <div className="maillot-archive" >
                <div className="maillot-archive__maillot" >
                    <div className="maillot-archive__sub maillot-archive__back">
                        <img
                            src={back}
                            alt="Full 1"
                        />
                    </div>
                    <div className="maillot-archive__sub maillot-archive__trait">
                        <img
                            src={traits}
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
                { this.props.author ?
                    <div className="maillot-archive__name" >
                        <p>*{this.props.author}*</p>
                    </div> : ''
                }


            </div>
        )
    }
}


export default Maillot
