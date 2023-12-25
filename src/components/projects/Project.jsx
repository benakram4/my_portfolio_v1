import Image from "next/image";

export default function Project({ title, description, imgSrc, tags }) {
  return (
    <div className="mb-6 lg:mb-0">
      <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex">
          <div
            className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          >
            <Image
              src={imgSrc}
              className="w-full"
              width={60}
              height={60}
              alt={title}
            />
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-bold">{title}</h5>
          <p className="mb-6">{description}</p>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <p
                className="my-1 mr-4 flex h-8 items-center rounded-full border-2 border-[#3b71ca] bg-[#eceff1] bg-[transparent] px-3 py-0 text-[13px] text-[#4f4f4f] dark:text-neutral-200"
                key={tag}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
