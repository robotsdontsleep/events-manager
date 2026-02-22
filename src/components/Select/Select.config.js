//CSS class mapping for react-select components
// (using CSS Modules)
export const selectClassNames = (styles) => ({
  // Main container (visible select box)
  control: (state) =>
    `${styles.control} ${state.menuIsOpen ? styles.controlOpen : ""}`,

  // Inner containers and elements
  valueContainer: () => styles.valueContainer, // wraps selected value
  singleValue: () => styles.singleValue, // single value text
  placeholder: () => styles.placeholder, // placeholder text

  // Indicators (clear button, dropdown arrow, etc.)
  indicatorsContainer: () => styles.indicators,
  dropdownIndicator: () => styles.dropdownIndicator,
  clearIndicator: () => styles.clearIndicator,

  // Dropdown menu container
  menu: () => styles.menu,

  // Each dropdown option
  option: (state) =>
    `${styles.option} 
     ${state.isFocused ? styles.optionFocused : ""} 
     ${state.isSelected ? styles.optionSelected : ""}`,

  // "No options" message
  noOptionsMessage: () => styles.noOptions,
});

// Inline styles override for layout and positioning
// (used to fix React Select's internal positioning)
export const selectInlineStyles = {
  // Root wrapper — prevent it from being relative
  container: (base) => ({ ...base, position: "static" }),

  // Control — also remove relative positioning
  control: (base) => ({ ...base, position: "static" }),

  // Menu — force absolute positioning (inside .field wrapper)
  menu: (base) => ({ ...base, position: "absolute" }),
};
