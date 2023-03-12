export default function LinkInput({ videoUrl, setVideoUrl }) {
  return (
    <textarea
      value={videoUrl}
      onChange={(e) => setVideoUrl(e.target.value)}
      placeholder="Enter a video link!"
      className="transition ease-linear w-full h-full min-h-[20vh] text-xs xl:text-sm placeholder:text-xs xl:placeholder:text-sm border-2 border-gray-200 focus-within:border-gray-900 outline-none rounded-lg p-2"
    />
  );
}
