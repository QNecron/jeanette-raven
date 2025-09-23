const dialogMenu = document.querySelector('[dialog]');

if (dialogMenu) {

  const dialogShow = document.querySelector('[dialog-show]');
  const dialogHide = document.querySelector('[dialog-hide]');

  dialogShow.addEventListener("click", () => {
    
    if (dialogMenu.open) {
      dialogMenu.close();
    }
    else {
      dialogMenu.showModal();
    }
    
  });
  
  dialogHide.addEventListener("click", () => {
    dialogMenu.close();
  });
  
}