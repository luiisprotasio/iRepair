import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router"
import type { FormEvent } from "react"
import { LoginForm } from "../components/LoginForm"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)

    const [loading, setLoading] = useState(false)

    const {login} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        setError("")
        try {
            await login(email, password)
            navigate("/")
        } catch (err) {
            setError("Falha no login. Verifique suas credenciais.")
        } finally {
            setLoading(false)
        }

    }
    return (
        <div className="flex justify-center items-center bg-radial from-[#133036] to-[#0a181b] min-h-screen">
        <LoginForm
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleSubmit}
        error={error}
        loading={loading}
        />
        </div>
    )
}