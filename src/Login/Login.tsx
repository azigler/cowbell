import React from "react"
import OAuth2Login from "react-simple-oauth2-login"
import { Context } from "../Context/Context"
const clientId = process.env.REACT_APP_OAUTH2_CLIENT_ID

// You can test this with a GitHub OAuth2 app (provided test server supports GitHub and Spotify)
const onSuccess = ({ code }: { code: string }) => {
  console.log(code)
}

const onFailure = ({ code }: { code: string }) => {
  console.log(code)
}

function Login() {
  const { ctx, updateCtx } = React.useContext(Context)

  console.log(ctx.boop)

  React.useEffect(() => {
    console.log("running effect once")
    if (updateCtx !== undefined) {
      console.log("ctx is defined")
      updateCtx({
        boop: "wow2",
      })
      console.log(ctx.boop)
    }

    console.log(ctx.boop)
  }, [ctx.boop, updateCtx])

  console.log(ctx.boop)

  return (
    <div>
      <span>{ctx.boop}</span>
      <OAuth2Login
        authorizationUrl="https://chat.zigmoo.net/oauth/authorize"
        responseType="code"
        clientId={clientId}
        redirectUri={
          process.env.NODE_ENV === "production"
            ? "https://play.zigmoo.net"
            : "https://localhost:3000"
        }
        isCrossOrigin={true}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export { Login }
