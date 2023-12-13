import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

function Scrollbar() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "linear",
    });
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand onClick={scrollToTop} style={{ cursor: "pointer" }} className="fw-bold fst-italic">
        SecureSync
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto navbar-nav-scroll" navbarScroll>
            <ScrollLink
              to="action1"
              // smooth={true}
              duration={100}
              spy={true}
              exact="true"
              className="me-3 text-dark fw-bold mt-2 link-underline link-underline-opacity-0"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="action2"
              // smooth={true}
              duration={200}
              spy={true}
              exact="true"
              className="me-3 text-dark fw-bold mt-2 link-underline link-underline-opacity-0"
            >
              About
            </ScrollLink>

            <NavDropdown
              title="Project"
              id="navbarScrollingDropdown"
              className="me-3 text-dark fw-bold  link-underline link-underline-opacity-0"
            >
              <ScrollLink
                to="action3"
                // smooth={true}
                duration={300}
                spy={true}
                exact="true"
                className="dropdown-item"
              >
                Bull's Call
              </ScrollLink>
              <ScrollLink
                to="action4"
                // smooth={true}
                duration={400}
                spy={true}
                exact="true"
                className="dropdown-item"
              >
                Medi_Chain
              </ScrollLink>
              <ScrollLink
                to="action5"
                // smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="dropdown-item"
              >
                Doc_verification
              </ScrollLink>
            </NavDropdown>
            <ScrollLink
              to="action6"
              // smooth={true}
              duration={600}
              spy={true}
              exact="true"
              className="me-3 text-dark fw-bold mt-2 link-underline link-underline-opacity-0"
            >
              Streamline
            </ScrollLink>
            <ScrollLink
              to="action7"
              // smooth={true}
              duration={700}
              spy={true}
              exact="true"
              className="me-3 text-dark fw-bold mt-2 link-underline link-underline-opacity-0"
            >
              Blogs
            </ScrollLink>
            <ScrollLink
              to="action8"
              // smooth={true}
              duration={800}
              spy={true}
              exact="true"
              className="me-3 text-dark fw-bold mt-2 link-underline link-underline-opacity-0"
            >
              Contact Us
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Scrollbar;
