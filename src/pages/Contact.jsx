import { useState } from "react";
import { config } from "../config.js";
import { submitContactMessage } from "../firebase/firestore.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import styles from "./Contact.module.css";

const initialValues = config.contact.formFields.reduce(
  (acc, field) => ({ ...acc, [field.name]: "" }),
  {}
);

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name) => (event) => {
    setValues((prev) => ({ ...prev, [name]: event.target.value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    config.contact.formFields.forEach((field) => {
      if (field.required && !values[field.name].trim()) {
        nextErrors[field.name] = `${field.label} is required.`;
      } else if (
        field.type === "email" &&
        values[field.name] &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[field.name])
      ) {
        nextErrors[field.name] = "Enter a valid email address.";
      }
    });
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitContactMessage(values);
      setSubmitting(false);
      setSubmitted(true);
      setValues(initialValues);
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      setSubmitting(false);
      setErrors({ submit: "Failed to send message. Please try again." });
    }
  };

  return (
    <div className="section">
      <div className={`container ${styles.wrap}`}>
        <SectionHeading
          align="left"
          eyebrow="Contact"
          heading={config.contact.heading}
          subheading={config.contact.subheading}
        />

        {submitted ? (
          <div role="status" className={styles.success}>
            {config.contact.successMessage}
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {config.contact.formFields.map((field) => (
              <div className={styles.field} key={field.name}>
                <label htmlFor={field.name} className={styles.label}>
                  {field.label}
                  {field.required && <span aria-hidden="true"> *</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={5}
                    value={values[field.name]}
                    onChange={handleChange(field.name)}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    className={styles.textarea}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange(field.name)}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    className={styles.select}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={values[field.name]}
                    onChange={handleChange(field.name)}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    className={styles.input}
                  />
                )}

                {errors[field.name] && (
                  <span id={`${field.name}-error`} className={styles.error} role="alert">
                    {errors[field.name]}
                  </span>
                )}
              </div>
            ))}

            <button type="submit" className={styles.submit} disabled={submitting}>
              {submitting ? "Sending…" : config.contact.submitLabel}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
