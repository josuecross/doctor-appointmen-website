import React from "react";
import { formateDate } from "../../utils/formateData";

const DoctorAbout = () => {
    return <>
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9" >
                        Elisabeth Olivera
                    </span>
                </h3>
                <p className="text__para ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium placeat optio quo autem reprehenderit tempore velit magni repellat,
                    exercitationem vel inventore enim saepe vitae dolorem vero.
                    Qui non exercitationem dignissimos?
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
                    Education
                </h3>

                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb[30px] ">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                                { formateDate("12-04-2010") }
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                PHP in Surgeoun
                            </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor ">
                            New Apollo Hospital, New York.
                        </p>
                    </li>
                    <li>
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                                { formateDate("12-04-2010") }
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                PHP in Surgeoun
                            </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor ">
                            New Apollo Hospital, New York.
                        </p>

                    </li>
                </ul>
            </div>

        </div>
    </>
}

export default DoctorAbout;