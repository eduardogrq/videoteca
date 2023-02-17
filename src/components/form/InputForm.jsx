


const InputForm = ({id, name, type, title, placeholder, required, setValue, value}) => {

    return (
        <div>
            <label 
                htmlFor="email" 
                className="block mb-2 text-sm font-medium text-gray-900">
                    {title} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                id={id || name}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder={placeholder}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div >
    )
}

export default InputForm