import { IconLinkElement } from 'model/sections';

const IconLink = ({ content }: { content: IconLinkElement }): JSX.Element => {
  return (
    <div className="text-center p-4 mb-8">
      <p>{content.text}</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={content.url}
        className={
          content.iconcode + ' fa-10x pt-10 transform transition-transform	duration-500 hover:scale-110 text-facebookBlue'
        }
      >
        {' '}
      </a>
    </div>
  );
};

export default IconLink;
