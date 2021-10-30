import * as yup from 'yup';
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import toast from 'react-hot-toast';

import styles from './contactform.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const validationSchema = yup.object().shape({
  name: yup.string().required('Név megadása kötelező'),
  email: yup.string().email('Kérjük érvényes email címet adj meg').required('Email cím megadása kötelező'),
  subject: yup.string().required('Kérjük add meg üzeneted témáját'),
  message: yup.string().required('Az üzenet nem lehet üres'),
});

export interface IContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const DEFAULT_VALUE: IContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const FormErrorFeedback = ({ error }: { error: FieldError | undefined }) => {
  if (!error) return null;
  return <span className={classNames('absolute right-0', styles.errorFeedBack)}>{error.message}</span>;
};

const ContactForm = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const { handleSubmit, register, reset, formState } = useForm<IContactFormState>({
    defaultValues: DEFAULT_VALUE,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values: IContactFormState) => {
    setLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        reset(DEFAULT_VALUE);
        toast.success('Üzenet elküldve');
      } else {
        toast.error('Hiba történt, kérjük próbáld meg később');
      }
    });
  };

  return (
    <div className="w-100 bg-cream-light">
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto p-6">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-cream-dark font-bold text-lg md:text-3xl md:p-4">Nem találtál választ a kérdésedre?</h3>
          <p className="md:p-4">Írj nekünk üzenetet, és mi igyekszünk mielőbb válaszolni rá.</p>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <label htmlFor="name">Név</label>
              <input
                className={classNames(
                  'shadow-input appearance-none border border-cream-dark rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2',
                  {
                    [styles.invalid]: formState.errors.name,
                  }
                )}
                placeholder="Gipsz Jakab"
                {...register('name')}
              />
              <FormErrorFeedback error={formState.errors.name} />
            </div>
            <div className="relative">
              <label htmlFor="email">Email</label>
              <input
                className={classNames(
                  'shadow-input appearance-none border border-cream-dark rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2',
                  {
                    [styles.invalid]: formState.errors.email,
                  }
                )}
                placeholder="gjakab@gmail.com"
                {...register('email')}
              />
              <FormErrorFeedback error={formState.errors.email} />
            </div>
            <div className="relative">
              <label htmlFor="subject">Tárgy</label>
              <input
                className={classNames(
                  'shadow-input appearance-none border border-cream-dark rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2',
                  {
                    [styles.invalid]: formState.errors.subject,
                  }
                )}
                placeholder="Információ kérése"
                {...register('subject')}
              />
              <FormErrorFeedback error={formState.errors.subject} />
            </div>
            <div className="relative">
              <label htmlFor="message">Üzenet</label>
              <textarea
                rows={10}
                className={classNames(
                  'shadow-input resize-none appearance-none border border-cream-dark rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2',
                  {
                    [styles.invalid]: formState.errors.message,
                  }
                )}
                {...register('message')}
              />
              <FormErrorFeedback error={formState.errors.message} />
            </div>
            <button
              className={classNames(
                'my-4 w-full bg-cream-dark text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-30 border-cream-dark-2',
                {
                  [styles.loading]: loading,
                }
              )}
              type="submit"
              disabled={loading}
            >
              Küldés
              {loading ? (
                <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-1" />
              ) : (
                <FontAwesomeIcon icon={faTelegramPlane} className="ml-1" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
