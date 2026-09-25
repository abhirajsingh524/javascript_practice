  const editor =document.querySelector("#editor");
  const preview=document.querySelector("#preview");
  const editorStatus =document.querySelector("#editorStatus");

  function  updateEditor(){
    const text = editor.value;
    const  trimmed = text.trim();
    const words=trimmed ? trimmed.split(/\s+/).length :0;


 

  preview.textContent = text;
  editorStatus.textContent=`${text.length} characters .${words} words `;
   
  preview.dataset.mode =text ? "editing" : "empty";

  }

  editor.addEventListener("input",updateEditor);

  document.querySelector("#uppercaseBtn").addEventListener("click",()=>{
    editor.value = editor.value.toUpperCase();
    updateEditor();
    editor.focus();
  });