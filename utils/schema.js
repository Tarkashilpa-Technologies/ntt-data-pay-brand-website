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

export function generateSchemaForTable(jsonData) {
  const schema = {};

  if (typeof jsonData === "object") {
    schema.type = "object";
    schema.properties = {};

    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        const value = jsonData[key];
        if (typeof value === "object") {
          schema.properties[key] = generateSchemaForTable(value);
        } else {
          schema.properties[key] = { type: typeof value };
          if (typeof value === "number") {
            if (Number.isInteger(value)) {
              schema.properties[key].format = "int64";
            } else {
              schema.properties[key].format = "double(12,2)";
            }
          }
          if (typeof value === "string") {
            schema.properties[key].example = value;
          }
          if (jsonData[key].description) {
            schema.properties[key].description = jsonData[key].description;
          }
        }
      }
    }
  }

  return schema;
}
