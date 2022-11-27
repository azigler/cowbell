import OAuth2Login from "react-simple-oauth2-login"

const onSuccess = (response: any) => console.log(response)
const onFailure = (response: any) => console.error(response)

function Login() {
  return (
    <OAuth2Login
      authorizationUrl="https://chat.zigmoo.net/oauth/authorize"
      responseType="code"
      clientId="tnbwmsnz6prktdzist849sfkdh"
      redirectUri="https://play.zigmoo.net"
      isCrossOrigin={true}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  )
}

export default Login
