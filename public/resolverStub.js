function resolveTarget(description) {
  console.log("Stub resolver called with:", description);

  const mapping = {
    "username field": "#username",
    "password field": "#password",
    "login button": "#login-btn",
    "submit": "#login-btn",
    "welcome message": "#welcome-msg",
    "male option": "#male",
    "female option": "#female",
    "terms checkbox": "#agree",
    "country dropdown": "#country"
  };

  // normalize input to lowercase
  const resolved = mapping[description.toLowerCase()];
  if (!resolved) {
    console.warn("No mapping found for:", description);
  }
  return resolved || null;
}
