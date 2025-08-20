import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";

export default function Activity() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: activities,
    loading,
    error,
  } = useQuery(`/activities/${id}`, `activities/${id}`);

  return <div>Activity</div>;
}
