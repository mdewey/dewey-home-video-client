import React from 'react';

function DisplayTags(props: { tags: string[] }) {
  return (
    <ul className="tag-list">
      {props.tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default DisplayTags;