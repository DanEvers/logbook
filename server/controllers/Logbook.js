let jumps = [
    {
        id: 1,
        jumpNum : null,
        name: "Daniel Evers",
        date : "Nov 25, 2018 12:54 PM",
        dropzone : "Skydive Ramblers Toogoolawah, Australia",
        type : "Skydiving",
        discipline : "Freeflying",
        videoURL : null,
        canopy : "Safire 2-169",
        manufacturer : "Icarus Canopies",
        exitHeight : 14162,
        deployment : 2131,
        equipment : "Icon A5",
        aircraft : "Cessna Caravan 207"
    },
    {
        id : 2,
        jumpNum : null,
        name: "Daniel Evers",
        date : "Nov 25, 2018 11:20 AM",
        dropzone : "Skydive Ramblers Toogoolawah, Australia",
        type : "Skydiving",
        discipline : "Freeflying",
        videoURL : null,
        canopy : "Safire 2-169",
        manufacturer : "Icarus Canopies",
        exitHeight : 12868,
        deployment : 2720,
        equipment : "Icon A5",
        aircraft : "Cessna Caravan 207"
    },
    {
        id : 3,
        jumpNum : null,
        name: "Daniel Evers",
        date : "Nov 25, 2018 8:44 AM",
        dropzone : "Skydive Ramblers Toogoolawah, Australia",
        type : "Skydiving",
        discipline : "Relative Work",
        videoURL : null,
        canopy : "Safire 2-169",
        manufacturer : "Icarus Canopies",
        exitHeight : 13307,
        deployment : 2067,
        equipment : "Icon A5",
        aircraft : "Cessna Caravan 207"
    },
    {
        id : 4,
        jumpNum : null,
        name: "Daniel Evers",
        date : "Jun 21, 2018 9:18 AM",
        dropzone : "Skydive Pink Klatovy, Czech Republic",
        type : "Skydiving",
        discipline : "Freeflying",
        videoURL : null,
        canopy : "Safire 2-169",
        manufacturer : "Icarus Canopies",
        exitHeight : 13762,
        deployment : 2919,
        equipment : "Icon A5",
        aircraft : "Cessna Caravan 207"
    },
    {
        id : 5,
        jumpNum : null,
        name: "Daniel Evers",
        date : "Apr 15, 2018 2:22 PM",
        dropzone : "Skydive Ramblers Toogoolawah, Australia",
        type : "Skydiving",
        discipline : "Relative Work",
        videoURL : null,
        canopy : "Safire 2-169",
        manufacturer : "Icarus Canopies",
        exitHeight : 14323,
        deployment : 4133,
        equipment : "Icon A5",
        aircraft : "Cessna Caravan 207"
    }
]

let id = 6
module.exports = {
    getJumps : (req, res) => res.send(jumps),

    addJump : (req, res) => {
        const {date, dropzone, type, discipline, canopy, manufacturer, exitHeight, deployment, equipment, aircraft, videoURL} = req.body

        let newJump = {
            id: id++,
            date,
            dropzone,
            type,
            discipline,
            canopy,
            manufacturer,
            exitHeight,
            deployment,
            equipment,
            aircraft,
            videoURL
        }
        jumps.push(newJump)
        res.status(200).send(jumps)
    },

    deleteJump : (req, res) => {
        let { id } = req.params
        let index = jumps.findIndex(jump => +jump.id === +id) 
    
        jumps.splice(index, 1)
        res.status(200).send(jumps)
    },

    updateJump: (req, res ) => {
        let { id } = req.params
        const {date, dropzone, type, discipline, canopy, manufacturer, exitHeight, deployment, equipment, aircraft, videoURL} = req.body
        let index = jumps.findIndex(jump => +jump.id === +id)

        let updatedLogbook = {
            id,
            date,
            dropzone,
            type,
            discipline,
            canopy,
            manufacturer,
            exitHeight,
            deployment,
            equipment,
            aircraft,
            videoURL
        }

        jumps.splice(index, 1, updatedLogbook)
        res.status(200).send(jumps)
   }
}