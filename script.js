<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script>
  const downloadBtn = document.querySelector('#download-btn');
  
  downloadBtn.addEventListener('click', () => {
    const fileURL = 'C:\Users\wlwpf\OneDrive\바탕 화면\2023_1.pdf';
    const fileName = '2023_1.pdf';
    saveAs(fileURL, fileName);
  });
</script>
