import { NavLink } from 'react-router-dom';
import navlogo from '../assets/navlogo.png';
import { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLight]);

  return (
    <PageWrapper>
      <nav
        className={`navbar navbar-expand-md ${
          isLight ? '' : 'navbar-dark'
        } d-flex align-items-center font-family py-3`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <img src={navlogo} alt="Navbar icon" style={{ width: '150px' }} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto gap-md-5 gap-3 fs-6 fw-medium text-center text-md-start">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-danger' : 'text-light'}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-danger' : 'text-light'}`
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/education"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-danger' : 'text-light'}`
                  }
                >
                  Education
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-danger' : 'text-light'}`
                  }
                >
                  Skills
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/learningjourney"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-danger' : 'text-light'}`
                  }
                >
                  Learning Journey
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-danger' : 'text-light'}`
                  }
                >
                  Projects
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-danger' : 'text-light'}`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item d-md-none mt-3 d-flex justify-content-center">
                <label className="switch mb-0">
                  <input
                    type="checkbox"
                    checked={isLight}
                    onChange={() => setIsLight((prev) => !prev)}
                  />
                  <span className="slider"></span>
                </label>
              </li>
            </ul>
          </div>

          <div className="d-none d-md-flex align-items-center">
            <label className="switch mb-0">
              <input
                type="checkbox"
                checked={isLight}
                onChange={() => setIsLight((prev) => !prev)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>
    </PageWrapper>
  );
}
