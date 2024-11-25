import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/navbar.css";
import "../../styles/sidebar.css";
import { useState } from "react";
import { useAppSelector } from "../../redux/slices/hook/hook";

export default function Navigation(): JSX.Element {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const categories = useAppSelector((store) => store.categories.categories);

  const toggleHandler = () => {
    setSidebarIsOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#menuopen" onClick={toggleHandler}>
            Brand link
          </Navbar.Brand>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Brand>Cart</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarIsOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={toggleHandler}>
          X
        </button>
        <ul className="sidebar-menu">
          {categories.map((category) => (
            <li key={category.id}>
              <a>{category.name}</a>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <div className="social-links">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              VK
            </a>
          </div>
          <button className="help-button">Помощь по размеру</button>
        </div>
      </div>
    </>
  );
}
