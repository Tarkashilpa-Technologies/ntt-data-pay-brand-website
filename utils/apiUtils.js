export function generateExampleFromSchema(schema) {
  const example = {};
  const orderedProps = [];
  for (const propName in schema) {
    const propInfo = schema[propName];
    orderedProps.push(propName);
    if (propInfo.type === "object") {
      example[propName] = generateExampleFromSchema(propInfo.properties);
    } else if (propInfo.type === "array") {
      if (propInfo.items && propInfo.items.properties) {
        example[propName] = [
          generateExampleFromSchema(propInfo.items.properties),
        ];
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
  const orderedExample = {};
  for (const propName of orderedProps) {
    orderedExample[propName] = example[propName];
  }
  return orderedExample;
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
      };
      if (propertyData.format) {
        propertySchema.format = propertyData.format;
      }
      if (propertyData.example) {
        propertySchema.example = propertyData.example;
      }
      if (propertyData.description) {
        propertySchema.description = propertyData.description;
      }
      schema.properties[key] = propertySchema;
      if (propertyData.type === "object" && propertyData.properties) {
        propertySchema.properties = generateSchema(propertyData.properties);
      }
    }
  }

  return schema;
}
