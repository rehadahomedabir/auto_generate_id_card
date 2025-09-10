// Sample data arrays for Bangladesh ID card generation
const firstNames = [
    'Rehad', 'Ahmed', 'Abir', 'Rahman', 'Karim', 'Hossain', 'Ali', 'Hasan',
    'Mahmud', 'Khan', 'Chowdhury', 'Miah', 'Uddin', 'Islam', 'Siddique',
    'Mollah', 'Sheikh', 'Bhuiyan', 'Mondal', 'Sarkar', 'Biswas', 'Roy',
    'Das', 'Dutta', 'Saha', 'Biswas', 'Mazumder', 'Ghosh', 'Banerjee'
];

const lastNames = [
    'Ahmed', 'Rahman', 'Khan', 'Hossain', 'Ali', 'Hasan', 'Mahmud', 'Karim',
    'Chowdhury', 'Miah', 'Uddin', 'Islam', 'Siddique', 'Mollah', 'Sheikh',
    'Bhuiyan', 'Mondal', 'Sarkar', 'Biswas', 'Roy', 'Das', 'Dutta', 'Saha',
    'Mazumder', 'Ghosh', 'Banerjee', 'Sen', 'Bose', 'Mitra', 'Chakraborty'
];

const bengaliNames = [
    'রেহাদ আহমেদ', 'আবির রহমান', 'করিম হোসেন', 'আলী হাসান', 'মাহমুদ খান',
    'চৌধুরী মিয়া', 'উদ্দিন ইসলাম', 'সিদ্দিকী মোল্লা', 'শেখ ভূইয়া', 'মন্ডল সরকার',
    'বিশ্বাস রায়', 'দাস দত্ত', 'সাহা মজুমদার', 'ঘোষ বন্দ্যোপাধ্যায়', 'সেন বসু'
];

const fatherNames = [
    'Md. Ashraf Khan', 'Abdul Rahman', 'Mohammad Ali', 'Karim Uddin', 'Hasan Ahmed',
    'Mahmud Hossain', 'Sheikh Islam', 'Chowdhury Miah', 'Bhuiyan Mollah', 'Sarkar Biswas'
];

const fatherNamesBengali = [
    'মোঃ আশরাফ খান', 'আব্দুল রহমান', 'মোহাম্মদ আলী', 'করিম উদ্দিন', 'হাসান আহমেদ',
    'মাহমুদ হোসেন', 'শেখ ইসলাম', 'চৌধুরী মিয়া', 'ভূইয়া মোল্লা', 'সরকার বিশ্বাস'
];

const motherNames = [
    'Rehena Parvin', 'Fatema Begum', 'Rashida Khatun', 'Nurjahan Begum', 'Shahida Akter',
    'Nasima Begum', 'Rokeya Khatun', 'Sultana Begum', 'Jahanara Begum', 'Rashida Begum'
];

const motherNamesBengali = [
    'রেহেনা পারভীন', 'ফাতেমা বেগম', 'রশিদা খাতুন', 'নূরজাহান বেগম', 'শাহিদা আক্তার',
    'নাসিমা বেগম', 'রোকেয়া খাতুন', 'সুলতানা বেগম', 'জাহানারা বেগম', 'রশিদা বেগম'
];

const districts = [
    'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal', 'Rangpur', 'Mymensingh',
    'Comilla', 'Noakhali', 'Feni', 'Lakshmipur', 'Chandpur', 'Brahmanbaria', 'Narayanganj'
];

const divisions = [
    'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal', 'Rangpur', 'Mymensingh'
];

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const genders = ['Male', 'Female'];

