export function generateExampleFromSchema(schema) {
  const example = {};
  for (const propName in schema) {
    const propInfo = schema[propName];
    if (propInfo.type === "object") {
      example[propName] = generateExampleFromSchema(propInfo.properties);
    } else if (propInfo.type === "array") {
      example[propName] = [generateExampleFromSchema(propInfo.items)];
    } else if (propInfo.hasOwnProperty("example")) {
      example[propName] = propInfo.example;
    } else if (propInfo.type === "string") {
      example[propName] = "";
    } else if (propInfo.type === "integer") {
      example[propName] = 0;
    }
  }
  return example;
}
export function generateSchema(data) {
  const schema = {
    type: "object",
    properties: {},
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const propertyData = data[key];
      const propertySchema = {
        type: propertyData.type,
        example: propertyData.example,
      };

      if (propertyData.format) {
        propertySchema.format = propertyData.format;
      }

      if (propertyData.description) {
        propertySchema.description = propertyData.description;
      }

      schema.properties[key] = propertySchema;
    }
  }

  return schema;
}
