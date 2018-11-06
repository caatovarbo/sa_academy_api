import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const loginURL = `http://${url}:${port}/auth`;

const resolvers = {
	Query: {
		allStudents: (_) =>
			getRequest(URL, ''),
		studentByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createStudent: (_, { student }) =>
			generalRequest(`${URL}`, 'POST', student),
		updateStudent: (_, { code, student }) =>
			generalRequest(`${URL}/${code}`, 'PUT', student),
		deleteStudent: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE'),
		loginStudent: (_, { student }) =>
			generalRequest(`${loginURL}`, 'POST', student),
	}
};

export default resolvers;
