'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import IconContent from 'components/IconContent/IconContent';
import Separator from 'components/Separator/Separator';
const UiSelect = dynamic(() => import('components/Select/Select'), {
  ssr: false,
});

import { CiSearch, CiViewList, CiLocationOn } from 'assets/icons';
import styles from './SearchForm.module.css';

export default function SearchForm(props) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: '',
      category: '',
      city: '',
    },
  });

  const router = useRouter();
  const onSubmit = (data) => {
    // router.push(`/events?name=${data.name}&city=${data.city}&category=${data.category}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <IconContent icon={CiSearch} className={styles['form-field']}>
        <input type="text" placeholder="Enter name..." {...register('name')} />
      </IconContent>
      <Separator />
      <IconContent icon={CiViewList} className={styles['form-field']}>
        <UiSelect
          name="category"
          items={props.categories}
          placeholder="Select Category"
          onChange={(category) => setValue('category', category)}
        />
      </IconContent>
      <Separator />
      <IconContent icon={CiLocationOn} className={styles['form-field']}>
        <UiSelect
          name="city"
          items={props.cities}
          placeholder="Select City"
          onChange={(city) => setValue('city', city)}
        />
      </IconContent>

      <button type="submit" name="search">
        Search
      </button>
    </form>
  );
}
