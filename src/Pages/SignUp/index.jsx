import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, no-unused-vars
function Fragments({ activeStep }: any) {
  switch (activeStep) {
    case 1:
      return (
        <>
          <h1>This is page one</h1>
          <button type="button">Click me</button>
        </>
      );
    default:
      break;
  }
}

function SignUp() {
  const [pageCount, setPageCount] = useState(1);
  return (
    <div>
      <Fragments activeStep={pageCount} setActiveStep={setPageCount} />
      <button type="button">next</button>
    </div>
  );
}

export default SignUp;
