import React from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "public/images/logo.svg";

export default function Header({ onLight }) {
  const linkColor = onLight ? "text-gray-900" : "text-white";
  const router = useRouter();
  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <ul className="flex">
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Beranda
            </a>
          </Link>
        </li>
        <li>
          <Link href="/courses">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Perpustakaan
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Harga
            </a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
              ].join(" ")}
            >
              Ulasan
            </a>
          </Link>
        </li> */}
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={linkCTA}
            className="bg-green-700 rounded-md hover:bg-green-800 transition-all duration-200 text-white hover:text-teal-500 
            text-lg px-6 py-3 ml-6"
          >
            {textCTA}
          </a>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};
