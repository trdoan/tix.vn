import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
//
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EnhancedTable from "../../components/TableData/TableData";

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };
// const handleLastPageButtonClick = (event) => {
//   onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
// };
function AdminPage() {
  //   const user = useSelector((state) => state.authReducer.user);
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <div
      style={{
        marginTop: 60,
        background: "white",
        boxShadow: "2px 2px 30px #eee",
      }}
    >
      <div
        className="profile"
        style={{
          textAlign: "center",
          border: "1px solid #eee",
          boxShadow: "2px 2px 0px 30x #eee",
          padding: "30px 0px",
        }}
      >
        <div className="row">
          <div
            className="col-md-3 col-sm-12"
            style={{
              textAlign: "center",
              borderRight: "1px solid #eee",
              boxShadow: "2px 2px 0px 30x #eee",
            }}
          >
            <img
              src="https://icon-library.com/images/admin-user-icon/admin-user-icon-24.jpg"
              alt=""
              style={{ width: 90, height: 90 }}
            />
            <p>{user.hoTen}</p>
            <p>{user.email}</p>
            <p>{user.soDT}</p>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => handleClickOpen()}
            >
              Cập nhật
            </Button>
          </div>
          <div className="col-md-9 col-sm-12">
            <h5>LỊCH SỬ ĐẶT VÉ</h5>
            <EnhancedTable />
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{ textAlign: "center", textTransform: "uppercase" }}
        >
          Cập nhật thông tin
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />{" "}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Họ tên"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="soDt"
            label="Số điện thoại"
            type="text"
            fullWidth
            variant="standard"
          />{" "}
          <TextField
            autoFocus
            margin="dense"
            id="current-password"
            label="Mật khẩu hiện tại"
            type="password"
            fullWidth
            variant="standard"
          />{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Huỷ
          </Button>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cập nhật
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminPage;
