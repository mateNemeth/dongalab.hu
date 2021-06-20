import { TestimonialElement } from 'model/sections';
import { useState } from 'react';

import styles from './Testimonials.module.scss';

const Testimonials = ({ testimonials }: { testimonials: TestimonialElement[] }): JSX.Element => {
  const [current, setCurrent] = useState(testimonials[0]);

  const handleSetClick = (id: number) => {
    const found = testimonials.find((t) => t.id === id);
    if (found) {
      setCurrent(found);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent, id: number) => {
    if (event.key === 'Enter') {
      handleSetClick(id);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-11/12 max-w-screen-lg mx-auto shadow-articleList-sm p-6">
      <blockquote className="text-center">&#8222;{current.quote}&#8221;</blockquote>
      <p className="italic my-4">- {current.quote_from}</p>
      <div className="flex">
        {testimonials.map((testimonial) => (
          <span
            onKeyPress={(e) => handleKeyPress(e, testimonial.id)}
            tabIndex={0}
            role="button"
            aria-label="Toggle testimonial"
            key={testimonial.id}
            onClick={() => handleSetClick(testimonial.id)}
            className={styles.dot}
            data-active={current === testimonial}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
