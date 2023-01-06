import React from "react";
import { Widget } from "@typeform/embed-react";
export default function Survey({ id }) {
  return (
    <Widget className="h-full w-full p-8" id={id}>
      Join the Waitlist
    </Widget>
  );
}
