import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        ).select("-password");

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Doctor",
        });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findByIdAndDelete(id).select("-password");

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Doctor",
        });
    }
};

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id).select("-password");

        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: doctor,
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, message: "No Doctor found" });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password");
        } else {
            doctors = await Doctor.find({ isApproved: "approved" })
                .select("-password")
                .select("-password");
        }

        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "No Doctor found" });
    }
};

export const getDoctorProfile = async (req, res) => {
    const doctorid = req.userId;

    try {
        const doctor = await Doctor.findById(doctorid);

        if (!doctor) {
            return res
                .status(404)
                .json({ success: false, message: "Doctor not found" });
        }

        const { password, ...rest } = doctor._doc;
        const appointments = await Booking.find({doctor:doctorid})

        res.status(200).json({
            success: true,
            message: "Profile info is found",
            data: { ...rest, appointments},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, cant get",
        });
    }
};
