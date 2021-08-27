const seRompe = async () => {
  const promise = new Promise((resolve, reject) => {
    return 3 + g;
  });
};

const handleError = async () => {
  try {
    await seRompe();
    let i = 0;
    while (i < 5) {
      i++;
      console.count(i);
    }
  } catch (error) {
    console.log(error);
  }
};

handleError();
