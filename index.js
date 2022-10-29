let uploader = document.querySelector('.uploader'),
    fajlUploader = document.querySelector('.fajluploader'),
    imagePreview = document.querySelector('img'),
    glavniPrikaz = document.querySelector('uploader');

const loadFile = (e) => {
    const file = e.target.files[0]
    if(!file) return;
    console.log(e.target.files[0]);
    imagePreview.src = URL.createObjectURL(file);
    imagePreview.style.height = '120%';
    imagePreview.style.opacity = 1;
} 

fajlUploader.addEventListener('change', loadFile);

uploader.addEventListener('click', () => {
    fajlUploader.click();
});