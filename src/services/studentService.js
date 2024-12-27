class StudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }

    async createStudent(studentData) {
        const student = new this.studentModel(studentData);
        return await student.save();
    }

    async getStudent(studentId) {
        return await this.studentModel.findById(studentId);
    }

    async updateStudent(studentId, updateData) {
        return await this.studentModel.findByIdAndUpdate(studentId, updateData, { new: true });
    }

    async deleteStudent(studentId) {
        return await this.studentModel.findByIdAndDelete(studentId);
    }

    async getAllStudents() {
        return await this.studentModel.find();
    }
}

export default StudentService;