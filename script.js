// Translation data
const translations = {
    en: {
        title: "🚨 First Aid Emergency Guide",
        subtitle: "Quick access to life-saving emergency instructions",
        nav_emergencies: "🚨 Emergencies",
        nav_medical: "🏥 Medical Resources",
        nav_contacts: "📞 Emergency Contacts",
        nav_learn: "📚 Learn More",
        search_placeholder: "🔍 Search by Emergency Type...",
        
        // Emergency categories
        bleeding_title: "Bleeding Control",
        bleeding_subtitle: "Stop severe bleeding",
        bleeding_info: "Cuts, wounds, hemorrhaging",
        burns_title: "Burns Treatment",
        burns_subtitle: "Thermal, chemical, electrical burns",
        burns_info: "1st, 2nd, and 3rd degree burns",
        shock_title: "Shock Treatment",
        shock_subtitle: "Medical shock response",
        shock_info: "Hypovolemic, cardiogenic shock",
        broken_bone_title: "Broken Bones",
        broken_bone_subtitle: "Fracture management",
        broken_bone_info: "Sprains, fractures, dislocations",
        unconscious_title: "Unconsciousness",
        unconscious_subtitle: "Unresponsive person care",
        unconscious_info: "Fainting, coma, loss of consciousness",
        heat_stroke_title: "Heat Stroke",
        heat_stroke_subtitle: "Heat-related emergencies",
        heat_stroke_info: "Hyperthermia, heat exhaustion",
        asthma_title: "Asthma Attack",
        asthma_subtitle: "Breathing difficulties",
        asthma_info: "Severe asthma, respiratory distress",
        choking_title: "Choking",
        choking_subtitle: "Airway obstruction",
        choking_info: "Foreign object in throat",
        drowning_title: "Drowning",
        drowning_subtitle: "Water emergency rescue",
        drowning_info: "Water rescue, CPR, recovery position",

        // Medical Resources
        medical_resources_title: "🏥 Medical Resources",
        hospitals_title: "Major Hospitals",
        hospitals_subtitle: "Emergency medical facilities in Kano",
        aminu_kano_hospital: "Aminu Kano Teaching Hospital",
        murtala_hospital: "Murtala Mohammed Specialist Hospital",
        hasiya_bayero_hospital: "Hasiya Bayero Pediatric Hospital",
        tarauni_general_hospital: "Tarauni General Hospital",
        blood_banks_title: "Blood Banks",
        blood_banks_subtitle: "Emergency blood supply in Kano",
        kano_blood_bank: "Kano State Blood Transfusion Service",
        aminu_kano_blood: "Aminu Kano Blood Bank",
        red_cross_kano: "Nigerian Red Cross Society Kano",
        ambulance_title: "Ambulance Services",
        ambulance_subtitle: "Emergency transport in Kano",
        kano_ambulance: "Kano State Ambulance Service",
        federal_road_safety_kano: "Federal Road Safety Corps Kano",
        tarauni_ambulance: "Tarauni LGA Emergency Service",
        poison_control_title: "Poison Control",
        poison_control_subtitle: "24/7 poison help",
        poison_hotline: "National Poison Control Hotline",
        drug_info: "NAFDAC Drug Information",
        emergency_toxicology: "Emergency Toxicology Unit",

        // Emergency Contacts
        emergency_contacts_title: "📞 Emergency Contacts",
        general_emergency_title: "General Emergency",
        nema: "NEMA (National Emergency)",
        kano_sema: "Kano SEMA (State Emergency)",
        road_safety: "Federal Road Safety",
        security_emergency_title: "Security Emergency",
        police_helpline: "Police Helpline",
        kano_police: "Kano State Police Command",
        crime_stoppers: "Crime Stoppers",

        // Learn More
        learn_more_title: "📚 Learn More",
        cpr_training_title: "CPR Training Centers",
        cpr_training_content: "Learn life-saving CPR techniques from certified instructors. Find training centers near you and get certified in cardiopulmonary resuscitation.",
        find_centers: "Find Centers Near Me",
        first_aid_courses_title: "First Aid Courses",
        first_aid_courses_content: "Comprehensive first aid training courses covering emergency response, wound care, and basic life support techniques.",
        enroll_now: "Enroll Now",
        mobile_app_title: "Mobile Emergency App",
        mobile_app_content: "Download our mobile app for offline access to emergency guides, GPS location sharing, and quick emergency contacts.",
        download_app: "Download App",
        community_training_title: "Community Training",
        community_training_content: "Organize first aid training sessions in your community. Learn how to become a first aid instructor and train others.",
        organize_training: "Organize Training",
        video_tutorials_title: "Video Tutorials",
        video_tutorials_content: "Watch step-by-step video demonstrations of first aid techniques. Visual learning for all emergency procedures.",
        watch_videos: "Watch Videos",
        certification_title: "Get Certified",
        certification_content: "Earn official first aid and CPR certifications recognized by employers and organizations. Valid for 2 years.",
        get_certified: "Get Certified",

        // Footer
        footer_emergency_title: "🚨 Emergency Contacts",
        footer_emergency_services: "Emergency Services: 112, 199",
        footer_police: "Police: 199",
        footer_fire: "Fire Service: 199",
        footer_kano: "Kano State Emergency: +234 803 305 9959",
        footer_nema: "NEMA: 08023230012",
        footer_medical_title: "🏥 Medical Resources",
        footer_find_hospital: "Find Nearest Hospital",
        footer_poison_control: "Poison Control Center",
        footer_blood_bank: "Blood Bank Locator",
        footer_ambulance: "Ambulance Services",
        footer_learn_title: "📚 Learn More",
        footer_cpr_training: "CPR Training Centers",
        footer_first_aid_courses: "First Aid Courses",
        footer_download_guide: "Download Offline Guide",
        footer_community_training: "Community Training",
        footer_about_title: "ℹ️ About This Guide",
        footer_disclaimer: "This guide provides general first aid information. Always seek professional medical help in emergencies. The information here is not a substitute for proper medical training.",
        footer_remember: "Remember:",
        footer_call_emergency: "When in doubt, call emergency services immediately!",
        footer_copyright: "© 2025 First Aid Emergency Guide. Created to save lives. Share knowledge, save lives. 🆘",
        footer_updated: "Last updated: August 2025 | Made with ❤️ for Kano State, Nigeria"
    },
    ha: {
        title: "🚨 Jagorar Taimako Na Gaggawa",
        subtitle: "Samun hanyoyin taimako da sauri don ceton rayuka",
        nav_emergencies: "🚨 Gaggawa",
        nav_medical: "🏥 Kayayyakin Likita",
        nav_contacts: "📞 Lambobin Gaggawa",
        nav_learn: "📚 Kara Koyo",
        search_placeholder: "🔍 Nemo ta hanyar nau'in gaggawa...",
        
        // Emergency categories
        bleeding_title: "Dakatar da Zubar Jini",
        bleeding_subtitle: "Dakatar da zubar jini mai tsanani",
        bleeding_info: "Raunuka, yankewa, zubar jini",
        burns_title: "Maganin Kuna",
        burns_subtitle: "Kuna ta wuta, sinadarai, da lantarki",
        burns_info: "Kuna na farko, na biyu, da na uku",
        shock_title: "Maganin Girgiza",
        shock_subtitle: "Maganin girgizar jiki",
        shock_info: "Girgizar jini, girgizar zuciya",
        broken_bone_title: "Karyawar Kashi",
        broken_bone_subtitle: "Kula da karyawar kashi",
        broken_bone_info: "Karyawa, karya, ficewa",
        unconscious_title: "Rashin Wayewa",
        unconscious_subtitle: "Kula da wanda bai amsa ba",
        unconscious_info: "Suma, suma mai zurfi, rashin wayewa",
        heat_stroke_title: "Bugun Zafi",
        heat_stroke_subtitle: "Matsalolin zafi",
        heat_stroke_info: "Yawan zafi, gajiyar zafi",
        asthma_title: "Shan Numfashi",
        asthma_subtitle: "Matsalar numfashi",
        asthma_info: "Asma mai tsanani, damun numfashi",
        choking_title: "Makale",
        choking_subtitle: "Makalar hanyar numfashi",
        choking_info: "Abu a makogwaro",
        drowning_title: "Nutsewa",
        drowning_subtitle: "Gaggawar ruwa",
        drowning_info: "Ceton mutum daga ruwa, CPR",

        // Medical Resources
        medical_resources_title: "🏥 Kayayyakin Likita",
        hospitals_title: "Manyan Asibitoci",
        hospitals_subtitle: "Wuraren gaggawar likita a Kano",
        aminu_kano_hospital: "Asibitin Koyar da Aminu Kano",
        murtala_hospital: "Asibitin Kwararru na Murtala Mohammed",
        hasiya_bayero_hospital: "Asibitin Yara na Hasiya Bayero",
        tarauni_general_hospital: "Asibitin Gabaɗayan Tarauni",
        blood_banks_title: "Bankunan Jini",
        blood_banks_subtitle: "Wadanda suke ba da jini cikin gaggawa a Kano",
        kano_blood_bank: "Ma'aikatar Ba da Jini ta Jihar Kano",
        aminu_kano_blood: "Bankin Jini na Aminu Kano",
        red_cross_kano: "Kungiyar Red Cross ta Kano",
        ambulance_title: "Motocin Asibitin",
        ambulance_subtitle: "Jigilar marasa lafiya a Kano",
        kano_ambulance: "Ma'aikatar Motar Asibitin Kano",
        federal_road_safety_kano: "Hukumar Kare Hanyoyin Tarayya Kano",
        tarauni_ambulance: "Ma'aikatar Gaggawa ta Tarauni",
        poison_control_title: "Dakatar da Guba",
        poison_control_subtitle: "Taimako ta guba 24/7",
        poison_hotline: "Layin Wayar Dakatar da Guba",
        drug_info: "Bayanan Magunguna na NAFDAC",
        emergency_toxicology: "Sashin Gaggawar Guba",

        // Emergency Contacts
        emergency_contacts_title: "📞 Lambobin Gaggawa",
        general_emergency_title: "Gaggawa Ta Gaba Daya",
        nema: "NEMA (Gaggawar Kasa)",
        kano_sema: "SEMA Kano (Gaggawar Jiha)",
        road_safety: "Kare Hanyoyin Tarayya",
        security_emergency_title: "Gaggawar Tsaro",
        police_helpline: "Layin Taimako na 'Yan Sanda",
        kano_police: "Kwamandan 'Yan Sanda Kano",
        crime_stoppers: "Masu Dakatar da Laifuka",

        // Learn More
        learn_more_title: "📚 Kara Koyo",
        cpr_training_title: "Cibiyoyin Koyar da CPR",
        cpr_training_content: "Koyi hanyoyin CPR masu ceton rayuka daga malamai masu takamashi. Nemo cibiyoyin horarwa kusa da ke.",
        find_centers: "Nemo Cibiyoyi Kusa da Ni",
        first_aid_courses_title: "Karatun Taimako Na Farko",
        first_aid_courses_content: "Cikakkun darussan taimako na farko da suka kunshi amsawar gaggawa, kula da raunuka, da hanyoyin tallafawa rayuwa.",
        enroll_now: "Yi Rajista Yanzu",
        mobile_app_title: "App Na Wayar Hannu",
        mobile_app_content: "Sauke app dinmu don samun damar yin amfani da jagororin gaggawa ba tare da intanet ba.",
        download_app: "Sauke App",
        community_training_title: "Horar da Al'umma",
        community_training_content: "Shirya zangon horar da taimako na farko a cikin al'ummarkinka. Koyi yadda za ka zama malamin taimako na farko.",
        organize_training: "Shirya Horo",
        video_tutorials_title: "Koyarwar Bidiyo",
        video_tutorials_content: "Kalli bidiyon koyarwar hanyoyin taimako na farko mataki-mataki. Koyarwar gani don duk hanyoyin gaggawa.",
        watch_videos: "Kalli Bidiyo",
        certification_title: "Samu Takarda Shaidar",
        certification_content: "Samu takardun shaida na taimako na farko da CPR da ma'aikata da kungiyoyi suka amince da su. Suna aiki har shekara 2.",
        get_certified: "Samu Takarda Shaidar",

        // Footer
        footer_emergency_title: "🚨 Lambobin Gaggawa",
        footer_emergency_services: "Ma'aikatun Gaggawa: 112, 199",
        footer_police: "'Yan Sanda: 199",
        footer_fire: "Ma'aikatar Kashe Gobara: 199",
        footer_kano: "Gaggawar Jihar Kano: +234 803 305 9959",
        footer_nema: "NEMA: 08023230012",
        footer_medical_title: "🏥 Kayayyakin Likita",
        footer_find_hospital: "Nemo Asibitin Da Ke Kusa",
        footer_poison_control: "Cibiyar Dakatar da Guba",
        footer_blood_bank: "Nemo Bankin Jini",
        footer_ambulance: "Ma'aikatun Motar Asibitin",
        footer_learn_title: "📚 Kara Koyo",
        footer_cpr_training: "Cibiyoyin Koyar da CPR",
        footer_first_aid_courses: "Darussan Taimako Na Farko",
        footer_download_guide: "Sauke Jagora Ba Tare da Intanet Ba",
        footer_community_training: "Horar da Al'umma",
        footer_about_title: "ℹ️ Game da Wannan Jagora",
        footer_disclaimer: "Wannan jagora tana ba da bayanai na gabaɗaya game da taimako na farko. Koyaushe nemi taimakon likita na ƙwararru a lokacin gaggawa. Bayanai a nan ba madadin horo na likita ba ne.",
        footer_remember: "Ka tuna:",
        footer_call_emergency: "Idan ka yi shakka, kira ma'aikatun gaggawa nan take!",
        footer_copyright: "© 2025 Jagorar Taimako Na Gaggawa. An ƙirƙira don ceton rayuka. Raba ilimi, ceton rayuka. 🆘",
        footer_updated: "An sabunta: Agusta 2025 | An yi da ❤️ don Jihar Kano, Najeriya"
    }
};

