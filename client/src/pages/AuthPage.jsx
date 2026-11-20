
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

const AuthPage = ({ mode }) => {

  const { login, register } = useAppContext()
  const navigate = useNavigate()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const isLogin = mode === "login"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (mode === "login") {
        await login(email, password)
      } else {
        await register(name, email, password)
      }
      navigate("/")
    } catch (err) {
      setError(err.message || (mode === "login" ? "Invalid email or password" : "Registration failed"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#09090B] flex items-center justify-center px-4 py-8 text-white font-sans">

      {/* Authentication Card */}
      <div className="w-full max-w-md bg-[#18181B] border border-[#303034] rounded-2xl px-7 py-9 sm:px-8 sm:py-10 shadow-xl">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
              AI
            </span>
          </div>

          <span className="text-2xl font-semibold tracking-tight text-white">
            AI Website Builder
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>

          <p className="text-sm text-zinc-400 leading-6">
            {isLogin
              ? "Sign in to continue building your website with AI."
              : "Create an account and start building websites with AI."
            }
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 border border-red-500/30 bg-red-500/10 text-red-400 text-sm rounded-lg">
            {error}
          </div>
        )}

        {/* Authentication Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-3 bg-[#27272A] border border-[#414148] rounded-lg text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-3 bg-[#27272A] border border-[#414148] rounded-lg text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-3 pr-11 bg-[#27272A] border border-[#414148] rounded-lg text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                {showPassword
                  ? <EyeOffIcon size={18} />
                  : <EyeIcon size={18} />
                }
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 disabled:opacity-40 flex items-center justify-center cursor-pointer transition-opacity mt-2"
          >
            {loading && (
              <Loader2Icon className="animate-spin h-4 w-4 mr-2" />
            )}

            {isLogin ? "Sign in" : "Sign up"}
          </button>

        </form>

        {/* Footer */}
        <div className="mt-7 pt-5 border-t border-[#303034] text-center">
          <p className="text-sm text-zinc-400">

            {isLogin ? (
              <>
                New to AI Website Builder?{" "}
                <Link
                  to="/register"
                  className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                >
                  Create an account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                >
                  Sign in here
                </Link>
              </>
            )}

          </p>
        </div>

      </div>
    </div>
  )
}

export default AuthPage
