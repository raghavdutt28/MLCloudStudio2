"use client"
import React from 'react';
import { motion, useScroll } from "framer-motion"

const Page = () => {
  return (
    <div className=''>
      <h2 className='head_text mb-16 w-full text-center'>
         build & Learn your own LLMs!!
      </h2>

      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
          <h2 className="mb-4 uppercase text-subhead text-accent dark:text-ligt">BIOGRAPHY</h2>
          <p className="text-para-small">
            Hi, I'm <strong>CodeBucks</strong>, a web developer and UI/UX designer with a passion for creating beautiful,
            functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking
            for new and innovative ways to bring my clients' visions to life.
          </p>
          <p className="my-4 text-para-small">
            I believe that design is about more than just making things look pretty - it's about solving problems and creating
            intuitive, enjoyable experiences for users.
          </p>
          <p className="text-para-small">
            Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence
            and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and
            passion to your next project.
          </p>
        </div>

        <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"></div>
          <img
            alt="Codebucks"
            fetchpriority="high"
            width="192"
            height="235"
            decoding="async"
            data-nimg="1"
            // className="h-auto w-full rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=3840&amp;q=75 3840w"
            // src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&amp;w=384&amp;q=75"
            style={{ color: "transparent" }}
          ></img>
        </div>

        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row mt-10 xl:items-center md:order-3">
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block head_text">
              <span>40</span>+
            </span>
            <h2 className="mb-4 capitalize xl:text-center text-para-big text-gray-200">
              satisfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block  head_text">
              <span>50</span>+
            </span>
            <h2 className="mb-4 capitalize xl:text-center text-para-big text-gray-200">
              projects completed
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block  head_text">
              <span>4</span>+
            </span>
            <h2 className="mb-4 capitalize xl:text-center text-para-big text-gray-200">
              Years of experience
            </h2>
          </div>
        </div>
      </div>

      <h2 className='text-subhead mt-20 pt-8 mb-10 w-full'>
        OUR STORY
      </h2>

      <div className="relative w-[75%] mb-10 mx-auto lg:w-[90%] md:w-full">
        <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl" style={{ transform: 'scaleY(0.520772) translateZ(0px)' }}></div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <figure className="stroke-dark absolute left-0 dark:stroke-light">
              <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" pathLength="1" className="stroke-primary  stroke-1 fill-none dark:stroke-primaryDark"></circle>
                <circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle>
                <circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"></circle>
              </svg>
            </figure>
            <div style={{ transform: 'none' }}>
              <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">Software Engineer <a className="capitalize text-primary dark:text-primaryDark" href="https://google.com" target="_blank">@Google</a></h3>
              <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">2022-Present | Mountain View, CA</span>
              <p className="font-medium w-full md:text-sm">Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.</p>
            </div>
          </li>
          <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <figure className="stroke-dark absolute left-0 dark:stroke-light">
              <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" pathLength="1" className="stroke-primary  stroke-1 fill-none dark:stroke-primaryDark"></circle>
                <circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle>
                <circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"></circle>
              </svg>
            </figure>
            <div style={{ transform: 'none' }}>
              <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">Software Engineer <a className="capitalize text-primary dark:text-primaryDark" href="https://google.com" target="_blank">@Google</a></h3>
              <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">2022-Present | Mountain View, CA</span>
              <p className="font-medium w-full md:text-sm">Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.</p>
            </div>
          </li>
          <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <figure className="stroke-dark absolute left-0 dark:stroke-light">
              <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" pathLength="1" className="stroke-primary  stroke-1 fill-none dark:stroke-primaryDark"></circle>
                <circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle>
                <circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"></circle>
              </svg>
            </figure>
            <div style={{ transform: 'none' }}>
              <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">Software Engineer <a className="capitalize text-primary dark:text-primaryDark" href="https://google.com" target="_blank">@Google</a></h3>
              <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">2022-Present | Mountain View, CA</span>
              <p className="font-medium w-full md:text-sm">Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.</p>
            </div>
          </li>
          <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <figure className="stroke-dark absolute left-0 dark:stroke-light">
              <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" pathLength="1" className="stroke-primary  stroke-1 fill-none dark:stroke-primaryDark"></circle>
                <circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle>
                <circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"></circle>
              </svg>
            </figure>
            <div style={{ transform: 'none' }}>
              <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">Software Engineer <a className="capitalize text-primary dark:text-primaryDark" href="https://google.com" target="_blank">@Google</a></h3>
              <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">2022-Present | Mountain View, CA</span>
              <p className="font-medium w-full md:text-sm">Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.</p>
            </div>
          </li>
          {/* Repeat the structure for other items... */}
        </ul>
      </div>
    </div>
  );
};

export default Page;
