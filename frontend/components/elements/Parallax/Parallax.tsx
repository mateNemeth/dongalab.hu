import { ParallaxElement } from 'model/sections';

const Parallax = ({ content }: { content: ParallaxElement }): JSX.Element => {
  return (
    <div
      className="mt-16 bg-center bg-no-repeat bg-cover h-30vh md:h-55vh md:bg-fixed"
      style={{ backgroundImage: `url(${content.image.formats.large.url})` }}
    ></div>
  );
};

export default Parallax;