// Generate random data for Bangladesh ID card
function generateRandomData() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    const fullNameBengali = bengaliNames[Math.floor(Math.random() * bengaliNames.length)];
    
    const fatherName = fatherNames[Math.floor(Math.random() * fatherNames.length)];
    const fatherNameBengali = fatherNamesBengali[Math.floor(Math.random() * fatherNamesBengali.length)];
    
    const motherName = motherNames[Math.floor(Math.random() * motherNames.length)];
    const motherNameBengali = motherNamesBengali[Math.floor(Math.random() * motherNamesBengali.length)];
    
    const district = districts[Math.floor(Math.random() * districts.length)];
    const division = divisions[Math.floor(Math.random() * divisions.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const bloodGroup = bloodGroups[Math.floor(Math.random() * bloodGroups.length)];
    
    // Generate random National ID number (13 digits)
    const idNumber = Math.floor(Math.random() * 9000000000000) + 1000000000000;
    
    // Generate random address
    const address = `${Math.floor(Math.random() * 99) + 1} House, ${district}`;
    
    // Generate random birth date (age between 18-65)
    const birthDate = new Date();
    const age = Math.floor(Math.random() * 47) + 18; // 18-65 years old
    birthDate.setFullYear(birthDate.getFullYear() - age);
    const month = birthDate.getMonth();
    const day = birthDate.getDate();
    const year = birthDate.getFullYear();
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedBirthDate = `${day} ${monthNames[month]} ${year}`;
    
    return {
        fullName,
        fullNameBengali,
        fatherName,
        fatherNameBengali,
        motherName,
        motherNameBengali,
        dateOfBirth: formattedBirthDate,
        idNumber: idNumber.toString(),
        gender,
        bloodGroup,
        address,
        district,
        division,
        initials: `${firstName.charAt(0)}${lastName.charAt(0)}`
    };
}

// Populate form with data
function populateForm(data) {
    document.getElementById('fullName').value = data.fullName;
    document.getElementById('fullNameBengali').value = data.fullNameBengali;
    document.getElementById('fatherName').value = data.fatherName;
    document.getElementById('fatherNameBengali').value = data.fatherNameBengali;
    document.getElementById('motherName').value = data.motherName;
    document.getElementById('motherNameBengali').value = data.motherNameBengali;
    document.getElementById('dateOfBirth').value = data.dateOfBirth;
    document.getElementById('idNumber').value = data.idNumber;
    document.getElementById('gender').value = data.gender;
    document.getElementById('bloodGroup').value = data.bloodGroup;
    document.getElementById('address').value = data.address;
    document.getElementById('district').value = data.district;
    document.getElementById('division').value = data.division;
}

// Get data from form
function getFormData() {
    const fullName = document.getElementById('fullName').value;
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    return {
        fullName,
        fullNameBengali: document.getElementById('fullNameBengali').value,
        fatherName: document.getElementById('fatherName').value,
        fatherNameBengali: document.getElementById('fatherNameBengali').value,
        motherName: document.getElementById('motherName').value,
        motherNameBengali: document.getElementById('motherNameBengali').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        idNumber: document.getElementById('idNumber').value,
        gender: document.getElementById('gender').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        address: document.getElementById('address').value,
        district: document.getElementById('district').value,
        division: document.getElementById('division').value,
        initials: `${firstName.charAt(0)}${lastName.charAt(0)}`
    };
}

// Validate form
function validateForm() {
    const form = document.getElementById('employeeForm');
    return form.checkValidity();
}

// Generate ID card HTML
function generateIdCard(data) {
    const photoContent = uploadedImage 
        ? `<img src="${uploadedImage}" alt="${data.fullName}">`
        : data.initials;
    
    const signatureContent = uploadedSignature 
        ? `<img src="${uploadedSignature}" alt="Signature" style="width: 100%; height: 100%; object-fit: contain;">`
        : data.fullNameBengali;
    
    return `
        <div class="id-card">
            <div class="id-card-header">
                ${uploadedLogo ? `<div class="id-card-emblem"><img src="${uploadedLogo}" alt="Logo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;"></div>` : ''}
                <div class="id-card-title-section">
                    <div class="id-card-title-bengali">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</div>
                    <div class="id-card-title-english">Government of the People's Republic of Bangladesh</div>
                    <div class="id-card-subtitle">National ID Card / <span class="id-card-subtitle-bengali">জাতীয় পরিচয়</span></div>
                </div>
            </div>
            <div class="id-card-body">
                <div class="id-card-watermark"></div>
                <div class="id-card-photo">
                    ${photoContent}
                </div>
                <div class="id-card-info">
                    <div class="id-card-detail">
                        <span class="id-card-detail-bengali">নাম: ${data.fullNameBengali}</span>
                    </div>
                    <div class="id-card-detail">
                        <span class="id-card-detail-english">Name: ${data.fullName}</span>
                    </div>
                    <div class="id-card-detail">
                        <span class="id-card-detail-bengali">পিতা: ${data.fatherNameBengali}</span>
                    </div>
                    <div class="id-card-detail">
                        <span class="id-card-detail-bengali">মাতা: ${data.motherNameBengali}</span>
                    </div>
                    <div class="id-card-detail">
                        <span class="id-card-detail-english">Date of Birth: <span class="id-card-detail-value">${data.dateOfBirth}</span></span>
                    </div>
                    <div class="id-card-detail">
                        <span class="id-card-detail-english">NID NO: <span class="id-card-detail-value">${data.idNumber}</span></span>
                    </div>
                </div>
            </div>
            <div class="id-card-signature">${signatureContent}</div>
        </div>
    `;
}

// Print card
function printCard() {
    const cardElement = document.querySelector('.id-card');
    if (!cardElement) {
        alert('Please generate an ID card first before printing.');
        return;
    }
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    // Get the card HTML
    const cardHTML = cardElement.outerHTML;
    
    // Create the print document
    const printDocument = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>ID Card Print</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Arial', sans-serif;
                    background: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    padding: 20px;
                }
                
                .print-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                
                .id-card {
                    width: 400px;
                    height: 250px;
                    background: #ffffff;
                    border: 3px solid #000000;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Arial', sans-serif;
                }
                
                .id-card-header {
                    background: #ffffff;
                    padding: 10px 15px;
                    border-bottom: 2px solid #000000;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .id-card-emblem {
                    width: 40px;
                    height: 40px;
                    background: #006a4e;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 0.7rem;
                    font-weight: bold;
                    flex-shrink: 0;
                    border: 2px solid #000000;
                }
                
                .id-card-emblem::before {
                    content: '';
                    font-size: 1.2rem;
                }
                
                .id-card-title-section {
                    flex: 1;
                }
                
                .id-card-title-bengali {
                    font-size: 0.9rem;
                    font-weight: bold;
                    color: #000000;
                    margin-bottom: 2px;
                    line-height: 1.2;
                }
                
                .id-card-title-english {
                    font-size: 0.8rem;
                    color: #006a4e;
                    font-weight: 600;
                    margin-bottom: 2px;
                }
                
                .id-card-subtitle {
                    font-size: 0.7rem;
                    color: #dc143c;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                
                .id-card-subtitle-bengali {
                    font-size: 0.7rem;
                    color: #000000;
                    font-weight: bold;
                    margin-left: 5px;
                }
                
                .id-card-body {
                    padding: 15px;
                    display: flex;
                    gap: 15px;
                    height: calc(100% - 80px);
                    position: relative;
                }
                
                .id-card-watermark {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 4rem;
                    color: rgba(0, 106, 78, 0.1);
                    z-index: 1;
                    pointer-events: none;
                }
                
                .id-card-photo {
                    width: 70px;
                    height: 85px;
                    background: #f0f0f0;
                    border: 2px solid #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                    font-size: 1.5rem;
                    font-weight: bold;
                    flex-shrink: 0;
                    overflow: hidden;
                    position: relative;
                    z-index: 2;
                }
                
                .id-card-photo img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .id-card-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    position: relative;
                    z-index: 2;
                }
                
                .id-card-detail {
                    display: flex;
                    align-items: center;
                    font-size: 0.75rem;
                    line-height: 1.3;
                    margin-bottom: 3px;
                }
                
                .id-card-detail-bengali {
                    color: #000000;
                    font-weight: 500;
                    margin-right: 5px;
                }
                
                .id-card-detail-english {
                    color: #000000;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                
                .id-card-detail-value {
                    color: #dc143c;
                    font-weight: bold;
                    margin-left: 5px;
                }
                
                .id-card-signature {
                    position: absolute;
                    bottom: 5px;
                    left: 5px;
                    font-size: 0.6rem;
                    color: #000000;
                    font-style: italic;
                    z-index: 2;
                }
                
                .id-card-id {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 0.7rem;
                    color: #dc143c;
                    font-weight: bold;
                    z-index: 2;
                }
                
                @media print {
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    
                    .print-container {
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .id-card {
                        page-break-inside: avoid;
                        margin: 0 auto;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-container">
                ${cardHTML}
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                        window.close();
                    };
                };
            </script>
        </body>
        </html>
    `;
    
    // Write the document to the print window
    printWindow.document.write(printDocument);
    printWindow.document.close();
}

// Download card as image
function downloadCard() {
    const cardElement = document.querySelector('.id-card');
    if (!cardElement) return;
    
    // Create a temporary container to render the card
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    tempContainer.style.width = '400px';
    tempContainer.style.height = '250px';
    tempContainer.style.overflow = 'visible';
    tempContainer.style.backgroundColor = 'white';
    tempContainer.innerHTML = cardElement.outerHTML;
    document.body.appendChild(tempContainer);
    
    // Use html2canvas to convert to image with better settings
    html2canvas(tempContainer.firstElementChild, {
        width: 400,
        height: 250,
        scale: 3, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: function(clonedDoc) {
            // Ensure the cloned card has proper styling
            const clonedCard = clonedDoc.querySelector('.id-card');
            if (clonedCard) {
                clonedCard.style.width = '400px';
                clonedCard.style.height = '250px';
                clonedCard.style.overflow = 'visible';
                clonedCard.style.backgroundColor = 'white';
            }
        }
    }).then(canvas => {
        // Create a new canvas with exact dimensions to avoid cropping
        const finalCanvas = document.createElement('canvas');
        const finalCtx = finalCanvas.getContext('2d');
        
        // Set exact dimensions (3.38in x 2.13in at 3x scale)
        finalCanvas.width = 972; // 3.38in * 3 scale (approximately 3.38in = 324px at 96dpi)
        finalCanvas.height = 612; // 2.13in * 3 scale (approximately 2.13in = 204px at 96dpi)
        
        // Fill with white background
        finalCtx.fillStyle = '#ffffff';
        finalCtx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
        
        // Draw the card centered
        finalCtx.drawImage(canvas, 0, 0, finalCanvas.width, finalCanvas.height);
        
        // Create download link
        const link = document.createElement('a');
        link.download = `id-card-${Date.now()}.png`;
        link.href = finalCanvas.toDataURL('image/png', 1.0);
        link.click();
        
        // Clean up
        document.body.removeChild(tempContainer);
    }).catch(error => {
        console.error('Error generating card image:', error);
        console.log('Falling back to alternative download method...');
        
        // Fallback: Use window.print() as alternative
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        const printDocument = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>ID Card Download</title>
                <style>
                    body { margin: 0; padding: 20px; background: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                    .id-card { width: 400px; height: 250px; background: #ffffff; border: 3px solid #000000; border-radius: 8px; position: relative; overflow: visible; font-family: 'Arial', sans-serif; display: flex; flex-direction: column; }
                    .id-card-header { background: #ffffff; padding: 10px 15px; border-bottom: 2px solid #000000; display: flex; align-items: center; gap: 15px; }
                    .id-card-emblem { width: 40px; height: 40px; background: #006a4e; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold; flex-shrink: 0; border: 2px solid #000000; }
                    .id-card-emblem::before { content: ''; font-size: 1.2rem; }
                    .id-card-title-section { flex: 1; }
                    .id-card-title-bengali { font-size: 0.9rem; font-weight: bold; color: #000000; margin-bottom: 2px; line-height: 1.2; }
                    .id-card-title-english { font-size: 0.8rem; color: #006a4e; font-weight: 600; margin-bottom: 2px; }
                    .id-card-subtitle { font-size: 0.7rem; color: #dc143c; font-weight: bold; text-transform: uppercase; }
                    .id-card-subtitle-bengali { font-size: 0.7rem; color: #000000; font-weight: bold; margin-left: 5px; }
                    .id-card-body { padding: 15px; display: flex; gap: 15px; flex: 1; position: relative; min-height: 0; }
                    .id-card-watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 4rem; color: rgba(0, 106, 78, 0.1); z-index: 1; pointer-events: none; }
                    .id-card-photo { width: 70px; height: 85px; background: #f0f0f0; border: 2px solid #000000; display: flex; align-items: center; justify-content: center; color: #666; font-size: 1.5rem; font-weight: bold; flex-shrink: 0; overflow: hidden; position: relative; z-index: 2; }
                    .id-card-photo img { width: 100%; height: 100%; object-fit: cover; }
                    .id-card-info { flex: 1; display: flex; flex-direction: column; gap: 8px; position: relative; z-index: 2; }
                    .id-card-detail { display: flex; align-items: center; font-size: 0.75rem; line-height: 1.3; margin-bottom: 3px; }
                    .id-card-detail-bengali { color: #000000; font-weight: 500; margin-right: 5px; }
                    .id-card-detail-english { color: #000000; font-weight: bold; text-transform: uppercase; }
                    .id-card-detail-value { color: #dc143c; font-weight: bold; margin-left: 5px; }
                    .id-card-signature { position: absolute; bottom: 8px; left: 8px; font-size: 0.6rem; color: #000000; font-style: italic; z-index: 2; max-width: calc(100% - 16px); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                    .id-card-signature img { width: 100%; height: 100%; object-fit: contain; }
                </style>
            </head>
            <body>
                ${cardElement.outerHTML}
                <script>
                    window.onload = function() {
                        alert('Please right-click on the card and select "Save image as..." to download the card.');
                    };
                </script>
            </body>
            </html>
        `;
        printWindow.document.write(printDocument);
        printWindow.document.close();
        
        document.body.removeChild(tempContainer);
    });
}