let currentLang = 'en';

// Video data for each emergency type
const videoData = {
    'bleeding': {
        title: 'Bleeding Control Techniques',
        url: './videos/bleeding.MP4', // Replace with actual video URL
        steps: [
            'Apply direct pressure to the wound',
            'Elevate the injured area above heart level',
            'Apply pressure bandage',
            'Call emergency services if bleeding is severe',
            'Monitor for signs of shock'
        ]
    },
    'burns': {
        title: 'Burns Treatment Guide',
        url: './videos/burns.MP4', // Replace with actual video URL
        steps: [
            'Cool the burn with running water for 10-20 minutes',
            'Remove any clothing or jewelry near the burn',
            'Cover with sterile gauze',
            'Do not apply ice or butter',
            'Seek medical attention for severe burns'
        ]
    },
    'shock': {
        title: 'Shock Treatment Protocol',
        url: './videos/shock.Mp4', // Replace with actual video URL
        steps: [
            'Lay the person down and elevate legs',
            'Keep the person warm',
            'Do not give food or water',
            'Monitor breathing and pulse',
            'Call emergency services immediately'
        ]
    },
    'broken-bone': {
        title: 'Fracture Management',
        url: 'https://www.youtube.com/embed/example-fracture-video', // Replace with actual video URL
        steps: [
            'Do not move the injured person unless necessary',
            'Immobilize the fracture site',
            'Apply ice to reduce swelling',
            'Support the limb with splints',
            'Transport to hospital carefully'
        ]
    },
    'unconscious': {
        title: 'Unconscious Person Care',
        url: './videos/faint.MP4', // Replace with actual video URL
        steps: [
            'Check for responsiveness',
            'Open airway and check breathing',
            'Place in recovery position if breathing',
            'Start CPR if not breathing',
            'Call emergency services immediately'
        ]
    },
    'heat-stroke': {
        title: 'Heat Stroke Emergency Response',
        url: './videos/hs.MP4', // Replace with actual video URL
        steps: [
            'Move person to cool, shady area',
            'Remove excess clothing',
            'Apply cool water to skin',
            'Fan the person to increase cooling',
            'Monitor temperature and consciousness'
        ]
    },
    'asthma': {
        title: 'Asthma Attack Management',
        url: './videos/asthma.MP4', // Replace with actual video URL
        steps: [
            'Help person sit upright',
            'Assist with inhaler if available',
            'Encourage slow, deep breathing',
            'Call emergency services if severe',
            'Stay calm and reassuring'
        ]
    },
    'choking': {
        title: 'Choking Emergency Response',
        url: './videos/choke.MP4', // Replace with actual video URL
        steps: [
            'Encourage coughing if person is conscious',
            'Perform back blows (5 sharp blows)',
            'Perform abdominal thrusts (Heimlich maneuver)',
            'Alternate between back blows and thrusts',
            'Call emergency services if object not removed'
        ]
    },
    'drowning': {
        title: 'Drowning Rescue and CPR',
        url: './videos/drowning.MP4', // Replace with actual video URL
        steps: [
            'Ensure your own safety first',
            'Remove person from water safely',
            'Check for responsiveness and breathing',
            'Start CPR if not breathing',
            'Call emergency services immediately'
        ]
    }
};

