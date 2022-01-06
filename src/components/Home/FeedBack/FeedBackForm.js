import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import validator from "validator";
import isEmail from "validator/lib/isEmail";

const FeedBackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          className="mb-3"
          type="text"
          placeholder="Jhon"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          className="mb-3"
          type="text"
          placeholder="Doe"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <Form.Label>Address:</Form.Label>
        <Form.Control
          required
          className="mb-3"
          as="textarea"
          placeholder="Enter your postal address"
          {...register("address", { required: true })}
        />
        <Form.Label>Country</Form.Label>
        <Form.Select
          required
          className="mb-3"
          {...register("country", { required: true })}
        >
          <option disabled value="India">
            Select you Country
          </option>
          <option value="India">India</option>
          <option value=" Bangladesh"> Bangladesh</option>
          <option value=" Pakistan"> Pakistan</option>
          <option value=" Japan"> Japan</option>
          <option value=" China"> China</option>
          <option value=" United States"> United States</option>
          <option value=" United Kingdom"> United Kingdom</option>
          <option value=" Canada"> Canada</option>
          <option value=" Australia"> Australia</option>
          <option value=" Germany"> Germany</option>
          <option value=" Franch"> Franch</option>
          <option value=" Spain"> Spain</option>
        </Form.Select>
        <Form.Label>Email ID:</Form.Label>
        <Form.Control
          validator
          required
          className="mb-3"
          type="email"
          placeholder="example@sample.com"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          required
          className="mb-3"
          type="tel"
          placeholder="123456789"
          {...register("phone", { required: true, maxLength: 12 })}
        />

        <Button variant="" className="kalpas-btn" type="submit">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
};

export default FeedBackForm;
