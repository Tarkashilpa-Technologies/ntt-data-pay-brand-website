export function getColorByDataType(value) {
  switch (value) {
    case "integer":
      return "text-purple"; // Bootstrap class for numbers
    case "boolean":
      return "text-orange"; // Bootstrap class for booleans
    case "object":
      return "text-primary"; // Bootstrap class for arrays
    default:
      return "text-green"; // Default Bootstrap class for other data types
  }
}
