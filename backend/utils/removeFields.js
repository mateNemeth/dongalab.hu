const isObject = (arg) => {
  return (
    arg instanceof Object &&
    !(arg instanceof Array) &&
    !(typeof arg === "function")
  );
};

const removeFields = (
  obj,
  fieldsToRemove = ["created_at", "updated_at", "published_at", "id"]
) => {
  for (const key in obj) {
    if (fieldsToRemove.includes(key)) {
      delete obj[key];
    }
    if (isObject(obj[key])) {
      removeFields(obj[key]);
    }
  }
  return obj;
};

module.exports = {
  removeFields,
};
