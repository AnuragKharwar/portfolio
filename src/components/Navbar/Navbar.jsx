import React, { useState } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../Modal/modal-toggle";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="w-full flex dark:bg-[#222831] bg-[#222831] text-white sticky top-0 justify-end z-10 ">
      <div className="md:hidden  w-full flex p-2 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-100 opacity-90">
            <DropdownMenuLabel className="hover:bg-slate-300">
              <div className=" cursor-pointer flex  items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                {path === "/" ? (
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                ) : (
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                )}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="underline bg-slate-400" />
            {/* <DropdownMenuItem className="hover:bg-slate-300">
              <div
                className={`cursor-pointer flex  items-center gap-x-2 ${
                  path === "/about" ? "font-semibold underline" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <NavLink to="/about">About</NavLink>
              </div>
            </DropdownMenuItem> */}
            <DropdownMenuItem className="hover:bg-slate-300">
              {" "}
              <div
                className={`cursor-pointer flex  items-center gap-x-2  ${
                  path === "/project" ? "font-semibold underline" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>

                {path === "/" ? (
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Personal Projects
                  </Link>
                ) : (
                  <NavLink to="/project">Personal Projects</NavLink>
                )}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-300">
              {" "}
              <div
                className={`cursor-pointer flex  items-center gap-x-2  ${
                  path === "/experience" ? "font-semibold underline" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <NavLink to="/experience">Experience</NavLink>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-300">
              {" "}
              <div
                className={`cursor-pointer flex  items-center gap-x-2 ${
                  path === "/timeline" ? "font-semibold underline" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>

                {path === "/" ? (
                  <Link
                    to="timeline"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Timeline
                  </Link>
                ) : (
                  <NavLink to="/timeline">Timeline</NavLink>
                )}
              </div>
            </DropdownMenuItem>
            {/* <DropdownMenuItem className="hover:bg-slate-300">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>

                <a
                  href="https://drive.google.com/file/d/1BiiiHLGqggFy3rU6aSo_siRZENk4RAc_/view?usp=drive_link"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </DropdownMenuItem> */}
            <DropdownMenuItem className="hover:bg-slate-300">
              <div className="cursor-pointer flex  items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav>
        <ul className=" flex gap-x-4 p-4 justify-end ">
          <li>
            <a
              href="http://www.linkedin.com/in/anurag-kharwar"
              target="_blank"
              className="bg-blue-600 p-2 font-semibold text-white  hover:bg-blue-700 inline-flex items-center space-x-2 rounded-full "
            >
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AnuragKharwar"
              target="_blank"
              className="bg-stone-900 p-2 font-semibold text-white hover:bg-black inline-flex items-center space-x-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
          </li>
          <div className={`hidden gap-x-4 justify-end md:flex  `}>
            <li className="mt-2 hover:scale-110 hover:underline ">
              {path === "/" ? (
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              ) : (
                <NavLink exact to="/">
                  Home
                </NavLink>
              )}
            </li>
            {/* <li
              className={`mt-2 hover:scale-110 hover:underline ${
                path === "/about" ? "font-semibold underline" : ""
              }`}
            >
              <NavLink to="/about">About</NavLink>
            </li> */}
            <li
              className={`mt-2 hover:scale-110 hover:underline ${
                path === "/project" ? "font-semibold underline" : ""
              }`}
            >
              {path === "/" ? (
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Personal Projects
                </Link>
              ) : (
                <NavLink to="/project">Personal Projects</NavLink>
              )}
            </li>
            <li
              className={`mt-2 hover:scale-110 hover:underline ${
                path === "/experience" ? "font-semibold underline" : ""
              }`}
            >
              {path === "/" ? (
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>
              ) : (
                <NavLink to="/experience">Experience</NavLink>
              )}
            </li>
            <li
              className={`mt-2 hover:scale-110 hover:underline ${
                path === "/timeline" ? "font-semibold underline" : ""
              }`}
            >
              {path === "/" ? (
                <Link
                  to="timeline"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Timeline
                </Link>
              ) : (
                <NavLink to="/timeline">Timeline</NavLink>
              )}
            </li>
            <li className="mt-2 hover:scale-110 hover:underline">
              {/* <NavLink to="/resume" activeClassName="active">
                Resume
              </NavLink> */}
              {/* <a
                href="https://drive.google.com/file/d/1IaOTCRYh4LBcx8-eTu9YNvRHb5X-DJvU/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a> */}
            </li>
            <li className="mt-2 hover:scale-110 hover:underline">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
