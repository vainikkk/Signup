export const customStyles = {
  option: provided => ({
    ...provided,
    textAlign: 'left',
    padding: 4,
    paddingLeft: '10px',
  }),
  control: () => ({
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    height: '32px',
  }),
  valueContainer: () => ({
    marginLeft: '7px',
  }),
};
