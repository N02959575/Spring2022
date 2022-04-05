const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let highestId = 3;

const list = [{
    firstName: 'John',
    lastName: 'Doe',
    handle: '@johndoe',
    password: 'password',
    email: 'email@email.com',
    pic: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: 1,
},
{
    firstName: 'Joanna',
    lastName: 'Doe',
    handle: '@joannadoe',
    password: 'password',
    email: 'Joanna@email.com',
    pic: 'https://randomuser.me/api/portraits/women/2.jpg',
    id: 2,
},
{
    firstName: 'Obo',
    lastName: 'Doe',
    handle: '@Obodoe',
    password: 'password',
    email: 'Obo@email.com',
    pic: 'https://randomuser.me/api/portraits/men/3.jpg',
    id: 3,
},
];

function get(id){
    return { ...list.find(user => user.id === parseInt(id)), password: undefined }
}
function remove(id){
    //... takes all properties and assigns them to outside object
    const index = list.findIndex(user => user.id === parseInt(id));
    const user = list.splice(index, 1);
    
    return {...user[0], password: undefined};
}

async function update(id, newUser){
    const index = list.findIndex(user => user.id === parseInt(id));
    const oldUser = list[index];

    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, 10);
    }

    newUser = list[index] = { ...oldUser, ...newUser };

    console.log(newUser);
    
    return { ...newUser, password: undefined};
}

async function login(email, password){///////////////////
    const user = list.find(user => user.email === email);
    if(!user){
        throw { statusCode: 404, message: 'User not found' };
    }
    if(!await bcrypt.compare(password, user.password)){
        throw { statusCode: 401, message: 'Invalid password' };
    }

    const data = {...user, password: undefined};
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return {...data, token};

}

//promise manually made so doesnt need to be async
function fromToken(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                reject(err);
            }
            else{
                resolve(decoded);
            }
        });
    });
}

module.exports = {
    async create(user) {
        user.id = ++highestId;
        //the plus converts string to number
        user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);
        console.log(user);

        throw {message: 'This is a test error'};

        list.push(user);
        return {...user, password: undefined};
    },
    remove,
    update,
    login,
    fromToken,
    get list(){
        return list.map(user => ({...user, password: undefined}));
    },
}

module.exports.get = get;