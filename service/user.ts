import { HttpClient } from "./http";

class User extends HttpClient {
  constructor() {
    super();
  }

  public async saveUser(body: any) {
    return this.http.post("/users", body)
  }

  public async getMany(params: any) {
    return this.http.get("/users", {
      params: params
    })
  }

  public async getOne(id: any) {
    return this.http.get(`/users/${id}`)
  }

  public async updateUserRole(id: any, roles: any) {
    return this.http.put(`/users/${id}`, {
      roles: roles,
    })
  }

  public async test() {
    return this.http.get(`/authCheck21`)
  }
}

export const UserService = new User()