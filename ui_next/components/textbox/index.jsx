import Image from 'next/image'

export function LarkBox(props) {
  let { text, id, date, author } = props;
  return (
    <div className="bg-sky-50 m-3 rounded-xl">
      {/* Author */}
      <div className="flex flex-row justify-around pr-5">
        <div className="flex flex-row items-center mt-5 mb-3 self-center">
          <Image alt="metadata" className="h-7 w-7 mx-3" width="200" height="200" src="svg/user.svg"></Image>
          <p className="text-sm">
            {author ? author.slice(0, 7) + "..." + author.slice(45, -1) : "Mina wallet address"}
          </p>
        </div>
      </div>
      {/* Content */}
      <div
        className="p-2 m-2 min-w-1 max-w-xs bg-white rounded-xl shadow-lg text-blue 
        outline outline-offset-2 outline-blue-500"
      >
        <p>
          {text}
        </p>
      </div>
      {/* Date & hashtags */}
      <div className="pt-3">
        <p className="m-1 text-sm text-center">{date ? date : "undefined"}</p>
        {/* <p className="m-1 text-sm text-center">
          {hashtags ? hashtags : "#undefined"}
        </p> */}
      </div>
    </div>
  );
}