// Text-to-Speech functionality
class TextToSpeechManager {
    constructor() {
        this.synth = window.speechSynthesis;
        this.utterance = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.currentSpeed = 1;
        this.availableSpeeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
        this.speedIndex = 2; // Start at 1x speed
        this.currentElement = null;
        
        this.initializeControls();
        this.loadVoices();
    }

    initializeControls() {
        const playBtn = document.getElementById('playBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const stopBtn = document.getElementById('stopBtn');
        const speedBtn = document.getElementById('speedBtn');

        playBtn.addEventListener('click', () => this.toggleReading());
        pauseBtn.addEventListener('click', () => this.pauseReading());
        stopBtn.addEventListener('click', () => this.stopReading());
        speedBtn.addEventListener('click', () => this.cycleSpeed());

        // Also handle speech synthesis events
        this.synth.addEventListener('voiceschanged', () => this.loadVoices());
    }

    loadVoices() {
        this.voices = this.synth.getVoices();
        
        // Prefer voices for current language
        this.currentVoice = this.getVoiceForLanguage(currentLang);
    }

    getVoiceForLanguage(lang) {
        const voices = this.synth.getVoices();
        let preferredVoice = null;

        if (lang === 'ha') {
            // Try to find Hausa voice, fallback to English
            preferredVoice = voices.find(voice => 
                voice.lang.toLowerCase().includes('ha') || 
                voice.name.toLowerCase().includes('hausa')
            );
            
            // If no Hausa voice, use a clear English voice
            if (!preferredVoice) {
                preferredVoice = voices.find(voice => 
                    voice.lang.startsWith('en') && 
                    (voice.name.includes('Female') || voice.name.includes('Male'))
                );
            }
        } else {
            // English voices
            preferredVoice = voices.find(voice => 
                voice.lang.startsWith('en-US') || 
                voice.lang.startsWith('en-GB')
            );
        }

        return preferredVoice || voices[0];
    }

    toggleReading() {
        if (this.isPlaying) {
            if (this.isPaused) {
                this.resumeReading();
            } else {
                this.pauseReading();
            }
        } else {
            this.startReading();
        }
    }

    startReading() {
        this.stopReading(); // Stop any current speech

        const contentToRead = this.getReadableContent();
        if (!contentToRead) {
            this.updateStatus('No content to read');
            return;
        }

        this.utterance = new SpeechSynthesisUtterance(contentToRead);
        this.utterance.voice = this.getVoiceForLanguage(currentLang);
        this.utterance.rate = this.currentSpeed;
        this.utterance.pitch = 1;
        this.utterance.volume = 1;

        // Event listeners
        this.utterance.onstart = () => {
            this.isPlaying = true;
            this.isPaused = false;
            this.updateUI();
            this.updateStatus('Reading content...');
        };

        this.utterance.onend = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateUI();
            this.updateStatus('Finished reading');
            this.removeHighlight();
        };

        this.utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event);
            this.updateStatus('Error occurred while reading');
            this.stopReading();
        };

        this.utterance.onboundary = (event) => {
            // Highlight text being read (simplified version)
            this.highlightCurrentSection();
        };

        this.synth.speak(this.utterance);
    }

    pauseReading() {
        if (this.isPlaying && !this.isPaused) {
            this.synth.pause();
            this.isPaused = true;
            this.updateUI();
            this.updateStatus('Reading paused');
        }
    }

    resumeReading() {
        if (this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
            this.updateUI();
            this.updateStatus('Resuming reading...');
        }
    }

    stopReading() {
        if (this.synth.speaking || this.synth.pending) {
            this.synth.cancel();
        }
        this.isPlaying = false;
        this.isPaused = false;
        this.updateUI();
        this.updateStatus('Reading stopped');
        this.removeHighlight();
    }

    cycleSpeed() {
        this.speedIndex = (this.speedIndex + 1) % this.availableSpeeds.length;
        this.currentSpeed = this.availableSpeeds[this.speedIndex];
        
        document.getElementById('speedBtn').textContent = `${this.currentSpeed}x`;
        
        // If currently speaking, restart with new speed
        if (this.isPlaying) {
            const wasPlaying = !this.isPaused;
            this.stopReading();
            if (wasPlaying) {
                setTimeout(() => this.startReading(), 100);
            }
        }
        
        this.updateStatus(`Speech speed: ${this.currentSpeed}x`);
    }

    getReadableContent() {
        const activeTab = document.querySelector('.tab-content.active');
        if (!activeTab) return '';

        let content = '';
        
        // Get the main heading
        const heading = activeTab.querySelector('h2');
        if (heading) {
            content += heading.textContent + '. ';
        }

        // Get all readable text from cards and sections
        const readableElements = activeTab.querySelectorAll(`
            .card-title, .card-subtitle, .card-info,
            .resource-title, .resource-subtitle, .contact-name,
            .learn-title, .learn-content, .kit-title, .kit-subtitle,
            .contact-list li, .resource-list li, .kit-list li,
            p, .story-content
        `);

        readableElements.forEach(element => {
            let text = element.textContent.trim();
            if (text && text.length > 0) {
                // Clean up text for better speech
                text = text.replace(/[🚨🏥📞📚🎒🤧🩸🔥⚡🧠💔☠️🦴😵🌡️🫁🗣️🌊]/g, '');
                text = text.replace(/\s+/g, ' ');
                content += text + '. ';
            }
        });

        return content;
    }

    highlightCurrentSection() {
        // Remove previous highlight
        this.removeHighlight();
        
        // Add highlight to current active tab content
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            activeTab.classList.add('reading-highlight');
            this.currentElement = activeTab;
        }
    }

    removeHighlight() {
        if (this.currentElement) {
            this.currentElement.classList.remove('reading-highlight');
            this.currentElement = null;
        }
        
        // Remove any other highlights
        document.querySelectorAll('.reading-highlight').forEach(el => {
            el.classList.remove('reading-highlight');
        });
    }

    updateUI() {
        const playBtn = document.getElementById('playBtn');
        const pauseBtn = document.getElementById('pauseBtn');

        if (this.isPlaying) {
            if (this.isPaused) {
                playBtn.style.display = 'flex';
                playBtn.classList.add('paused');
                playBtn.innerHTML = '▶️';
                playBtn.title = 'Resume reading';
                pauseBtn.style.display = 'none';
            } else {
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'flex';
                pauseBtn.classList.add('active');
            }
        } else {
            playBtn.style.display = 'flex';
            playBtn.classList.remove('active', 'paused');
            playBtn.innerHTML = '🔊';
            playBtn.title = 'Read page aloud';
            pauseBtn.style.display = 'none';
            pauseBtn.classList.remove('active');
        }
    }

    updateStatus(message) {
        const statusElement = document.getElementById('voiceStatus');
        const statusText = document.getElementById('voiceStatusText');
        
        statusText.textContent = message;
        statusElement.classList.add('visible');
        
        // Hide status after 3 seconds
        setTimeout(() => {
            statusElement.classList.remove('visible');
        }, 3000);
    }

    // Update voice when language changes
    updateLanguage(newLang) {
        if (this.isPlaying) {
            this.stopReading(); // Stop current reading when language changes
        }
        this.currentVoice = this.getVoiceForLanguage(newLang);
    }
}

