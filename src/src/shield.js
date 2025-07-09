export const encryptData = (data) => {
  // Placeholder encryption (replace with Fernet in production)
  return btoa(data); // Base64 encoding
};

export const checkLLMRisk = async (data) => {
  // Placeholder for OpenRouter MiniMax M1 API
  const risk = Math.random(); // Simulate risk score
  return risk > 0.7 ? 'Unauthorized LLM access detected' : 'Secure';
};
