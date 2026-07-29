"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, type ReactNode, useRef, useState } from "react";

type NetlifyFormProps = {
  children: ReactNode;
  className?: string;
  formName: string;
  successPath?: string;
};

export default function NetlifyForm({
  children,
  className,
  formName,
  successPath = "/thank-you",
}: NetlifyFormProps) {
  const router = useRouter();
  const submittingRef = useRef(false);
  const [submissionError, setSubmissionError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittingRef.current) {
      return;
    }

    submittingRef.current = true;
    setSubmissionError("");

    const formData = new FormData(event.currentTarget);
    const encodedData = new URLSearchParams();

    formData.forEach((value, key) => {
      encodedData.append(key, value.toString());
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`,
        );
      }

      router.push(successPath);
    } catch {
      submittingRef.current = false;
      setSubmissionError(
        "We couldn’t send your message. Please try again or call us directly.",
      );
    }
  }

  return (
    <form
      name={formName}
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Do not fill this out:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {children}

      {submissionError ? (
        <p role="alert" className="text-sm font-bold text-brand-accent">
          {submissionError}
        </p>
      ) : null}
    </form>
  );
}
