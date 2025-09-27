
---

# 📄 `PROMPTS.md`

```markdown
# LLM Prompt for Selector Resolution

This project uses a local stub (`resolverStub.js`) instead of a real LLM API.

If integrated with an LLM, the prompt would be:

---
You are an assistant that resolves natural language references to HTML elements into valid CSS selectors.

Given:
1. A list of DOM elements (tag, id, name, class, placeholder, innerText, options).
2. A natural language description of the target element.

Task:
- Identify the most likely element.
- Return only JSON:
  {
    "target": "<original target>",
    "selector": "<best CSS selector>"
  }
---

Example:

Input Target: "Login Button"  
DOM: `<button id="login-btn">Login Button</button>`  
Output:
```json
{ "target": "Login Button", "selector": "#login-btn" }
