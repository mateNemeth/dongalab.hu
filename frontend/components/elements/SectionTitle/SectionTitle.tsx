const SectionTitle = ({ title }: { title: string }): JSX.Element => (
  <div className="my-8 mx-auto pt-6 text-center">
    <h2
      className="text-cream-dark font-bold underline text-5xl md:text-6xl md:text-15xl pb-4 md:pb-12"
      style={{ fontVariant: 'small-caps' }}
    >
      {title}
    </h2>
  </div>
);

export default SectionTitle;
