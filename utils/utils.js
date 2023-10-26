export function getColorByDataType(value) {
  switch (value) {
    case "integer":
      return "text-primary"; // Bootstrap class for numbers
    case "boolean":
      return "text-warning"; // Bootstrap class for booleans
    case "object":
      if (Array.isArray(value)) {
        return "text-info"; // Bootstrap class for arrays
      } else if (value === null) {
        return "text-danger"; // Bootstrap class for null
      } else {
        return "text-dark"; // Bootstrap class for objects
      }
    default:
      return "text-success"; // Default Bootstrap class for other data types
  }
}
