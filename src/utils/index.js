export const handleError = (res, error) => {
    res.status(500).json({ message: error.message });
};

export const validateStudentData = (data) => {
    const { name, age, class: studentClass } = data;
    if (!name || !age || !studentClass) {
        throw new Error("All fields are required: name, age, and class.");
    }
};

export const validateTeacherData = (data) => {
    const { name, subject, experience } = data;
    if (!name || !subject || !experience) {
        throw new Error("All fields are required: name, subject, and experience.");
    }
};

export const validateClassData = (data) => {
    const { className, teacherId } = data;
    if (!className || !teacherId) {
        throw new Error("All fields are required: className and teacherId.");
    }
};