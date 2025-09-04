"use client";
import { useLocalStorage } from "@uidotdev/usehooks";

type Props = {};

const CookieWarning = (props: Props) => {
  const [visible, setVisible] = useLocalStorage("cookieWarning", true);

  if (!visible) return null;

  return (
    <div className='fixed bottom-6 right-6 max-w-sm rounded-xl bg-gray-900 text-white shadow-lg shadow-gray-900/50 p-4 z-50 border-white/10 border-4 '>
      <p className='text-sm mb-3'>
        We use cookies to improve your experience. By using our site, you agree
        to our{" "}
        <a href='/privacy' className='underline'>
          Privacy Policy
        </a>
        .
      </p>
      <button
        onClick={() => setVisible(false)}
        className='bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition'
      >
        Got it
      </button>
    </div>
  );
};

export default CookieWarning;
