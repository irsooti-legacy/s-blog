import React from 'react';

export default function Tag({ prefix, type, text, onRemove, size = 'large' }) {
  return (
    <span className={`tag is-${type} is-${size}`}>
      {prefix}
      {text}
      {onRemove ? <button onClick={onRemove} class="delete is-small" /> : null}
    </span>
  );
}
