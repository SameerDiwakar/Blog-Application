import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { SignupInput } from "medium-zodify"
import axios from "axios"
import { BACKEND_URL } from "../config"

const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>
        (type === "signup"
            ? { name: "", username: "", password: "" }
            : { username: "", password: "" })


    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
            const jwt = response.data
            localStorage.setItem("token", jwt)
            navigate("/blogs")

        } catch (error) {
            console.error(error)
            alert("Invalid credentials")
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-400 text-center">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link to={type === "signin" ? "/signup" : "/signin"} className="underline pl-2">{type === "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
                    {type === "signup" ? <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => {
                        setpostInputs({ ...postInputs, name: e.target.value })
                    }} /> : null}
                    <LabelledInput label="Username" placeholder="JohnDoe@gmail.com" onChange={(e) => {
                        setpostInputs({ ...postInputs, username: e.target.value })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="JohnDoe123" onChange={(e) => {
                        setpostInputs({ ...postInputs, password: e.target.value })
                    }} />
                    <button type="button" onClick={sendRequest} className="mt-16 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type == "signin" ? "Sign in" : "Sign up"}</button>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="mt-4">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">{label}</label>
                <input type={type || "text"} onChange={onChange} className="bg-white outline-none border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-gray-800 focus:border-gray-800 block w-full p-2.5 placeholder-gray-400 focus:shadow-glow shadow-md" placeholder={placeholder} required />
            </div>
        </div>
    )
}

export default Auth
