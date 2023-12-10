import "../style/admin.scss";
import Form from "../components/Form";
import useGetUser from "../hooks/useGetUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import useLoading from "../hooks/useLoading";
import SideNavBar from "../components/SideNavBar";


const Admin = () => {
  const { isLoading } = useLoading();
  const { isAdmin, user } = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin && user) {
      navigate("/");
    }
  }, [isAdmin, user]);

  return (
    <>

      {isLoading ? (
        <div className="loadigContainer">
          <BallTriangle
            margin-left="50"
            height="580"
            width="580"
            color="lightblue"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
        <SideNavBar />
          <Form />
        </>
      )}
    </>
  );
};

export default Admin;
