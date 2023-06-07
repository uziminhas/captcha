import React from 'react';
import Github from "../components/Github";
import Nav from "../components/Nav";
import Style from "../components/Style";
import RadioBox from "../components/RadioBox";
import RadioBoxStyle from "../components/RadioBoxStyle";
import ToggleHashtags from "../components/ToggleHashtags";
import UserInput from "../components/UserInput";
import LinkInput from "../components/LinkInput";
import { useRef, useState } from "react";
import Typewriter from "react-typewriter-animate";
import randomBlurb from "../utils/randomBlurb";
import Caption from "../components/Caption";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const emailData = {
        email: email,
        message: message,
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error(`Failed to send email: ${response.status}`);
      }

      setEmail('');
      setMessage('');

      alert('Thanks for contacting us! We will get back to you soon.');

      // Redirect to the homepage
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("We can't submit the form right now. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <>
    <Nav />
    <Head>
      <title>ChatGPT Caption Generator</title>
    </Head>
    <div className="w-full h-full flex flex-col items-center">

    <form className="w-full h-full p-4 sm:p-6 lg:py-12 xl:py-24 flex flex-col gap-8 lg:gap-12 items-center" onSubmit={handleSubmit}>
      <ul className="flex flex-col gap-8">
      </ul>

      <h1 className="text-center font-bold text-3xl xl:text-5xl h-full">
        Drop us some feedback {"\uD83D\uDC4D"} {/* Thumbs-up emoji */}
 - {" "}
        <Typewriter
          cursor={{ char: " " }}
          typingDelay={5}
          deletingDelay={30}
          loop
          dataToRotate={[
            [{ type: "word", text: ` How can we improve?` }],
            [{ type: "word", text: ` New features you'd like to see?` }]
          ]}
        />
      </h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className="w-full md:w-96 bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
          value={email} // Add this line
          onChange={(e) => setEmail(e.target.value)} // Add this line
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="frm-message">Feedback</label>
        <textarea
          id="frm-message"
          rows="6"
          name="message"
          required
          className="w-full md:w-96 bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
          value={message} // Add this line
          onChange={(e) => setMessage(e.target.value)} // Add this line
        ></textarea>
      </div>

      <div className="flex flex-col gap-2">
        <button type="submit" className="w-full bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
          Submit
        </button>
      </div>
    </form>
    </div>
    </>
  );
}