// Video functionality
function showVideo(category) {
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    const videoInfo = videoData[category];
    
    if (!videoInfo) {
        alert('Video not available for this category yet.');
        return;
    }
    
    const videoHTML = `
        <h3>${videoInfo.title}</h3>
        <iframe src="${videoInfo.url}" frameborder="0" allowfullscreen></iframe>
        <div class="video-info">
            <h3>Key Steps:</h3>
            <ul>
                ${videoInfo.steps.map(step => `<li><strong>Step:</strong> ${step}</li>`).join('')}
            </ul>
        </div>
    `;
    
    videoContainer.innerHTML = videoHTML;
    modal.style.display = 'block';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoContainer = document.getElementById('videoContainer');
    modal.style.display = 'none';
    videoContainer.innerHTML = '';
}

// Initialize Text-to-Speech
const ttsManager = new TextToSpeechManager();

// Language switcher functionality
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        switchLanguage(lang);
        
        // Update active state
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

function switchLanguage(lang) {
    currentLang = lang;
    const translation = translations[lang];
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translation[key]) {
            element.placeholder = translation[key];
        }
    });

    // Update document language
    document.documentElement.lang = lang;
    
    // Update text-to-speech language
    ttsManager.updateLanguage(lang);
}

// Tab functionality
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Stop any current reading when switching tabs
        ttsManager.stopReading();
        
        // Remove active class from all tabs and contents
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding content
        const tabId = this.dataset.tab;
        document.getElementById(tabId).classList.add('active');
    });
});

