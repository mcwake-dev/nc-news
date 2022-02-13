const Error = ({ error }) => {
  if (error) {
    return (
      <details>
        <summary>{error.message}</summary>
        {JSON.stringify(error).replace("\n", "<br />")}
      </details>
    );
  } else {
    return <></>;
  }
};

export default Error;
