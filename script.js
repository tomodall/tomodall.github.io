<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script>
  const downloadBtn = document.querySelector('#download-btn');
  
  downloadBtn.addEventListener('click', () => {
    const fileURL = '파일경로/파일이름.pdf';
    const fileName = '파일이름.pdf';
    saveAs(fileURL, fileName);
  });
</script>
