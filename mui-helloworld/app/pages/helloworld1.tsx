import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"

const Helloworld1: BlitzPage = () => {
  return (
    <div className="container">
      <Button>helloworld</Button>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

Helloworld1.suppressFirstRenderFlicker = true
Helloworld1.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Helloworld1
