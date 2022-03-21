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
    return list.find(user => user.id === parseInt(id));
}

module.exports.list = list;
module.exports.get = get;