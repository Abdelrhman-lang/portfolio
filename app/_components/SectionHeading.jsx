import React from "react";

export default function SectionHeading({ title, span }) {
  return (
    <h3 className="font-light text-5xl mb-12">
      {title} <span className="text-primary">{span}</span>
    </h3>
  );
}
