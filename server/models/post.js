
const userModel = require('./user');

let highestId = 3;

const list = [{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'This is a message',
    owner: '1',
    likes: [],
    comments: [],
    isPublic: true,
},
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'This is a message',
    owner: '1',
    likes: [],
    comments: [],
    isPublic: true,
},
{
    src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg',
    caption: 'This is a message',
    owner: '1',
    likes: [],
    comments: [],
    isPublic: true,
},
];

function get(id){
    return { ...list.find(x => x.id === parseInt(id)), user: userModel.get(x.owner) }
}
function remove(id){
    //... takes all properties and assigns them to outside object
    const index = list.findIndex(x => x.id === parseInt(id));
    const post = list.splice(index, 1);
    
    return {...post[0], user: userModel.get(post[0].owner)};
}

function update(id, newUser){
    const index = list.findIndex(x => x.id === parseInt(id));
    const oldPost = list[index];
    newPost = list[index] = {...oldPost, ...newUser};
    return {...newPost[0], user: userModel.get(newPost[0].owner)};
}

module.exports = {
    create(user) {
        user.id = ++highestId;

        list.push(user);
        return {...user, password: undefined};
    },
    remove,
    update,
    get list(){
        return list.map(user => ({...user, password: undefined}));
    },
}

module.exports.get = get;