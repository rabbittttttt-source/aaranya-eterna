'use client';

import { FormEvent, useState } from 'react';

export function TreeDedicationForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const response = await fetch('/api/tree-dedication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setStatus(result.message || (response.ok ? 'Tree dedication request created.' : 'Please review your details.'));
    setIsSubmitting(false);

    if (response.ok) {
      form.reset();
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="field-row two-col">
        <label>
          Dedicator name
          <input name="dedicator_name" type="text" required minLength={2} />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
      </div>

      <div className="field-row two-col">
        <label>
          Tree name / title
          <input name="tree_name" type="text" required minLength={2} />
        </label>
        <label>
          Dedication type
          <select name="dedication_type" defaultValue="Memorial">
            <option>Memorial</option>
            <option>Milestone</option>
            <option>Family Legacy</option>
            <option>Personal Gratitude</option>
          </select>
        </label>
      </div>

      <label>
        Recipient or dedication note
        <textarea name="message" rows={5} minLength={10} required placeholder="For example: In loving memory of Maya or for a new chapter of growth." />
      </label>

      <button type="submit" className="button button-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Create dedication request'}
      </button>

      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
