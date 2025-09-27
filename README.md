# Guided Overlay Assignment

## Objective
A minimal demo web app that guides a user through recorded steps using an overlay.  
If a step is missing a selector, a local **stub resolver** (`resolverStub.js`) maps natural language (e.g., "username field") to the correct element.

## How to Run
1. Make sure you have **Node.js** installed.
2. Install a simple static server:
   ```bash
   npm install -g http-server

# open http://localhost:8080/task.html