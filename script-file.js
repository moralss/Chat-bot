var appLink = "http://localhost:4200/";
var chatIconPath = "/Users/Sabelo/Workspace/Chat-bot/chat-icon.svg"

document.body.innerHTML += `<img 
    src=${chatIconPath} 
    onClick='showChatModel()' 
    id='chat-icon' 
    alt='Kiwi standing on oval' 
    style='right:0; bottom:0; position:absolute;margin: 2%; z-index:999'
/>`;

document.body.innerHTML += `
<button onclick='closeChatModel()' id='closeBtn' style=''>Close Chat</button>
<div id="sia-bot" style="">
    <object data=${appLink} width="100%" height="100%">
        <!-- <embed src=${appLink} width="20%" height="80%"> </embed> -->Error: Embedded data could not be displayed.
    </object>
</div>`;
showChatModel = () => {
    document.getElementById("chat-icon").style = "";
    document.getElementById("closeBtn").style = "right:0; bottom:80%; position:absolute;margin: 2%; z-index:999;height:3%;length:7%;margin:2.5%;border-radius:10%;";
    document.getElementById("sia-bot").style = "right:0; bottom:0; position:absolute;margin: 2%; height: 80%; width:30%; background-color:white";
    console.log('document :', document);
}
closeChatModel = () => {
    document.getElementById("chat-icon").style = "right:0; bottom:0; position:fixed;margin: 2%; z-index:999; z-index:999";
    document.getElementById("closeBtn").style = "";
    document.getElementById("sia-bot").style = "";

}