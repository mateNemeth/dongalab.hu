const Footer = (): JSX.Element => {
  return (
    <footer className="text-center bg-cream-light text-xs py-2 px-0 md:h-16 md:flex md:items-center md:justify-center">
      <p>© Copyright {new Date().getFullYear()} DONGALAB.HU</p>
      <p className="hidden md:inline-block mx-1"> || </p>
      <p>
        made with <i className="fas fa-heart text-red-500"></i> by{' '}
        <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#64;&#109;&#97;&#116;&#101;&#110;&#101;&#109;&#101;&#116;&#104;&#46;&#104;&#117;">
          matenemeth
        </a>
      </p>
      <p className="hidden md:inline-block mx-1"> || </p>
      <p>
        <a href="mailto:&#115;&#122;&#117;&#108;&#111;&#105;&#99;&#115;&#111;&#112;&#111;&#114;&#116;&#64;&#100;&#111;&#110;&#103;&#97;&#108;&#97;&#98;&#46;&#104;&#117;">
          contact us
        </a>
      </p>
    </footer>
  );
};

export default Footer;
