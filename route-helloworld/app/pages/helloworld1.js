import Layout from "app/core/layouts/Layout"
import {Link, Routes} from "blitz"

const Helloworld1 = () => {
  return (
    <div className="container">
      <h1>helloworld 1</h1>
      <Link href={Routes.Helloworld2()}>
        <a className="button small">
          <strong>Helloworld2</strong>
        </a>
      </Link>
    </div>
  )
}

Helloworld1.suppressFirstRenderFlicker = true

Helloworld1.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Helloworld1
