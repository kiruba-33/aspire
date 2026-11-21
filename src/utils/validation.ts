export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) return 'Please enter your full name.';
  if (trimmed.length < 2) return 'Name must be at least 2 characters.';
  return null;
}

export function validatePhone(phone: string): string | null {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  if (!cleaned) return 'Please enter your phone number.';
  // Supports Sri Lankan numbers (+947xxxxxxxx, 07xxxxxxxx, +9411xxxxxxx) as well as international 9-14 digit numbers
  const validPhoneRegex = /^(?:\+?94|0)?[1-9]\d{8,11}$/;
  if (!validPhoneRegex.test(cleaned)) {
    return 'Please enter a valid phone number (e.g., +94 77 123 4567).';
  }
  return null;
}

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) return 'Please enter your email address.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address.';
  }
  return null;
}

export function validateRequiredSelect(value: string, label: string): string | null {
  if (!value.trim()) {
    return `Please select a ${label.toLowerCase()}.`;
  }
  return null;
}