// Search functionality
const searchBox = document.getElementById('searchBox');
if (searchBox) {
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.category-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const subtitle = card.querySelector('.card-subtitle').textContent.toLowerCase();
            const info = card.querySelector('.card-info').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || subtitle.includes(searchTerm) || info.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Footer link functionality - make links functional
document.addEventListener('DOMContentLoaded', function() {
    // Medical Resources Links
    document.getElementById('findHospitalLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Switch to medical resources tab
        document.querySelector('[data-tab="medical-resources"]').click();
    });

    document.getElementById('poisonControlLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Switch to medical resources tab and scroll to poison control
        document.querySelector('[data-tab="medical-resources"]').click();
        setTimeout(() => {
            const poisonSection = document.querySelector('.resource-card:nth-child(4)');
            if (poisonSection) {
                poisonSection.scrollIntoView({ behavior: 'smooth' });
                poisonSection.style.background = '#f8f9fa';
                setTimeout(() => {
                    poisonSection.style.background = '';
                }, 2000);
            }
        }, 300);
    });

    document.getElementById('bloodBankLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Switch to medical resources tab and scroll to blood banks
        document.querySelector('[data-tab="medical-resources"]').click();
        setTimeout(() => {
            const bloodBankSection = document.querySelector('.resource-card:nth-child(2)');
            if (bloodBankSection) {
                bloodBankSection.scrollIntoView({ behavior: 'smooth' });
                bloodBankSection.style.background = '#f8f9fa';
                setTimeout(() => {
                    bloodBankSection.style.background = '';
                }, 2000);
            }
        }, 300);
    });

    document.getElementById('ambulanceLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Switch to medical resources tab and scroll to ambulance
        document.querySelector('[data-tab="medical-resources"]').click();
        setTimeout(() => {
            const ambulanceSection = document.querySelector('.resource-card:nth-child(3)');
            if (ambulanceSection) {
                ambulanceSection.scrollIntoView({ behavior: 'smooth' });
                ambulanceSection.style.background = '#f8f9fa';
                setTimeout(() => {
                    ambulanceSection.style.background = '';
                }, 2000);
            }
        }, 300);
    });

    // Learn More Links
    document.getElementById('cprTrainingLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Switch to learn more tab and scroll to CPR training
        document.querySelector('[data-tab="learn-more"]').click();
        setTimeout(() => {
            const cprSection = document.querySelector('.learn-card:nth-child(1)');
            if (cprSection) {
                cprSection.scrollIntoView({ behavior: 'smooth' });
                cprSection.style.background = '#f8f9fa';
                setTimeout(() => {
                    cprSection.style.background = '';
                }, 2000);
            }
        }, 300);
    });

    document.getElementById('firstAidCoursesLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Switch to learn more tab and scroll to first aid courses
        document.querySelector('[data-tab="learn-more"]').click();
        setTimeout(() => {
            const firstAidSection = document.querySelector('.learn-card:nth-child(2)');
            if (firstAidSection) {
                firstAidSection.scrollIntoView({ behavior: 'smooth' });
                firstAidSection.style.background = '#f8f9fa';
                setTimeout(() => {
                    firstAidSection.style.background = '';
                }, 2000);
            }
        }, 300);
    });

    document.getElementById('downloadGuideLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Create a downloadable PDF version (placeholder)
        alert('Downloading offline guide... This feature will create a PDF version of the guide for offline use.');
        // In a real implementation, you would generate and download a PDF
    });

    document.getElementById('communityTrainingLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Switch to learn more tab and scroll to community training
        document.querySelector('[data-tab="learn-more"]').click();
        setTimeout(() => {
            const communitySection = document.querySelector('.learn-card:nth-child(4)');
            if (communitySection) {
                communitySection.scrollIntoView({ behavior: 'smooth' });
                communitySection.style.background = '#f8f9fa';
                setTimeout(() => {
                    communitySection.style.background = '';
                }, 2000);
            }
        }, 300);
    });
});

