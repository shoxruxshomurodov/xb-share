import { get } from "lodash";
import React, { useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import Heading from "../../../components/heading";
import { useStore } from "../../../store";

const Styled = styled.div`
  margin: 0px 15px;
  .quick_links_section {
    background-color: #f3f3f3;
  }
`;
const HomeContainer = () => {
  const setBreadcrumbs = useStore((state) =>
    get(state, "setBreadcrumbs", () => {})
  );

  const breadcrumbs = useMemo(() => [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    [],
  ]);
  useEffect(() => {
    setBreadcrumbs(breadcrumbs);
  }, []);

  return (
    <Styled>
      <Container
        style={{
          border: "1px solid red",
        }}
      >
        <Heading title="News" />
        <Row>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={5}
          >
            <h1>Main news</h1>
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={7}
          >
            <h1>Secondary news</h1>
            <h2>News 1</h2>
            <h2>News 2</h2>
            <h2>News 3</h2>
          </Col>
        </Row>
        <Row
          style={{
            border: "1px solid red",
            background: "red",
          }}
        >
          <Heading title="Quick links" />
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
        </Row>
      </Container>

      {/* <Heading title="News" />
      <Row>
        <Col
          style={{
            border: "1px solid red",
          }}
          md={5}
        >
          <h1>Main news</h1>
        </Col>
        <Col
          style={{
            border: "1px solid red",
          }}
          md={7}
        >
          <h1>Secondary news</h1>
          <h2>News 1</h2>
          <h2>News 2</h2>
          <h2>News 3</h2>
        </Col>
      </Row>
      <Col className="quick_links_section">
        <Row>
          <Col md={12}>
            <Heading title={"Quick Links"} />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            md={3}
          >
            sads
          </Col>
        </Row>
      </Col> */}
    </Styled>
  );
};

export default HomeContainer;
