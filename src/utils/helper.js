const readStream = async (reader) => {
  try {
    let res = [];
    const textDecoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const byteString = textDecoder.decode(value);
      const cleanString = byteString.replace(/^.*?\(/, "").replace(/\)$/, "");
      const resArray = JSON.parse(cleanString)[1].map((arr) => arr[0]);
      res.push(...resArray);
    }
    return res;
  } catch (error) {
    console.error("Error reading stream:", error);
    return null;
  } finally {
    reader.releaseLock();
  }
};

export { readStream };