// Call functionality for emergency contacts
document.querySelectorAll('.contact-phone').forEach(phoneElement => {
    phoneElement.addEventListener('click', function() {
        const phoneNumber = this.textContent.trim();
        if (phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        }
    });
});

// Learn more button functionality
document.querySelectorAll('.learn-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        alert(`${buttonText} feature coming soon! This will redirect to external resources or internal training modules.`);
    });
});

// Emergency contact call buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('call-button')) {
        const phoneNumber = e.target.closest('li').querySelector('.contact-phone').textContent;
        window.location.href = `tel:${phoneNumber}`;
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeVideo();
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    switchLanguage('en');
    
    // Add some interactive enhancements
    document.querySelectorAll('.category-card, .resource-card, .contact-card, .learn-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some helpful keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Alt + E for Emergency Services
    if (event.altKey && event.key === 'e') {
        window.location.href = 'tel:112';
    }
    // Alt + P for Police
    if (event.altKey && event.key === 'p') {
        window.location.href = 'tel:199';
    }
    // Alt + L to switch language
    if (event.altKey && event.key === 'l') {
        const currentLangBtn = document.querySelector('.lang-btn.active');
        const otherLangBtn = currentLangBtn.dataset.lang === 'en' ? 
            document.querySelector('.lang-btn[data-lang="ha"]') : 
            document.querySelector('.lang-btn[data-lang="en"]');
        otherLangBtn.click();
    }
    // Spacebar to toggle reading
    if (event.code === 'Space' && !event.target.matches('input, textarea, button')) {
        event.preventDefault();
        ttsManager.toggleReading();
    }
    // Escape to stop reading
    if (event.key === 'Escape') {
        ttsManager.stopReading();
        closeVideo();
    }
});
