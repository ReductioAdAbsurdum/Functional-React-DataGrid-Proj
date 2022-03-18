export const createRandomId = () => {
  return Math.round((Math.random().toFixed(8) * Math.pow(10, 8))).toString();
};

export const findAvaliableId = (data) => {
  try {
    let id = createRandomId();

    while (isTaken() === false) {
      id = createRandomId();
    }
    return id;
  } catch (error) {
    return createRandomId();
  }
};

const isTaken = (id, data) => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (id === item.id) {
      return true;
    }
  }
  return false;
};
