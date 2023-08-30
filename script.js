const noteInput = document.getElementById("note-input");
const saveButton = document.getElementById("save-button");
const noteList = document.getElementById("note-list");

saveButton.addEventListener("click", () => {
    const noteText = noteInput.value;
    if (noteText.trim() !== "") {
        const noteElement = document.createElement("p");
        noteElement.textContent = noteText;
        noteList.appendChild(noteElement);
        noteInput.value = "";
    }
});
