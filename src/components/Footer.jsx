import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto items-center">
        <div className="flex justify-center py-10 space-y-2 md:space-y-0 text-sm text-neutral-800 dark:text-neutral-400">
          <span>
            Crafted by{' '}
            <a
              className="text-purple-800 dark:text-purple-500 hover:text-purple-950 dark:hover:text-purple-700"
              href="https://github.com/MartinsLucass"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas Martins
            </a>{' '}
            .
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
