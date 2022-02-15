import { useEffect, useState } from "react";

import ValidationResult from "./ValidationResult";

const ValidatedField = ({
  setValidatedValue,
  validationSchema,
  label,
  successMessage,
}) => {
  const [interimValue, setInterimValue] = useState("");
  const [error, setError] = useState("");
  const [validationClass, setValidationClass] = useState("");
  const [visibleClass, setVisibleClass] = useState("is-invisible");

  useEffect(() => {
    setValidatedValue(null);
    setVisibleClass("is-invisible");
    setError(null);
    validationSchema
      .validateAsync(interimValue)
      .then((value) => {
        setValidatedValue(value);
        setValidationClass("is-success");
      })
      .catch((err) => {
        setError(err);
        setValidationClass("is-danger");
      })
      .finally(() => {
        setVisibleClass("");
      });
  }, [
    setVisibleClass,
    setValidationClass,
    setValidatedValue,
    setError,
    interimValue,
  ]);

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className={`input ${validationClass}`}
          type="text"
          placeholder={label}
          value={interimValue}
          onChange={(ev) => {
            setInterimValue(ev.target.value);
          }}
        />
      </div>
      <ValidationResult
        validationClass={validationClass}
        visibleClass={visibleClass}
        error={error}
        successMessage={successMessage}
      />
    </div>
  );
};

export default ValidatedField;
