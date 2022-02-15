const ValidationResult = ({
  validationClass,
  visibleClass,
  error,
  successMessage,
}) => {
  return (
    <p className={`help ${validationClass} ${visibleClass}`}>
      {error ? error.toString() : successMessage}
    </p>
  );
};

export default ValidationResult;
