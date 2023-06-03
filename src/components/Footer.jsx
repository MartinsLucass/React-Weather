import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-7xl items-center mx-auto">
        <div className="space-y-2 md:space-y-0 flex py-10 text-sm text-neutral-400 justify-center">
          <span className="">
            Crafted by{' '}
            <a
              className="text-purple-500 hover:text-purple-700 "
              href="https://github.com/MartinsLucass"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas Martins
            </a>{' '}.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;