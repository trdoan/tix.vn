export const rateMovie = (danhGia) => {
  let numberStar = 0;
  let arrStar = [];
  if (danhGia >= 8) {
    numberStar = 4;
  }
  if (danhGia >= 6 && danhGia < 8) {
    numberStar = 3;
  }
  if (danhGia <= 5) {
    numberStar = 2;
  }
  for (let i = 0; i < numberStar; i++) {
    arrStar.push("123");
  }
  return { arrStar };
};
