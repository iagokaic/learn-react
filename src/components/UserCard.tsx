import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { UserDetailModel } from "../service/models/userDetail.model";

type UserCardProps = {
  user: UserDetailModel;
}
export function UserCard({ user }: UserCardProps) {
  function irParaRepositorio() {
    window.open(user.html_url);
  }

  return (
    <Card style={{ width: "300px" }}>
      <div className="flex flex-column gap-1 align-items-center">
        <Avatar
          image={user.avatar_url}
          size="xlarge"
          shape="circle"
        />
        <h2>{user.name}</h2>
        <label>{`@${user.login}`}</label>
        <p>{user.bio}</p>
        <Button
          type="button"
          label="Visitar"
          className="p-button-link"
          onClick={irParaRepositorio}
        />
      </div>
    </Card>
  );
}
