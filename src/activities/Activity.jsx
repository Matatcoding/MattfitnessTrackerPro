import { useNavigate, useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function Activity() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, `activities/${id}`);

  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("Delete", `/activities/${id}`, ["activities"]);

  const deleteItem = async () => {
    await deleteActivity();
    navigate("/activities");
  };

  if (loading || !activity) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>{activity.description}</p>
      <p>Created by:{activity.creatorName}</p>
      {token && (
        <button onClick={deleteItem}>
          {deleting
            ? "Deleting..."
            : deleteError
            ? deleteError
            : "Delete Activity"}
        </button>
      )}
    </div>
  );
}
