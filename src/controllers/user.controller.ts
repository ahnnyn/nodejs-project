import { Request, Response } from "express";
import { handleCreateUser, getAllUsers, handleDeleteUser, getUserByID, handleUpdateUser } from "services/user.services";

const getHomePage = async (req: Request, res: Response) => {
  //get users
  const users = await getAllUsers(); // giả sử hàm này lấy danh sách người dùng từ cơ sở dữ liệu
  // console.log(">> check users: ", users);
  return res.render("home", { users: users });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create_user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
  const { fullname, email, address } = req.body;

  await handleCreateUser(fullname, email, address);
  return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
  // console.log("check data ", req.params.id);
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/");
};

const getViewUser = async (req: Request, res: Response) => {
  // console.log("check data ", req.params.id);
  const { id } = req.params;
  const user = await getUserByID(id);
  return res.render("view-user.ejs", {
      id: id,
      user: user
  });
};

const postUpdateUser = async (req: Request, res: Response) => {
  // console.log("check data update ", req.body);
  const { id, fullname, email, address } = req.body;
  await handleUpdateUser(id, fullname, email, address);
  return res.redirect('/'); 
};


export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };
