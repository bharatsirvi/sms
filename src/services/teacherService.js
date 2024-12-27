class TeacherService {
    constructor(TeacherModel) {
        this.TeacherModel = TeacherModel;
    }

    async createTeacher(teacherData) {
        const teacher = new this.TeacherModel(teacherData);
        return await teacher.save();
    }

    async getTeacher(teacherId) {
        return await this.TeacherModel.findById(teacherId);
    }

    async updateTeacher(teacherId, updateData) {
        return await this.TeacherModel.findByIdAndUpdate(teacherId, updateData, { new: true });
    }

    async deleteTeacher(teacherId) {
        return await this.TeacherModel.findByIdAndDelete(teacherId);
    }

    async getAllTeachers() {
        return await this.TeacherModel.find();
    }
}

export default TeacherService;