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
import 'text-encoding';


export default function Home() {
  const styles = ["Influencer", "Creative", "Inspirational","Informative", "Quirky", "Gen Z"];
  const apps = ["Instagram","TikTok", "Threads", "YouTube"];
  // const apps = [
  //   {
  //     name: 'TikTok'
  //   },
  //   {
  //     name: 'Instagram'
  //   },
  //   {
  //     name: 'YouTube'
  //   },
  // ]
  const [loading, setLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedApp, setSelectedApp] = useState(apps[0]);
  const [enabledHashtags, setEnabledHashtags] = useState(false);
  const [enabledEmojis, setEnabledEmojis] = useState(false);
  const [text, setText] = useState("");
  const [generatedCaptions, setGeneratedCaptions] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [blurb, setBlurb] = useState("");
  const captionsRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [streamFinished, setStreamFinished] = useState(false);


  const prompt = `Generate 2 ${selectedStyle} captions ${enabledHashtags === true ? "using hashtags at the end" : "using no hashtags"} ${enabledEmojis === true ? "and using emojis" : "and using no emojis"} for ${selectedApp} and clearly label them "1." and "2." and base the captions on this description: '${text}${text.slice(-1) === "." ? "" : "'"}.  
  ${
    selectedStyle === "Influencer" ? "Use colloquial language that is conversational and would be easily understandable to their followers. Include a call-to-action to encourage engagement." : ""
  } 
  ${
    selectedStyle === "Funny" ? "Be funny and humorous, utilize jokes." : ""
  } 
  ${
    selectedStyle === "Inspirational" ? "Be inspirational or motivational. Include positive affirmations." : ""
  } 
  ${
    selectedStyle === "Creative" ? "Be creative and clever, utilize puns and rhyme." : ""
    
  }
  ${
    selectedStyle === "Gen Z" ? "Be like a Gen Z teen, use slang and tone that Gen Z teens would use." : ""
    
  }
  ${
    selectedStyle === "Informative" ? "Be informative and educational. Insert facts and statistics." : ""
  }
  
  `;

  // const prompt = `Generate only a ${selectedStyle} caption for ${selectedApp} with zero hashtags and clearly label this "1." and base the caption on this description: '${text}${
  //   text.slice(-1) === "." ? "" : "'"} and this description: '${videoDescription}'.  
  // ${
  //   selectedStyle === "Funny" ? "Be funny and humorous, utilize jokes." : ""
  // } 
  // ${
  //   selectedStyle === "Creative" ? "Be creative and clever, utilize puns and rhyme." : ""
    
  // }
  // ${
  //   selectedStyle === "Robotic" ? "Be robotic and impersonal, do not use any emotion." : ""
    
  // }
  // ${
  //   selectedStyle === "Informative" ? "Be informative and educational. Insert facts and statistics." : ""
  // }
  // Next, generate only a set of hashtags for this caption and clearly label it "2."
  // `;

  async function generateCaption(e) {
    e.preventDefault();
    setIsButtonClicked(true);
    if (text.length === 0) return;
    //Reset previously generated captions
    setGeneratedCaptions("");
    setVideoDescription("");
    setLoading(true);

    // setVideoUrl(e.target.value);
    const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)(?:\S+)?/;
    const match = videoUrl.match(videoIdRegex);
    if (match && match[1]) {
      setVideoId(match[1]);
    } else {
      setVideoId("");
    }

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${process.env.YOUTUBE_API_KEY}`;
    try {
      const response = await axios.get(url);
      setVideoDescription(response.data.items[0].snippet.description);
    } catch (error) {
      console.error(error);
    }

    console.log(prompt)

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    let newBlurb = randomBlurb();
    setBlurb(newBlurb);

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedCaptions((prev) => prev + chunkValue);
    }

    // Stream is finished, set streamFinished to true
    setStreamFinished(true);

    if (captionsRef.current !== null) {
      captionsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setLoading(false);
  }

  <a href="https://www.producthunt.com/posts/captiongen-io?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-captiongen&#0045;io" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384914&theme=light" alt="CaptionGen&#0046;io - Create&#0032;the&#0032;perfect&#0032;Reels&#0044;&#0032;Shorts&#0044;&#0032;TikTok&#0032;caption&#0032;10x&#0032;faster | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>


  return (
    <>
      <Nav />
      <Head>
        <title>CaptionGen - Instagram Caption Generator</title>
      </Head>
      <div className="w-full h-full flex flex-col items-center">
        <main className="w-full h-full p-4 sm:p-6 lg:py-12 xl:py-24 flex flex-col gap-8 lg:gap-12 items-center">
          <Github />
          <div style={{width: '250px', height: '54px'}}>
            <a href="https://www.producthunt.com/posts/captiongen-io?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-captiongen&#0045;io" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384914&theme=light" alt="CaptionGen&#0046;io - Create&#0032;the&#0032;perfect&#0032;Reels&#0044;&#0032;Shorts&#0044;&#0032;TikTok&#0032;caption&#0032;10x&#0032;faster | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" />
            </a>
          </div>
          <h1 className="text-center font-bold text-4xl xl:text-7xl h-full">
            Generate perfect{" "}
            <Typewriter
              cursor={{ char: " " }}
              timeBeforeDelete={2000}
              loop
              dataToRotate={[
                [{ type: "word", text: ` Instagram captions` }],
                [{ type: "word", text: ` Tiktok captions` }],
                [{ type: "word", text: ` Threads` }],
                [{ type: "word", text: ` Youtube captions` }],
              ]}
            />
            in seconds
          </h1>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-sm xl:text-base items-start sm:items-center">
                <span className="w-5 h-5 xl:w-6 xl:h-6 rounded-full font-bold text-xs xl:text-sm bg-black flex-shrink-0 flex items-center justify-center text-white">
                  1
                </span>
                <p>
                  Choose which <strong>social media app</strong> style you&apos;d like for your caption.
                </p>
              </div>
              <RadioBox
                apps={apps}
                selectedApp={selectedApp}
                setSelectedApp={setSelectedApp}
              />
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-sm xl:text-base items-start sm:items-center">
                <span className="w-5 h-5 xl:w-6 xl:h-6 rounded-full font-bold text-xs xl:text-sm bg-black flex-shrink-0 flex items-center justify-center text-white">
                  2
                </span>
                <p>
                  Describe <strong>relevant things in your post</strong> that
                  you&apos;d like in your caption.
                </p>
              </div>
              <UserInput text={text} setText={setText} isButtonClicked={isButtonClicked}/>
            </li>
{/*            <li className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-sm xl:text-base items-start sm:items-center">
                <span className="w-5 h-5 xl:w-6 xl:h-6 rounded-full font-bold text-xs xl:text-sm bg-black flex-shrink-0 flex items-center justify-center text-white">
                  3
                </span>
                <p>
                  Enter <strong>a Youtube video link </strong> that
                  you&apos;d like to copy the description style from.
                </p>
              </div>
              <LinkInput videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
            </li>*/}
{/*            <li className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-sm xl:text-base items-start sm:items-center">
                <span className="w-5 h-5 xl:w-6 xl:h-6 rounded-full font-bold text-xs xl:text-sm bg-black flex-shrink-0 flex items-center justify-center text-white">
                  4
                </span>
                <p>
                  Choose your <strong>desired caption style</strong>.
                </p>
              </div>
              <Style
                styles={styles}
                selectedStyle={selectedStyle}
                setSelectedStyle={setSelectedStyle}
              />
            </li>*/}
            <li className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-sm xl:text-base items-start sm:items-center">
                <span className="w-5 h-5 xl:w-6 xl:h-6 rounded-full font-bold text-xs xl:text-sm bg-black flex-shrink-0 flex items-center justify-center text-white">
                  3
                </span>
                <p>
                  Choose your <strong>desired caption style</strong>.
                </p>
              </div>
              <RadioBoxStyle
                styles={styles}
                selectedStyle={selectedStyle}
                setSelectedStyle={setSelectedStyle}
              />
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-sm xl:text-base items-start sm:items-center ">
                <span className="w-5 h-5 xl:w-6 xl:h-6 rounded-full font-bold text-xs xl:text-sm bg-black flex-shrink-0 flex items-center justify-center text-white">
                  4
                </span>
                <p>
                  Do you want <strong>hashtags</strong> or <strong>emojis</strong>?
                </p>
              </div>
              <ToggleHashtags
                enabledHashtags={enabledHashtags}
                setEnabledHashtags={setEnabledHashtags}
                enabledEmojis={enabledEmojis}
                setEnabledEmojis={setEnabledEmojis}
              />
            </li>
          </ul>
          <button
            onClick={(e) => generateCaption(e)}
            disabled={loading}
            className={`${
              loading && "animate-pulse"
            } disabled:brightness-90 disabled:cursor-not-allowed text-base xl:text-lg bg-gradient-to-r from-blue-400 to-emerald-400 hover:hue-rotate-[-90deg] duration-200 transition ease-linear px-4 py-3 rounded-xl font-bold text-white w-full whitespace-nowrap max-w-md`}
          >
            {loading ? "Generating..." : "Generate your caption →"}
          </button>
          {generatedCaptions.length > 0 && (
            <section
              ref={captionsRef}
              className="flex flex-col gap-4 w-full items-center"
            >
              <h3 className="text-center font-bold text-xl xl:text-2xl">
                {blurb}
              </h3>
              {generatedCaptions
                .substring(3)
                .split("2. ")
                .map((caption, key) => {
                  return <Caption text={caption} key={key} />;
                })}
                {streamFinished && !loading && (
                  <Link
                    className="text-center text-xs sm:text-sm xl:text-base"
                    href="/contact-us"
                    style={{ color: "#60A5D8", textDecoration: "underline" }}
                  >
                    Help us improve! Provide feedback here on what features you&apos;d like to see.
                  </Link>
                )}
            </section>
          )}
        </main>
        <footer className="w-full flex sm:flex-row flex-col-reverse gap-4 items-center max-w-7xl p-4 sm:px-12 h-fit">
          <div className="flex flex-col w-full">
            <span className="text-sm xl:text-base">
              Powered by <strong>ChatGPT and Vercel Edge Functions</strong>.
            </span>
          </div>
          <div className="flex flex-row w-fit gap-6">
            <Link href="https://github.com/uziminhas" target={"_blank"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 sm:w-6 h-auto fill-neutral-900 hover:fill-neutral-600 transition ease-linear"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
              </svg>
            </Link>
            <Link href="" target={"_blank"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 sm:w-6 h-auto stroke-neutral-900 hover:stroke-neutral-600 transition ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
