export const getUsers = async() => {
    return await fetch('http://localhost:8021/api/v1/getUsers')
        .then((pro) =>
            pro.json()
        ).then((data) => {
            return data;
        }).catch(console.error);
}

export const addUser= async(options) => {
    return await fetch('http://localhost:8021/api/v1/getUsers/add', options)
        .then((res) => {
            console.log(res.total);
            return res.json()
        }).then((data) => {
            return data;

        }).catch(console.error);


}