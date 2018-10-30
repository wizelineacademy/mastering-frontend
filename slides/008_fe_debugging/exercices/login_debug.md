Imagine you’re working on this fabulous new web application, and your testers ask you to investigate this list of bugs:

- The “Loading…” status bar message does not disappear when the application finishes loading.
- The language defaults to Norwegian.
- A global variable named prop is created somewhere.
- In the DOM viewer, all elements have a “clone” attribute.
- “Minimum length” form validation doesn’t work—trying to submit the form with a one-letter user name should cause an error message.
Leaving the password field blank is allowed—you should see an error message saying that the password field may not be empty, on submitting the form.
The login always fails, with an error message saying that a cross-site request forgery attack was detected.