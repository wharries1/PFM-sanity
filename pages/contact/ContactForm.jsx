//import Button from '../../components/button/button.component';
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    formRef.current.reset();
    setIsSubmitted(true);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} action="./submit-form.php">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters" },
            maxLength: { value: 20, message: "Name must be at most 20 characters" },
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email must be a valid email address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
            maxLength: { value: 200, message: "Message must be at most 200 characters" },
          })}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}

        {/* <Button type='submit'>Send</Button> */}
      </form>

      {isSubmitted && (
        <p className="success">Message sent</p>
      )}
    </>
  );
};

export default ContactForm;