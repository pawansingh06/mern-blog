import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col p-3 sm:flex-row border  border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn about JavaScript?</h2>
        <p className="text-gray-500 my-2">Checkout these resources with 100 javascript projects</p>
        <Button
          className="rouded-tl-xl rounded-bl-none"
          gradientDuoTone="purpleToPink"
        >
          <a
            href="https://www.freecodecamp.org/news/javascript-projects-for-beginners/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto" />
      </div>
    </div>
  );
}
