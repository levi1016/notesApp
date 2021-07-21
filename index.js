function getNoteId() {
    let noteObject = getExistingNotes()
    if(!notesObject){
    return 1 
    }
    const keysArray = Object.keys(noteObject)
    const numerKeys = keysArray.map((key)=>Number(KEY))
    console.log(numberKeys)
    return Math.max( ... numberKeys) + 1
    }
    
    function getExistingNotes() {
        Let notes = localStorage.getItem('notes')
        if(!notes){
            return null
        }
        return JSON.parse(notes)