// Global variable to store current data
let currentData = null;
let uploadedImage = null;
let uploadedSignature = null;
let uploadedLogo = null;

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file.');
            return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size must be less than 5MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage = e.target.result;
            updateImagePreview();
            updateFileName(file.name);
            showRemoveButton();
        };
        reader.readAsDataURL(file);
    }
}

// Update image preview
function updateImagePreview() {
    const preview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    
    if (uploadedImage) {
        previewImg.src = uploadedImage;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
}

// Update file name display
function updateFileName(fileName) {
    const fileNameElement = document.getElementById('fileName');
    fileNameElement.textContent = `Selected: ${fileName}`;
}

// Show remove button
function showRemoveButton() {
    const removeBtn = document.getElementById('removePhoto');
    removeBtn.style.display = 'inline-block';
}

// Hide remove button
function hideRemoveButton() {
    const removeBtn = document.getElementById('removePhoto');
    removeBtn.style.display = 'none';
}

// Handle logo upload
function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file for logo.');
            return;
        }
        
        // Validate file size (max 2MB for logo)
        if (file.size > 2 * 1024 * 1024) {
            alert('Logo file size must be less than 2MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedLogo = e.target.result;
            updateLogoPreview();
            updateLogoFileName(file.name);
            showLogoRemoveButton();
        };
        reader.readAsDataURL(file);
    }
}

