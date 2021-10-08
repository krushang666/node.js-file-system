const fs=require('fs');
const readline=require('readline');
const rl=readline.Interface({
    input:process.stdin,
    output:process.stdout
});
user_input();
function user_input(){
    console.log("\n1.Create Directory");
    console.log("2.Delete Directory");
    console.log("3.Write File");
    console.log("4.Read File");
    console.log("5.Delete File");
    console.log("6.Append File");
    console.log("7.Update File");
    console.log("8.Rename File");
    console.log("0.Exit\n");
    rl.question("\nEnter Your Choice:-",ch=>{
        if(ch==0){
            console.log("0 is selected");
            process.exit(1);
        }else if(ch==1){
            rl.question("Enter Folder Name:- ",name=>{
                    fs.mkdir(name,(err)=>{
                        if(err){
                            console.log("\nDirective Already Exists!!")
                        }
                    });
                    console.log("Folder Created Successfully");
                    user_input();
               
            });
        }else if(ch==2){
            rl.question("Enter Folder Name:- ",name=>{
                    fs.rmdir(name,(err)=>{
                        if(err)
                            console.log("\nNo Directive Found")
                    });
                    console.log("Folder Deleted Successfully");
                    user_input();
            });
        }else if(ch==3){
            rl.question("Enter File Name:- ",name=>{
                rl.question("Enter Data:- ",data=>{
                    fs.writeFile(name,data,function(err){
                        if(err)
                            console.error(err);
                        else
                            console.log("Data added in file");
                        
                        user_input();
                    });
                });
            });
        }else if(ch==4){
            rl.question("Enter File Name:- ",name=>{       
                fs.readFile(name,function(err,data){
                    if(err)
                        console.error("\nFile Does Not Exists");
                    else    
                        console.log(data.toString());    
                        user_input();
                })
            });
        }else if(ch==5){
            rl.question("Enter File Name:- ",name=>{       
                fs.unlink(name,function(err,data){
                    if(err)
                        console.error("\nFile Does Not Exists");
                    else    
                        console.log("Deleted File Successfully");    
                    user_input();
                })
            });
        }else if(ch==6){
            rl.question("Enter File Name:- ",name=>{
                rl.question("Enter Data:- ",data=>{
                    fs.appendFile(name,data,function(err){
                        if(err)
                            console.error(err);
                        else
                            console.log("Data added in file");
                        
                        user_input();
                    });
                });
            });
        }else if(ch==7){
            rl.question("Enter File Name:- ",name=>{
                rl.question("Enter Data To Find:- ",fd=>{
                    fs.readFile(name,function(err,data){
                        if(err)
                            console.error("\nFile Does Not Exists");
                        else    
                            var temp=data.toString().split(' ');
                            for(var i=0;i<temp.length;i++){
                                if(temp[i]==fd){
                                    console.log("\nData Found!!!");
                                    rl.question("Enter Data To Replace:- ",rep=>{
                                        temp[i]=rep;
                                        var new_temp=temp.join(' ');
                                        fs.writeFile(name,new_temp,function(err){
                                            if(err){
                                                console.log("Something is Wrong!!!");
                                            }else{
                                                console.log("File Data Updated Successfully!!!");
                                            }
                                            user_input();
                                        })
                                    });
                                    break;
                                }
                            }
                        });
                });
            });
        }else if(ch==8){
            rl.question("Enter File Name:- ",name=>{
                rl.question("Enter New Name:- ",new_name=>{
                    fs.rename(name,new_name,function(err){
                        if(err)
                            console.error("\n!!!File Not Found!!!");
                        else
                            console.log("\nFile Renamed Successfully!!1");
                        user_input();
                    });
                });
            });
        }
        else{
            console.log("\nPlease Enter A Valid Choice!~!!")
            user_input();
        }
    });
}
