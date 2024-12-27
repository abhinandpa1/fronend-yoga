import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
const Home = () => {


  return (
    <div>
      <header id="home" style={{ padding: '2rem 0', backgroundColor: '#f9f9f9' }}>
        <div
          className="section_container header_container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div className="header__content" style={{ maxWidth: '50%', textAlign: 'left' }}>
            <h1 style={{ fontSize: '3rem', color: '#d291bc', fontWeight: '700' }}>Effective YOGA</h1>
            <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Do yoga today for a better tomorrow</h2>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <button
                className="btn"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  color: '#fff',
                  backgroundColor: '#d291bc',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  marginTop: '1rem',
                }}
              >
                GET STARTED
              </button>
            </Link>
          </div>
          <div
            className="header__image"
            style={{ maxWidth: '45%', textAlign: 'center' }}
          >
            <img
              src="https://raw.githubusercontent.com/WebDesignMastery/Yogalax_23-08-23/main/assets/header.jpg"
              alt="header"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </div>
      </header>

      <section
        className="section_container why_container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '3rem 0',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          className="why__image"
          style={{ flex: '1', maxWidth: '45%', textAlign: 'center' }}
        >
          <img
            src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/why.jpg?raw=true"
            alt="why yoga"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="why__content" style={{ flex: '1', maxWidth: '50%', paddingLeft: '2rem' }}>
          <h2
            className="section__header"
            style={{ fontSize: '2rem', color: '#333', marginBottom: '1rem' }}
          >
            Why You Should Go To Yoga
          </h2>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
            Engaging in yoga offers a holistic approach to wellness, encompassing both physical and mental benefits.
            Through a series of poses, stretches, and muscle strength. Its meditative aspects encourage mindfulness,
            reducing stress and anxiety while promoting a sense of inner peace.
          </p>
          <ul style={{ marginTop: '1.5rem' }}>
            <li style={{ fontSize: '1rem', color: '#333', marginBottom: '1rem' }}>
              <span style={{ color: '#d291bc', marginRight: '0.5rem' }}>✔</span> Yoga boosts brain power
            </li>
            <li style={{ fontSize: '1rem', color: '#333', marginBottom: '1rem' }}>
              <span style={{ color: '#d291bc', marginRight: '0.5rem' }}>✔</span> Yoga helps you to breathe better
            </li>
            <li style={{ fontSize: '1rem', color: '#333', marginBottom: '1rem' }}>
              <span style={{ color: '#d291bc', marginRight: '0.5rem' }}>✔</span> Yoga improves your strength
            </li>
            <li style={{ fontSize: '1rem', color: '#333', marginBottom: '1rem' }}>
              <span style={{ color: '#d291bc', marginRight: '0.5rem' }}>✔</span> Yoga helps you to focus
            </li>
            <li style={{ fontSize: '1rem', color: '#333' }}>
              <span style={{ color: '#d291bc', marginRight: '0.5rem' }}>✔</span> Yoga helps give meaning to your day
            </li>
          </ul>
        </div>
      </section>

      <section
        className="hero"
        id="hero"
        style={{ padding: '3rem 0', backgroundColor: '#f9f9f9' }}
      >
        <div
          className="section_container hero_container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            gap: '2rem',
          }}
        >
          <div
            className="hero__card"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '2rem',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span>
              <img
                src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/icon-1.png?raw=true"
                alt="hero"
                style={{ width: '60px', height: '60px', marginBottom: '1rem' }}
              />
            </span>
            <h4 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>
              Healthy Lifestyle
            </h4>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
              Embrace a healthy lifestyle through the transformative power of yoga and cultivate physical vitality and
              inner peace.
            </p>
          </div>
          <div
            className="hero__card"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '2rem',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span>
              <img
                src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/icon-2.png?raw=true"
                alt="hero"
                style={{ width: '60px', height: '60px', marginBottom: '1rem' }}
              />
            </span>
            <h4 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>
              Body & Mind Balance
            </h4>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
              Through purposeful poses and mindful breathing, yoga cultivates a strong, flexible body while nurturing
              inner calm.
            </p>
          </div>
          <div
            className="hero__card"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '2rem',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span>
              <img
                src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/icon-3.png?raw=true"
                alt="hero"
                style={{ width: '60px', height: '60px', marginBottom: '1rem' }}
              />
            </span>
            <h4 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>
              Meditation Practice
            </h4>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
              Discover inner serenity and mindfulness as you cultivate a profound connection with the present moment.
            </p>
          </div>
          <div
            className="hero__card"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '2rem',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span>
              <img
                src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/icon-4.png?raw=true"
                alt="hero"
                style={{ width: '60px', height: '60px', marginBottom: '1rem' }}
              />
            </span>
            <h4 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>
              Self-Care
            </h4>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
              Discover the transformative power of self-care through yoga and embrace moments of tranquility and mindfulness.
            </p>
          </div>
        </div>
      </section>

      <section class="section_container classes_container mt-5" id="classes">

        <h2 class="section__header">Choose Your Level & Focus</h2>
        <div class="classes__grid">
          <div class="classes__image">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/classes-1.jpg?raw=true" alt="classes" />
            <div class="classes__content">
              <Link to="/register">
                <button class="btn classes__btn">View More</button>
              </Link>
            </div>
          </div>
          <div class="classes__image">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/classes-2.jpg?raw=true" alt="classes" />
            <div class="classes__content">
              <Link to="/register">
                <button class="btn classes__btn">View More</button>
              </Link>
            </div>
          </div>
          <div class="classes__image">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/classes-3.jpg?raw=true" alt="classes" />
            <div class="classes__content">
              <Link to="/register">
                <button class="btn classes__btn">View More</button>
              </Link>
            </div>
          </div>
          <div class="classes__image">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/classes-4.jpg?raw=true" alt="classes" />
            <div class="classes__content">
              <Link to="/register">
                <button class="btn classes__btn">View More</button>
              </Link>
            </div>
          </div>
          <div class="classes__image">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/classes-5.jpg?raw=true" alt="classes" />
            <div class="classes__content">
              <Link to="/register">
                <button class="btn classes__btn">View More</button>
              </Link>
            </div>
          </div>
          <div class="classes__image">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/classes-6.jpg?raw=true" alt="classes" />
            <div class="classes__content">
              <Link to="/register">
                <button class="btn classes__btn">View More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="membership mt-5" id="membership ">
        <div class="section_container membership_container">

          <h2 class="section__header">Membership Cards</h2>
          <div class="membership__grid">
            <div class="membership__card">
              <h4>YEAR CARD</h4>
              <h2><sup>$</sup>499</h2>
              <h3>For 1 Year</h3>
              <h4>ENJOY ALL THE FEATURES</h4>
              <p>Onetime access to all club</p>
              <p>Group trainer</p>
              <p>Book a group class</p>
              <p>Fitness orientation</p>
              <Link to="/register">
              <button class="btn membership__btn">GET STARTED</button>
              </Link>
            </div>
            <div class="membership__card">
              <h4>MONTHLY CARD</h4>
              <h2><sup>$</sup>200</h2>
              <h3>For 1 Month</h3>
              <h4>ENJOY ALL THE FEATURES</h4>
              <p>Group classes</p>
              <p>Discuss fitness goals</p>
              <p>Group trainer</p>
              <p>Fitness orientation</p>
              <Link to="/register" >
              <button class="btn membership__btn">GET STARTED</button>
              </Link>
            </div>
            <div class="membership__card">
              <h4>WEEKLY CARD</h4>
              <h2><sup>$</sup>85</h2>
              <h3>For 1 Week</h3>
              <h4>ENJOY ALL THE FEATURES</h4>
              <p>Access to yoga area</p>
              <p>Group trainer</p>
              <p>Group classes</p>
              <p>Fitness orientation</p>
              <Link to="/register">
              <button class="btn membership__btn">GET STARTED</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="section_container stories_container mt-5" id="stories">

        <h2 class="section__header">Successful Stories</h2>
        <div class="stories__grid">
          <div class="stories__card">
            <div class="stories__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <p>
                This yoga website has been a game-changer for me. The variety of
                classes and guided sessions have not only improved my flexibility
                but also brought a sense of calm to my hectic days.
              </p>
            </div>
            <div class="stories__author">
              <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/stories-1.jpg?raw=true" alt="author" />
              <div class="stories_author_details">
                <h4>Avanika</h4>
                <h6>Trainer</h6>
              </div>
            </div>
          </div>
          <div class="stories__card">
            <div class="stories__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <p>
                The tailored sessions and expert guidance have not only eased my
                discomfort but also boosted my overall well-being. A fantastic
                resource for both beginners and experienced yogis.
              </p>
            </div>
            <div class="stories__author">
              <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/stories-2.jpg?raw=true" alt="author" />
              <div class="stories_author_details">
                <h4>Gayathri</h4>
                <h6>Member</h6>
              </div>
            </div>
          </div>
          <div class="stories__card">
            <div class="stories__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <p>
                The on-demand classes allow me to practice whenever I can, and the
                mindfulness exercises have brought a new level of clarity to my
                life.A must-visit for anyone seeking holistic wellness.
              </p>
            </div>
            <div class="stories__author">
              <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/stories-3.jpg?raw=true" alt="author" />
              <div class="stories_author_details">
                <h4>Hansika</h4>
                <h6>Member</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="banner mt-5">
        <div class="section_container banner_container">
          <div class="banner__card">
            <h4>5,000</h4>
            <p>Happy Customers</p>
          </div>
          <div class="banner__card">
            <h4>4,560</h4>
            <p>Yoga Workshops</p>
          </div>
          <div class="banner__card">
            <h4>570</h4>
            <p>Years of Experience</p>
          </div>
          <div class="banner__card">
            <h4>900</h4>
            <p>Lesson Conducted</p>
          </div>
        </div>
      </section>

      <section class="posts mt-5" id="posts">
        <div class="section_container posts_container">

          <h2 class="section__header">Recent Posts</h2>
          <div class="posts__grid">
            <div class="posts__card">
              <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/posts-1.jpg?raw=true" alt="post" />
              <div class="posts__content">
                <div class="posts__date">
                  <span>31</span>
                  <div>
                    <p>2024</p>
                    <p>Julyr</p>
                  </div>
                </div>
                <h4>Unlocking Inner Peace</h4>
                <p>
                  Dive into the practices that help you cultivate inner peace,
                  reduce stress, and enhance your overall well-being.
                </p>
              </div>
            </div>
            <div class="posts__card">
              <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/posts-2.jpg?raw=true" alt="post" />
              <div class="posts__content">
                <div class="posts__date">
                  <span>25</span>
                  <div>
                    <p>2024</p>
                    <p>March</p>
                  </div>
                </div>
                <h4>From Desk to Mat</h4>
                <p>
                  Learn incorporating simple yoga stretches and breathing
                  techniques to counter effects of sedentary lifestyle.
                </p>
              </div>
            </div>
            <div class="posts__card">
              <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/posts-3.jpg?raw=true" alt="post" />
              <div class="posts__content">
                <div class="posts__date">
                  <span>06</span>
                  <div>
                    <p>2024</p>
                    <p>August</p>
                  </div>
                </div>
                <h4>Yoga Through the Ages</h4>
                <p>
                  From prenatal yoga to gentle senior yoga, discover enhance
                  flexibility and foster a lifelong love for well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section_container photos_container mt-5">

        <h2 class="section__header">See The Latest Photos</h2>
        <div class="photos__grid">
          <div class="photos__card">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/photos-1.jpg?raw=true" alt="photo" />
          </div>
          <div class="photos__card">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/photos-2.jpg?raw=true" alt="photo" />
          </div>
          <div class="photos__card">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/photos-3.jpg?raw=true" alt="photo" />
          </div>
          <div class="photos__card">
            <img src="https://github.com/WebDesignMastery/Yogalax_23-08-23/blob/main/assets/photos-4.jpg?raw=true" alt="photo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;