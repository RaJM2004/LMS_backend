import { pythonModules } from './courses/python';
import { nnModules } from './courses/neural_networks';
import { aiCoreModules } from './courses/ai_core';
import { domainSpecificModules } from './courses/domain_specific';

// NOTE: This file is used for INITIAL SEEDING of the MongoDB database.
// Once the application runs and seeds the database, the 'live' data is served from MongoDB.
// Edits made here AFTER seeding will NOT be reflected unless the database is cleared or manual migration is done.
// Please use the Admin Dashboard to edit course content.

export const modulesData = [
    ...pythonModules,
    ...nnModules,
    ...aiCoreModules,
    ...domainSpecificModules
];

export const modulesDataHindi = [
    {
        id: 'module-1',
        courseId: 'python-ai-course',
        order: 1,
        title: 'मॉड्यूल 1 — मशीन लर्निंग के लिए पायथन',
        sections: [
            {
                title: "पाठ्यक्रम विवरणिका (Course Brochure)",
                content: "कृपया नीचे विस्तृत पाठ्यक्रम विवरणिका की समीक्षा करें।",
                pdfUrl: "/AI Course Broucher.pdf"
            },
            {
                title: "परिचय वीडियो (Introduction Video)",
                content: "AI की मूल बातें समझने के लिए यह परिचय वीडियो देखें। आगे बढ़ने के लिए आपको वीडियो पूरा करना होगा।",
                videoUrl: "/Video.mp4"
            },
            {
                title: "चर और डेटा प्रकार (Variables & Data Types)",
                content: "पायथन एक गतिशील रूप से टाइप की जाने वाली भाषा है, जिसका अर्थ है कि आपको उनका उपयोग करने से पहले चर घोषित करने या उनके प्रकार को निर्दिष्ट करने की आवश्यकता नहीं है। दुभाषिया (Interpreter) रनटाइम पर प्रकार का अनुमान लगाता है।\n\n**सामान्य डेटा प्रकार:**\n- **पूर्णांक (int)**: पूर्ण संख्याएँ, जैसे, `10`, `-5`.\n- **फ्लोट (float)**: दशमलव संख्याएँ, जैसे, `10.5`, `3.14`.\n- **स्ट्रिंग (str)**: पाठ, जैसे, `'Hello'`, `'Python'`.\n- **बूलियन (bool)**: सत्य या असत्य मान।",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "सूचियाँ, ट्यूपल्स, शब्दकोश (Lists, Tuples, Dictionaries)",
                content: "ये पायथन में आवश्यक डेटा संरचनाएं हैं।\n\n- **List**: आदेशित, परिवर्तनशील संग्रह। `[]` के साथ बनाया गया।\n  - उदाहरण: `my_list = [1, 2, 'three']`\n- **Tuple**: आदेशित, अपरिवर्तनीय संग्रह। `()` के साथ बनाया गया।\n  - उदाहरण: `my_tuple = (1, 2, 'three')`\n- **Dictionary**: की-वैल्यू (key-value) जोड़े का अव्यवस्थित, परिवर्तनशील संग्रह। `{}` के साथ बनाया गया।\n  - उदाहरण: `my_dict = {'name': 'Raj', 'age': 21}`",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "फंक्शंस (Functions)",
                content: "फंक्शंस कोड के पुन: प्रयोज्य ब्लॉक हैं। वे कोड को व्यवस्थित करने और पुनरावृत्ति से बचने में मदद करते हैं।\n- `def` कीवर्ड का उपयोग करके परिभाषित किया गया।\n- पैरामीटर स्वीकार कर सकते हैं और मान लौटा सकते हैं।",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# चर और डेटा प्रकार
name = "Raj"
age = 21
cgpa = 8.5

print("Name:", name)
print("Age:", age)
print("CGPA:", cgpa)
print("Types:", type(name), type(age), type(cgpa))

# सूची और लूप
marks = [90, 85, 88, 92]
total = 0

for m in marks:
    total += m

print("Average:", total / len(marks))

# फंक्शन
def square(num):
    return num * num

print("Square of 5:", square(5))`,
        output: `Name: Raj
Age: 21
CGPA: 8.5
Types: <class 'str'> <class 'int'> <class 'float'>
Average: 88.75
Square of 5: 25`,
        mcqs: [
            {
                question: "पायथन में निम्नलिखित में से कौन सी एक अपरिवर्तनीय डेटा संरचना है?",
                options: ["List", "Dictionary", "Tuple", "Set"],
                correctAnswer: 2
            },
            {
                question: "type(10.5) का आउटपुट क्या है?",
                options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
                correctAnswer: 1
            }
        ]
    }
];

export const modulesDataKannada = [
    {
        id: 'module-1',
        courseId: 'python-ai-course',
        order: 1,
        title: 'ಮಾಡ್ಯೂಲ್ 1 — ಯಂತ್ರ ಕಲಿಕೆಗಾಗಿ ಪೈಥಾನ್',
        sections: [
            {
                title: "ಕೋರ್ಸ್ ಕರಪತ್ರ (Course Brochure)",
                content: "ದಯವಿಟ್ಟು ಕೆಳಗಿನ ವಿವರವಾದ ಕೋರ್ಸ್ ಕರಪತ್ರವನ್ನು ಪರಿಶೀಲಿಸಿ.",
                pdfUrl: "/AI Course Broucher.pdf"
            },
            {
                title: "ಪರಿಚಯ ವಿಡಿಯೋ (Introduction Video)",
                content: "AI ನ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಈ ಪರಿಚಯ ವಿಡಿಯೋವನ್ನು ವೀಕ್ಷಿಸಿ. ಮುಂದುವರಿಯಲು ನೀವು ವಿಡಿಯೋವನ್ನು ಪೂರ್ಣಗೊಳಿಸಬೇಕು।",
                videoUrl: "/Video.mp4"
            },
            {
                title: "ಚರ ಮತ್ತು ದತ್ತಾಂಶ ಪ್ರಕಾರಗಳು (Variables & Data Types)",
                content: "ಪೈಥಾನ್ ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ಟೈಪ್ ಮಾಡಲಾದ ಭಾಷೆಯಾಗಿದೆ, ಅಂದರೆ ನೀವು ಅವುಗಳನ್ನು ಬಳಸುವ ಮೊದಲು ಅಸ್ಥಿರಗಳನ್ನು ಘೋಷಿಸುವ ಅಥವಾ ಅವುಗಳ ಪ್ರಕಾರವನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸುವ ಅಗತ್ಯವಿಲ್ಲ. ಇಂಟರ್ಪ್ರಿಟರ್ ರನ್ಟೈಮ್ನಲ್ಲಿ ಪ್ರಕಾರವನ್ನು ಊಹಿಸುತ್ತದೆ.\n\n**ಸಾಮಾನ್ಯ ದತ್ತಾಂಶ ಪ್ರಕಾರಗಳು:**\n- **ಪೂರ್ಣಾಂಕ (int)**: ಪೂರ್ಣ ಸಂಖ್ಯೆಗಳು, ಉದಾ., `10`, `-5`.\n- **ಫ್ಲೋಟ್ (float)**: ದಶಮಾಂಶ ಸಂಖ್ಯೆಗಳು, ಉದಾ., `10.5`, `3.14`.\n- **ಸ್ಟ್ರಿಂಗ್ (str)**: ಪಠ್ಯ, ಉದಾ., `'Hello'`, `'Python'`.\n- **ಬೂಲಿಯನ್ (bool)**: ಸರಿ ಅಥವಾ ತಪ್ಪು ಮೌಲ್ಯಗಳು.",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# ಚರ ಮತ್ತು ದತ್ತಾಂಶ ಪ್ರಕಾರಗಳು
name = "Raj"
age = 21
cgpa = 8.5

print("Name:", name)
print("Age:", age)
print("CGPA:", cgpa)
print("Types:", type(name), type(age), type(cgpa))`,
        output: `Name: Raj
Age: 21
CGPA: 8.5
Types: <class 'str'> <class 'int'> <class 'float'>`,
        mcqs: [
            {
                question: "ಪೈಥಾನ್‌ನಲ್ಲಿ ಈ ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ಬದಲಾಯಿಸಲಾಗದ ದತ್ತಾಂಶ ರಚನೆಯಾಗಿದೆ?",
                options: ["List", "Dictionary", "Tuple", "Set"],
                correctAnswer: 2
            }
        ]
    }
];

// Fix the arrays to include rest of modules correctly.
// I will append existing modules 2-10 to Hindi/Kannada by filtering modulesData.
const commonModules = modulesData.filter(m => m.courseId === 'python-ai-course' && m.id !== 'module-1');
modulesDataHindi.push(...commonModules);
modulesDataKannada.push(...commonModules);

const nModules = modulesData.filter(m => m.courseId === 'neural-networks-course');
modulesDataHindi.push(...nModules);
modulesDataKannada.push(...nModules);
