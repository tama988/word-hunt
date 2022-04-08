import React from "react";
import "./Header.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import categories from "../data/categories";

const Header = ({ setCategory, category, word, setWord }) => {
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <>
      <div className="header">
        <span className="title">{word ? word : "Word Hunt"}</span>
      </div>
      <div className="inputs">
        <Container>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search a Word"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingSelect"
                style={{ color: "black" }}
                label="Language"
              >
                <Form.Select
                  value={category}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  {categories.map((optn) => {
                    return (
                      <>
                        <option key={optn.label} value={optn.label}>
                          {optn.value}
                        </option>
                      </>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
