import React, { Component } from 'react';
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import qs from 'qs'
import { navigate } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from 'axios';

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


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      col: 1,
      bottom: 1,
      leftSleeve: 1,
      rightSleeve: 1,
      details: 1,
      main: 1,
      datails: 1,
      popup: false,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }




  handlePop() {
    this.setState({ popup: !this.state.popup })

  }




  handlePost(e) {

    alert('Thank you ! ☻ ');
    e.preventDefault();
    axios({
      method: 'post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: 'https://gen-server.herokuapp.com/customers',
      data: qs.stringify({
        col: this.state.col,
        bottom: this.state.bottom,
        left_sleeve: this.state.leftSleeve,
        right_sleeve: this.state.rightSleeve,
        main: this.state.main,
        details: this.state.details,
        author: this.state.value
      }),
    }).then(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    navigate('/archives'); //navigate to edit page

  }

  handleCol(arr) {


    if (arr === "next") {
      this.setState({ col: this.state.col + 1 })
    } else if (arr === "previous")
      this.setState({ col: this.state.col - 1 })
  }

  handleBottom(arr) {
    if (arr === "next") {
      this.setState({ bottom: this.state.bottom + 1 })
    } else if (arr === "previous")
      this.setState({ bottom: this.state.bottom - 1 })
  }

  handleMain(arr) {
    if (arr === "next") {
      this.setState({ main: this.state.main + 1 })
    } else if (arr === "previous")
      this.setState({ main: this.state.main - 1 })
  }

  handleLs(arr) {
    if (arr === "next") {
      this.setState({ leftSleeve: this.state.leftSleeve + 1 })
    } else if (arr === "previous")
      this.setState({ leftSleeve: this.state.leftSleeve - 1 })
  }

  handleRs(arr) {
    if (arr === "next") {
      this.setState({ rightSleeve: this.state.rightSleeve + 1 })
    } else if (arr === "previous")
      this.setState({ rightSleeve: this.state.rightSleeve - 1 })
  }

  handleDetails(arr) {
    if (arr === "next") {
      this.setState({ details: this.state.details + 1 })
    } else if (arr === "previous")
      this.setState({ details: this.state.details - 1 })
  }

  render() {

    let imgCol = col1
    if (this.state.col === 0) {
      this.state.col = 7
      imgCol = col7
    } else if (this.state.col === 1) {
      imgCol = col1
    } else if (this.state.col === 2) {
      imgCol = col2
    } else if (this.state.col === 3) {
      imgCol = col3
    } else if (this.state.col === 4) {
      imgCol = col4
    } else if (this.state.col === 5) {
      imgCol = col5
    } else if (this.state.col === 6) {
      imgCol = col6
    } else if (this.state.col === 7) {
      imgCol = col7
    } else if (this.state.col === 8) {
      this.state.col = 1
      imgCol = col1
    }


    let imgBottom = bottom1
    if (this.state.bottom === 0) {
      this.state.bottom = 3
      imgBottom = bottom3
    } else if (this.state.bottom === 1) {
      imgBottom = bottom1
    } else if (this.state.bottom === 2) {
      imgBottom = bottom2
    } else if (this.state.bottom === 3) {
      imgBottom = bottom3
    } else if (this.state.bottom === 4) {
      this.state.bottom = 1
      imgBottom = bottom1
    }

    let imgLs = ls1
    if (this.state.leftSleeve === 0) {
      this.state.leftSleeve = 8
      imgLs = ls8
    } else if (this.state.leftSleeve === 1) {
      imgLs = ls1
    } else if (this.state.leftSleeve === 2) {
      imgLs = ls2
    } else if (this.state.leftSleeve === 3) {
      imgLs = ls3
    } else if (this.state.leftSleeve === 4) {
      imgLs = ls4
    } else if (this.state.leftSleeve === 5) {
      imgLs = ls5
    } else if (this.state.leftSleeve === 6) {
      imgLs = ls6
    } else if (this.state.leftSleeve === 7) {
      imgLs = ls7
    } else if (this.state.leftSleeve === 8) {
      imgLs = ls8
    } else if (this.state.leftSleeve === 9) {
      this.state.leftSleeve = 1
      imgLs = ls1
    }


    let imgRs = rs1
    if (this.state.rightSleeve === 0) {
      this.state.rightSleeve = 8
      imgRs = rs8
    } else if (this.state.rightSleeve === 1) {
      imgRs = rs1
    } else if (this.state.rightSleeve === 2) {
      imgRs = rs2
    } else if (this.state.rightSleeve === 3) {
      imgRs = rs3
    } else if (this.state.rightSleeve === 4) {
      imgRs = rs4
    } else if (this.state.rightSleeve === 5) {
      imgRs = rs5
    } else if (this.state.rightSleeve === 6) {
      imgRs = rs6
    } else if (this.state.rightSleeve === 7) {
      imgRs = rs7
    } else if (this.state.rightSleeve === 8) {
      imgRs = rs8
    } else if (this.state.rightSleeve === 9) {
      this.state.rightSleeve = 1
      imgRs = rs1
    }



    let imgMain = main1
    if (this.state.main === 0) {
      this.state.main = 11
      imgMain = main11
    } else if (this.state.main === 1) {
      imgMain = main1
    } else if (this.state.main === 2) {
      imgMain = main2
    } else if (this.state.main === 3) {
      imgMain = main3
    } else if (this.state.main === 4) {
      imgMain = main4
    } else if (this.state.main === 5) {
      imgMain = main5
    } else if (this.state.main === 6) {
      imgMain = main6
    } else if (this.state.main === 7) {
      imgMain = main7
    } else if (this.state.main === 8) {
      imgMain = main8
    } else if (this.state.main === 9) {
      imgMain = main9
    } else if (this.state.main === 10) {
      imgMain = main10
    } else if (this.state.main === 11) {
      imgMain = main11
    } else if (this.state.main === 12) {
      this.state.main = 1
      imgMain = main1
    }

    let imgDetails = d1
    if (this.state.details === 0) {
      this.state.details = 5
      imgDetails = d5
    } else if (this.state.details === 1) {
      imgDetails = d1
    } else if (this.state.details === 2) {
      imgDetails = d2
    } else if (this.state.details === 3) {
      imgDetails = d3
    } else if (this.state.details === 4) {
      imgDetails = d4
    } else if (this.state.details === 5) {
      imgDetails = d5
    } else if (this.state.details === 6) {
      this.state.details = 1
      imgDetails = d1
    }





    return (
      <Layout>
        <Seo title="Generator" />
        <div className="content">
          <div className="gen">


            {this.state.popup ?

              <div className="gen__popup" >
                <div onClick={() => this.handlePop()} className="gen__popup__bd" ></div>
                <div className="gen__popup__msg">
                  <div>

                    <p> YOUR JERSEY'S NAME</p>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />

                    <div onClick={(e) => this.handlePost(e)} className="gen__popup__submit">
                      submit
                  </div>
                  </div>
                </div>
              </div> : ''
            }



            <div className="gen__title">
              JERSEY__TEMPLATE__GENERATOR__
            </div>

            <div className="gen__main">



              <div className="gen__main__maillot">
                <div className="gen__main__maillot__sub ">
                  <img
                    src={traits}
                    alt="Trait"
                  />
                </div>
                <div className="gen__main__maillot__sub ">
                  <img
                    src={back}
                    alt="back"
                  />
                </div>
                <div className="gen__main__maillot__sub ">
                  <img src={imgMain} alt='bottom' />
                </div>
                <div className="gen__main__maillot__sub ">
                  <img src={imgLs} alt='bottom' />
                </div>
                <div className="gen__main__maillot__sub ">
                  <img src={imgRs} alt='bottom' />
                </div>
                <div className="gen__main__maillot__sub ">
                  <img src={imgDetails} alt='Col' />
                </div>
                <div className="gen__main__maillot__sub ">
                  <img src={imgBottom} alt='bottom' />
                </div>
                <div className="gen__main__maillot__sub">
                  <img src={imgCol} alt='Col' />
                </div>

              </div>

              <div className="gen__main__btns">
                <p> <span className="gen__main__btns__i" onClick={() => this.handleCol('previous')}> ﹤ </span> NECK [{this.state.col}] <span className="gen__main__btns__i" onClick={() => this.handleCol('next')}> ﹥ </span>
                </p>
                <p> <span className="gen__main__btns__i" onClick={() => this.handleLs('previous')}> ﹤ </span> LEFT SLEEVE [{this.state.leftSleeve}] <span className="gen__main__btns__i" onClick={() => this.handleLs('next')}> ﹥ </span></p>
                <p> <span className="gen__main__btns__i" onClick={() => this.handleRs('previous')}> ﹤ </span> RIGHT SLEEVE [{this.state.rightSleeve}]<span className="gen__main__btns__i" onClick={() => this.handleRs('next')}> ﹥ </span></p>
                <p> <span className="gen__main__btns__i" onClick={() => this.handleMain('previous')}> ﹤ </span> MAIN [{this.state.main}] <span className="gen__main__btns__i" onClick={() => this.handleMain('next')}> ﹥ </span></p>
                <p>  <span className="gen__main__btns__i" onClick={() => this.handleBottom('previous')}> ﹤ </span> BOTTOM [{this.state.bottom}] <span className="gen__main__btns__i" onClick={() => this.handleBottom('next')}> ﹥ </span></p>
                <p>  <span className="gen__main__btns__i" onClick={() => this.handleDetails('previous')}> ﹤ </span> DETAILS [{this.state.details}] <span className="gen__main__btns__i" onClick={() => this.handleDetails('next')}> ﹥ </span></p>

                <br />

              </div>

            </div>
            <div className="gen__bottom">
              <div onClick={() => this.handlePop()} className="gen__bottom__save">
                SAVE
              </div>
              <Link to="archives" className="gen__bottom__archives">
                <div>
                  ---------﹥ CHECK THE ARCHIVES__
              </div>
              </Link>
            </div>
          </div>
        </div>


      </Layout >

    )
  }
}


export default IndexPage
