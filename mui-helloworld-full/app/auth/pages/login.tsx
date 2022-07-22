import { useRouter, BlitzPage, Routes, Head, Link } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { LoginForm } from 'app/auth/components/LoginForm'
import { Box, Card, Container, Divider, Typography } from '@mui/material'
import { JWTLogin } from '../../components/authentication/jwt-login'
import { Logo } from '../../components/logo'

const platformIcons = {
  Amplify: '/static/icons/amplify.svg',
  Auth0: '/static/icons/auth0.svg',
  Firebase: '/static/icons/firebase.svg',
  JWT: '/static/icons/jwt.svg',
}

const LoginPage: BlitzPage = () => {
  const router = useRouter()
  const platform = 'JWT'
  const { disableGuard } = router.query

  return (
    <div>
      <Head>
        <title>Login | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* <AuthBanner /> */}
        <Container
          maxWidth="sm"
          sx={{
            py: { xs: '60px', md: '120px' },
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: theme => (theme.palette.mode === 'dark' ? 'neutral.900' : 'neutral.100'),
              borderColor: 'divider',
              borderRadius: 1,
              borderStyle: 'solid',
              borderWidth: 1,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              mb: 4,
              p: 2,
              '& > img': {
                height: 32,
                width: 'auto',
                flexGrow: 0,
                flexShrink: 0,
              },
            }}
          >
            <Typography color="textSecondary" variant="caption">
              The app authenticates via {platform}
            </Typography>
            <img alt="Auth platform" src={platformIcons[platform]} />
          </Box>
          <Card elevation={16} sx={{ p: 4 }}>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Link href="/" passHref>
                <a>
                  <Logo sx={{ height: 40, width: 40 }} />
                </a>
              </Link>
              <Typography variant="h4">Log in</Typography>
              <Typography color="textSecondary" sx={{ mt: 2 }} variant="body2">
                Sign in on the internal platform
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              {platform === 'Amplify' && <AmplifyLogin />}
              {platform === 'Auth0' && <Auth0Login />}
              {platform === 'Firebase' && <FirebaseLogin />}
              {platform === 'JWT' && <JWTLogin />}
            </Box>
            <Divider sx={{ my: 3 }} />
            <div>
              <Link href={disableGuard ? `/authentication/register?disableGuard=${disableGuard}` : Routes.SignupPage()} passHref>
                <Link color="textSecondary" variant="body2">
                  Create new account
                </Link>
              </Link>
            </div>
            {platform === 'Amplify' && (
              <Box sx={{ mt: 1 }}>
                <Link href={disableGuard ? `/authentication/password-recovery?disableGuard=${disableGuard}` : '/authentication/password-recovery'} passHref>
                  <Link color="textSecondary" variant="body2">
                    Forgot password
                  </Link>
                </Link>
              </Box>
            )}
          </Card>
        </Container>
      </Box>
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = '/'
LoginPage.getLayout = page => <Layout title="Log In">{page}</Layout>

export default LoginPage
