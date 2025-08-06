const ContactMe = () => {
  return (
    <div className="flex flex-col items-start sm:items-center h-200 sm:h-150 mt-50">
      <h1 className="font-bold text-2xl p-2">
        Looking for a reliable developer? I’m just a message away.
      </h1>

      {/* Cambia el action por el tuyo de Formspree */}
      <form
        action="https://formspree.io/f/xrbllonq"
        method="POST"
        className="flex flex-col justify-center sm:items-start mt-20 w-50 sm:w-150 h-100"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-15 sm:gap-10">
          <div className="flex flex-col gap-2 pl-2 sm:pl-0">
            <h3 className="text-gray-500 text-lg">Name</h3>
            <input
              type="text"
              name="name"
              required
              className="shadow-md border md:border-r rounded border-gray-200 w-70 h-10"
            />
          </div>

          <div className="flex flex-col gap-2 pl-2 sm:pl-0">
            <h3 className="text-gray-500 text-lg">Email</h3>
            <input
              type="email"
              name="email"
              required
              className="shadow-md border md:border-r rounded border-gray-200 h-10 w-70 sm:w-70"
            />
          </div>
        </div>

        <div className="flex flex-col mt-12 pl-2 sm:pl-0">
          <h3 className="text-gray-500 text-lg">Message</h3>
          <textarea
            name="message"
            rows="6"
            required
            className="w-70 sm:w-150 shadow-md border md:border-r rounded border-gray-200 p-2 outline-none resize-none mt-3"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#8B2CF5] text-white font-semibold py-2 px-4 rounded cursor-pointer ease-in-out active:scale-95 self-center mt-5 w-60 sm:w-150"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
