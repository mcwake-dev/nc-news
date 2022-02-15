import { useState } from "react";

import NameSchema from "../../schemas/NameSchema";
import UsernameSchema from "../../schemas/UsernameSchema";
import AvatarUrlSchema from "../../schemas/AvatarUrlSchema";
import ValidatedField from "../forms/ValidatedField";

const Register = () => {
  const [validatedUsername, setValidatedUsername] = useState("");
  const [validatedName, setValidatedName] = useState("");
  const [validatedAvatarUrl, setValidatedAvatarUrl] = useState("");

  return (
    <section>
      <h1 className="title">Register</h1>
      <h2 className="subtitle">
        Register as a user to be able to write articles and comments, and vote
        on articles and comments from others
      </h2>
      avatar_url, password, confirmPassword,
      <ValidatedField
        setValidatedValue={setValidatedUsername}
        validationSchema={UsernameSchema}
        label={"Username"}
        successMessage={"Username is valid and available"}
      />
      <ValidatedField
        setValidatedValue={setValidatedName}
        validationSchema={NameSchema}
        label={"Name"}
        successMessage={"Name is valid"}
      />
      <ValidatedField
        setValidatedValue={setValidatedAvatarUrl}
        validationSchema={AvatarUrlSchema}
        label={"Avatar URL"}
        successMessage={"Avatar URL is valid"}
      />
    </section>
  );
};

export default Register;
