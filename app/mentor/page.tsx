import React from 'react'

const Mentor = () => {
  return (
    <div>
        <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Eduland Mentor</title>
    <meta
      name="description"
      content="Eduland"
    />
    <meta
      name="keywords"
      content="This is Eduland Mentorship page"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Open+Sans|Candal|Alegreya+Sans"
    />
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/imagehover.min.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    {/*Navigation bar*/}
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#"
          style={{ borderRadius: '50px', marginRight: '50px' }}>
            Men<span>tor</span>
          </a>
          <a className="navbar-brand" href={"/home"}>
            <span>HomePage</span>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#organisations">Organisations</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href={"/sign-in"} data-target="#login" data-toggle="modal">
                Sign in
              </a>
            </li>
            <li className="btn-trial">
              <a href="#footer">Free Trail</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/*/ Modal box*/}
    {/*Banner*/}
    <div className="banner">
      <div className="bg-color">
        <div className="container">
          <div className="row"
          >
            <div className="banner-text text-center">
              <div className="text-border" 
              style={{ borderRadius: '50px' }}>
                <h2 className="text-dec"
                
                >Trust &amp; Quality</h2>
              </div>
              <div className="intro-para text-center quote">
                <p className="big-text">
                  Learning Today . . . Leading Tomorrow.
                </p>
                <p className="small-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicin
                  g elit. Perspiciatis quod aperiam obcaecati temporibus.
                   Eum esse facere asperiores fugit consequuntur magnam,
                    tempore quaerat vel nostrum. Sint adipisci modi aliquam. Commodi, dicta!
                  <br />
                  Laudantium enim repellat sapiente quos architecto
                </p>
                <a href="#footer" className="btn get-quote">
                  GET A QUOTE
                </a>
              </div>
              <a href="#feature" className="mouse-hover">
                <div className="mouse" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ Banner*/}
    {/*Feature*/}
    <section id="feature" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2>Features</h2>
            <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, non vitae culpa corrupti sunt, repudiandae magnam at officiis tempore reprehenderit in assumenda explicabo, quidem ducimus quia dolores ullam error quas!
             Hic, commodi rerum itaque natus doloremque eveniet repudiandae in voluptatum magni tempore labore debitis illo quis porro. Quaerat possimus est asperiores libero quasi! Odit ab ullam asperiores ipsa magnam laborum.
             Voluptatem eos labore veniam velit obcaecati rerum a voluptatum, deserunt in culpa ipsa excepturi magni omnis reprehenderit vel fuga, vitae accusantium magnam repellat. Nemo, obcaecati ab illum dolorum dolore repellendus!
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
            lorem*5
          </div>
          <div className="feature-info">
            <div className="fea">
              <div className="col-md-4">
                <div className="heading pull-right">
                  <h4>Latest Technologies</h4>
                  <p>
                    Donec et lectus bibendum dolor dictum auctor in ac erat.
                    Vestibulum egestas sollicitudin metus non urna in eros
                    tincidunt convallis id id nisi in interdum.
                  </p>
                </div>
                <div className="fea-img pull-left">
                  <i className="fa fa-css3" />
                </div>
              </div>
            </div>
            <div className="fea">
              <div className="col-md-4">
                <div className="heading pull-right">
                  <h4>Toons Background</h4>
                  <p>
                    Donec et lectus bibendum dolor dictum auctor in ac erat.
                    Vestibulum egestas sollicitudin metus non urna in eros
                    tincidunt convallis id id nisi in interdum.
                  </p>
                </div>
                <div className="fea-img pull-left">
                  <i className="fa fa-drupal" />
                </div>
              </div>
            </div>
            <div className="fea">
              <div className="col-md-4">
                <div className="heading pull-right">
                  <h4>Award Winning Design</h4>
                  <p>
                    Donec et lectus bibendum dolor dictum auctor in ac erat.
                    Vestibulum egestas sollicitudin metus non urna in eros
                    tincidunt convallis id id nisi in interdum.
                  </p>
                </div>
                <div className="fea-img pull-left">
                  <i className="fa fa-trophy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ feature*/}
    {/*Organisations*/}
    <section id="organisations" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div className="orga-stru">
                <h3>65%</h3>
                <p>Say NO!!</p>
                <i className="fa fa-male" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div className="orga-stru">
                <h3>20%</h3>
                <p>Says Yes!!</p>
                <i className="fa fa-male" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div className="orga-stru">
                <h3>15%</h3>
                <p>Can't Say!!</p>
                <i className="fa fa-male" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-info">
              <hgroup>
                <h3 className="det-txt">
                  {" "}
                  Is inclusive quality education affordable?
                </h3>
                <h4 className="sm-txt">(Revised and Updated for 2016)</h4>
              </hgroup>
              <p className="det-p">
                Donec et lectus bibendum dolor dictum auctor in ac erat.
                Vestibulum egestas sollicitudin metus non urna in eros tincidunt
                convallis id id nisi in interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Organisations*/}
    {/*Cta*/}
    <section id="cta-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">Subscribe Now</h2>
            <p className="cta-2-txt">
              Sign up for our free weekly software design courses, we’ll send
              them right to your inbox.
            </p>
            <div className="cta-2-form text-center">
              <form action="#" method="post" id="workshop-newsletter-form">
                <input
                  name=""
                  placeholder="Enter Your Email Address"
                  type="email"
                />
                <input
                  className="cta-2-form-submit-btn"
                  defaultValue="Subscribe"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Cta*/}
    {/*work-shop*/}
    <section id="work-shop" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2>Upcoming Workshop</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="service-box text-center">
              <div className="icon-box">
                <i className="fa fa-html5 color-green" />
              </div>
              <div className="icon-text">
                <h4 className="ser-text">Mentor HTML5 Workshop</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="service-box text-center">
              <div className="icon-box">
                <i className="fa fa-css3 color-green" />
              </div>
              <div className="icon-text">
                <h4 className="ser-text">Mentor CSS3 Workshop</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="service-box text-center">
              <div className="icon-box">
                <i className="fa fa-joomla color-green" />
              </div>
              <div className="icon-text">
                <h4 className="ser-text">Mentor Joomla Workshop</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ work-shop*/}
    {/*Faculity member*/}
    <section id="faculity-member" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2>Meet Our Faculty Member</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="pm-staff-profile-container">
              <div className="pm-staff-profile-image-wrapper text-center">
                <div className="pm-staff-profile-image">
                  <img
                    src="img/mentor.jpg"
                    alt=""
                    className="img-thumbnail img-circle"
                  />
                </div>
              </div>
              <div className="pm-staff-profile-details text-center">
                <p className="pm-staff-profile-name">Bryan Johnson</p>
                <p className="pm-staff-profile-title">Lead Software Engineer</p>
                <p className="pm-staff-profile-bio">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et placerat dui. In posuere metus et elit placerat tristique.
                  Maecenas eu est in sem ullamcorper tincidunt.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="pm-staff-profile-container">
              <div className="pm-staff-profile-image-wrapper text-center">
                <div className="pm-staff-profile-image">
                  <img
                    src="img/mentor.jpg"
                    alt=""
                    className="img-thumbnail img-circle"
                  />
                </div>
              </div>
              <div className="pm-staff-profile-details text-center">
                <p className="pm-staff-profile-name">Bryan Johnson</p>
                <p className="pm-staff-profile-title">Lead Software Engineer</p>
                <p className="pm-staff-profile-bio">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et placerat dui. In posuere metus et elit placerat tristique.
                  Maecenas eu est in sem ullamcorper tincidunt.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="pm-staff-profile-container">
              <div className="pm-staff-profile-image-wrapper text-center">
                <div className="pm-staff-profile-image">
                  <img
                    src="img/mentor.jpg"
                    alt=""
                    className="img-thumbnail img-circle"
                  />
                </div>
              </div>
              <div className="pm-staff-profile-details text-center">
                <p className="pm-staff-profile-name">Bryan Johnson</p>
                <p className="pm-staff-profile-title">Lead Software Engineer</p>
                <p className="pm-staff-profile-bio">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  et placerat dui. In posuere metus et elit placerat tristique.
                  Maecenas eu est in sem ullamcorper tincidunt.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Faculity member*/}
    {/*Testimonial*/}
    <section id="testimonial" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2 className="white">See What Our Customer Are Saying?</h2>
            <p className="white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line bg-white" />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="text-comment">
              <p className="text-par">
                "Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, nec sagittis sem"
              </p>
              <p className="text-name">Abraham Doe - Creative Dırector</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="text-comment">
              <p className="text-par">
                "Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, nec sagittis sem"
              </p>
              <p className="text-name">Abraham Doe - Creative Dırector</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Testimonial*/}
    {/*Courses*/}
    <section id="courses" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2>Courses</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 padleft-right">
            <figure className="imghvr-fold-up">
              <img src="img/course01.jpg" className="img-responsive" />
              <figcaption>
                <h3>Course Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam atque, nostrum veniam consequatur libero fugiat,
                  similique quis.
                </p>
              </figcaption>
              <a href="#" />
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 padleft-right">
            <figure className="imghvr-fold-up">
              <img src="img/course02.jpg" className="img-responsive" />
              <figcaption>
                <h3>Course Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam atque, nostrum veniam consequatur libero fugiat,
                  similique quis.
                </p>
              </figcaption>
              <a href="#" />
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 padleft-right">
            <figure className="imghvr-fold-up">
              <img src="img/course03.jpg" className="img-responsive" />
              <figcaption>
                <h3>Course Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam atque, nostrum veniam consequatur libero fugiat,
                  similique quis.
                </p>
              </figcaption>
              <a href="#" />
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 padleft-right">
            <figure className="imghvr-fold-up">
              <img src="img/course04.jpg" className="img-responsive" />
              <figcaption>
                <h3>Course Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam atque, nostrum veniam consequatur libero fugiat,
                  similique quis.
                </p>
              </figcaption>
              <a href="#" />
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 padleft-right">
            <figure className="imghvr-fold-up">
              <img src="img/course05.jpg" className="img-responsive" />
              <figcaption>
                <h3>Course Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam atque, nostrum veniam consequatur libero fugiat,
                  similique quis.
                </p>
              </figcaption>
              <a href="#" />
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 padleft-right">
            <figure className="imghvr-fold-up">
              <img src="img/course06.jpg" className="img-responsive" />
              <figcaption>
                <h3>Course Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam atque, nostrum veniam consequatur libero fugiat,
                  similique quis.
                </p>
              </figcaption>
              <a href="#" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    {/*/ Courses*/}
    {/*Pricing*/}
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2>Our Pricing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="price-table">
              {/* Plan  */}
              <div className="pricing-head">
                <h4>Monthly Plan</h4>
                <span className="fa fa-usd curency" />{" "}
                <span className="amount">200</span>
              </div>
              {/* Plean Detail */}
              <div className="price-in mart-15">
                <a href="#" className="btn btn-bg green btn-block">
                  PURCHACE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="price-table">
              {/* Plan  */}
              <div className="pricing-head">
                <h4>Quarterly Plan</h4>
                <span className="fa fa-usd curency" />{" "}
                <span className="amount">800</span>
              </div>
              {/* Plean Detail */}
              <div className="price-in mart-15">
                <a href="#" className="btn btn-bg yellow btn-block">
                  PURCHACE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="price-table">
              {/* Plan  */}
              <div className="pricing-head">
                <h4>Year Plan</h4>
                <span className="fa fa-usd curency" />{" "}
                <span className="amount">1200</span>
              </div>
              {/* Plean Detail */}
              <div className="price-in mart-15">
                <a href="#" className="btn btn-bg red btn-block">
                  PURCHACE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ Pricing*/}
    {/*Contact*/}
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nesciunt vitae,
              <br /> maiores, magni dolorum aliquam.
            </p>
            <hr className="bottom-line" />
          </div>
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage" />
          <form action="" method="post" role="form" className="contactForm">
            <div className="col-md-6 col-sm-6 col-xs-12 left">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control form"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validation" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validation" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div className="validation" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 right">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                  defaultValue={""}
                />
                <div className="validation" />
              </div>
            </div>
            <div className="col-xs-12">
              {/* Button */}
              <button
                type="submit"
                id="submit"
                name="submit"
                className="form contact-form-button light-form-button oswald light"
              >
                SEND EMAIL
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    {/*/ Contact*/}
    {/*Footer*/}
    <footer id="footer" className="footer">
      <div className="container text-center">
        <h3>Start Your Free Trial Now!</h3>
        <form className="mc-trial row">
          <div className="form-group col-md-3 col-md-offset-2 col-sm-4">
            <div className=" controls">
              <input
                name="name"
                placeholder="Enter Your Name"
                className="form-control"
                type="text"
              />
            </div>
          </div>
          {/* End email input */}
          <div className="form-group col-md-3 col-sm-4">
            <div className=" controls">
              <input
                name="EMAIL"
                placeholder="Enter Your email"
                className="form-control"
                type="email"
              />
            </div>
          </div>
          {/* End email input */}
          <div className="col-md-2 col-sm-4">
            <p>
              <button
                name="submit"
                type="submit"
                className="btn btn-block btn-submit"
              >
                Submit <i className="fa fa-arrow-right" />
              </button>
            </p>
          </div>
        </form>
        {/* End newsletter-form */}
        <ul className="social-links">
          <li>
            <a href="#link">
              <i className="fa fa-twitter fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i className="fa fa-facebook fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i className="fa fa-google-plus fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i className="fa fa-dribbble fa-fw" />
            </a>
          </li>
          <li>
            <a href="#link">
              <i className="fa fa-linkedin fa-fw" />
            </a>
          </li>
        </ul>
        ©2024 Eduland Mentor. All rights reserved
        <div className="credits"></div>
      </div>
    </footer>
    {/*/ Footer*/}
  </>


    </div>
  )
}

export default Mentor