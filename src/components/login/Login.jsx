import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Context from '../../context/gobalContext';
import useFormInput from '../../hooks/useFormInput';
import ModalAlert from '../modal-alert/ModalAlert';

import './styles.css';
function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      ©
      <Link color='inherit' href='https://material-ui.com/'>
        Alffa team &nbsp;
        {new Date().getFullYear()}
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#211449',
    height: '100px',
    width: '100px'
  },
  iconAvatar: {
    fontSize: '55px'
  },
  mt15: {
    marginTop: '30px'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function() {
  const { state, dispatch } = useContext(Context);
  const [modalData, setModalData] = useState({
    message: undefined,
    show: false
  });

  const user_name = useFormInput('');
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();

    console.log(
      'user_name.value.trim().length: ',
      user_name.value.trim().length
    );
    if (user_name.value.trim() === '') {
      console.log('User name is empty!');
      setModalData({
        message: 'Username is empty',
        show: true
      });

      return;
    }

    if (user_name.value.trim().length <= 5) {
      console.log('Your name must be 5 or more characters');
      setModalData({
        message: 'Your name must be 5 or more characters',
        show: true
      });

      return;
    }

    dispatch({ type: 'login', payload: user_name.value });
  };

  return state.logged ? (
    <Redirect to='/' />
  ) : (
    <>
      <div className='login-maincontainer'>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon className={classes.iconAvatar} />
            </Avatar>
            <form
              className={classes.form}
              onSubmit={handleSubmit}
              method='POST'
              autoComplete='off'
              noValidate
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Usuario'
                type='text'
                autoFocus
                {...user_name}
              />
              <TextField
                className={classes.mt15}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Contraseña'
                type='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Recordarme'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {'¿Ya tienes cuenta? Registrate'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
      <ModalAlert {...modalData} setModalData={setModalData} />
    </>
  );
}
