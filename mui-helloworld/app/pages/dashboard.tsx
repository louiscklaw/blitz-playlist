import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material"

const Dashboard: BlitzPage = () => {
  return (
    <div className="container">
      <Button>helloworld</Button>
      <Typography variant="h3">dashboard ?</Typography>
    </div>
  )
}

Dashboard.suppressFirstRenderFlicker = true
Dashboard.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Dashboard
