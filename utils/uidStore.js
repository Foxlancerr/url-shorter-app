const sessionIdMap = new Map();

function setUserSessionId(id,user){
    sessionIdMap.set(id,user);
}

function getUserSessionId(id){
   return sessionIdMap.get(id)
}

module.exports = {
    setUserSessionId,
    getUserSessionId
}