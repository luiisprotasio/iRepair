import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router"
import type { FormEvent } from "react"
import { RegisterForm } from "../components/RegisterForm"

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const {register} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        setError("")
        try {
            await register(email, password)
            navigate("/")
        } catch (err) {
            setError("Falha no registro. E-mail já cadastrado ou senha inválida.")
        } finally {
            setLoading(false)
        }

    }
    return (
        <div className="flex justify-center items-center bg-radial from-[#133036] to-[#0a181b] min-h-screen">
        <RegisterForm
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