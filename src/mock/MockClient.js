export default Object.freeze({
    get: (url, data) => {
        switch (url.split('/')[1]) {
            case 'login': {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(data?.userName === 'T' && data?.password === 'T'){
                            resolve({ data: {status: 200} });
                        }else {
                            reject({status: 401, text: 'User not Found'});
                        }
                    }, 1000);
                });
            }
            case 'register': {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({ data: {status: 200} });
                    }, 1000);
                });
            }
            default:
                return null;
        }
    },
});
