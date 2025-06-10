import getConnection from "config/database";
import { PrismaClient, Prisma } from '@prisma/client'
import { prisma } from "config/client";

const handleCreateUser = async (fullname: string, email: string, address: string) => {

    //insert into database
    //hành động kết nối đến database là bất đồng bộ nên cần sử dụng await để chờ cho hành động này thực thi xong
    await prisma.user.create({
        data:{
            name: fullname,
            email: email,
            address: address
        }
    })

}

const handleDeleteUser = async (id: string) => {

    await prisma.user.delete({
        where: {
            id: +id // ép kiểu từ String sang số
        }
    })
}

const getAllUsers = async () => {

    const users = await prisma.user.findMany();
    return users;
}

const getUserByID = async (id: string) => {

    const user = await prisma.user.findUnique({
        where: {
            id: +id // ép kiểu từ String sang số
        }
    });
    return user;
}

const handleUpdateUser = async (id: string, fullname: string, email: string, address: string) => {
    // A simple SELECT query
    const updateUser = await prisma.user.update({
        where:{
            id: +id
        },
        // thêm dấu + phía trước để ép kiểu từ String về kiểu số (chỉ sử dụng được cho javascript)
        data:{
            name: fullname,
            email: email,
            address: address
        }
    })

}


export { handleCreateUser, getAllUsers, handleDeleteUser, getUserByID, handleUpdateUser };