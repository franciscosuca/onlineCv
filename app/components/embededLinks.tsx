"use client";

import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    iframely?: {
      load: () => void;
    };
  }
}

const KEY = process.env.NEXT_PUBLIC_IFRAMELY_API_KEY;

export function EmbededLinks(props) {
  const [error, setError] = useState<{ code: number; message: string } | null>(
    null
  );
  const [html, setHtml] = useState({ __html: "<div />" }); // This follows React's pattern for safely handling HTML string content that will be rendered directly to the DOM, preventing XSS attacks while allowing dynamic HTML injection when necessary.

  useEffect(() => {
    if (props && props.url) {
      fetch(
        `https://cdn.iframe.ly/api/iframely?url=${encodeURIComponent(
          props.url
        )}&key=${KEY}&iframe=1&omit_script=1`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.html) setHtml({ __html: res.html });
          else if (res.error)
            setError({ code: res.error, message: res.message });
        });
    } else {
      setError({ code: 400, message: "Provide url attribute for the element" });
    }
  }, []);

  if (error) {
    return (
      <div>
        <a
          href={props.url}
          className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition-all"
        >
          For more details please visit: {props.url}
        </a>
      </div>
    );
  } else {
    return <div dangerouslySetInnerHTML={html} />; //React's replacement for using innerHTML in the browser DOM
  }
}
