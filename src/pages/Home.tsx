import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { UserModel } from "../service/models/user.model";
import { listUsers } from "../service/controllers/git.controller";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export function HomePage() {

  const navigate = useNavigate();

  const [users, setUsers] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    listUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch(() => {
        alert("Nenhum usuário encontrado!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const actionsBody = (user: UserModel) => (
    <Button
      icon="pi pi-search"
      className="p-button-rounded p-button-outlined"
      onClick={() => navigate(`${user.login}`)}
    />
  );

  return (
    <DataTable responsiveLayout="scroll" value={users} loading={loading}>
      <Column body={actionsBody} header="Ações" />
      <Column field="id" header="Id" />
      <Column field="login" header="Login" />
    </DataTable>
  );
}
