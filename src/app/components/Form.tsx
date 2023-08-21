import submitContact from "@/app/libs/submitContact";

export default function Form() {
  return (
    <form
      action={submitContact}
      className="container p-5 mx-auto border-8 border-solid border-white shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
    >
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ken"
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Adams"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="555-555-5555"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ken.adams@company.com"
            required
          />
        </div>
      </div>
      <div className="mb-6 mx-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <button className="send-btn bg-blue-800" type="submit">
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button>
    </form>
  );
}
