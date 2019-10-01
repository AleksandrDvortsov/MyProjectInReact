import React from 'react';
import './style.scss';
import logo from './img/777.png'
import basket from './img/trekking-7.png'
import trekking33 from './img/trekking-33.png'
import trekking34 from './img/trekking-34.png'
import trekking35 from './img/trekking-35.png'
import trekking30 from './img/trekking-30.png'
import trekking68 from './img/trekking-68.png'
import trekking54 from './img/trekking-54.png'
import trekking83 from './img/trekking-83.png'


function PsdMaket(props) {
    return (
        <div id='psd'>
            <header>
                <div id="header-top">
                    <div id="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div id="naw">
                        <a href="#header-top">Home</a>
                        <a href="#main">Products</a>
                        <div><img src={basket} alt=''/></div>
                    </div>
                </div>
                <div id="title-center">
                    <div id="text">
                        <h2>Our clothing , your comfort</h2>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                            Ut laudantium illum in officiis ullam, cumque, <br />
                            aut nulla voluptates adipisci.
                        </h3>
                    </div>
                </div>
            </header>

            {/* <!-- main --> */}
            <div id="main">
                <div id="checkbox-main">
                    <label className="checkbox-main-container">Man
                        <input type="checkbox" id="man" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox-main-container">Women
                    <input type="checkbox" id="women" ></input>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkbox-main-container">Children
                    <input type="checkbox" id="children" ></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div id="btn">
                    <button type="button">See all products</button>
                </div>
            </div>
            {/* <!-- end main --></label> */}

            {/* <!-- products --> */}
            <div className="products">
                {/* <!-- man --> */}
                <div className="cont-man">
                    <div className="products-type">
                        <h4>man</h4>
                        <hr />
                    </div>
                    <div className="products-list">
                        <h4>1/5</h4>
                        <div>
                            {/* <a href="#"></a> */}
                            {/* <a href="#"></a> */}
                        </div>
                    </div>
                    <div className="products-images">
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="0">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt=''  />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking30} alt='' />
                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>T-shirts</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>5,00$</h4>
                                </div>
                            </div>
                        </div>
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking30} alt='' />
                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>T-shirts</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>5,00$</h4>
                                </div>
                            </div>
                        </div>
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking30} alt='' />
                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>T-shirts</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>5,00$</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- man end --> */}

                {/* <!-- women --> */}
                <div className="cont-women">
                    <div className="products-type">
                        <hr />
                        <h4 id="menuWomen">women</h4>

                    </div>
                    <div className="products-list">
                        <h4>1/5</h4>
                        <div>
                            {/* <a href="#"></a> */}
                            {/* <a href="#"></a> */}
                        </div>
                    </div>
                    <div className="products-images">
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking68} alt='' />
                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>T-shirts</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>5,00$</h4>
                                </div>
                            </div>
                        </div>
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking68} alt='' />
                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>T-shirts</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>5,00$</h4>
                                </div>
                            </div>
                        </div>
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking68} alt='' />
                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>T-shirts</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>5,00$</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- women end --> */}

                {/* <!-- children --> */}
                <div className="cont-children">
                    <div className="products-type">
                        <h4>children</h4>
                        <hr />
                    </div>
                    <div className="products-list">
                        <h4>1/5</h4>
                        <div>
                            {/* <a href="#"></a> */}
                            {/* <a href="#"></a> */}
                        </div>
                    </div>
                    <div className="products-images">
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking54} alt='' />

                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>Giacket</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>52,00$</h4>
                                </div>
                            </div>
                        </div>
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking54} alt='' />

                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>Giacket</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>52,00$</h4>
                                </div>
                            </div>
                        </div>
                        <div className="products-img">
                            <div className="img-top">
                                <div className="img-top-size">
                                    <div className="select">
                                        <select>
                                            <option value="">Size</option>
                                            <option value="1">S</option>
                                            <option value="2">M</option>
                                            <option value="3">L</option>
                                            <option value="4">XL</option>
                                            <option value="5">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="img-top-color">
                                    <img src={trekking33} alt='' />
                                    <img src={trekking34} alt='' />
                                    <img src={trekking35} alt='' />
                                </div>
                            </div>
                            <div className="img-center">
                                <img src={trekking54} alt='' />

                            </div>
                            <div className="img-bottom">
                                <div className="img-bottom-type">
                                    <h4>Giacket</h4>
                                </div>
                                <div className="img-bottom-prise">
                                    <h4>52,00$</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- children end --> */}
            </div>
            {/* <!-- end products --> */}

            {/* <!-- aboutus --> */}
            <div id="aboutUs">
                <fieldset>
                    <legend>About us</legend>
                    <h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Dicta corporis eos veniam tenetur est optio <br />
                        itaque fugiat dignissimos! Suscipit nisi <br />
                        facere deleniti
            </h5>
                </fieldset>
            </div>
            {/* <!-- end aboutus --> */}

            {/* <!-- footer --> */}
            <footer>
                <div id="twiter">
                    <img src={trekking83} alt="" />
                    <h5>Xz text</h5>
                </div>
                <div id="iform">
                    <div id="inform-text">
                        <h5>Trekking</h5>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                            Eligendi explicabo error facere repudiandae voluptatibus <br />
                            dicta ex maxime perspiciatis culpa, dolorum incidunt <br />
                            possimus, odit recusandae totam aliquam quas vel <br />
                            eveniet. Cupiditate.
                </h6>
                    </div>
                    <div id="contactPsd">
                        <div>
                            <a href="#">Credits</a>
                            <a href="#">Privacy</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                        <h5>Design by xz</h5>
                    </div>
                </div>
            </footer>
            {/* <!-- end footer --> */}








        </div>




    )

}



export default PsdMaket

