import axios from 'axios';
import "../style/form.scss"
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const Form = () => {
    async function handleAddProject(e: any) {
        e.preventDefault();
        const name = e.target.name.value;
        const src1 = e.target.src1.value;
        const src2 = e.target.src2.value;
        const src3 = e.target.src3.value;
        const src4 = e.target.src4.value;
        const description = e.target.description.value;
        const { data } = await axios.post("/api/project/add-project", { name, src1, src2, src3, src4, description });
        if (!data) throw new Error ("Could find data");
      }

  return (
    <>
    <div className='Container-Form'>
            <form className="form" onSubmit={handleAddProject}>
      <h1>Add Project</h1>
      <br />
        <input type="text" name="name" placeholder="Project name" />
        <input type="text" name="src1" placeholder="Project url-1" />
        <input type="text" name="src2" placeholder="Project url-2" />
        <input type="text" name="src3" placeholder="Project url-3" />
        <input type="text" name="src4" placeholder="Project url-4" />
        <input type="text" name="description" placeholder="Project description" />
        <Button
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
              border: "1px solid",
            }}
            variant="contained"
            endIcon={<CreateIcon />}
          >
            create
          </Button>
      </form>
    </div>
    </>
  )
}

export default Form
