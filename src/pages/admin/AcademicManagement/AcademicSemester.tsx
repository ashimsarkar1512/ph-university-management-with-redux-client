import { useGetAllSemesterQuery } from "../../../redux/features/AccademicSemester/accademicSemesterApi";

const AcademicSemester = () => {

            const {data}=useGetAllSemesterQuery(undefined)
            console.log(data);
            return (
                        <div>
                             <h1>Academic semester </h1>       
                        </div>
            );
};

export default AcademicSemester;