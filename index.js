// Helper function to convert a string to title case
function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  // Main code to use the helper function
  const originalString = "hello world"; // You can change the original string
  const titleCaseString = toTitleCase(originalString);
  console.log(`Original string: ${originalString}`);
  console.log(`Title case string: ${titleCaseString}`);
  