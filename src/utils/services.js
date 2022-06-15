export const getData = async () => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_URL}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const respInJs = await resp.json();
    return respInJs;
  } catch (error) {
    return error;
  }
};

export const postData = async (data) => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const respInJs = await resp.json();
    console.log('respInJs ===', respInJs);
    return respInJs;
  } catch (error) {
    console.log('error ===', error);
    return error;
  }
};

export const deleteData = async (id) => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const respInJs = await resp.json();
    return respInJs;
  } catch (error) {
    return error;
  }
};

export const updateData = async (id, data) => {
  try {
    const resp = await fetch(`${process.env.REACT_APP_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const respInJs = await resp.json();
    console.log('respInJs ===', respInJs);
    return respInJs;
  } catch (error) {
    console.log('error ===', error);
    return error;
  }
};
