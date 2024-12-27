
export const getTeacher = async (req, res) => {
    res.json({
        id: 1,
        name: 'John Doe',
        email: 'jjnjsn@skd'
    });
};
export const createTeacher = async (req, res) => {
    res.send('Create teacher');
}
export const updateTeacher = async (req, res) => {
    res.send('Update teacher');
}
export const deleteTeacher = async (req, res) => {
    res.send('Delete teacher');
}
