const Footer = (): JSX.Element => {
  return (
    <footer className="text-center bg-cream-light text-xs py-2 px-0 md:h-16 md:flex md:items-center md:justify-center">
      <p>© Copyright {new Date().getFullYear()} DONGALAB.HU </p>
      <p className="hidden md:inline-block mx-1">||</p>
      <p>
        {' '}
        made with <i className="fas fa-heart text-red-500"></i> by{' '}
        <a href="mailto:&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%6D%61%74%65%6E%65%6D%65%74%68%2E%68%75">
          matenemeth
        </a>
      </p>
    </footer>
  );
};

export default Footer;
