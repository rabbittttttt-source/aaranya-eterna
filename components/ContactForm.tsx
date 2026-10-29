'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setStatus(result.message || (response.ok ? 'Thank you. We will be in touch soon.' : 'Please check your details and try again.'));
    setIsSubmitting(false);

    if (response.ok) {
      form.reset();
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="field-row two-col">
        <label>
          Full name
          <input name="name" type="text" required minLength={2} placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="you@example.com" />
        </label>
      </div>

      <div className="field-row two-col">
        <label>
          Phone
          <input name="phone" type="tel" placeholder="+91 99999 99999" />
        </label>
        <label>
          Interest
          <select name="interest" defaultValue="Tree Dedication">
            <option>Tree Dedication</option>
            <option>Stay / Retreat</option>
            <option>Memorial / Legacy</option>
            <option>General Enquiry</option>
          </select>
        </label>
      </div>

      <label>
        Message
        <textarea name="message" rows={5} minLength={10} required placeholder="Tell us what you are hoping to create or explore." />
      </label>

      <button type="submit" className="button button-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send enquiry'}
      </button>

      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
