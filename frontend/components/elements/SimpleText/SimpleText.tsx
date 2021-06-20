import { SimpleTextElement } from 'model/sections';

const SimpleText = ({ content }: { content: SimpleTextElement }): JSX.Element => {
  return (
    <p className="md:p-4 w-11/12 mx-auto text-center" key={content.__component + content.id}>
      {content.text}
    </p>
  );
};

export default SimpleText;
