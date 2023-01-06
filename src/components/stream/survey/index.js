import React from "react";
import { Widget  } from "@typeform/embed-react";
export default function Survey({ id }) {
  return (
    <div>
          <Widget  id={id}>
            Join the Waitlist
          </Widget >
    </div>
  );
}
