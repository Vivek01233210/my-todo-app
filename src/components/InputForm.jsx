import { useRef } from "react";
import { NoteContext } from "../store/note-context";
import { useContext } from "react";

export default function InputForm() {
    const {addTodo} = useContext(NoteContext);

    const titleInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        addTodo(titleInputRef.current.value, descriptionInputRef.current.value);
        titleInputRef.current.value = '';
        descriptionInputRef.current.value = '';
    }

    return (
        <form className="bg-gray-400 m-4 p-4 flex justify-around rounded-md"
            onSubmit={handleSubmit}
        >
            <div className="">
                <div className="relative h-12 w-full my-4 mx-2">
                    <input
                        placeholder="Name"
                        type="text"
                        ref={titleInputRef}
                        className="peer h-full w-full border-b border-yellow-400 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#FBA834] outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0"
                        required />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-400 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-yellow-400 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-400  peer-focus:after:scale-x-100 peer-focus:after:border-orange-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Name
                    </label>
                </div>

                <div className="relative h-12 w-full my-4 mx-2">
                    <input
                        placeholder="Name"
                        type="text"
                        ref={descriptionInputRef}
                        className="peer h-full w-full border-b border-yellow-400 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-[#FBA834] outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-400 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-yellow-400 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-400  peer-focus:after:scale-x-100 peer-focus:after:border-orange-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Description
                    </label>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    className="text-white bg-[#FBA834] m-4 py-2 px-4 rounded-3xl hover:text-yellow-200 active:text-white"
                    type="submit"
                >Add Note</button>
            </div>
        </form>
    )
}
