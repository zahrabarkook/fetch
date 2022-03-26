"use strict"

async function user_data () {
    let response = await fetch('https://api.github.com/users');
    let userdata =  response.json();
    return userdata;
};

user_data().then(function(userdata){
    userdata.forEach(user => {
        
        
        let userlist=document.createElement("li")
        userlist.className="list-group-item" 
        let ullist = document.getElementById('ullist');
        // ullist.appendChild(userlist);

        let profileImage = document.createElement("img");
        profileImage.className="rounded float-left img-fluid sizeimg"
        profileImage.src = user.avatar_url;
        profileImage.alt = "avatar";
        userlist.appendChild(profileImage);

        // let smallist=document.createElement("li")
        // userlist.appendChild(smallist);

        let loginuser=document.createElement("p");
        loginuser.innerText=user.login;
        userlist.appendChild(loginuser);

        let iduser=document.createElement("p");
        iduser.className="iduser1"
        iduser.innerText=user.node_id;
        userlist.appendChild(iduser);

        let follower=document.createElement("button")
        follower.className="btn btn-primary btn-sm"
        follower.innerText="follower"
        follower.onclick=mybuttonfollower;
        function mybuttonfollower(){
            let buttonsrc = window.open(user.followers_url);}
        userlist.appendChild(follower);


      



        // let following=document.createElement("button")
        // follower.className="btn btn-primary btn-sm"
        // follower.innerText="following"
        // follower.onclick=mybuttonfollowing;
        // function mybuttonfollowing(){
        //     let buttonsrc1 =window.open(user.following_url)
        // }
        // userlist.appendChild(following);
       
        // let adminstatus=document.createElement("p")

        // if(user.site_admin===true){
        //     adminstatus.innerText="admin";
        //     adminstatus.className="text-danger"

        // }else{
        //     adminstatus="user";
        //     adminstatus.className="text-primary"
        // }
        // smallist.appendChild(adminstatus)
       
        ullist.appendChild(userlist);
    });

    });