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
//
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
function TablePaginationActions(props) {
  // const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={""}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
const handleLastPageButtonClick = (event) => {
  onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
};
function AdminPage() {
  //   const user = useSelector((state) => state.authReducer.user);
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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

            <TableContainer component={Paper}>
              <Table className="" aria-label="custom pagination table">
                <TableBody>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.calories}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.fat}
                      </TableCell>
                    </TableRow>
                  ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { "aria-label": "rows per page" },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
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
