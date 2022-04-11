"use strict"
const socket = io();

const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")

sendButton.addEventListener("click", function(){
    const param = {
        name : nickname.value,
        msg : chatInput.value 
    }
    
    
    socket.emit("chatting", param)

})


socket.on("chatting", function(data){
    const li = document.createElement("li")
    li.innerText = `${data.name}님이 ${data.msg}`;
    chatList.appendChild(li)

})