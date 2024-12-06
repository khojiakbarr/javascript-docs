"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeFormatter({ code }) {
  //
  return (
    <div className="rounded-md overflow-hidden">
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
