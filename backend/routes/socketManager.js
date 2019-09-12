const io=require('../server').io;
const Messages=require('../models/Messages');
module.exports=(socket)=>{
   socket.on('user_online',(data)=>{
       const user =data.id;
        Message.findAll({where:{senderId:user,recieverId:user}}).then(data=>{
            io.emit('messages',data);
        }).catch(err=>{
          console.log(err);
        });
   });
   socket.on('message_sent',(data)=>{
       const senderid=data.senderid;
       const recieverid=data.recieverid;
       const sendername=data.sendername;
       const recievername=data.recivername;
       const message=data.message;
       let data={
           senderId:senderid,
           recieverId:recieverid,
           recieverName:recievername,
           senderName:sendername,
           Message:message
       }
       Messages.create(data).then((result)=>{
           io.in(recieverid).emit('new_message',data);
       }).catch(err=>{
           io.emit('error occured');
       });
   });
   socket.on('disconnect',(data)=>{
       const user=data.id;
       const username=data.name;
       io.emit('user_offline',{user,username});
       socket.disconnect();
   });
}