import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 60px)", // Adjusts for the navbar height
        padding: "20px",
        flexWrap: "wrap", // Allows wrapping on smaller screens
      }}
    >
      {/* Text Content */}
      <div style={{ flex: "1", minWidth: "300px", textAlign: "center", padding: "20px" }}>
        <h1
          style={{
            color: "white", 
            fontSize: "4rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,1)",
          }}
        >
          Welcome To My Profile!
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "white", 
            maxWidth: "600px",
            textShadow: "1px 1px 3px rgba(0,0,0,1)",
            margin: "0 auto",
          }}
        >
          Here, you’ll discover more about my journey, including my education, 
          experiences, and passions. Thank you for visiting!
        </p>
      </div>

      {/* Image */}
      <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
        <img
          src="dou.jpg"
          alt="Profile"
          style={{
            maxWidth: "100%",
            maxHeight: "700px",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

function Education() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '20px' }}>Education</h1>
      <p style={{ fontSize: '2rem', maxWidth: '600px', textShadow: '1px 1px 3px rgba(0,0,0,1)' }}></p>
      <p
        style={{
          color: "white", 
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          maxWidth: "500px",
          lineHeight: "1.5",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Fixed the textShadow value here
          margin: "20px auto",
        }}
      >
        I am a graduate of Pamplona National High School, a lifelong learner, and passionate about sharing knowledge. Whether it's cycling education or exploring new ideas, I enjoy engaging with new concepts.
      </p>
    </div>
  );
}


function Hobbies() {
  const hobbies = [
    {
      image: "ridingnature.jpg",
      description: "My hobby is riding in nature, as it allows me to explore new landscapes, experience the tranquility of the outdoors, and enjoy the freedom of cycling through forests, mountains, and scenic paths, all while staying active and connecting with the natural world around me.",
    },
    {
      image: "sza.jpg",
      description: "All of SZA's music is my favorite, as her soulful voice and honest lyrics create a deeply emotional connection that resonates with me every time I listen.",
    },
    {
      image: "washing.jpg",
      description: "Washing my bike is an important part of my routine, as it keeps it in great condition and ensures a smooth, enjoyable ride every time I head out.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "30px",
      }}
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            maxWidth: "300px",
            margin: "10px",
          }}
        >
          {/* Image */}
          <img
            src={hobby.image}
            alt={`Hobby ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
          {/* Description */}
          <p
            style={{
              marginTop: "50px",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {hobby.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        You can reach out to me via any of the following platforms:
      </p>

      {/* Contact Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <a
          href="https://github.com/Kdalcebor"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.2rem",
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#24292f")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          GitHub
        </a>

        <a
          href="mailto:balatongnatong@gmail.com"
          style={{
            fontSize: "1.2rem",
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#d14836")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          Gmail
        </a>
      </div>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
        }}
      >
        Feel free to connect with me via any of the links above. I look forward to hearing from you!
      </p>
    </div>
  );
}

function Favorite() {
  const favoriteItems = [
    {
      image: "NightRide.jpg",
      description:
        "Night Ride ",
    },
    {
      image: "Competing.jpg",
      description:
        "Competing to improve my skills",
    },
    {
      image: "Nature.jpg",
      description:
        "Climbing Nature",
    },
  ];

  return (
    <div>
      {}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 5px rgba(0,0,0,0.😎",
          marginBottom: "30px",
        }}
      >
        Favorite
      </h1>
      {}
      <p
        style={{
          fontSize: "1.8rem",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 50px",
          lineHeight: "1.5",
          textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
        }}
      >
        I love exploring new landscapes on two wheels, where every ride offers
        adventure, fitness, and freedom. Cycling isnt just a passion—its my
        way of connecting with the world and discovering its beauty.
      </p>
      {}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          padding: "20px",
        }}
      >
        {favoriteItems.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              maxWidth: "300px",
              margin: "10px",
            }}
          >
            {}
            <img
              src={item.image}
              alt={`Favorite ${index + 1}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            {/* Description */}
            <p
              style={{
                marginTop: "20px",
                fontSize: "1.5rem",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}



function App() {
  const location = useLocation();

  const backgroundStyles = {
    "/home": {
      backgroundImage: 'url("sea.gif")',
    },
    "/education": {
      backgroundImage: 'url("sunset.gif")',
    },
    "/hobbies": {
      backgroundImage: 'url("kagura.gif")',
    },
    "/contact": {
      backgroundImage: 'url("yeah.gif")',
    },
    "/Favorite": {
      backgroundImage: 'url("beach.gif")',
    },
    
  };

  const currentStyle = backgroundStyles[location.pathname] || {
    backgroundImage: 'url("/default-background.jpg")',
  };

  return (
    <div
      style={{
        ...currentStyle,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        paddingTop: "60px",
        position: "relative",
      }}
    >
      <Navbar data-bs-theme="black" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "#1d1c1c" }}>
            KD Web Profile
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-link-hover">Home</Nav.Link>
            <Nav.Link as={Link} to="/education" className="nav-link-hover">Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies" className="nav-link-hover">Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-hover">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Favorite" className="nav-link-hover">Favorite</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={{ color: 'black', paddingTop: '80px', padding: '20px' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Wrapper;