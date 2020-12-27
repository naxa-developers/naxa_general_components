import React from "react";
import FormGroupWrapper, { TextInputs } from "./index.js";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Textinputs", module)
  .addDecorator(withKnobs)
  .add("with Default", () => (
    <form>
      <FormGroupWrapper>
        <TextInputs
          type="text"
          className="form-control"
          placeholder="Enter Name"
        />
      </FormGroupWrapper>
      <FormGroupWrapper className="custom-form-group" border>
        <TextInputs
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
        />
      </FormGroupWrapper>
    </form>
  ))

  .add("with Label", () => (
    <form>
      <FormGroupWrapper>
        <label>Name: </label>
        <TextInputs
          type="text"
          className="form-control"
          placeholder="Your Name"
        />
      </FormGroupWrapper>
      <FormGroupWrapper className="custom-form-group" border>
        <TextInputs
          type="text"
          name="name"
          id="inputname"
          className="form-control"
        />
        <label htmlFor="inputname">Name</label>
      </FormGroupWrapper>
    </form>
  ))

  .add("with Password", () => (
    <form>
      <FormGroupWrapper>
        <label>Password: </label>
        <TextInputs
          type="password"
          className="form-control"
          placeholder="Your Password"
        />
      </FormGroupWrapper>
      <FormGroupWrapper className="custom-form-group" border>
        <TextInputs
          type="password"
          name="name"
          id="inputpswd"
          className="form-control"
        />
        <label htmlFor="inputpswd">Password</label>
      </FormGroupWrapper>
    </form>
  ))

  .add("with Email", () => (
    <form>
      <FormGroupWrapper>
        <label>Email: </label>
        <TextInputs
          type="email"
          className="form-control"
          placeholder="Your Email"
        />
      </FormGroupWrapper>
      <FormGroupWrapper className="custom-form-group" border>
        <TextInputs
          type="email"
          name="name"
          id="inputemail"
          className="form-control"
        />
        <label htmlFor="inputemail">Email</label>
      </FormGroupWrapper>
      <FormGroupWrapper className="custom-form-group" border>
        <i className="fas fa-envelope prefix" />
        <TextInputs
          type="email"
          name="name"
          id="inputemail"
          className="form-control"
        />
        <label htmlFor="inputemail">Email</label>
      </FormGroupWrapper>
    </form>
  ))

  .add("with Fileupload", () => (
    <form>
      <FormGroupWrapper>
        <label>Upload a File</label>
        <TextInputs
          type="file"
          className="form-control"
          placeholder="Your Email"
        />
      </FormGroupWrapper>
      <FormGroupWrapper className="custom-file">
        <TextInputs
          type="file"
          className="form-control custom-file-input"
          id="customFile"
        />
        <label className="custom-file-label" htmlFor="customFile">
          Choose File
        </label>
      </FormGroupWrapper>
      <FormGroupWrapper className="custom-form-group">
        <div className="btn">
          <span>File</span>
          <TextInputs type="file" className="form-control" id="TextInput-4" />
        </div>
        <div className="file-path-wrapper">
          <TextInputs className="form-control" />
        </div>
      </FormGroupWrapper>
    </form>
  ));
