export default function UserInput({ text, setText, isButtonClicked }) {
  const isEmpty = text.trim().length === 0;


  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Get dressed with me to visit the most magical place on earth...Disney World!"
      className={`transition ease-linear w-full h-full min-h-[20vh] text-xs xl:text-sm placeholder:text-xs xl:placeholder:text-sm border-2 ${
        isButtonClicked && isEmpty ? 'border-red-500' : 'border-gray-200'
      } focus-within:border-gray-900 outline-none rounded-lg p-2`}
    />
  );
}
