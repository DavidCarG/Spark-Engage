import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer classsName="">
      <div classsName="flex-center wrapped flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="Logo" width={128} height={38}/>   
        </Link>
        <p>2024 Evently. All Rights reserved</p>
      </div>
       
    </footer>
  )
};

export default Footer;
