import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENTS } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientsQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENTS, {
    variables: { id: client.id },
    //update(cache, { data: { deleteClient } }) {
    //  const { clients } = cache.readQuery({
    //    query: GET_CLIENTS,
    //  });
    //  cache.writeQuery({
    //    query: GET_CLIENTS,
    //    data: {
    //      clients: clients.filter((client) => client.id !== deleteClient.id),
    //    },
    //  });
    //},
    refetchQueries: [
      { query: GET_CLIENTS },
      {
        query: GET_PROJECTS,
      },
    ], // !silindikten sonra yeniden getClients'a istek atıyoruz
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
