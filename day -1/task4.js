myfunction =(friends)=>{
    let newArray = [];
    for (const friend of friends) {
        if (friend.length %2==0) {
            newArray.push(friend)
        }
    }
    return newArray
}
const friendsName = myfunction(["kori", "josium", "ROhim", "pahimm", "rahimmmm"])
console.log(friendsName);