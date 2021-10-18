import React, { Component } from 'react';

import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import back from '../images/back.svg'
import traits from '../images/traits.svg'

import col1 from '../images/col1.svg'
import col2 from '../images/col2.svg'
import col3 from '../images/col3.svg'
import col4 from '../images/col4.svg'
import col5 from '../images/col5.svg'
import col6 from '../images/col6.svg'
import col7 from '../images/col7.svg'
import col8 from '../images/col8.svg'

import bottom1 from '../images/bottom1.svg'
import bottom2 from '../images/bottom2.svg'
import bottom3 from '../images/bottom3.svg'
import bottom4 from '../images/bottom4.svg'

import main1 from '../images/main1.png'
import main2 from '../images/main2.svg'
import main3 from '../images/main3.svg'
import main4 from '../images/main4.svg'
import main5 from '../images/main5.svg'
import main6 from '../images/main6.svg'
import main7 from '../images/main7.svg'
import main8 from '../images/main8.svg'
import main9 from '../images/main9.svg'
import main10 from '../images/main10.png'
import main11 from '../images/main11.svg'
import main12 from '../images/main12.png'
import main13 from '../images/main13.png'
import main14 from '../images/main14.svg'
import main15 from '../images/main15.svg'


import ls1 from '../images/ls1.png'
import ls2 from '../images/ls2.svg'
import ls3 from '../images/ls3.svg'
import ls4 from '../images/ls4.png'
import ls5 from '../images/ls5.png'
import ls6 from '../images/ls6.png'
import ls7 from '../images/ls7.png'
import ls8 from '../images/ls8.png'
import ls9 from '../images/ls9.png'



import rs1 from '../images/rs1.png'
import rs2 from '../images/rs2.svg'
import rs3 from '../images/rs3.svg'
import rs4 from '../images/rs4.png'
import rs5 from '../images/rs5.png'
import rs6 from '../images/rs6.png'
import rs7 from '../images/rs7.png'
import rs8 from '../images/rs8.png'
import rs9 from '../images/rs9.png'



import d1 from '../images/d1.png'
import d2 from '../images/d2.png'
import d3 from '../images/d3.svg'
import d4 from '../images/d4.png'
import d5 from '../images/d5.svg'
import d6 from '../images/d6.svg'
import d7 from '../images/d7.svg'
import d8 from '../images/d8.svg'
import d9 from '../images/d9.png'



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
        } else if (this.props.col === 8) {
            imgCol = col8
        }


        let imgBottom = bottom1
        if (this.props.bottom === 1) {
            imgBottom = bottom1
        } else if (this.props.bottom === 2) {
            imgBottom = bottom2
        } else if (this.props.bottom === 3) {
            imgBottom = bottom3
        } else if (this.props.bottom === 4) {
            imgBottom = bottom4
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
        } else if (this.props.leftSleeve === 9) {
            imgLs = ls9
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
        } else if (this.props.rightSleeve === 9) {
            imgRs = rs9
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
            imgMain = main11
        } else if (this.props.main === 12) {
            imgMain = main12
        } else if (this.props.main === 13) {
            imgMain = main13
        } else if (this.props.main === 14) {
            imgMain = main14
        } else if (this.props.main === 15) {
            imgMain = main15
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
        } else if (this.props.details === 6) {
            imgDetails = d6
        } else if (this.props.details === 7) {
            imgDetails = d7
        } else if (this.props.details === 8) {
            imgDetails = d8
        } else if (this.props.details === 9) {
            imgDetails = d9
        }

        return (

            <div className="maillot" >
                <div className="maillot__sub maillot__back">
                    <img
                        src={back}
                        alt="Full 1"
                        style={{ width: 400 }}
                    />
                </div>
                <div className="maillot__sub maillot__trait">
                    <img
                        style={{ width: 400 }}
                        src={traits}
                        alt="Full 1"
                    />
                </div>
                <div className="maillot__sub maillot__main">
                    <img src={imgMain} style={{ width: 400 }} alt='bottom' />
                </div>
                <div className="maillot__sub maillot__left-sleeve">
                    <img src={imgLs} style={{ width: 400 }} alt='bottom' />
                </div>
                <div className="maillot__sub maillot__right-sleeve">
                    <img src={imgRs} style={{ width: 400 }} alt='bottom' />
                </div>
                <div className="maillot__sub maillot__details">
                    <img src={imgDetails} style={{ width: 400 }} alt='Col' />
                </div>
                <div className="maillot__sub maillot__bottom">
                    <img src={imgBottom} style={{ width: 400 }} alt='rr' />
                </div>
                <div className="maillot__sub maillot__col">
                    <img src={imgCol} style={{ width: 400 }} alt='rr' />
                </div>

                {
                    this.props.author ?
                        <div className="maillot__name" >
                            <p>*{this.props.author}*</p>
                        </div> : ''
                }


            </div >
        )
    }
}


export default Maillot
