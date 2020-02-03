let jumps = [
    {
        id: 1,
        jumpNum : null,
        name: "Daniel Evers",
        date : "06.01.2013",
        dropzone : "Skydive Spain",
        type : "Skydiving",
        discipline : "AFF Refresh",
        videoURL : null,
        canopy : "Cayenne 230",
        manufacturer : "Icarus Canopies",
        exitHeight : 14962,
        deployment : 3231,
        equipment : "Icon A5",
        aircraft : "DO-28/92"
    },
    {
        id : 2,
        jumpNum : null,
        name: "Daniel Evers",
        date : "01.01.2013",
        dropzone : "Skydive Spain",
        type : "Skydiving",
        discipline : "AFF Refresh",
        videoURL : null,
        canopy : "Cayenne 230",
        manufacturer : "Icarus Canopies",
        exitHeight : 12868,
        deployment : 2720,
        equipment : "Icon A5",
        aircraft : "DO-28/92"
    },
    {
        id : 3,
        jumpNum : null,
        name: "Daniel Evers",
        date : "07.01.2013",
        dropzone : "Skydive Ramblers Toogoolawah, Australia",
        type : "Skydiving",
        discipline : "Relative Work",
        videoURL : null,
        canopy : "Cayenne 230",
        manufacturer : "Icarus Canopies",
        exitHeight : 13307,
        deployment : 2067,
        equipment : "Icon A5",
        aircraft : "DO-28/92"
    },
    {
        id : 4,
        jumpNum : null,
        name: "Daniel Evers",
        date : "08.05.2013",
        dropzone : "Skydive Berlin",
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
        date : "15.04.2013",
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
    },
    {
        id : 6,
        jumpNum : null,
        name: "Daniel Evers",
        date : "29.12.2013",
        dropzone : "GoJump, San Diego",
        type : "Skydiving",
        discipline : "Relative Work",
        videoURL : null,
        canopy : "Safire 2-169",
        manufacturer : "Icarus Canopies",
        exitHeight : 14323,
        deployment : 4133,
        equipment : "Icon A5",
        aircraft : "Cessna Caravan 207"
    },
    {
        id : 7,
        jumpNum : null,
        name: "Daniel Evers",
        date : "15.04.2018",
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
    },
    {
        id : 8,
        jumpNum : null,
        name: "Daniel Evers",
        date : "15.04.2018",
        dropzone : "Skydive Jurien Bay, Australia",
        type : "Skydiving",
        discipline : "Freefly",
        videoURL : null,
        canopy : "Safire 2-169",
        manufacturer : "Icarus Canopies",
        exitHeight : 14323,
        deployment : 4133,
        equipment : "Icon A5",
        aircraft : "Cessna Caravan 207"
    },
    {
        id : 9,
        jumpNum : null,
        name: "Daniel Evers",
        date : "15.04.2018",
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
    },
    {
        id : 10,
        jumpNum : null,
        name: "Daniel Evers",
        date : "17.03.1015",
        dropzone : "Skydive Byron Bay",
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

let id = 11
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