"use client";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto mt-4">
          <img src="/mail_icon.png" alt="" className="w-6 dark:hidden" />
          <img src="/mail_icon_dark.png" alt="" className="w-6 hidden dark:block" />
          Ali.adam.y@hotmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-700 mx-20 mt-12 py-6">
        <p>© 2025 Ali Yusuf. All right reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Alichas1">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ali-yusuf-839992186/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
