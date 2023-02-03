console.log('start');

//login ni user
function userLogin(userName, userPass){
    return new Promise((onSuccess, onError)=>{
        setTimeout(()=>{
            console.log('user data is now Available')
            onSuccess({
                userName: userName,
                userPass: userPass
            });   
            }, 2000)
    })
}
//details ni User
function userDetails(userName){
    return new Promise((onSuccess, onError)=>{
        setTimeout(()=>{
            onSuccess({
                address: 'caloocan',
                contact: '38493759837985',
                hobbies: ['Bible Study', 'Piano', 'Golf']
            }, 1000)
        })
    })
    
}
//number of post of user
function userPost(userName){
    return new Promise((onSuccess, onError)=>{
        setTimeout(()=>{
            onSuccess(['post1', 'post2', 'post3']);
        },1000)
    })
}
//user post Details
function detailsPost(userPost){
    return new Promise((onSuccess, onError)=>{
        setTimeout(()=>{
            onSuccess([
                {
                  post: 'sana all',
                  date: '2-23-2023',
                  status: 'public'  
                }    
             ])
        }, 1000);
    })
}
// userLogin('alfren', '123', loginCallBack=>{
//     console.log(loginCallBack);
//     userDetails(loginCallBack.userName, userDetailsCallBack =>{
//         console.log(userDetailsCallBack);
//     });
//     userPost(loginCallBack.userName, postCallBack=>{
//         console.log(postCallBack);
//         detailsPost(postCallBack[0], detailsPostCallBack=>{
//             console.log(detailsPostCallBack);
            
//         })
//     })
// })
// userLogin('alfren', '123')
// .then(user=>{
//     console.log(user);
// userDetails(user.userName)
// .then(detials=>{
//         console.log(detials)
//     });
// userPost(user.userName)
// .then(post=>{
//     console.log(post)
// });
// detailsPost(user.post)
// .then(postDetials=>{
//     console.log(postDetials);
// })
// })

async function display(){
const user = await userLogin('alfren', '123');
const detailsOfUser = await userDetails(user);
const post = await userPost(user);
const detailsOfPost = await detailsPost(post[0]);
// console.log(user);
// console.log(detailsOfUser);
// console.log(post);
// console.log(detailsOfPost);
Promise.all([user, detailsOfUser, post, detailsOfPost]).then(result=>{
    console.log(result);
})
}
display();

console.log('end');
