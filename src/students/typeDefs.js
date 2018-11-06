export const studentsTypeDef = `
type Student {
    code: Int!
    name: String!
    credits: Int!
    professor: String!
}
input StudentInput {
    name: String!
    credits: Int!
    professor: String!
}`;

export const studentsQueries = `
    allStudents: [Student]!
    studentByCode(code: Int!): Student!
`;

export const studentsMutations = `
    createStudent(student: StudentInput!): Student!
    deleteStudent(code: Int!): Int
    updateStudent(code: Int!, student: StudentInput!): Student!
    loginStudent(student: StudentInput!): String!
`;
