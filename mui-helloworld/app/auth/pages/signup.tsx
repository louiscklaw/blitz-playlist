import { useRouter, BlitzPage, Routes, Head, Link } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import { Box, Card, Container, Divider, Typography } from "@mui/material"
import { Logo } from "app/components/logo"
import { JWTRegister } from "../../components/authentication/jwt-register"

const platformIcons = {
  Amplify: "/static/icons/amplify.svg",
  Auth0: "/static/icons/auth0.svg",
  Firebase: "/static/icons/firebase.svg",
  JWT: "/static/icons/jwt.svg",
}

const SignupPage: BlitzPage = () => {
  const router = useRouter()
  const platform = "JWT"

  return (
    <div>
      {/* <SignupForm onSuccess={() => router.push(Routes.Home())} /> */}
      <Head>
        <title>Register | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* <AuthBanner /> */}
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: "60px",
              md: "120px",
            },
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "neutral.900" : "neutral.100",
              borderColor: "divider",
              borderRadius: 1,
              borderStyle: "solid",
              borderWidth: 1,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mb: 4,
              p: 2,
              "& > img": {
                height: 32,
                width: "auto",
                flexGrow: 0,
                flexShrink: 0,
              },
              display: "none",
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
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link href="/" passHref>
                <a>
                  <Logo sx={{ height: 40, width: 40 }} />
                </a>
              </Link>
              <Typography variant="h4">Register</Typography>
              <Typography color="textSecondary" sx={{ mt: 2 }} variant="body2">
                Register on the internal platform
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 3 }}>{platform === "JWT" && <JWTRegister />}</Box>
            <Divider sx={{ my: 3 }} />
            <div>
              <Link href={Routes.LoginPage()} passHref>
                <Link color="textSecondary" variant="body2">
                  Having an account
                </Link>
              </Link>
            </div>
          </Card>
        </Container>
      </Box>
    </div>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage
