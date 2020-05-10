declare module "hangeul" {
  const E: {
    runame: (hangul: string) => string;
    enname: (hangul: string) => string;
  };
  export = E;
}
