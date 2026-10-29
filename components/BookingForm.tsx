'use client';

import { FormEvent, useState } from 'react';

export function BookingForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setStatus(result.message || (response.ok ? 'Booking request created.' : 'Please review your details.'));
    setIsSubmitting(false);

    if (response.ok) {
      form.reset();
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="field-row two-col">
        <label>
          Guest name
          <input name="guest_name" type="text" required minLength={2} />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
      </div>

      <div className="field-row two-col">
        <label>
          Preferred dates
          <input name="preferred_dates" type="text" placeholder="e.g. 12-16 Nov 2026" required />
        </label>
        <label>
          Guests
          <input name="guest_count" type="number" min="1" max="20" defaultValue="2" required />
        </label>
      </div>

      <label>
        Experience type
        <select name="booking_type" defaultValue="Forest Retreat">
          <option>Forest Retreat</option>
          <option>Private Gathering</option>
          <option>Memorial Stay</option>
          <option>Custom Inquiry</option>
        </select>
      </label>

      <label>
        Notes
        <textarea name="notes" rows={5} placeholder="Tell us about your plans, pace, and any important requests." />
      </label>

      <button type="submit" className="button button-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request booking'}
      </button>

      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
