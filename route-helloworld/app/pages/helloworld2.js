import Layout from "app/core/layouts/Layout"
import {Link, Routes} from "blitz"

const Helloworld2 = () => {
  return (
    <div className="container">
      <h1>helloworld 2</h1>
      <Link href={Routes.Helloworld1()}>
        <a className="button small">
          <strong>Helloworld1</strong>
        </a>
      </Link>
    </div>
  )
}

Helloworld2.suppressFirstRenderFlicker = true

Helloworld2.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Helloworld2
