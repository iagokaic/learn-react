import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserCard } from "../components/UserCard";
import { findUserByLogin } from "../service/controllers/git.controller";
import { UserDetailModel } from "../service/models/userDetail.model";

type ParamsType = {
  userLogin: string;
};
export function DetailPage() {
  const navigate = useNavigate();
  const { userLogin } = useParams() as ParamsType;
  const [user, setUser] = useState({} as UserDetailModel);

  useEffect(() => {
    if (!userLogin) return;
    findUserByLogin(userLogin)
      .then((data) => { setUser(data) })
      .catch(() => {
        alert("Usuário não encontrado.")
        navigate(-1)
      })
      .finally(() => {});
  }, []);

  return <UserCard user={user}/>;
}
