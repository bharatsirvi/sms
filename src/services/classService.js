class ClassService {
    constructor(ClassModel) {
        this.ClassModel = ClassModel;
    }

    async createClass(classData) {
        const newClass = new this.ClassModel(classData);
        return await newClass.save();
    }

    async getClass(classId) {
        return await this.ClassModel.findById(classId);
    }

    async updateClass(classId, classData) {
        return await this.ClassModel.findByIdAndUpdate(classId, classData, { new: true });
    }

    async deleteClass(classId) {
        return await this.ClassModel.findByIdAndDelete(classId);
    }

    async getAllClasses() {
        return await this.ClassModel.find();
    }
}

export default ClassService;