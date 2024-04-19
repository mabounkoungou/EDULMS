import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
        <>
        <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Edulms - Education learning Platform</title>
  {/* 
    - favicon
  */}
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
  {/* 
    - custom css link
  */}
  <link rel="stylesheet" href="./assets/css/style.css" />
  {/* 
    - google font link
  */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Poppins:wght@600;700&family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
  {/* 
    - #HEADER
  */}
  <header className="header" data-header>
    <div className="container">
      <div className="overlay" data-overlay />
      <a href="#" className="logo">
        <img src="./assets/images/logo.svg" alt="Eduland logo" />
      </a>
      <button className="menu-open-btn" data-menu-open-btn>
        <ion-icon name="menu-outline" />
      </button>
      <nav className="navbar" data-navbar>
        <button className="menu-close-btn" data-menu-close-btn>
          <ion-icon name="close-outline" />
        </button>
        <a href="/home" className="logo">
          <img src="./assets/images/logo.svg" alt="Eduland logo" />
        </a>
        <ul className="navbar-list">
          <li>
            <a href="/home" className="navbar-link">Home</a>
          </li>
          <li>
            <a href="#" className="navbar-link">About</a>
          </li>
          <li>
            <a href="#" className="navbar-link">Service</a>
          </li>
          <li>
            <a href="#" className="navbar-link"> <Link href={"/mentor"}>
         Our Mentors
          
          </Link></a>
          </li>
          <li>
            <a href="#" className="navbar-link">Contact</a>
          </li>
        </ul>
        <button className="btn btn-secondary">
          <Link href={"/sign-up"}>
          Get Started
          
          </Link></button>
      </nav>
    </div>
  </header>
  <main>
    <article>
      {/* 
  - #HERO
*/}
      <section className="hero">
        <div className="container">
          <figure className="hero-banner">
            <img src="./assets/images/hero-banner.png" alt="A young lady sits, holding a pen and a notebook." />
          </figure>
          <div className="hero-content">
            <h1 className="h1 hero-title">Start Your Future Education</h1>
            <p className="section-text">
              Credibly redefine distinctive total linkage vis-a-vis multifunction data. Phosphorescently impact
              goal-oriented
              strategic
            </p>
            <button className="btn btn-primary"> <a href="/sign-up">Discover More</a> </button>
          </div>
        </div>
      </section>
      {/* 
  - #ABOUT
*/}
      <section className="about">
        <div className="container">
          <figure className="about-banner">
            <img src="./assets/images/about-banner.png" alt="Eduland students" className="about-img" />
            <img src="./assets/images/about-vector.svg" alt="Vector line art" className="vector-line" />
            <button className="play-btn">
              <ion-icon name="play" />
            </button>
          </figure>
          <div className="about-content">
            <h2 className="h2 about-title">We Help to Create Possibility &amp; Success in Your Career!</h2>
            <p className="section-text">
              Continually administrate process-centric human capital rather than bleeding-edge methodologies.
              Distinctively supply
              accurate methods of empowerment before.
            </p>
            <button className="btn btn-primary">Get Started Today</button>
          </div>
        </div>
      </section>
      {/* 
  - #DEPARTMENTS
*/}
      <section className="departments">
        <div className="container">
          <img src="./assets/images/departmets-vector.svg" alt="Vector line art" className="vector-line" />
          <h2 className="h2 departments-title">We Have Most of Popular Departments</h2>
          <ul className="departments-list">
            <li>
              <div className="departments-card">
                <a href="#" className="card-banner">
                  <figure>
                    <img src="./assets/images/depertment-1.png" alt="Artificial Intelligence" />
                  </figure>
                </a>
                <a href="#">
                  <h3 className="h3 card-title">Artificial Intelligence</h3>
                </a>
                <p className="card-text">
                  Assertively parallel task synergistic deliverables after high-quality.
                </p>
                <a href="#" className="card-link">
                  <span>Learn More</span>
                  <ion-icon name="arrow-forward" />
                </a>
              </div>
            </li>
            <li>
              <div className="departments-card">
                <a href="#" className="card-banner">
                  <figure>
                    <img src="./assets/images/depertment-2.png" alt="Civil Engineering" />
                  </figure>
                </a>
                <a href="#">
                  <h3 className="h3 card-title">Civil Engineering</h3>
                </a>
                <p className="card-text">
                  Assertively parallel task synergistic deliverables after high-quality.
                </p>
                <a href="#" className="card-link">
                  <span>Learn More</span>
                  <ion-icon name="arrow-forward" />
                </a>
              </div>
            </li>
            <li>
              <div className="departments-card">
                <a href="#" className="card-banner">
                  <figure>
                    <img src="./assets/images/depertment-3.png" alt="Business Studies" />
                  </figure>
                </a>
                <a href="#">
                  <h3 className="h3 card-title">Business Studies</h3>
                </a>
                <p className="card-text">
                  Assertively parallel task synergistic deliverables after high-quality.
                </p>
                <a href="#" className="card-link">
                  <span>Learn More</span>
                  <ion-icon name="arrow-forward" />
                </a>
              </div>
            </li>
          </ul>
          <button className="btn btn-primary"> <a href="/sign-up">View All Courses</a> </button>
        </div>
      </section>
      {/* 
  - #INSTRUCTOR
*/}
      <section className="instructor">
        <div className="container">
          <img src="./assets/images/instructor-vactor-1.svg" alt="Vector line art" className="vector-line" />
          <div className="title-wrapper">
            <h2 className="h2 instructor-title">Introduce with Our Famous Tutor</h2>
            <button className="btn btn-primary"> <a href="/sign-up">View All Tutors</a> </button>
          </div>
          <ul className="instructor-list">
            <li>
              <div className="instructor-card">
                <figure className="card-banner">
                  <img src="./assets/images/instructor-1.png" alt="Shaapir Prio" />
                </figure>
                <a href="#">
                  <h3 className="card-title">Shaapir Prio</h3>
                </a>
                <p className="card-subtitle">Assistant Director</p>
                <ul className="card-social-list">
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="instructor-card">
                <figure className="card-banner">
                  <img src="./assets/images/instructor-2.png" alt="Sellina" />
                </figure>
                <a href="#">
                  <h3 className="card-title">Sellina</h3>
                </a>
                <p className="card-subtitle">Director</p>
                <ul className="card-social-list">
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="instructor-card">
                <figure className="card-banner">
                  <img src="./assets/images/instructor-3.png" alt="John Smith" />
                </figure>
                <a href="#">
                  <h3 className="card-title">John Smith</h3>
                </a>
                <p className="card-subtitle">Assistant Director</p>
                <ul className="card-social-list">
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="card-social-link">
                      <ion-icon name="logo-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <img src="./assets/images/instructor-vactor-2.svg" alt="Vector line art" className="vector-line" />
        </div>
      </section>
      {/* 
  - #CTA
*/}
      <section className="cta">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 cta-title">
              <span>Create Free Account &amp; Get Register</span>
              <img src="./assets/images/cta-vector.svg" alt="Vector arrow art" className="vector-line" />
            </h2>
            <button className="btn btn-primary"><a href="/sign-up">Register Now</a></button>
          </div>
          <div className="cta-banner" />
        </div>
      </section>
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
  <footer className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="./assets/images/logo.svg" alt="Eduland logo" />
          </a>
          <p className="footer-text">
            Professionally scale cross functional human capital and extensive technology.
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-google" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-link-box">
          <ul className="footer-list">
            <li>
              <p className="footer-link-title">Services</p>
            </li>
            <li>
              <a href="#" className="footer-link">Design</a>
            </li>
            <li>
              <a href="#" className="footer-link">Development</a>
            </li>
            <li>
              <a href="#" className="footer-link">Marketing</a>
            </li>
            <li>
              <a href="#" className="footer-link">Content Writing</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-link-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">About</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms</a>
            </li>
            <li>
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="footer-link">Careers</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-link-title">Job Info</p>
            </li>
            <li>
              <a href="#" className="footer-link">Select</a>
            </li>
            <li>
              <a href="#" className="footer-link">Services</a>
            </li>
            <li>
              <a href="#" className="footer-link">Payment</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-link-title">Contact</p>
            </li>
            <li className="contact-item">
              <span>Call : </span>
              <a href="tel:5463876387" className="contact-link">+233  0 50 4 07 8905</a>
            </li>
            <li className="contact-item">
              <span>Email : </span>
              <a href="mailto:harrisonasa365@gmail.com" className="contact-link">harrisonasa365@gmail.com</a>
            </li>
            <li className="contact-item">
              <span>Address : </span>
              <a href="#" className="contact-link">
                <address>Accra, Ghana</address>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2024 . All right reserved
        </p>
      </div>
    </div>
  </footer>
  {/* 
    - #GO TO TOP
  */}
  <a href="#top" className="go-top" data-go-top>
    <ion-icon name="arrow-up" />
  </a>
  {/* 
    - custom js link
  */}
  {/* 
    - ionicon link
  */}
</div>
        </>
  )
}

export default Home