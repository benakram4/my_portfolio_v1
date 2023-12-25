import Image from "next/image";

export default function Project({ title, description, imgSrc, tags }) {
  return (
    <div className="mb-6 lg:mb-0">
      <div className="relative block rounded-lg bg-white/10 dark:bg-neutral-700/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="flex">
          <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <Image
              src={imgSrc}
              className=" w-full h-[18rem]"
              width={600}
              height={800}
              alt={title}
            />
          </div>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-bold text-stone-900 dark:text-stone-100">
            {title}
          </h5>
          <p className="mb-6 text-stone-800 dark:text-stone-200">
            {description}
          </p>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <p
                className="my-1 mr-4 flex h-8 items-center rounded-full border-2 border-[#9b5de5] bg-[#eceff1] bg-[transparent] px-3 py-0 text-[13px] text-bold text-stone-800 dark:text-stone-200"
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
