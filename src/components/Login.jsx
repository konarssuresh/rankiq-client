import { useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useController, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { REGEX, ERROR_MESSAGE } from '../constants';
import { signInUser } from '../ducks/auth';
import { authDataSelector } from '../selectors';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.box.main,
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  borderRadius: '1.3125rem',
}));

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, userInfo } = useSelector(authDataSelector);

  useEffect(() => {
    if (!isEmpty(userInfo)) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);
  const { control, formState, reset, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  const {
    field: { ref, ...userNameProps },
    fieldState: { invalid, error: userNameError },
  } = useController({
    name: 'email',
    control,
    rules: {
      required: ERROR_MESSAGE.REQUIRED,
      pattern: { value: REGEX.EMAIL, message: ERROR_MESSAGE.EMAIL },
    },
  });

  const {
    field: { ref: passwordRef, ...passwordProps },
    fieldState: { invalid: passwordInvalid, error: passwordError },
  } = useController({
    name: 'password',
    control,
    rules: {
      required: ERROR_MESSAGE.REQUIRED,
      pattern: { value: REGEX.PASSWORD, message: ERROR_MESSAGE.PASSWORD },
    },
  });

  const handleReset = () => {
    reset();
  };

  return (
    <Container maxWidth="sm">
      <StyledBox
        sx={{ padding: { xs: '2rem 1rem', sm: '2rem' } }}
        mt={{ xs: '5rem', sm: '9rem' }}
        mb={{ xs: '1rem', sm: '5rem' }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" textAlign="center">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...userNameProps}
              inputRef={ref}
              error={invalid}
              label="Email Id"
              type="email"
              helperText={userNameError?.message}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...passwordProps}
              inputRef={passwordRef}
              error={passwordInvalid}
              label="Password"
              helperText={passwordError?.message}
              required
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              disabled={!formState.isValid || loading}
              fullWidth
              type="submit"
              onClick={() => {
                dispatch(signInUser(getValues()));
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="outlined"
              onClick={handleReset}
              fullWidth
            >
              Reset
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" textAlign="center">
              Not on RankIQ yet?
              <StyledLink color="primary.main" variant="body1" href="/signup">
                Sign Up.
              </StyledLink>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider>OR</Divider>
          </Grid>
          <Grid item xs={12}>
            <Button size="large" variant="contained" fullWidth type="submit">
              Continue as Guest
            </Button>
          </Grid>
        </Grid>
      </StyledBox>
    </Container>
  );
}

export default Login;
