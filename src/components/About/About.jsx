import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="container my-24 mx-auto md:px-6 py-3">
      <section className="mb-32">
        <div className="block rounded-lg bg-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700/10">
          <div className="flex flex-wrap items-center">
            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <Image
                src="/avatar/AvatarMaker.svg"
                priority
                width={500}
                height={500}
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-4 text-2xl font-bold text-stone-900 dark:text-stone-100">About Me</h2>
                <p className="mb-6 flex items-center font-bold uppercase text-stone-900 dark:text-stone-100">
                  My Story
                </p>
                <p className="mb-6 text-stone-800 dark:text-stone-200">
                  Hello !{" "}
                  <strong className="text-[#9b5de5]">My name is Ben</strong> and
                  I enjoy creating things that live on smart phones and on the
                  internet.{" "}
                  <strong className="text-[#9b5de5]">
                    My programming love story
                  </strong>{" "}
                  started from a Python Udemy course I decided to take out of{" "}
                  <strong className="text-[#9b5de5]">curiosity</strong>, and
                  shortly after I knew that this is what I want to do. Several
                  months later I have opted to pursue a bachelor in Software
                  Development.
                </p>
                <p className="mb-6 text-stone-800 dark:text-stone-200">
                  I am{" "}
                  <strong className="text-[#9b5de5]">
                    Software Development
                  </strong>{" "}
                  (Honours Bachelor of Technology) student at the Seneca
                  College, who focuses on{" "}
                  <strong className="text-[#9b5de5]">Web Development</strong>{" "}
                  and expanding my knowledge far beyond the curriculum. I{" "}
                  <strong className="text-[#9b5de5]">enjoy</strong> working in a
                  team environment but can also run projects and tasks{" "}
                  <strong className="text-[#9b5de5]">independently</strong>. I
                  am <strong className="text-[#9b5de5]">motivated</strong> to
                  advance and expand my skill set through mentorship and
                  challenging projects.
                </p>
                <p className="text-stone-800 dark:text-stone-200 mb-6">
                  In my free time, I love playing soccer and I am a big fan of
                  AC Milan. I also enjoy boulder climbing, going the gym,
                  reading books (mainly science), and meditating.
                </p>
                <p className="text-stone-800 dark:text-stone-200">
                My favorite quote: <br/>
                <strong className="text-[#9b5de5]">“Tell me and I forget, teach me and I may remember, involve me and I learn.”</strong> - Benjamin Franklin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
