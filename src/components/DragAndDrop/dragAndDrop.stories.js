import React from 'react';
import DragAndDrop from '.';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('DragAndDrop', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <DragAndDrop
      onDrop={file => {
        console.log(file);
      }}
      accept={['zip', 'csv', 'kml', 'geojson', 'json']}
      // resetState={openPopup}
    >
      {({ onInputClick, isDragging, isFileValid, filename }) => (
        <div
          style={{
            border: isDragging ? '2px dashed #0055FF' : '1px dashed #C9C9C9',
            margin: 'auto',
            width: '50vw',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <a href={() => {}} onClick={onInputClick}>
              {/* <i className='material-icons'>publish</i> */}
            </a>
            <h2>Drag and drop a file</h2>
            <span className='para'>
              or{' '}
              <a
                href={() => {}}
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={onInputClick}
              >
                browse
              </a>{' '}
              to choose a file
            </span>
            {isFileValid && <p>{filename}</p>}
            {!isFileValid && (
              <p style={{ color: 'red' }}>File is not supported.</p>
            )}
          </div>
        </div>
      )}
    </DragAndDrop>
  ));
