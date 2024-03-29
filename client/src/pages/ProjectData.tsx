import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Comment from "../components/Comment";
import "../style/projectData.scss";
import { BallTriangle } from "react-loader-spinner";
import useLoading from "../hooks/useLoading";

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  description: string;
}
const ProjectData = () => {
const {isLoading} =useLoading();
  const { _id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const response = await axios.get(
          `/api/project/get-project-by-id?projectId=${_id}`
        );
        const { data } = response;
        setProject(data.projectDB);
      } catch (error: any) {
        console.error(error);
      }
    };
    
    getProjectDetails();
  }, [_id]);
    useEffect(()=>{
  },[project]);

  if (!project) {
    return null;
  }
  return (
    <>
      <NavBar />
{isLoading ? <div className="loadigContainer "><BallTriangle
  margin-left= "50"
  height="580"
  width="580"
  color="lightblue"
  ariaLabel="loading"
/></div>:
        <><div className="gallery">
          <h1 className="masking">{project.name}</h1>
          <label className="gallery__item"><img src={project.src1} /></label>
          <label className="gallery__item"><img src={project.src2} /></label>
          <label className="gallery__item"><img src={project.src3} /></label>
          <label className="gallery__item"><img src={project.src4} /></label>
          <h1><p>{project.description}</p></h1>

        </div>
        <Comment projectId={_id} /></>}
    </>
  );
}

export default ProjectData;
