import mockClient from '../../mock/MockClient'

export default Object.freeze({
    login: (baseURL, data) =>
        mockClient.get(`${baseURL}/login`, data),
});
