'use client';

import Select from 'react-select';

import { selectClassNames, selectInlineStyles } from './Select.config';
import styles from './Select.module.css';

export default function UiSelect({ name, items, placeholder, onChange, ...props }) {
  const options = items.map((item) => ({
    value: item.value,
    label: item.name,
  }));

  
  return (
    <Select
      unstyled
      className={styles.select}
      classNames={selectClassNames(styles)}
      styles={selectInlineStyles}
      options={options}
      isClearable={true}
      onChange={(option) => onChange(option ? option.value : null)}
      {...props}
    />
  );
}
