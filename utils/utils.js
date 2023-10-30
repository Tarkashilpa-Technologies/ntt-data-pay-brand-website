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

export function updateSelectedApi(requestObject, selectedFunction) {
  if (selectedFunction) {
    const paths = requestObject?.attributes?.Defination?.paths;
    Object.keys(paths).forEach((item1) => {
      if (item1 === selectedFunction?.api) {
        Object.keys(paths[item1]).forEach((item2) => {
          if (item2 === selectedFunction?.method) {
            requestObject.attributes.Defination.paths = {
              [item1]: {
                [item2]: paths[item1][item2],
              },
            };
          }
        });
      }
    });
    return requestObject;
  }
}

export function extractRequiredArrays(obj, results = []) {
  if (obj.required && Array.isArray(obj.required)) {
    results.push(obj.required);
  }
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      extractRequiredArrays(obj[key], results);
    }
  }
  return results?.flat();
}
