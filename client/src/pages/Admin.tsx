import "../style/admin.scss";
import Form from "../components/Form";
import useGetUser from "../hooks/useGetUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import useLoading from "../hooks/useLoading";
import SideNavBar from "../components/SideNavBar";
import PageAnalytics from "../components/Analytics/PageAnalytics";
import ScrollPlayground from "../components/Analytics/UserAnalytics";

const Admin = () => {
  const { isLoading } = useLoading();
  const { isAdmin, user } = useGetUser();
  const [showForm, setShowForm] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [showTotal, setShowTotal] = useState(true); // New state for total
  const navigate = useNavigate();

  const handleAddProject = () => {
    setShowForm(true);
    setShowAnalytics(false); // Hide analytics when adding a project
    setShowTotal(false); // Hide total when adding a project
  };

  const handleShowAnalytics = () => {
    setShowAnalytics(true);
    setShowForm(false); // Hide form when showing analytics
    setShowTotal(true); // Show total when showing analytics
  };

  useEffect(() => {
    if (!isAdmin && user) {
      navigate("/");
    }
  }, [isAdmin, user]);

  return (
    <>
      {isLoading ? (
        <div className="loadingContainer">
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
          <SideNavBar
            onAddProject={handleAddProject}
            onShowAnalytics={handleShowAnalytics}
          />
          {showForm && <Form onClose={() => setShowForm(false)} />}
          {showAnalytics && <PageAnalytics />}
          {showTotal && <ScrollPlayground />}
        </>
      )}
    </>
  );
};

export default Admin;
