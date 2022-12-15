export const mapArgs = (args) =>
  Object.fromEntries(
    args.map((e) => {
      const [key, value] = e.split("=");
      return [key, value];
    })
  );
