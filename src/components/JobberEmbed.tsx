"use client";

import { useEffect } from "react";

const CLIENT_HUB_ID = "7f3ece77-41bb-4938-a348-736efae5b2bc-1001377";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/7f3ece77-41bb-4938-a348-736efae5b2bc/public/work_request/embedded_work_request_form?form_id=1001377";
const SCRIPT_SRC =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

export default function JobberEmbed() {
  useEffect(() => {
    const existing = document.querySelector(
      `script[src="${SCRIPT_SRC}"]`,
    ) as HTMLScriptElement | null;
    if (existing) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.setAttribute("clienthub_id", CLIENT_HUB_ID);
    script.setAttribute("form_url", FORM_URL);
    document.body.appendChild(script);
  }, []);

  return <div id={CLIENT_HUB_ID} />;
}
