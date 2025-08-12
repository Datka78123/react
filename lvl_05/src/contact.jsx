import { useState } from "react";

function Form() {

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setIsSubmitting(true);
    setIsSubmitted(false);
    setTimeout(() => {
    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    }, 2000);
};

    return (
        <form onSubmit={handleSubmit}  className="bg-[#1F2937] w-[500px] m-auto mt-[10%] flex justify-center items-center flex-col rounded-xl p-6">
            <h1 className="text-[#F9FAFB] my-[1rem] text-xl">CONTACT US</h1>
            <div className="flex text-[#F9FAFB] mb-6 w-full justify-center">

                <div className="mx-[20px] flex flex-col">
                    <label className="mb-1">Name*</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange}  className="focus:outline-none bg-[#111827] h-[38px] rounded-xl px-3"/>
                </div>
                <div className="mx-[20px] flex flex-col">
                    <label className="mb-1">Email*</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}  className="focus:outline-none bg-[#111827] h-[38px] rounded-xl px-3"/>
                </div>
                
            </div>
            <div className="w-full flex flex-col text-[#F9FAFB] mb-[10%]">
                <label className="mb-1">Message us*</label>
                <textarea name="message" required value={form.message} onChange={handleChange}  className="focus:outline-none bg-[#111827] rounded-xl text-[#F9FAFB] w-full h-24 px-3"/>
            </div>
            <button type="submit"  className="mb-[10%] text-[#F9FAFB] bg-[#111827] h-[38px] rounded-sm mt-[30px] px-6 hover:bg-[#333a49] transition">Submit</button>
            {isSubmitted && (<p className="text-green-400 text-center mt-2">message sent! thanks for reaching out.</p>)}
        </form>
    );
}

export default Form;
