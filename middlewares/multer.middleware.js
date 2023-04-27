import multer from "multer";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/students");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];

    cb(
      null,
      `student-${Date.now()}-${Math.round(Math.random() * 1000)}.${ext}`
    );
  },
});

const upload = multer({ storage: multerStorage });

export const uploadSingle = upload.single("photo");

export const uploadMulti = upload.array("photos", 5);
