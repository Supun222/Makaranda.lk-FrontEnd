// eslint-disable-next-line react/prop-types
function AddIcon({ classList }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classList}
      viewBox="0 0 24 24"
    >
      <path
        fill="#0092E4"
        d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
      />
    </svg>
  );
}

export default AddIcon;
