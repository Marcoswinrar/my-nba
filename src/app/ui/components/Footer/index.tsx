const Footer = () => (
  <footer className="container mx-auto px-4 pb-8 pt-16 text-center">
    <p className="flex flex-col justify-center gap-2 sm:flex-row">
      <span>Created with <span className="text-rose-600">♥️</span> by</span><span>
        <a
          className="border-b-blue-500 text-blue-500 hover:border-b-[1px]"
          href="https://marcoswiniarski.com/"
          target="_blank"
          rel="noreferrer">Marcos Eduardo Winiarski
        </a>
        {''} (work in progress)
      </span>
    </p>
  </footer>
);

export default Footer;

