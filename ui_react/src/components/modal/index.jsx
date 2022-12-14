import { useState } from "react";

export function Modal(props) {
  let { show, setShow } = props;
  const [count, setCount] = useState(0);
  let limit = 100;
  function reset() {
    setCount(0);
    setShow(false);
  }
  return (
    <>
      {show ? (
        <>
          <div
            className="xyz justify-center items-center 
            flex overflow-x-hidden overflow-y-auto 
            fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={(e) => {
              let check = e.target.className.slice(0, 3);
              console.log("click");
              if (check == "xyz") {
                reset();
              }
            }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Create Lark</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      console.log("minting...")
                      // setShow(false)
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <textarea
                    type="text"
                    rows={5}
                    maxLength={limit}
                    className="focus:outline-none"
                    placeholder="Write your lark blog message..."
                    onChange={(e) => {
                      setCount(e.target.value.length);
                    }}
                  ></textarea>
                </div>
                <div className="text-center py-3">
                  {count}/{limit}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => reset()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => reset()}
                  >
                    publish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-blue"></div>
        </>
      ) : null}
    </>
  );
}
