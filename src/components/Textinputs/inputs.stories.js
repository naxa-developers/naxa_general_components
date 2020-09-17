import React from 'react';
import Textinputs from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('Textinputs', module)
  .addDecorator(withKnobs)
  .add('with Default', () => (
      <form>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Name"></input>
        </div>
        <div class="form-group custom-form-group">
            <input type="text" name="name" class="form-control" placeholder="Enter Name" required=""/>   
            <span class="border-span"></span>
        </div>
      </form>
  ))

  .add('with Label', () => (
    <form>
      <div className="form-group">
          <label>Name: </label>
          <input type="text" className="form-control" placeholder="Your Name"></input>
      </div>
      <div class="form-group custom-form-group">
            <input type="text" name="name" id="inputname" class="form-control" placeholder="" required=""/>
            <label for="inputname">Name</label>
            <span class="border-span"></span>
        </div>
    </form>
   ))

   .add('with Password', () => (
    <form>
      <div className="form-group">
          <label>Password: </label>
          <input type="password" className="form-control" placeholder="Your Password"></input>
      </div>
      
      <div class="form-group custom-form-group">
            <input type="password" name="name" id="inputpswd" class="form-control" placeholder="" required=""/>
            <label for="inputpswd">Password</label>
            <span class="border-span"></span>
        </div>
    </form>
))

.add('with Email', () => (
    <form>
      <div className="form-group">
          <label>Email: </label>
          <input type="email" className="form-control" placeholder="Your Email"></input>
      </div>

      <div class="form-group custom-form-group">
          <input type="email" name="name" id="inputemail" class="form-control" placeholder="" required=""/>
          <label for="inputemail">Email</label>
          <span class="border-span"></span>
      </div>
      
      <div class="form-group custom-form-group">
          <i class="fas fa-envelope prefix"></i>
          <input type="email" name="name" id="inputemail" class="form-control" placeholder="" required=""/>
          <label for="inputemail">Email</label>
          <span class="border-span"></span>
      </div>
    </form>
))

.add('with Fileupload', () => (
    <form>
      <div className="form-group">
          <label>Upload a File </label>
          <input type="file" className="form-control" placeholder="Your Email"></input>
      </div>

      <div className="form-group custom-file">
          <input type="file" className="form-control custom-file-input" id="customFile"></input>
          <label class="custom-file-label" for="customFile">Choose file</label>
      </div>

      <div class="form-group custom-form-group">
        <div class="btn">
          <span>File</span>
          <input type="file" class="form-control" id="TextInput-4" value=""/>
        </div>
        <div class="file-path-wrapper">
          <input class="form-control" type=""/>
        </div>
      </div>
    </form>
))