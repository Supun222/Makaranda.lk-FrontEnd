import React from "react";

function Message() {
  return (
    <div className="bg-gray-100 rounded-md max-w-96 p-5 mt-4">
      <h3 className="font-Lato font-semibold text-lg text-gray-700 mb-2">
        Ask Thathari Dance Crew
      </h3>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between mt-3">
          <p>“ Do you have any upcoming events ?”</p>
          <button
            type="button"
            className="bg-gray-200 p-2 uppercase rounded-md font-Lato font-semibold ml-2"
          >
            Send
          </button>
        </div>
        <div className="flex flex-row items-center justify-between mt-3">
          <p>“ How much does it cost?”</p>
          <button
            type="button"
            className="bg-gray-200 p-2 uppercase rounded-md font-Lato font-semibold ml-2"
          >
            Send
          </button>
        </div>
        <div className="flex flex-row items-center justify-between mt-3">
          <p>“ Do you have any promotions”</p>
          <button
            type="button"
            className="bg-gray-200 p-2 uppercase rounded-md font-Lato font-semibold ml-2"
          >
            Send
          </button>
        </div>
        <form
          action=""
          className="flex flex-row items-center justify-between mt-3 -ml-2"
        >
          <input
            type="text"
            placeholder="Type a question..?"
            className="bg-gray-200 p-3 tracking-wider rounded-md font-Lato font-semibold ml-2 w-64 lg:w-80 border-0 focus:ring-0 focus:ring-offset-0"
          />
          <button
            type="submit"
            className="bg-gray-200 p-2 uppercase rounded-md font-Lato font-semibold ml-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
