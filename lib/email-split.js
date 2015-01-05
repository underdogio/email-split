// Define our function
function emailSplit(email) {
  // Find the our `@` delimiter
  var delimiterIndex = email.indexOf('@');

  // If there is no `@`, return `null` as with `str.split`
  if (delimiterIndex === -1) {
    return null;
  }

  // Otherwise, return the local and domain parts
  return {
    local: email.slice(0, delimiterIndex),
    domain: email.slice(delimiterIndex + 1)
  };
}

// Export our function
module.exports = emailSplit;
