import React from "react"
import { Helmet } from "react-helmet-async"
import { useClientContext } from "../Context/Context"
import { useSearchParams, Navigate } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

// TIP: interchangeable with mattermost
const {
  REACT_APP_DISCORD_OAUTH2_CLIENT_ID,
  REACT_APP_DISCORD_OAUTH2_CLIENT_SECRET,
  REACT_APP_DISCORD_OAUTH2_TOKEN_URI,
  REACT_APP_DISCORD_OAUTH2_AUTHORIZATION_URI,
  REACT_APP_DISCORD_API_ME,
} = process.env

const redirectUri =
  process.env.NODE_ENV === "production"
    ? "https://play.zigmoo.net/login"
    : "https://localhost:3000/login"

export function Login() {
  const { state, dispatch } = useClientContext()
  const [searchParams] = useSearchParams()
  const [token, setToken] = useLocalStorage("token", null)

  React.useEffect(() => {
    const code = searchParams.get("code")

    const fetchMe = (token: string) => {
      fetch(`${REACT_APP_DISCORD_API_ME}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        if (res.ok) {
          return dispatch({
            type: "login_me",
            me: await res.json(),
          })
        }
      })
    }

    if (code) {
      const body = new URLSearchParams()
      body.set("grant_type", "authorization_code")
      body.set("code", code)
      body.set("redirect_uri", redirectUri)
      body.set("client_id", REACT_APP_DISCORD_OAUTH2_CLIENT_ID as string)
      body.set(
        "client_secret",
        REACT_APP_DISCORD_OAUTH2_CLIENT_SECRET as string
      )

      fetch(`${REACT_APP_DISCORD_OAUTH2_TOKEN_URI}`, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
        })
        .then((data) => {
          if (data.access_token) {
            setToken(data.access_token)
            return data.access_token
          }
        })
        .then((token) => fetchMe(token))
    } else if (!token) {
      window.location.replace(
        `${REACT_APP_DISCORD_OAUTH2_AUTHORIZATION_URI}?response_type=code&redirect_uri=${redirectUri}&client_id=${REACT_APP_DISCORD_OAUTH2_CLIENT_ID}&scope=identify%20email&prompt=none`
      )
    } else if (token) {
      fetchMe(token)
    }
  }, [searchParams, dispatch, setToken, token])

  if (state.me) {
    if (searchParams.has("code")) searchParams.delete("code")
    return <Navigate to="/" />
  }

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
    </div>
  )
}
