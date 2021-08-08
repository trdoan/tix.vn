const danhSachDoiTac = {
  cgv: { name: "CGV", img: "https://tix.vn/app/assets/img/icons/cgv.png" },
  bhd: { name: "BHD", img: "https://tix.vn/app/assets/img/icons/bhd.png" },
  galaxy: {
    name: "Galaxy",
    img: "https://tix.vn/app/assets/img/icons/galaxycine.png",
  },
  cinestar: {
    name: "Cinestar",
    img: "https://tix.vn/app/assets/img/icons/cinestar.png",
  },
  lotte: {
    name: "Lotte Cinema",
    img:
      "https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png",
  },
  Beta: {
    name: "Beta Cinema",
    img: "https://tix.vn/app/assets/img/icons/bt.jpg",
  },
  mega: {
    name: "Mega",
    img: "https://tix.vn/app/assets/img/icons/megags.png",
  },
  ddc: {
    name: "ddc",
    img: "https://tix.vn/app/assets/img/icons/dongdacinema.png",
  },
  touch: {
    name: "ddc",
    img: "https://tix.vn/app/assets/img/icons/TOUCH.png",
  },
};
const arrDoiTac = [];
for (var key in danhSachDoiTac) {
  arrDoiTac.push(danhSachDoiTac[key]);
}
export default arrDoiTac;
