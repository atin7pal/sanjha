import React from "react";
import { Card } from "./Card";

export function Carduse({ items }) {
  return (
    <>
      {items.map((element, index) => (
        <Card
          key={index}
          title={element.title}
          description={element.description}
          icon={element.icon}
          classname={element.classname}
          hidden={element.hidden}
        />
      ))}
    </>
  );
}
