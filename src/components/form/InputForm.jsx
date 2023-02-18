
import { useState } from "react"
import { ViewIcon, HideViewIcon } from "../../assets/icons"
import isFunction from "../../utils/isFunction"



const InputForm = ({ id, name, type, title, placeholder, required, setValue, value }) => {

    const [isHidden, setIsHidden] = useState(false)

    isFunction(setValue)

    return (
        <div className="block">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900">
                {title} {required && <span className="text-red-500">*</span>}
            </label>

            <div className="relative w-full">

                {/* Render eye icon at right input widh, only if iput has type password */}
                {type === "password" &&
                    <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <input 
                            className="hidden" 
                            id="toggle"
                            type="checkbox"
                            onClick={() => setIsHidden(!isHidden)}
                        />
                        <label className="rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" htmlFor="toggle">
                            {/* Show and Hide password icon */}
                            {isHidden ? <HideViewIcon /> : <ViewIcon />}
                        </label>
                    </div>
                }
                <input
                    // Conditional to change between input type attribute
                    type={type === 'password' ? isHidden ? 'text' : 'password' : type}
                    name={name || id}
                    id={id || name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    autoComplete="false"
                />
            </div>

        </div >
    )
}

export default InputForm