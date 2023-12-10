import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  description: string;
}

const ProjectCard: FC<Project> = () => {
  const [projects, setProject] = useState<Project[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/project/get-projects`);

      const { projectDB } = data;
      setProject(projectDB);
    })();
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ImageList sx={{ width: '90vw', justifyContent: 'center' }}>
        <ImageListItem key="Subheader" cols={2} sx={{height:100}}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </ImageListItem>
      {projects.map((project, _id) => (

  <ImageListItem key={project.src1}>
        <div className="project-card" key={project._id}>
          <div className="project-details">
            {/* <h2 key={project._id}>{project.name}</h2> */}
            <img
              className="project-image"
              src={project.src1}
              key={project._id}
            />
            {/* <p key={project._id}>{project.description}</p> */}

          </div>
        </div>
        <Link
        key={project._id}
        to={`/projects/${project._id}`}
      >
    <ImageListItemBar
    className="ImageListItemBar"
      title={project.name}
      actionIcon={
        <IconButton
        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        aria-label={`info about ${project.name}`}
        >
        <div className="description">{project.description}</div>
          <InfoIcon />
        </IconButton>
      }
      />
      </Link>
  </ImageListItem>
))}
</ImageList>
</div>
  );
};

export default ProjectCard;
