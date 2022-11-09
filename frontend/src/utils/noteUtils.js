//Refactor this
function sortNotes(notes, sortType) {
  let copiedNotes = [...notes]
  switch (sortType) {
    case "dateDue":
      return copiedNotes.sort((a, b) => {
        if (a.dateDue === null) return 1
        if (b.dateDue === null) return -1
        if (a.dateDue === b.dateDue) return 0
        return new Date(a.dateDue).getTime() - new Date(b.dateDue).getTime()
      })
    case "createdAt":
      return copiedNotes.sort((a, b) => {
        if (a.createdAt === b.createdAt) return 0
        if (!a.createdAt) return 1
        if (!b.createdAt) return -1
        return new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()
          ? -1
          : 1
      })
    case "owedTo":
      return copiedNotes.sort((a, b) => {
        if (a.owedTo === b.owedTo) return 0
        if (!a.owedTo) return 1
        if (!b.owedTo) return -1

        const nameA = a.owedTo.toUpperCase()
        const nameB = b.owedTo.toUpperCase()
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
      })
    case "amount":
      return copiedNotes.sort((note1, note2) => note1.amount - note2.amount)
    default:
      return copiedNotes
  }
}

function filterNotes(notes, filterType) {}

export { sortNotes, filterNotes }