// Handle signature upload
function handleSignatureUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file for signature.');
            return;
        }
        
        // Validate file size (max 2MB for signature)
        if (file.size > 2 * 1024 * 1024) {
            alert('Signature image size must be less than 2MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedSignature = e.target.result;
            updateSignaturePreview();
            updateSignatureFileName(file.name);
            showSignatureRemoveButton();
        };
        reader.readAsDataURL(file);
    }
}

// Update logo preview
function updateLogoPreview() {
    const preview = document.getElementById('logoPreview');
    const previewImg = document.getElementById('previewLogoImg');
    
    if (uploadedLogo) {
        previewImg.src = uploadedLogo;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
}

// Update signature preview
function updateSignaturePreview() {
    const preview = document.getElementById('signaturePreview');
    const previewImg = document.getElementById('previewSignatureImg');
    
    if (uploadedSignature) {
        previewImg.src = uploadedSignature;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
}

// Update signature file name display
// Update logo file name display
function updateLogoFileName(fileName) {
    const fileNameElement = document.getElementById('logoFileName');
    fileNameElement.textContent = `Selected: ${fileName}`;
}

function updateSignatureFileName(fileName) {
    const fileNameElement = document.getElementById('signatureFileName');
    fileNameElement.textContent = `Selected: ${fileName}`;
}

// Show logo remove button
function showLogoRemoveButton() {
    const removeBtn = document.getElementById('removeLogo');
    removeBtn.style.display = 'inline-block';
}

// Show signature remove button
function showSignatureRemoveButton() {
    const removeBtn = document.getElementById('removeSignature');
    removeBtn.style.display = 'inline-block';
}

// Hide logo remove button
function hideLogoRemoveButton() {
    const removeBtn = document.getElementById('removeLogo');
    removeBtn.style.display = 'none';
}

// Hide signature remove button
function hideSignatureRemoveButton() {
    const removeBtn = document.getElementById('removeSignature');
    removeBtn.style.display = 'none';
}

// Remove uploaded logo
function removeLogo() {
    uploadedLogo = null;
    document.getElementById('logoUpload').value = '';
    document.getElementById('logoFileName').textContent = '';
    document.getElementById('logoPreview').style.display = 'none';
    hideLogoRemoveButton();
    
    // Regenerate card if one exists
    if (currentData) {
        const cardContainer = document.getElementById('cardContainer');
        if (cardContainer.querySelector('.id-card')) {
            cardContainer.innerHTML = generateIdCard(currentData);
        }
    }
}

// Remove uploaded signature
function removeSignature() {
    uploadedSignature = null;
    document.getElementById('signatureUpload').value = '';
    document.getElementById('signatureFileName').textContent = '';
    document.getElementById('signaturePreview').style.display = 'none';
    hideSignatureRemoveButton();
    
    // Regenerate card if one exists
    if (currentData) {
        const cardContainer = document.getElementById('cardContainer');
        if (cardContainer.querySelector('.id-card')) {
            cardContainer.innerHTML = generateIdCard(currentData);
        }
    }
}

// Remove uploaded image
function removeImage() {
    uploadedImage = null;
    document.getElementById('photoUpload').value = '';
    document.getElementById('fileName').textContent = '';
    document.getElementById('imagePreview').style.display = 'none';
    hideRemoveButton();
    
    // Regenerate card if one exists
    if (currentData) {
        const cardContainer = document.getElementById('cardContainer');
        if (cardContainer.querySelector('.id-card')) {
            cardContainer.innerHTML = generateIdCard(currentData);
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const generateCardBtn = document.getElementById('generateCard');
    const downloadCardBtn = document.getElementById('downloadCard');
    const printCardBtn = document.getElementById('printCard');
    const clearCardBtn = document.getElementById('clearCard');
    const photoUpload = document.getElementById('photoUpload');
    const uploadLogoBtn = document.getElementById('uploadLogoBtn');
    const logoUpload = document.getElementById('logoUpload');
    const removeLogoBtn = document.getElementById('removeLogo');
    const uploadBtn = document.getElementById('uploadBtn');
    const removePhotoBtn = document.getElementById('removePhoto');
    const signatureUpload = document.getElementById('signatureUpload');
    const uploadSignatureBtn = document.getElementById('uploadSignatureBtn');
    const removeSignatureBtn = document.getElementById('removeSignature');
    
    generateCardBtn.addEventListener('click', function() {
        if (validateForm()) {
            currentData = getFormData();
            const cardContainer = document.getElementById('cardContainer');
            cardContainer.innerHTML = generateIdCard(currentData);
            downloadCardBtn.disabled = false;
            printCardBtn.disabled = false;
        } else {
            alert('Please fill in all required fields before generating the card.');
        }
    });
    
    
    downloadCardBtn.addEventListener('click', function() {
        downloadCard();
    });
    
    printCardBtn.addEventListener('click', function() {
        printCard();
    });
    
    clearCardBtn.addEventListener('click', function() {
        // Clear all form fields
        document.getElementById('employeeForm').reset();
        currentData = null;
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '<div class="placeholder"><p>Click "Generate ID Card" to create your card</p></div>';
        downloadCardBtn.disabled = true;
        printCardBtn.disabled = true;
        
        // Clear uploaded images
        uploadedImage = null;
        uploadedSignature = null;
        uploadedLogo = null;
        document.getElementById('photoUpload').value = '';
        document.getElementById('signatureUpload').value = '';
        document.getElementById('logoUpload').value = '';
        document.getElementById('fileName').textContent = '';
        document.getElementById('signatureFileName').textContent = '';
        document.getElementById('logoFileName').textContent = '';
        document.getElementById('imagePreview').style.display = 'none';
        document.getElementById('signaturePreview').style.display = 'none';
        document.getElementById('logoPreview').style.display = 'none';
        hideRemoveButton();
        hideSignatureRemoveButton();
        hideLogoRemoveButton();
    });
    
    // Image upload event listeners
    // Logo upload event listeners
    uploadLogoBtn.addEventListener('click', function() {
        logoUpload.click();
    });
    
    logoUpload.addEventListener('change', handleLogoUpload);
    
    removeLogoBtn.addEventListener('click', removeLogo);
    
    uploadBtn.addEventListener('click', function() {
        photoUpload.click();
    });
    
    photoUpload.addEventListener('change', handleImageUpload);
    
    removePhotoBtn.addEventListener('click', removeImage);
    
    // Signature upload event listeners
    uploadSignatureBtn.addEventListener('click', function() {
        signatureUpload.click();
    });
    
    signatureUpload.addEventListener('change', handleSignatureUpload);
    
    removeSignatureBtn.addEventListener('click', removeSignature);
});

// Fallback for html2canvas if not available
if (typeof html2canvas === 'undefined') {
    // Load html2canvas from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    script.onload = function() {
        console.log('html2canvas loaded successfully');
    };
    script.onerror = function() {
        console.error('Failed to load html2canvas');
        // Disable download button if html2canvas fails to load
        document.getElementById('downloadCard').disabled = true;
        document.getElementById('downloadCard').textContent = 'Download Unavailable';
    };
    document.head.appendChild(script);
}
