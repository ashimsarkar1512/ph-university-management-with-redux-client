import { baseApi } from "../../api/baseApi";

const accademicSemesterApi=baseApi.injectEndpoints({
            endpoints:(builder)=>({
                        getAllSemester:builder.query({
                                    query:()=>({
                                                url:'/academic-semesters',
                                                method:"GET",
                                               
                                    })
                        })
            })     
})


export const {useGetAllSemesterQuery}=accademicSemesterApi