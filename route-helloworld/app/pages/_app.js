import {ErrorBoundary, ErrorComponent, AuthenticationError, AuthorizationError, useQueryErrorResetBoundary} from "blitz"
import LoginForm from "app/auth/components/LoginForm"
export default function App({Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={useQueryErrorResetBoundary().reset}>
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>
  )
}

function RootErrorFallback({error, resetErrorBoundary}) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return <ErrorComponent statusCode={error.statusCode} title="Sorry, you are not authorized to access this" />
  } else {
    return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
  }
}
