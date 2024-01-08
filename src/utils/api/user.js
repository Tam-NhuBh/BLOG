import { request } from "./request";

export const login = async (payload) =>
  await request.post("/api/user/login", payload);

export const findUser = async (id) => 
    await request.get("/api/user/" + id);
