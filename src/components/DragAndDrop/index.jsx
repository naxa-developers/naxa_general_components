import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function getFileTypes(arr) {
  return arr.reduce((str, item) => `.${item}, ${str}`, '');
}

const DragAndDrop = ({ children, onDrop, accept, resetState }) => {
  const dragCounter = useRef(0);
  const inputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [isFileValid, setIsFileValid] = useState(true);
  const [filename, setFilename] = useState('');

  useEffect(() => {
    dragCounter.current = 0;
    setIsDragging(false);
    setIsFileValid(true);
    setFilename('');
  }, [resetState]);

  const onInputClick = () => {
    inputRef.current.click();
  };

  const handleFileUpload = file => {
    const fileFormat = file[0].name.split('.');
    const fileExtension = fileFormat[fileFormat.length - 1];
    if (accept.length > 0) {
      if (accept.includes(fileExtension)) {
        setFilename(file[0].name);
        setIsFileValid(true);
        onDrop(file);
      } else {
        setIsFileValid(false);
        setFilename('');
      }
    } else {
      setFilename(file[0].name);
      setIsFileValid(true);
      onDrop(file);
    }
  };

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current > 0) return;
    setIsDragging(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      handleFileUpload(e.dataTransfer.files);
      e.dataTransfer.clearData();
      dragCounter.current = 0;
    }
  };

  const props = {
    onInputClick,
    isDragging,
    isFileValid,
    filename,
  };

  return (
    <div
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {React.isValidElement(children)
        ? React.cloneElement(children, { ...props })
        : React.createElement(children, { ...props })}
      <input
        ref={inputRef}
        type='file'
        style={{ display: 'none' }}
        accept={getFileTypes(accept)}
        onChange={e => handleFileUpload(e.target.files)}
      />
    </div>
  );
};

DragAndDrop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  onDrop: PropTypes.func.isRequired,
  accept: PropTypes.array,
  resetState: PropTypes.bool,
};

DragAndDrop.defaultProps = {
  accept: [],
  resetState: false,
};

export default DragAndDrop;
