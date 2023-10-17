export function generateExampleFromSchema(schema) {
  const example = {};
  for (const propName in schema) {
    const propInfo = schema[propName];
    if (propInfo.type === "object") {
      example[propName] = generateExampleFromSchema(propInfo.properties);
    } else if (propInfo.type === "array") {
      if (propInfo.items && propInfo.items.example) {
        example[propName] = [propInfo.items.example];
      } else {
        example[propName] = [];
      }
    } else {
      const typeToDefault = {
        string: "",
        integer: 0,
      };
      example[propName] =
        propInfo.example || typeToDefault[propInfo.type] || null;
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
