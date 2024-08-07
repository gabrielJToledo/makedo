import React from 'react'
import './Contact.css'
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

function Contact() {

  const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Cor padrão da borda
      },
      '&:hover fieldset': {
        borderColor: 'black', // Cor da borda ao passar o mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Cor da borda quando focado
      },
    },
  }));

  return (
    <div className="contact">
      <div className="d-flex justify-content-center">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-lg-6">
              <h1 className='fw-bold'>Deu match? <br /> Fale com a Makedo</h1>

              <p className='fw-bold fs-2 mt-5 mb-0'>Email</p>
              <p>contato@makedo.me</p>

              <p className='fw-bold fs-2 mt-5 mb-0'>Telefone</p>
              <p>(11) 98876-3443</p>
            </div>

            <div className="col-12 col-lg-6">
              <Box component="form" noValidate autoComplete="off">
                <CustomTextField
                  fullWidth
                  id="name"
                  label="Nome"
                  variant="outlined"
                  margin="normal"
                />
                <CustomTextField
                  fullWidth
                  id="email"
                  label="E-mail"
                  type="email"
                  variant="outlined"
                  margin="normal"
                />
                <CustomTextField
                  fullWidth
                  id="message"
                  label="Mensagem"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                />
                <Button
                  className='submit-button-contact'
                  variant="contained"
                  sx={{ mt: 2 }}
                  type="submit"
                >
                  Enviar
                </Button>
              </Box>
            </div>

            <div className="d-flex justify-content-center">
              <div className="division w-100  "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact