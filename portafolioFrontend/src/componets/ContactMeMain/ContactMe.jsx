const ContactMe = () => {
  return (
    <div className="flex flex-col items-center h-150 ">
      <h1 className="font-bold text-2xl">
        Looking for a reliable developer? I’m just a message away.
      </h1>
      <form action="" className="flex flex-col items-start mt-20 w-50 sm:w-150 h-100  ">
        <div className="flex flex-row justify-center gap-25">
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-500 text-lg">Name</h3>
            <input
              type="text"
              className="shadow-md border md:border-r rounded border-gray-200 h-10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-gray-500 text-lg">Email</h3>
            <input
              type="text"
              className="shadow-md border md:border-r rounded border-gray-200 h-10 w-80"
            />
          </div>
        </div>

        <div className="flex flex-col mt-12">
          <h3 className="text-gray-500 text-lg">Message</h3>
          <textarea
            rows="6"
            className="w-150 shadow-md border md:border-r rounded border-gray-200 p-2 outline-none resize-none mt-3"
          ></textarea>
        </div>
        <button className="bg-[#8B2CF5] text-white font-semibold py-2 px-4 rounded cursor-pointer ease-in-out  active:scale-95  self-center mt-5 w-150" >Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
