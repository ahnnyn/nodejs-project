import express from 'express';
import { Express } from 'express'; // Import Express type for TypeScript
import { getCreateUserPage, getHomePage, getViewUser, postCreateUser, postDeleteUser, postUpdateUser } from 'controllers/user.controller';
const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);

    router.get("/create-user", getCreateUserPage);

    router.post("/handle-create-user", postCreateUser);

    router.post("/handle-delete-user/:id", postDeleteUser);
    
    router.get("/handle-view-detail-user/:id", getViewUser);

    router.post("/handle-update-user", postUpdateUser);

    app.use("/", router);
}

export default webRoutes;
