module.exports = ({
name: "perfil",
aliases: ["usuario", "lanos", "yo"],
code: `
$thumbnail[$getGlobalUserVar[fondo;$findUser[$message]]]
$author[Perfil de $username[$findUser[$message]]#$discriminator[$findUser[$message]];$userAvatar[$findUser[$message]]]
$footer[Desarrollado por HuguitisYT#1234]
$color[$getGlobalUserVar[embedcolor;$findUser[$message]]]

$description[
<:usuario:885509080565809232> **Rol:** $getGlobalUserVar[userrole;$findUser[$message]]
<:ban:858713200425828352> **Baneado:** $getGlobalUserVar[baneado;$findUser[$message]]
<:lanos:885460275917099018> **Cantidad de lanos:** $getGlobalUserVar[lanos;$findUser[$message]]
<:regalo:885509892633399338> **Cuentas generadas:** $getGlobalUserVar[usergencount;$findUser[$message]]
<:biografia:885460610685472788> **Biografía:** $getGlobalUserVar[biografia;$findUser[$message]]

** __Complementos comprados__: **
$getGlobalUserVar[biotienes;$findUser[$message]] - **Biografía personalizada**
$getGlobalUserVar[colortienes;$findUser[$message]] - **Color personalizado**
$getGlobalUserVar[fondotienes;$findUser[$message]] - **Imagen personalizada**
$getGlobalUserVar[blacktienes;$findUser[$message]] - **Blacklist en su server** 

** __Puestos en la leaderboard__: **
**Cuentas Generadas:** Top #$getLeaderboardInfo[usergencount;$findUser[$message];globaluser;top]
**Cantidad de Lanos:** Top #$getLeaderboardInfo[lanos;$findUser[$message];globaluser;top]
]
` 
})