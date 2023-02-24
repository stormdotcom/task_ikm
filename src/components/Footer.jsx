import { Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #6c757e;
  color: #fff;
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  flex-basis: 50%;

  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    margin-top: 10px;
  }
`;

const Links = styled.ul`
display: flex;
justify-content: space-evenly;
  margin: 0;
  padding: 0;
  text-align: right;

  @media only screen and (max-width: 768px) {
    display: block;
    margin: 10px 0;
  }
`;


function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Column>
            <p>&copy; 2023  Company</p>
          </Column>
          <Column>
            <Links>
              <Grid> <Typography>About</Typography></Grid>
              <Grid>  <Typography>Terms of Use</Typography></Grid>
              <Grid>  <Typography>Contact</Typography></Grid>
            </Links>
          </Column>
        </Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
