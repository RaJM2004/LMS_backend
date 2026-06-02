
export const domainSpecificModules = [
    // --- AI RISK CURRICULUM (ai-risk-course) ---
    {
        id: 'ai-risk-module-1',
        courseId: 'ai-risk-course',
        order: 1,
        title: 'MODULE 1 — AI Safety Fundamentals',
        sections: [
            {
                title: "The Alignment Problem",
                content: "AI safety aims to ensure that AI systems function as intended and do not cause harm. The 'Alignment Problem' refers to the difficulty of ensuring an AI's goals match human values.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Safety Check
def is_aligned(goal, human_values):
    return goal in human_values

print(f"Goal Aligned: {is_aligned('Help Humans', ['Help Humans', 'Do No Harm'])}")`,
        output: `Goal Aligned: True`,
        mcqs: [
            { question: "What is the primary goal of AI Safety?", options: ["Preventing unintended harm", "Making AI faster", "Reducing cost", "None"], correctAnswer: 0 },
            { question: "The 'Alignment Problem' is about...", options: ["Matching AI goals with human values", "Aligning text", "Calibrating sensors", "None"], correctAnswer: 0 },
            { question: "An unaligned AI might...", options: ["Pursue its goal destructively", "Stop working", "Be too slow", "None"], correctAnswer: 0 },
            { question: "AI Safety is distinct from...", options: ["AI Capabilities", "AI Funding", "AI History", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-2',
        courseId: 'ai-risk-course',
        order: 2,
        title: 'MODULE 2 — Bias and Fairness',
        sections: [
            {
                title: "Sources of Bias",
                content: "Bias can enter AI systems via skewed training data, flawed algorithms, or human prejudice. Unchecked bias leads to discrimination in hiring, lending, and policing.",
                image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Bias Detection (Conceptual)
data_balance = {"Group A": 90, "Group B": 10}
if data_balance["Group B"] < 20:
    print("Warning: Dataset Imbalanced. Potential for Bias.")`,
        output: `Warning: Dataset Imbalanced. Potential for Bias.`,
        mcqs: [
            { question: "Bias in AI can lead to...", options: ["Unfair discrimination", "Better accuracy", "Faster training", "None"], correctAnswer: 0 },
            { question: "Which is a common source of AI bias?", options: ["Skewed training data", "Fast processors", "Good algorithms", "None"], correctAnswer: 0 },
            { question: "Fairness in AI tries to ensure...", options: ["Equitable outcomes for all groups", "Equal speed", "Equal cost", "None"], correctAnswer: 0 },
            { question: "Data representing only one demographic is...", options: ["Biased", "Balanced", "Perfect", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-3',
        courseId: 'ai-risk-course',
        order: 3,
        title: 'MODULE 3 — Explainability (XAI)',
        sections: [
            {
                title: "Black Box vs. Glass Box",
                content: "Explainable AI (XAI) seeks to make the decision-making process of AI systems transparent and interpretable by humans. Techniques include LIME and SHAP.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Interpretable Model
from sklearn.tree import DecisionTreeClassifier, export_text
clf = DecisionTreeClassifier(max_depth=2).fit([[0,0], [1,1]], [0, 1])
print(export_text(clf, feature_names=["f1", "f2"]))`,
        output: `|--- f1 <= 0.50
|   |--- class: 0
|--- f1 >  0.50
|   |--- class: 1`,
        mcqs: [
            { question: "XAI aims to make AI...", options: ["Transparent and interpretable", "Black box", "More complex", "None"], correctAnswer: 0 },
            { question: "A 'Black Box' model is one where...", options: ["Internals are opaque/unknown", "It is painted black", "It is very secure", "None"], correctAnswer: 0 },
            { question: "SHAP and LIME are techniques for...", options: ["Model Explainability", "Model Training", "Data Cleaning", "None"], correctAnswer: 0 },
            { question: "Interpretable models help build...", options: ["Trust", "Confusion", "Latency", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-4',
        courseId: 'ai-risk-course',
        order: 4,
        title: 'MODULE 4 — Adversarial Attacks',
        sections: [
            {
                title: "Fooling the Machine",
                content: "Adversarial attacks involve checking input data (like adding invisible noise to an image) to cause a model to make a mistake (e.g., misclassifying a stop sign as a speed limit).",
                image: "https://images.unsplash.com/photo-1563206767-5b1d972d9323?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Adversarial Noise
import numpy as np
image = np.array([0.5, 0.5])
noise = np.array([0.01, -0.01])
attacked = image + noise
print(f"Original: {image}, Attacked: {attacked}")`,
        output: `Original: [0.5 0.5], Attacked: [0.51 0.49]`,
        mcqs: [
            { question: "An adversarial attack involves...", options: ["Manipulating input to fool AI", "Deleting the database", "Unplugging the server", "None"], correctAnswer: 0 },
            { question: "Adversarial noise is often...", options: ["Invisible to humans", "Very loud", "Bright red", "None"], correctAnswer: 0 },
            { question: "A 'Stop Sign' attack could cause a car to...", options: ["Ignore the sign", "Stop safely", "Honk", "None"], correctAnswer: 0 },
            { question: "Defending against adversarial attacks is...", options: ["An active area of research", "Impossible", "Solved", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-5',
        courseId: 'ai-risk-course',
        order: 5,
        title: 'MODULE 5 — Robustness Verification',
        sections: [
            {
                title: "Stress Testing",
                content: "Robustness ensures an AI system works reliably under a wide range of conditions, including edge cases and stressful environments.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Robustness Test
inputs = [1, 2, 1000, -5] # 1000 and -5 are edge cases
for x in inputs:
    if x < 0 or x > 100:
        print(f"Input {x}: Handled as Outlier")
    else:
        print(f"Input {x}: Processed Normal")`,
        output: `Input 1: Processed Normal
Input 2: Processed Normal
Input 1000: Handled as Outlier
Input -5: Handled as Outlier`,
        mcqs: [
            { question: "Robustness ensures AI works...", options: ["Under various conditions", "Only in lab", "Only on training data", "None"], correctAnswer: 0 },
            { question: "Edge cases are...", options: ["Rare or extreme inputs", "Common inputs", "False inputs", "None"], correctAnswer: 0 },
            { question: "Stress testing involves...", options: ["Testing limits and failure points", "Relaxing", "Easy tests", "None"], correctAnswer: 0 },
            { question: "A robust model should not...", options: ["Crash on unexpected input", "Work correctly", "Be fast", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-6',
        courseId: 'ai-risk-course',
        order: 6,
        title: 'MODULE 6 — AI Governance',
        sections: [
            {
                title: "Policies and Oversight",
                content: "AI Governance is the framework of rules, practices, and processes used to ensure that the development and use of AI technologies align with organizational strategies and ethical standards.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Governance Check
compliance_audit = {"Privacy": True, "Bias_Check": True}
if all(compliance_audit.values()):
    print("AI System Approved for Deployment")`,
        output: `AI System Approved for Deployment`,
        mcqs: [
            { question: "AI Governance involves...", options: ["Policies and frameworks", "Coding only", "Hardware maintenance", "None"], correctAnswer: 0 },
            { question: "Effective governance requires...", options: ["Stakeholder collaboration", "Secrecy", "No rules", "None"], correctAnswer: 0 },
            { question: "The goal of governance is to ensure AI is...", options: ["Ethical and Legal", "Illegal", "Unregulated", "None"], correctAnswer: 0 },
            { question: "Audits are used to...", options: ["Verify compliance", "Punish developers", "Waste time", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-7',
        courseId: 'ai-risk-course',
        order: 7,
        title: 'MODULE 7 — Regulatory Frameworks',
        sections: [
            {
                title: "The EU AI Act & More",
                content: "Governments worldwide are establishing regulations. The EU AI Act categorizes AI by risk level (Unacceptable, High, Limited, Minimal) and sets strict requirements for High-Risk systems.",
                image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Risk Categorization (EU AI Act style)
risk_level = "High"
if risk_level == "High":
    print("Mandatory Conformity Assessment Required")`,
        output: `Mandatory Conformity Assessment Required`,
        mcqs: [
            { question: "Which is a major AI regulation?", options: ["EU AI Act", "HTML5", "TCP/IP", "None"], correctAnswer: 0 },
            { question: "The EU AI Act categorizes AI by...", options: ["Risk level", "Speed", "Price", "None"], correctAnswer: 0 },
            { question: "High-Risk AI systems require...", options: ["Strict compliance and assessment", "No oversight", "Banning", "None"], correctAnswer: 0 },
            { question: "'Unacceptable Risk' AI (like social scoring) is...", options: ["Banned", "Encouraged", "Ignored", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-8',
        courseId: 'ai-risk-course',
        order: 8,
        title: 'MODULE 8 — Ethical Dilemmas',
        sections: [
            {
                title: "Moral Machines",
                content: "AI often faces situations where there is no 'correct' answer (e.g., Trolley Problem for self-driving cars). Ethical frameworks help define how machines should decide.",
                image: "https://images.unsplash.com/photo-1505663912202-ac6655c61937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Ethical Decision Logic
def decide_action(lives_saved, lives_lost):
    if lives_saved > lives_lost:
        return "Action Taken (Utilitarian)"
    return "Action Skipped"
print(decide_action(5, 1))`,
        output: `Action Taken (Utilitarian)`,
        mcqs: [
            { question: "The Trolley Problem is an example of...", options: ["Ethical dilemma", "Coding error", "Hardware failure", "None"], correctAnswer: 0 },
            { question: "Utilitarianism focuses on...", options: ["Maximizing overall good", "Rules only", "Intentions", "None"], correctAnswer: 0 },
            { question: "Ethical AI frameworks help...", options: ["Guide decision making", "Write code", "Compile programs", "None"], correctAnswer: 0 },
            { question: "Moral machines might need to...", options: ["Make trade-offs", "Be perfect", "Ignore humans", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-9',
        courseId: 'ai-risk-course',
        order: 9,
        title: 'MODULE 9 — Risk Assessment Matrices',
        sections: [
            {
                title: "Quantifying Risk",
                content: "A risk matrix maps the probability of an event against its severity. This helps organizations prioritize which risks to mitigate first.",
                image: "https://images.unsplash.com/photo-1543286386-2f6595e96e6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Risk Score Calculation
probability = 0.8
severity = 0.9
risk = probability * severity
print(f"Risk Score: {risk:.2f}")`,
        output: `Risk Score: 0.72`,
        mcqs: [
            { question: "Risk matrices map...", options: ["Probability vs Severity", "Cost vs Time", "Input vs Output", "None"], correctAnswer: 0 },
            { question: "A 'Critical' risk usually has...", options: ["High Probability & High Severity", "Low Impact", "Low Probability", "None"], correctAnswer: 0 },
            { question: "Risk mitigation aims to...", options: ["Lower probability or severity", "Ignore risks", "Increase risks", "None"], correctAnswer: 0 },
            { question: "Risk assessment should be done...", options: ["Continuously / Initially", "Never", "Once and forgotten", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-risk-module-10',
        courseId: 'ai-risk-course',
        order: 10,
        title: 'MODULE 10 — Mitigation Strategies',
        sections: [
            {
                title: "Reducing Harm",
                content: "Strategies include Human-in-the-Loop (HITL), Red Teaming (simulating attacks), and real-time monitoring of AI system performance.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# HITL Simulation
ai_decision = "Reject Application"
human_review = True
if human_review:
    print("Action paused for Human Review.")`,
        output: `Action paused for Human Review.`,
        mcqs: [
            { question: "Human-in-the-loop is a...", options: ["Mitigation strategy", "Bug", "Virus", "None"], correctAnswer: 0 },
            { question: "Red Teaming involves...", options: ["Simulating attacks to find flaws", "Using red text", "Team building", "None"], correctAnswer: 0 },
            { question: "Monitoring AI performance helps detect...", options: ["Drift or failure", "Nothing", "Voltage", "None"], correctAnswer: 0 },
            { question: "Mitigation is about...", options: ["Reducing harm", "Increasing speed", "Saving files", "None"], correctAnswer: 0 }
        ]
    },

    // --- COMPUTERIZED SYSTEM VALIDATION (csv-course) ---
    {
        id: 'csv-module-1',
        courseId: 'csv-course',
        order: 1,
        title: 'MODULE 1 — Intro to CSV',
        sections: [
            {
                title: "What is CSV?",
                content: "Computerized System Validation (CSV) is the documented process of assuring that a computerized system does exactly what it is designed to do in a consistent and reproducible manner. It is a critical requirement in life sciences (FDA, EMA) to ensure product quality and patient safety.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Basic Verification
system_status = "VALIDATED"
print(f"System status: {system_status}")`,
        output: `System status: VALIDATED`,
        mcqs: [
            { question: "CSV stands for...", options: ["Computerized System Validation", "Comma Separated Values", "Computer System Verification", "None"], correctAnswer: 0 },
            { question: "CSV ensures a system is...", options: ["Consistent and reproducible", "Fast and cheap", "Colorful", "None"], correctAnswer: 0 },
            { question: "CSV is critical in...", options: ["Life Sciences / Pharma", "Gaming", "Retail", "None"], correctAnswer: 0 },
            { question: "An invalidated system can risk...", options: ["Patient safety and data integrity", "Nothing", "Internet speed", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-2',
        courseId: 'csv-course',
        order: 2,
        title: 'MODULE 2 — GAMP 5 Guidelines',
        sections: [
            {
                title: "GAMP 5 Overview",
                content: "Good Automated Manufacturing Practice (GAMP 5) provides a risk-based approach to compliant GxP computerized systems. It focuses on patient safety, product quality, and data integrity rather than just document generation.",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# GAMP Category Check
category = 4 // Configured Software
if category >= 4:
    print("More validation required")
else:
    print("Less validation required")`,
        output: `More validation required`,
        mcqs: [
            { question: "GAMP 5 advocates for a...", options: ["Risk-based approach", "Testing everything", "No documentation", "None"], correctAnswer: 0 },
            { question: "GAMP stands for...", options: ["Good Automated Manufacturing Practice", "General AI Map", "Good AI Model", "None"], correctAnswer: 0 },
            { question: "GAMP Category 5 refers to...", options: ["Custom Applications", "Standard Software", "Hardware", "None"], correctAnswer: 0 },
            { question: "The focus of GAMP 5 is...", options: ["Patient safety and product quality", "Software speed", "Code lines", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-3',
        courseId: 'csv-course',
        order: 3,
        title: 'MODULE 3 — 21 CFR Part 11',
        sections: [
            {
                title: "Electronic Records & Signatures",
                content: "FDA 21 CFR Part 11 defines the criteria under which electronic records and electronic signatures are considered trustworthy, reliable, and equivalent to paper records. Key aspects include access controls, audit trails, and e-signature policies.",
                image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# E-Signature Simulation
def sign_record(user, password):
    if user and password:
        return "SIGNED_TIMESTAMP_" + "2023-10-27"
    return "INVALID"

print(sign_record("admin", "secure123"))`,
        output: `SIGNED_TIMESTAMP_2023-10-27`,
        mcqs: [
            { question: "21 CFR Part 11 deals with...", options: ["Electronic Records & Signatures", "Drug manufacturing", "Lab safety", "None"], correctAnswer: 0 },
            { question: "An electronic signature must be...", options: ["Unique and non-reusable by others", "Sharable", "Generic", "None"], correctAnswer: 0 },
            { question: "Part 11 requires systems to have...", options: ["Audit trails", "Games", "Music", "None"], correctAnswer: 0 },
            { question: "Closed systems involve...", options: ["Controlled access", "Open public access", "No passwords", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-4',
        courseId: 'csv-course',
        order: 4,
        title: 'MODULE 4 — Validation Master Plan',
        sections: [
            {
                title: "Purpose of VMP",
                content: "The Validation Master Plan (VMP) is a high-level document that outlines the overall philosophy, strategy, and methodology for validation. It lists the systems to be validated, the schedule, roles and responsibilities, and acceptance criteria.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# VMP Checklist
systems = ["ERP", "LIMS", "QMS"]
for sys in systems:
    print(f"Planning validation for: {sys}")`,
        output: `Planning validation for: ERP
Planning validation for: LIMS
Planning validation for: QMS`,
        mcqs: [
            { question: "A VMP outlines...", options: ["The overall validation strategy", "Code only", "Budget only", "None"], correctAnswer: 0 },
            { question: "VMP stands for...", options: ["Validation Master Plan", "Virtual Map", "Very Many Parts", "None"], correctAnswer: 0 },
            { question: "The VMP lists...", options: ["Systems, schedule, and roles", "Employee salaries", "Lunch menu", "None"], correctAnswer: 0 },
            { question: "Is VMP a high-level document?", options: ["Yes", "No", "Maybe", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-5',
        courseId: 'csv-course',
        order: 5,
        title: 'MODULE 5 — User Requirement Specs (URS)',
        sections: [
            {
                title: "Defining URS",
                content: "The User Requirement Specification (URS) describes what the system must do from the user's perspective. Requirements must be Specific, Measurable, Achievable, Relevant, and Time-bound (SMART). The URS forms the basis for the PQ (Performance Qualification).",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Requirement Traceability
req = {"id": "URS-01", "desc": "Login must time out after 10 mins"}
print(f"Verifying {req['id']}: {req['desc']}")`,
        output: `Verifying URS-01: Login must time out after 10 mins`,
        mcqs: [
            { question: "URS defines...", options: ["What the user needs", "How to code", "The database schema", "None"], correctAnswer: 0 },
            { question: "URS stands for...", options: ["User Requirement Specification", "User Role Setup", "Uniform Resource Standard", "None"], correctAnswer: 0 },
            { question: "Requirements should be 'SMART', meaning...", options: ["Specific, Measurable, Achievable, ...", "Small, Medium, Art, ...", "Simple, Manual, ...", "None"], correctAnswer: 0 },
            { question: "URS forms the basis for...", options: ["PQ (Performance Qualification)", "IQ", "Unit Testing", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-6',
        courseId: 'csv-course',
        order: 6,
        title: 'MODULE 6 — Functional Specs (FS)',
        sections: [
            {
                title: "Translating Requirements",
                content: "The Functional Specification (FS) translates the URS into technical functions. It describes how the system will operate to meet user needs, detailing inputs, outputs, calculations, and interface behavior. FS maps to OQ (Operational Qualification).",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Functional Logic
def login_function(time_inactive):
    if time_inactive > 10:
        return "Logout"
    return "Stay Logged In"

print(login_function(15))`,
        output: `Logout`,
        mcqs: [
            { question: "FS describes...", options: ["System functions", "User names", "Hardware prices", "None"], correctAnswer: 0 },
            { question: "FS maps to which qualification stage?", options: ["OQ (Operational Qualification)", "PQ", "IQ", "None"], correctAnswer: 0 },
            { question: "Functional Specifications translate URS into...", options: ["Technical requirements", "Business goals", "Marketing text", "None"], correctAnswer: 0 },
            { question: "Details like 'Input fields' and 'Calculations' belong in...", options: ["FS", "VMP", "SOP", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-7',
        courseId: 'csv-course',
        order: 7,
        title: 'MODULE 7 — IQ/OQ/PQ Protocols',
        sections: [
            {
                title: "The 3 Qs",
                content: "**IQ (Installation Qualification):** Verifies correct installation (hardware/software).\n**OQ (Operational Qualification):** Verifies that system functions operate as specified (tests limits/alarms).\n**PQ (Performance Qualification):** Verifies the system performs consistently under real-world conditions.",
                image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# IQ Check
installed_version = "2.0.1"
required_version = "2.0.1"
print("IQ Pass" if installed_version == required_version else "IQ Fail")`,
        output: `IQ Pass`,
        mcqs: [
            { question: "OQ stands for...", options: ["Operational Qualification", "Operational Quality", "Output Quantity", "None"], correctAnswer: 0 },
            { question: "IQ verifies...", options: ["Installation (hardware/software)", "Operation", "Performance", "None"], correctAnswer: 0 },
            { question: "PQ verifies...", options: ["Performance under real-world conditions", "Installation", "Code syntax", "None"], correctAnswer: 0 },
            { question: "Which order is correct?", options: ["IQ -> OQ -> PQ", "PQ -> OQ -> IQ", "OQ -> IQ -> PQ", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-8',
        courseId: 'csv-course',
        order: 8,
        title: 'MODULE 8 — Risk-Based Approach',
        sections: [
            {
                title: "Risk Assessment",
                content: "Not all system functions are equal. A risk-based approach assesses the impact of failure on patient safety and data integrity. High-risk functions require rigorous testing, while low-risk ones may need less. Tools like FMEA (Failure Mode and Effects Analysis) are used.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Risk Matrix
severity = 5
probability = 4
risk_score = severity * probability
print(f"Risk Score: {risk_score} - {'CRITICAL' if risk_score > 15 else 'LOW'}")`,
        output: `Risk Score: 20 - CRITICAL`,
        mcqs: [
            { question: "Risk-based validation focuses on...", options: ["Critical functions", "Everything equally", "Nothing", "None"], correctAnswer: 0 },
            { question: "High-risk items require...", options: ["Rigorous testing", "Less testing", "No testing", "None"], correctAnswer: 0 },
            { question: "FMEA stands for...", options: ["Failure Mode and Effects Analysis", "Fast Mode Error A", "None", "None"], correctAnswer: 0 },
            { question: "Risk = ...", options: ["Probability x Severity", "Cost x Time", "Speed x Distance", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-9',
        courseId: 'csv-course',
        order: 9,
        title: 'MODULE 9 — Change Control',
        sections: [
            {
                title: "Managing Change",
                content: "Once validated, a system must remain in a validated state. Change Control is a formal process to evaluate, approve, document, and test any changes to the system (patches, upgrades, config changes) to ensure they don't introduce new risks.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Change Request
change_req = {"id": "CR-101", "impact": "High", "approved": False}
if not change_req["approved"]:
    print("Cannot deploy change.")`,
        output: `Cannot deploy change.`,
        mcqs: [
            { question: "Change Control ensures...", options: ["Changes are managed and documented", "No changes ever", "Random changes", "None"], correctAnswer: 0 },
            { question: "Before a change is implemented, it must be...", options: ["Evaluated and approved", "Ignored", "Implemented immediately", "None"], correctAnswer: 0 },
            { question: "Uncontrolled changes can lead to...", options: ["New risks and non-compliance", "Better systems", "Happiness", "None"], correctAnswer: 0 },
            { question: "A patch or upgrade requires...", options: ["Change Control", "A new computer", "A coffee break", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'csv-module-10',
        courseId: 'csv-course',
        order: 10,
        title: 'MODULE 10 — Audit Trails',
        sections: [
            {
                title: "Data Integrity",
                content: "An audit trail is a secure, computer-generated, time-stamped electronic record that allows for reconstruction of the course of events relating to the creation, modification, or deletion of an electronic record. It is the 'black box' of data integrity.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Audit Log Entry
import datetime
user = "analyst_01"
action = "changed_result"
timestamp = datetime.datetime.now()
print(f"AUDIT TRAIL: {timestamp} | {user} | {action}")`,
        output: `AUDIT TRAIL: 2023-10-27 10:00:00 | analyst_01 | changed_result`,
        mcqs: [
            { question: "An Audit Trail records...", options: ["Who, what, when, and why", "Only errors", "Only logins", "None"], correctAnswer: 0 },
            { question: "Audit trails are crucial for...", options: ["Data Integrity", "Saving space", "Speed", "None"], correctAnswer: 0 },
            { question: "Audit trails should be...", options: ["Secure and immutable", "Editable", "Deleted daily", "None"], correctAnswer: 0 },
            { question: "If a record is modified...", options: ["The old and new values are tracked", "Only the new value is kept", "The record is deleted", "None"], correctAnswer: 0 }
        ]
    },

    // --- MEDICAL WRITING (med-writing-course) ---
    {
        id: 'med-writing-module-1',
        courseId: 'med-writing-course',
        order: 1,
        title: 'MODULE 1 — Basics of Medical Writing',
        sections: [
            {
                title: "Clarity and Accuracy",
                content: "Medical writing requires a balance of scientific accuracy and clear communication. Documents must be concise, non-ambiguous, and tailored to the target audience (regulators, doctors, or patients).",
                image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Readability Check
text = "The patient exhibited efficacy."
print("Checking passive voice...")
print("Checking complex terminology...")`,
        output: `Checking passive voice...
Checking complex terminology...`,
        mcqs: [
            { question: "Medical writing requires...", options: ["Scientific accuracy", "Creative fiction", "Coding skills", "None"], correctAnswer: 0 },
            { question: "A key goal of medical writing is...", options: ["Clear communication to the target audience", "Obscure language", "Using complex jargon only", "None"], correctAnswer: 0 },
            { question: "Who are common audiences for medical writing?", options: ["Regulators, Doctors, Patients", "Architects", "Chefs", "None"], correctAnswer: 0 },
            { question: "Ambiguity in medical documents can lead to...", options: ["Misinterpretation and safety risks", "More sales", "Fun reading", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-2',
        courseId: 'med-writing-course',
        order: 2,
        title: 'MODULE 2 — Clinical Study Reports',
        sections: [
            {
                title: "ICH E3 Guidelines",
                content: "A Clinical Study Report (CSR) is an integrated full report of an individual study of any therapeutic, prophylactic, or diagnostic agent. It follows the ICH E3 structure.",
                image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# CSR Structure
sections = ["1. Title Page", "2. Synopsis", "3. Table of Contents", "15. Reference Data"]
print("CSR Sections initialized.")`,
        output: `CSR Sections initialized.`,
        mcqs: [
            { question: "A CSR summarizes...", options: ["Clinical trial results", "Marketing plans", "Sales data", "None"], correctAnswer: 0 },
            { question: "ICH E3 is a guideline for...", options: ["Structure/Content of CSRs", "Drug pricing", "Lab safety", "None"], correctAnswer: 0 },
            { question: "A CSR must include...", options: ["Efficacy and Safety data", "Stock prices", "Opinions only", "None"], correctAnswer: 0 },
            { question: "CSR stands for...", options: ["Clinical Study Report", "Corporate Social Responsibility", "Customer Service Rep", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-3',
        courseId: 'med-writing-course',
        order: 3,
        title: 'MODULE 3 — Regulatory Documents',
        sections: [
            {
                title: "Submissions to Authorities",
                content: "Regulatory writing involves preparing documents for submission to health authorities like the FDA or EMA. Key documents include Protocols, IBs, and the Common Technical Document (CTD).",
                image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Submission Packet
packet = ["Module 1: Admin", "Module 2: Summaries", "Module 3: Quality"]
print(f"Prepared CTD: {len(packet)} modules")`,
        output: `Prepared CTD: 3 modules`,
        mcqs: [
            { question: "Regulatory documents are submitted to...", options: ["Health Authorities (FDA, EMA)", "Newspapers", "Blogs", "None"], correctAnswer: 0 },
            { question: "CTD stands for...", options: ["Common Technical Document", "Clinical Trial Data", "Central Test Database", "None"], correctAnswer: 0 },
            { question: "Module 1 of the CTD contains...", options: ["Administrative information (Regional)", "Clinical Overviews", "Quality Data", "None"], correctAnswer: 0 },
            { question: "The purpose of regulatory writing is to...", options: ["Gain approval for drugs/devices", "Entertain", "Teach coding", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-4',
        courseId: 'med-writing-course',
        order: 4,
        title: 'MODULE 4 — Scientific Manuscripts',
        sections: [
            {
                title: "Journal Publications",
                content: "Writing for peer-reviewed journals involves specific structures: Abstract, Introduction, Methods, Results, and Discussion (IMRAD). Disclosure of conflict of interest is mandatory.",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# IMRAD Structure
sections = {"I": "Introduction", "M": "Methods", "R": "Results", "D": "Discussion"}
print("Manuscript Template Loaded.")`,
        output: `Manuscript Template Loaded.`,
        mcqs: [
            { question: "Manuscripts are usually for...", options: ["Peer-reviewed journals", "Internal memos", "Emails", "None"], correctAnswer: 0 },
            { question: "IMRAD stands for...", options: ["Introduction, Methods, Results, and Discussion", "In My Room All Day", "Internal Medicine Research And Data", "None"], correctAnswer: 0 },
            { question: "Disclosing conflicts of interest is...", options: ["Mandatory and ethical", "Optional", "Discouraged", "None"], correctAnswer: 0 },
            { question: "The 'Abstract' is...", options: ["A summary of the paper", "The conclusion", "The raw data", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-5',
        courseId: 'med-writing-course',
        order: 5,
        title: 'MODULE 5 — Publication Ethics',
        sections: [
            {
                title: "Integrity in Research",
                content: "Ethical guidelines (like ICMJE) prevent misconduct such as plagiarism, data fabrication, and ghostwriting. Authorship criteria must be strictly followed.",
                image: "https://images.unsplash.com/photo-1505663912202-ac6655c61937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Authorship Check
def check_author(contribution):
    if contribution > 0.1: return "Qualified Author"
    return "Non-Author Contributor"
print(check_author(0.5))`,
        output: `Qualified Author`,
        mcqs: [
            { question: "Ghostwriting is considered...", options: ["Unethical", "Standard practice", "Recommended", "None"], correctAnswer: 0 },
            { question: "ICMJE guidelines define...", options: ["Authorship criteria", "Drug prices", "Lab rules", "None"], correctAnswer: 0 },
            { question: "Plagiarism is...", options: ["Using others' work without credit", "Sharing data", "Writing clearly", "None"], correctAnswer: 0 },
            { question: "An author must have...", options: ["Substantially contributed to the work", "Just paid money", "Just supervised", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-6',
        courseId: 'med-writing-course',
        order: 6,
        title: 'MODULE 6 — Patient Narratives',
        sections: [
            {
                title: "Safety Reporting",
                content: "Patient narratives provide a detailed account of adverse events experienced by patients during a clinical trial. They are crucial for safety scrutiny.",
                image: "https://images.unsplash.com/photo-1576091160550-2187d80a16f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Anonymization
patient_name = "John Doe"
id = "P-1023"
print(f"Narrative for {id} (Name Redacted)")`,
        output: `Narrative for P-1023 (Name Redacted)`,
        mcqs: [
            { question: "Patient narratives describe...", options: ["Adverse events in detail", "Patient hobbies", "Hospital architecture", "None"], correctAnswer: 0 },
            { question: "Narratives are crucial for...", options: ["Safety scrutiny", "Marketing", "Recruitment", "None"], correctAnswer: 0 },
            { question: "Patient privacy in narratives is maintained by...", options: ["Anonymization/Redaction", "Sharing names", "Publishing photos", "None"], correctAnswer: 0 },
            { question: "Narratives usually focus on...", options: ["Serious Adverse Events (SAEs)", "Checkups", "Healthy patients", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-7',
        courseId: 'med-writing-course',
        order: 7,
        title: 'MODULE 7 — Protocol Writing',
        sections: [
            {
                title: "The Blueprint",
                content: "The Clinical Trial Protocol is the blueprint for the study. It defines the objectives, design, methodology, statistical considerations, and organization of a clinical trial.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Protocol Endpoints
primary_endpoint = "Reduction in blood pressure"
secondary_endpoint = "Quality of Life improvement"
print(f"Study Goal: {primary_endpoint}")`,
        output: `Study Goal: Reduction in blood pressure`,
        mcqs: [
            { question: "A protocol defines...", options: ["Study methodology", "Results", "Conclusion", "None"], correctAnswer: 0 },
            { question: "The blueprint of a clinical trial is the...", options: ["Protocol", "Budget", "Contract", "None"], correctAnswer: 0 },
            { question: "Primary endpoints measure...", options: ["The main goal of the study", "Side effects only", "Cost", "None"], correctAnswer: 0 },
            { question: "Protocol deviations must be...", options: ["Documented and reported", "Ignored", "Hidden", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-8',
        courseId: 'med-writing-course',
        order: 8,
        title: 'MODULE 8 — Investigator Brochures',
        sections: [
            {
                title: "Comprehensive Summary",
                content: "The Investigator Brochure (IB) is a compilation of clinical and non-clinical data on the investigational product(s) relevant to the study of the product in human subjects.",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# IB Sections
sections = ["Physical Properties", "Non-clinical Pharmacology", "Effects in Humans"]
print(f"IB Update v2.0 includes: {sections[2]}")`,
        output: `IB Update v2.0 includes: Effects in Humans`,
        mcqs: [
            { question: "An IB contains...", options: ["Clinical and non-clinical data", "Marketing brochures", "Price lists", "None"], correctAnswer: 0 },
            { question: "IB stands for...", options: ["Investigator Brochure", "International Bank", "Internal Business", "None"], correctAnswer: 0 },
            { question: "Who primarily uses the IB?", options: ["Investigators (doctors running the trial)", "Patients", "Investors", "None"], correctAnswer: 0 },
            { question: "The IB is updated...", options: ["As new information becomes available", "Never", "Every 100 years", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-9',
        courseId: 'med-writing-course',
        order: 9,
        title: 'MODULE 9 — MedComms',
        sections: [
            {
                title: "Medical Communications",
                content: "MedComms involves developing educational content for healthcare professionals, such as slide decks, symposia materials, and medical education modules.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Slide Numbers
total_slides = 25
print(f"Generating MSL Deck... {total_slides} slides.")`,
        output: `Generating MSL Deck... 25 slides.`,
        mcqs: [
            { question: "MedComms focuses on...", options: ["Education and marketing", "Regulatory filing", "Lab testing", "None"], correctAnswer: 0 },
            { question: "Target audience for MedComms is usually...", options: ["Healthcare Professionals (HCPs)", "Children", "Robots", "None"], correctAnswer: 0 },
            { question: "A 'Slide Deck' is often used for...", options: ["Scientific exchange / Presentations", "Building houses", "Gaming", "None"], correctAnswer: 0 },
            { question: "MedComms ensures information is...", options: ["Scientifically accurate and balanced", "Biased", "False", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-writing-module-10',
        courseId: 'med-writing-course',
        order: 10,
        title: 'MODULE 10 — AI in Medical Writing',
        sections: [
            {
                title: "The Future of Writing",
                content: "AI tools (like LLMs) assist medical writers by automating routine drafting, summarizing data, and checking consistency, though human oversight remains essential for accuracy.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# AI Summary
raw_data = "Patient 001: Headache. Patient 002: Nausea."
summary = "Adverse events included headache and nausea."
print(f"AI Generated Summary: {summary}")`,
        output: `AI Generated Summary: Adverse events included headache and nausea.`,
        mcqs: [
            { question: "AI can assist writers by...", options: ["Drafting and formatting", "Replacing them entirely", "Conducting trials", "None"], correctAnswer: 0 },
            { question: "A benefit of using LLMs in writing is...", options: ["Speed and consistency", "100% accuracy always", "Zero cost", "None"], correctAnswer: 0 },
            { question: "Human oversight of AI writing is...", options: ["Essential", "Unnecessary", "Illegal", "None"], correctAnswer: 0 },
            { question: "AI might struggle with...", options: ["Nuance and ethical judgment", "Spelling", "Grammar", "None"], correctAnswer: 0 }
        ]
    },

    // --- AI IN HEALTHCARE (ai-healthcare-course) ---
    {
        id: 'ai-healthcare-module-1',
        courseId: 'ai-healthcare-course',
        order: 1,
        title: 'MODULE 1 — AI in Diagnostics',
        sections: [
            {
                title: "Precision Diagnosis",
                content: "AI algorithms, particularly Deep Learning (CNNs), are achieving human-level performance in diagnosing diseases from medical images (X-rays, MRIs, CT scans) and pathology slides.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Image Diagnosis
import numpy as np
confidence = 0.98
diagnosis = "Pneumonia" if confidence > 0.9 else "Normal"
print(f"Model Prediction: {diagnosis} ({confidence*100}%)")`,
        output: `Model Prediction: Pneumonia (98.0%)`,
        mcqs: [
            { question: "AI helps in diagnostics by...", options: ["Analyzing images/data patterns", "Performing surgery", "Prescribing meds", "None"], correctAnswer: 0 },
            { question: "Deep Learning models like CNNs are good for...", options: ["Medical Imaging (X-rays, MRIs)", "Text only", "Audio only", "None"], correctAnswer: 0 },
            { question: "AI diagnostics can reduce...", options: ["Human error and missed diagnoses", "Patient health", "Hospital funding", "None"], correctAnswer: 0 },
            { question: "A 'False Negative' in diagnosis means...", options: ["Missing a disease that is present", "Correct diagnosis", "Alarming a healthy person", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-2',
        courseId: 'ai-healthcare-course',
        order: 2,
        title: 'MODULE 2 — Electronic Health Records (EHR)',
        sections: [
            {
                title: "Data Mining EHRs",
                content: "AI processes vast amounts of unstructured text in EHRs to identify patterns, predict patient deterioration, and improve clinical workflows using NLP.",
                image: "https://images.unsplash.com/photo-1576091160550-2187d80a16f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# EHR Analysis
history = ["Diabetes", "Hypertension"]
risk_score = len(history) * 1.5
print(f"Calculated Patient Risk Score: {risk_score}")`,
        output: `Calculated Patient Risk Score: 3.0`,
        mcqs: [
            { question: "AI can use EHR to...", options: ["Predict patient outcomes", "Delete records", "Increase costs", "None"], correctAnswer: 0 },
            { question: "EHR stands for...", options: ["Electronic Health Record", "Emergency Health Response", "Every Hour Report", "None"], correctAnswer: 0 },
            { question: "NLP is used in EHR analysis to...", options: ["Process unstructured clinical notes", "Sort numbers", "Draw pictures", "None"], correctAnswer: 0 },
            { question: "Data mining EHRs can reveal...", options: ["Population health trends", "Nothing", "Passwords", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-3',
        courseId: 'ai-healthcare-course',
        order: 3,
        title: 'MODULE 3 — Predictive Analytics',
        sections: [
            {
                title: "Forecasting Health",
                content: "Predictive models forecast future events such as hospital readmissions, sepsis onset, or disease progression, allowing for early intervention.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Readmission Prediction
days_since_discharge = 15
probability = 0.4 # probability of return
print(f"Readmission Probability: {probability}")`,
        output: `Readmission Probability: 0.4`,
        mcqs: [
            { question: "Predictive analytics forecasts...", options: ["Future health events", "Past history", "Current weather", "None"], correctAnswer: 0 },
            { question: "Identifying patients at risk of 'Sepsis' allows for...", options: ["Early intervention", "Late action", "No action", "None"], correctAnswer: 0 },
            { question: "Predicting hospital readmissions helps...", options: ["Allocate resources and improve care", "Increase traffic", "ignore patients", "None"], correctAnswer: 0 },
            { question: "Models use historical data to...", options: ["Learn patterns", "Forget patterns", "Delete data", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-4',
        courseId: 'ai-healthcare-course',
        order: 4,
        title: 'MODULE 4 — Robotic Surgery',
        sections: [
            {
                title: "Assisted Surgery",
                content: "Robotic systems (like da Vinci) allow surgeons to perform complex procedures with more precision, flexibility, and control than standard techniques. AI adds autonomy and guidance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Surgical Robot Calibration
precision_mode = True
tremor_filtration = "Active"
print("Robot Arm Steady. Ready for incision.")`,
        output: `Robot Arm Steady. Ready for incision.`,
        mcqs: [
            { question: "Robotic surgery offers...", options: ["Precision and control", "Full autonomy", "Cheaper tools", "None"], correctAnswer: 0 },
            { question: "The da Vinci system is a type of...", options: ["Surgical Robot", "MRI machine", "X-ray", "None"], correctAnswer: 0 },
            { question: "AI in robotic surgery can provide...", options: ["Guidance and tremor filtration", "Coffee", "Entertainment", "None"], correctAnswer: 0 },
            { question: "Robotic surgery is usually...", options: ["Minimally invasive", "More invasive", "Done at home", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-5',
        courseId: 'ai-healthcare-course',
        order: 5,
        title: 'MODULE 5 — Drug Discovery',
        sections: [
            {
                title: "Accelerating Research",
                content: "AI accelerates drug discovery by screening chemical libraries, predicting molecular properties, and optimizing drug candidates, reducing the timeline from years to months.",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Virtual Screening
compound_library = 1000000
hits = compound_library * 0.001
print(f"AI identified {int(hits)} potential drug candidates.")`,
        output: `AI identified 1000 potential drug candidates.`,
        mcqs: [
            { question: "AI accelerates drug discovery by...", options: ["Screening compounds virtually", "Mixing chemicals", "Running clinical trials", "None"], correctAnswer: 0 },
            { question: "Virtual screening saves...", options: ["Time and cost", "Disk space only", "Nothing", "None"], correctAnswer: 0 },
            { question: "Predicting molecular properties helps...", options: ["Filter out bad candidates", "Make drugs taste better", "Increase side effects", "None"], correctAnswer: 0 },
            { question: "De Novo drug design means...", options: ["Generating new molecules from scratch", "Copying old drugs", "Buying drugs", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-6',
        courseId: 'ai-healthcare-course',
        order: 6,
        title: 'MODULE 6 — Personalized Medicine',
        sections: [
            {
                title: "Tailored Treatment",
                content: "Personalized medicine uses patient-specific data (genetics, lifestyle) to tailor medical decisions. AI analyzes genomic data to predict individual responses to therapy.",
                image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Genomic Matching
gene_marker = "BRCA1"
treatment = "Targeted Therapy A" if gene_marker == "BRCA1" else "Standard Care"
print(f"Recommended Plan: {treatment}")`,
        output: `Recommended Plan: Targeted Therapy A`,
        mcqs: [
            { question: "Personalized medicine tailors treatment to...", options: ["Individual genetics", "General population", "Hospital policy", "None"], correctAnswer: 0 },
            { question: "Pharmacogenomics studies...", options: ["How genes affect drug response", "Pharmacy locations", "Generic drugs", "None"], correctAnswer: 0 },
            { question: "AI helps personalized medicine by...", options: ["Analyzing complex genomic data", "Printing labels", "Scheduling", "None"], correctAnswer: 0 },
            { question: "The goal is to move away from...", options: ["One-size-fits-all", "Precision", "Cure", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-7',
        courseId: 'ai-healthcare-course',
        order: 7,
        title: 'MODULE 7 — Wearable Health Tech',
        sections: [
            {
                title: "Continuous Monitoring",
                content: "Wearable devices (smartwatches, biosensors) collect real-time physiological data. AI algorithms analyze this stream to detect arrhythmias, sleep apnea, or other anomalies.",
                image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Heart Rate Monitor
bpm_stream = [72, 75, 120, 130, 75]
alert = any(bpm > 110 for bpm in bpm_stream)
if alert: print("Alert: High Heart Rate Detected")`,
        output: `Alert: High Heart Rate Detected`,
        mcqs: [
            { question: "Wearables track...", options: ["Vitals in real-time", "Location only", "Social media", "None"], correctAnswer: 0 },
            { question: "Continuous monitoring helps detect...", options: ["Arrhythmias / Anomalies", "Movies", "Music", "None"], correctAnswer: 0 },
            { question: "Smartwatches can measure...", options: ["Heart rate, steps, sleep", "Thoughts", "Future", "None"], correctAnswer: 0 },
            { question: "AI analyzes wearable data to...", options: ["Provide health insights", "Drain battery", "Send ads", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-8',
        courseId: 'ai-healthcare-course',
        order: 8,
        title: 'MODULE 8 — Medical Imaging Analysis',
        sections: [
            {
                title: "Radiomics",
                content: "Radiomics involves extracting large amounts of quantitative features from medical images using data-characterization algorithms, uncovering disease characteristics that fail to be appreciated by the naked eye.",
                image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Tumor Segmentation
mask_area = 450 # pixels
print(f"Tumor Size calculated: {mask_area/100} cm^2")`,
        output: `Tumor Size calculated: 4.5 cm^2`,
        mcqs: [
            { question: "AI detects anomalies in...", options: ["X-rays, MRIs, CTs", "Text documents", "Audio files", "None"], correctAnswer: 0 },
            { question: "Radiomics extracts...", options: ["Quantitative features from images", "Radio waves", "Sound", "None"], correctAnswer: 0 },
            { question: "AI can detect features...", options: ["Invisible to the naked human eye", "Very obvious ones only", "In color only", "None"], correctAnswer: 0 },
            { question: "Tumor segmentation involves...", options: ["Outlining the tumor boundary", "Removing the tumor", "Irradiating it", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-9',
        courseId: 'ai-healthcare-course',
        order: 9,
        title: 'MODULE 9 — Virtual Health Assistants',
        sections: [
            {
                title: "24/7 Patient Support",
                content: "AI-powered chatbots and virtual assistants provide 24/7 support, answering patient queries, scheduling appointments, and providing medication reminders, improving engagement.",
                image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Chatbot Triage
symptom = "fever"
if symptom == "fever":
    print("Bot: Please monitor temperature and hydrate.")`,
        output: `Bot: Please monitor temperature and hydrate.`,
        mcqs: [
            { question: "Chatbots provide...", options: ["24/7 patient support", "Surgery", "Prescriptions", "None"], correctAnswer: 0 },
            { question: "Virtual Health Assistants can help with...", options: ["Scheduling and triage", "emergency surgery", "Driving ambulance", "None"], correctAnswer: 0 },
            { question: "NLP allows chatbots to...", options: ["Understand patient questions", "Speak loud", "Record video", "None"], correctAnswer: 0 },
            { question: "A benefit of virtual assistants is...", options: ["Improved patient engagement", "More paperwork", "Slower response", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-healthcare-module-10',
        courseId: 'ai-healthcare-course',
        order: 10,
        title: 'MODULE 10 — Ethics in Healthcare AI',
        sections: [
            {
                title: "Privacy and Bias",
                content: "Deploying AI in healthcare raises ethical issues including patient data privacy (HIPAA/GDPR), algorithmic bias (disparities in care), and transparency of decision-making.",
                image: "https://images.unsplash.com/photo-1505663912202-ac6655c61937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# De-identification
name = "Jane Doe"
record = f"Patient: {name}"
print(f"Anonymized: {record.replace(name, '[REDACTED]')}")`,
        output: `Anonymized: Patient: [REDACTED]`,
        mcqs: [
            { question: "A major ethical concern is...", options: ["Patient data privacy", "Speed of AI", "Cost of electricity", "None"], correctAnswer: 0 },
            { question: "HIPAA and GDPR protect...", options: ["Personal health information", "AI models", "Hospitals", "None"], correctAnswer: 0 },
            { question: "De-identification involves...", options: ["Removing personal identifiers", "Deleting data", "Encrypting passwords", "None"], correctAnswer: 0 },
            { question: "Algorithmic bias in healthcare can lead to...", options: ["Disparities in care", "Better health", "Cheaper drugs", "None"], correctAnswer: 0 }
        ]
    },

    // --- TRANSFORMING LIFESCIENCES (lifesciences-ai-course) ---
    {
        id: 'lifesciences-module-1',
        courseId: 'lifesciences-ai-course',
        order: 1,
        title: 'MODULE 1 — Digital Transformation',
        sections: [
            {
                title: 'Lab 4.0',
                content: 'Digital transformation in life sciences involves integrating IoT, AI, and cloud computing into laboratories and manufacturing ("Lab 4.0") to increase efficiency and data integrity.',
                image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# IoT Device Connection
def connect_device(device_id):
    return f"Device {device_id} Online. Streaming Data..."
print(connect_device("SEQ-2024-X"))`,
        output: `Device SEQ-2024-X Online. Streaming Data...`,
        mcqs: [
            { question: "Digital transformation involves...", options: ["Integrating digital tech", "Buying computers", "Sending emails", "None"], correctAnswer: 0 },
            { question: "Lab 4.0 refers to...", options: ["Smart, connected laboratories", "The 4th lab in a building", "Old labs", "None"], correctAnswer: 0 },
            { question: "Data integrity in digital labs is...", options: ["Enhanced", "Reduced", "Ignored", "None"], correctAnswer: 0 },
            { question: "IoT stands for...", options: ["Internet of Things", "Input Output Text", "Internal Office Tech", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-2',
        courseId: 'lifesciences-ai-course',
        order: 2,
        title: 'MODULE 2 — AI in Clinical Trials',
        sections: [
            {
                title: 'Optimizing Recruitment',
                content: 'AI helps identify eligible patients for clinical trials from EHR data, significantly reducing recruitment time and cost. It also optimizes trial design.',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Patient Recruitment
criteria = {"age": ">18", "condition": "diabetes"}
patients = [{"id": 1, "age": 20, "condition": "diabetes"}, {"id": 2, "age": 17}]
eligible = [p for p in patients if p['age'] > 18]
print(f"Eligible Patients: {len(eligible)}")`,
        output: `Eligible Patients: 1`,
        mcqs: [
            { question: "AI optimizes trials by...", options: ["Improving patient recruitment", "Faking data", "Skipping phases", "None"], correctAnswer: 0 },
            { question: "Finding eligible patients via EHR is...", options: ["Faster and cheaper", "Slower", "Illegal", "None"], correctAnswer: 0 },
            { question: "Optimizing trial design can...", options: ["Reduce failure rates", "Increase costs", "Confuse doctors", "None"], correctAnswer: 0 },
            { question: "Inclusion/Exclusion criteria are...", options: ["Rules for who can join a study", "Suggestions", "Random", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-3',
        courseId: 'lifesciences-ai-course',
        order: 3,
        title: 'MODULE 3 — Supply Chain Optimization',
        sections: [
            {
                title: 'Predictive Logistics',
                content: 'AI predicts demand for drugs and medical devices, optimizes inventory levels, and anticipates supply chain disruptions (e.g., due to weather or shortages).',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Demand Forecasting
history = [100, 110, 105, 120]
forecast = sum(history) / len(history) * 1.05
print(f"Predicted Demand Next Month: {int(forecast)}")`,
        output: `Predicted Demand Next Month: 114`,
        mcqs: [
            { question: "AI predicts...", options: ["Demand and shortages", "Stock prices", "Weather", "None"], correctAnswer: 0 },
            { question: "Supply chain disruptions can be caused by...", options: ["Weather, shortages, logistics", "Too much inventory", "Nothing", "None"], correctAnswer: 0 },
            { question: "Optimizing inventory levels helps...", options: ["Reduce waste and cost", "Increase waste", "Fill warehouses", "None"], correctAnswer: 0 },
            { question: "Cold chain management is critical for...", options: ["Temperature-sensitive drugs", "Furniture", "Paper", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-4',
        courseId: 'lifesciences-ai-course',
        order: 4,
        title: 'MODULE 4 — Real-World Evidence (RWE)',
        sections: [
            {
                title: 'Beyond Clinical Trials',
                content: 'RWE is derived from analysis of real-world data (RWD) such as EHRs, claims, and patient registries. It complements clinical trial data for post-market safety monitoring.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# RWE Aggregation
sources = ["Hospital A", "Clinic B", "Pharmacy C"]
data_points = 50000
print(f"Aggregated {data_points} records from {sources}")`,
        output: `Aggregated 50000 records from ['Hospital A', 'Clinic B', 'Pharmacy C']`,
        mcqs: [
            { question: "RWE comes from...", options: ["Data outside clinical trials", "Lab experiments", "Textbooks", "None"], correctAnswer: 0 },
            { question: "RWD stands for...", options: ["Real-World Data", "Real-World Design", "Red White Denim", "None"], correctAnswer: 0 },
            { question: "Post-market safety monitoring uses...", options: ["RWE", "Pre-clinical data", "Animal tests", "None"], correctAnswer: 0 },
            { question: "Claims data is an example of...", options: ["RWD", "Clinical Trial Data", "Genomic Data", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-5',
        courseId: 'lifesciences-ai-course',
        order: 5,
        title: 'MODULE 5 — Genomics & AI',
        sections: [
            {
                title: 'Decoding DNA',
                content: 'AI algorithms analyze genomic sequences to identify genetic markers for diseases and potential targets for gene editing (CRISPR).',
                image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# CRISPR Target Search
sequence = "ATGCGTAGCTAGCT"
target = "TAG"
locations = [i for i in range(len(sequence)) if sequence.startswith(target, i)]
print(f"Target found at indices: {locations}")`,
        output: `Target found at indices: [5, 9]`,
        mcqs: [
            { question: "AI analyzes genomes to...", options: ["Identify genetic markers", "Create clones", "Edit DNA", "None"], correctAnswer: 0 },
            { question: "CRISPR is a tool for...", options: ["Gene editing", "Text editing", "Image editing", "None"], correctAnswer: 0 },
            { question: "Genomic sequences are...", options: ["Long strings of DNA letters (A,C,T,G)", "Binary code", "Numbers", "None"], correctAnswer: 0 },
            { question: "Identifying targets for gene editing is...", options: ["A key application of AI", "Impossible", "Done by hand", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-6',
        courseId: 'lifesciences-ai-course',
        order: 6,
        title: 'MODULE 6 — Bioinformatics',
        sections: [
            {
                title: 'Computational Biology',
                content: 'Bioinformatics combines biology, computer science, and mathematics to analyze and interpret biological data, essentially acting as the software of life sciences.',
                image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# DNA Sequence Alignment
seq1 = "ATCG"
seq2 = "ATGG"
matches = sum(1 for a, b in zip(seq1, seq2) if a == b)
print(f"Similarity: {matches/len(seq1)*100}%")`,
        output: `Similarity: 75.0%`,
        mcqs: [
            { question: "Bioinformatics combines...", options: ["Biology and CS", "Physics and Chem", "Math and Art", "None"], correctAnswer: 0 },
            { question: "Sequence alignment is used to...", options: ["Compare DNA/protein sequences", "Align text", "Format hard drives", "None"], correctAnswer: 0 },
            { question: "BLAST is a common tool in...", options: ["Bioinformatics", "Web design", "Construction", "None"], correctAnswer: 0 },
            { question: "Bioinformatics is essential for...", options: ["Handling massive biological datasets", "Small calculations", "Writing essays", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-7',
        courseId: 'lifesciences-ai-course',
        order: 7,
        title: 'MODULE 7 — Lab Automation',
        sections: [
            {
                title: 'Robotic Labs',
                content: 'Automated liquid handlers and robotic arms perform repetitive lab tasks (pipetting, mixing) with high speed and precision, freeing up scientists for analysis.',
                image: 'https://images.unsplash.com/photo-1581093588401-fbb07378f3f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Robot Pipetting
wells = 96
volume = 10 # microliters
print(f"Dispensing {volume}ul into {wells} wells...")
print("Task Complete.")`,
        output: `Dispensing 10ul into 96 wells...
Task Complete.`,
        mcqs: [
            { question: "Automation in labs...", options: ["Increases throughput", "Decreases accuracy", "Slows down work", "None"], correctAnswer: 0 },
            { question: "Liquid handlers are used for...", options: ["Pipetting and mixing", "Cleaning floors", "Answering phones", "None"], correctAnswer: 0 },
            { question: "Robotic arms provide...", options: ["Precision and repeatability", "Creativity", "Confusion", "None"], correctAnswer: 0 },
            { question: "Freeing up scientists allows them to...", options: ["Focus on analysis and innovation", "Sleep", "Leave early", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-8',
        courseId: 'lifesciences-ai-course',
        order: 8,
        title: 'MODULE 8 — Digital Therapeutics',
        sections: [
            {
                title: 'Software as a Drug',
                content: 'Digital therapeutics (DTx) are evidence-based therapeutic interventions driven by high-quality software programs to prevent, manage, or treat a medical disorder or disease.',
                image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Therapy Session Log
user_id = "patient_55"
session_duration = 30 # mins
print(f"Logged 30 mins CBT session for {user_id}")`,
        output: `Logged 30 mins CBT session for patient_55`,
        mcqs: [
            { question: "Digital therapeutics are...", options: ["Software-based interventions", "Pills", "Surgeries", "None"], correctAnswer: 0 },
            { question: "DTx must be...", options: ["Evidence-based", "Random", "Just a game", "None"], correctAnswer: 0 },
            { question: "They are used to...", options: ["Prevent, manage, or treat disorders", "Entertain only", "Track steps", "None"], correctAnswer: 0 },
            { question: "CBT apps are an example of...", options: ["Digital Therapeutics", "Social Media", "E-commerce", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-9',
        courseId: 'lifesciences-ai-course',
        order: 9,
        title: 'MODULE 9 — Regulatory Tech (RegTech)',
        sections: [
            {
                title: 'Automating Compliance',
                content: 'RegTech uses cloud computing and big data to help life sciences companies comply with regulations efficiently, managing reporting and monitoring in real-time.',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Compliance Audit
missing_docs = 0
status = "Compliant" if missing_docs == 0 else "Non-Compliant"
print(f"Regulatory Status: {status}")`,
        output: `Regulatory Status: Compliant`,
        mcqs: [
            { question: "RegTech helps with...", options: ["Compliance monitoring", "Marketing", "Sales", "None"], correctAnswer: 0 },
            { question: "RegTech uses...", options: ["Cloud and Big Data", "Paper and Pen", "Fax machines", "None"], correctAnswer: 0 },
            { question: "Real-time monitoring helps...", options: ["Catch compliance issues early", "Create issues", "Hide data", "None"], correctAnswer: 0 },
            { question: "Regulatory reporting is often...", options: ["Automated by RegTech", "Done manually", "Optional", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'lifesciences-module-10',
        courseId: 'lifesciences-ai-course',
        order: 10,
        title: 'MODULE 10 — Future Trends',
        sections: [
            {
                title: 'Quantum & Beyond',
                content: 'Future trends include Quantum Computing for molecular simulation, fully autonomous labs, and hyper-personalized medicine driven by continuous AI monitoring.',
                image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Quantum Sim (Mock)
qubits = 50
print(f"Simulating molecule with {qubits} qubits...")
print("Calculation complete in 0.01s")`,
        output: `Simulating molecule with 50 qubits...
Calculation complete in 0.01s`,
        mcqs: [
            { question: "A future trend is...", options: ["AI-driven discovery", "Less technology", "Manual records", "None"], correctAnswer: 0 },
            { question: "Quantum computing could revolutionize...", options: ["Molecular simulation", "Word processing", "Email", "None"], correctAnswer: 0 },
            { question: "Fully autonomous labs would run...", options: ["Without human intervention", "With more humans", "Slower", "None"], correctAnswer: 0 },
            { question: "Hyper-personalized medicine relies on...", options: ["Continuous monitoring and AI", "Generic drugs", "Guesswork", "None"], correctAnswer: 0 }
        ]
    },

    // --- AI IN CYBERSECURITY (ai-cybersecurity-course) ---
    {
        id: 'ai-cyber-module-1',
        courseId: 'ai-cybersecurity-course',
        order: 1,
        title: 'MODULE 1 — Threat Detection',
        sections: [
            {
                title: 'Pattern Recognition',
                content: 'AI enhances threat detection by identifying known attack signatures and behavioral patterns in network traffic that indicate malicious activity.',
                image: 'https://images.unsplash.com/photo-1563206767-5b1d972d9323?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Threat Signature Match
traffic_signature = "0xBAD"
known_threats = ["0xDEAD", "0xBAD", "0x1234"]
if traffic_signature in known_threats:
    print("ALERT: Known Threat Detected")`,
        output: `ALERT: Known Threat Detected`,
        mcqs: [
            { question: "AI detects threats by...", options: ["Analyzing patterns", "Guessing", "Asking hackers", "None"], correctAnswer: 0 },
            { question: "Signature-based detection looks for...", options: ["Known attack patterns", "New attacks", "Anomalies", "None"], correctAnswer: 0 },
            { question: "Behavioral patterns can indicate...", options: ["Malicious activity", "Normal usage", "System updates", "None"], correctAnswer: 0 },
            { question: "Network traffic analysis identifies...", options: ["Data flow irregularities", "Hardware specs", "User names", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-2',
        courseId: 'ai-cybersecurity-course',
        order: 2,
        title: 'MODULE 2 — Anomaly Detection',
        sections: [
            {
                title: 'Spotting the Unusual',
                content: 'Unlike signature-based detection, anomaly detection establishes a baseline of "normal" behavior and flags significant deviations, catching zero-day attacks.',
                image: 'https://images.unsplash.com/photo-1551808525-51a943718d52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Deviation Check
baseline_login_time = 0.5 # seconds
current_login_time = 0.4
deviation = abs(current_login_time - baseline_login_time)
print(f"Deviation: {deviation}. Status: {'Anomaly' if deviation > 0.3 else 'Normal'}")`,
        output: `Deviation: 0.1. Status: Normal`,
        mcqs: [
            { question: "An anomaly is...", options: ["Deviation from normal behavior", "A standard event", "A bug", "None"], correctAnswer: 0 },
            { question: "Anomaly detection is good for...", options: ["Zero-day attacks", "Known viruses", "Spam", "None"], correctAnswer: 0 },
            { question: "A baseline represents...", options: ["Normal system behavior", "Attacks", "Errors", "None"], correctAnswer: 0 },
            { question: "If a user logs in at 3 AM from a new country, it's a...", options: ["Potential anomaly", "Normal event", "System upgrade", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-3',
        courseId: 'ai-cybersecurity-course',
        order: 3,
        title: 'MODULE 3 — Phishing Detection',
        sections: [
            {
                title: 'NLP for Emails',
                content: 'AI uses Natural Language Processing to analyze email content, headers, and sender reputation to identify sophisticated phishing attempts that bypass traditional filters.',
                image: 'https://images.unsplash.com/photo-1563206767-5b1d972d9323?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Phishing Scan
email_body = "Urgent! Click this link now to reset password."
flags = ["Urgent", "Click this link", "Reset password"]
risk_score = sum(1 for flag in flags if flag in email_body)
print(f"Phishing Risk Score: {risk_score}/3")`,
        output: `Phishing Risk Score: 3/3`,
        mcqs: [
            { question: "AI detects phishing by...", options: ["Analyzing email content/headers", "Reading your mind", "Checking weather", "None"], correctAnswer: 0 },
            { question: "NLP helps analyze...", options: ["Language and intent", "Images", "Code", "None"], correctAnswer: 0 },
            { question: "Phishing attempts often try to...", options: ["Steal credentials", "Give money", "Help you", "None"], correctAnswer: 0 },
            { question: "Sender reputation is...", options: ["A factor in detection", "Irrelevant", "Always perfect", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-4',
        courseId: 'ai-cybersecurity-course',
        order: 4,
        title: 'MODULE 4 — Malware Analysis',
        sections: [
            {
                title: 'Heuristics & Behavior',
                content: 'AI analyzes the behavior of executable files in a sandboxed environment to determine if they are malicious, detecting new malware variants.',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# File Analysis
file_actions = ["encrypt_files", "delete_logs"]
malicious_actions = ["encrypt_files", "connect_c2"]
detected = [act for act in file_actions if act in malicious_actions]
print(f"Malware Actions: {detected}")`,
        output: `Malware Actions: ['encrypt_files']`,
        mcqs: [
            { question: "AI analyzes malware...", options: ["Signatures and behavior", "Price", "Color", "None"], correctAnswer: 0 },
            { question: "A sandbox is...", options: ["A safe, isolated environment", "Toy", "Network switch", "None"], correctAnswer: 0 },
            { question: "Heuristics look for...", options: ["Suspicious characteristics/commands", "Exact matches", "File names", "None"], correctAnswer: 0 },
            { question: "New malware variants are often caught by...", options: ["Behavioral analysis", "Old signatures", "Firewalls", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-5',
        courseId: 'ai-cybersecurity-course',
        order: 5,
        title: 'MODULE 5 — Network Intrusion Detection',
        sections: [
            {
                title: 'NIDS',
                content: 'Network Intrusion Detection Systems (NIDS) monitor network traffic for suspicious activity. AI-enhanced NIDS can process huge volumes of traffic in real-time.',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Packet Inspection
packet_header = "TCP Syn"
port = 8080
print(f"Inspecting {packet_header} on port {port}...")
print("Traffic Allowed.")`,
        output: `Inspecting TCP Syn on port 8080...
Traffic Allowed.`,
        mcqs: [
            { question: "NIDS monitors...", options: ["Network traffic", "Keyboard strokes", "Mouse clicks", "None"], correctAnswer: 0 },
            { question: "NIDS stands for...", options: ["Network Intrusion Detection System", "New Internet Data Standard", "None", "None"], correctAnswer: 0 },
            { question: "Real-time processing is crucial for...", options: ["Stopping attacks as they happen", "Logging only", "Reporting next week", "None"], correctAnswer: 0 },
            { question: "Suspicious activity might include...", options: ["Port scanning", "Browsing web", "Sending email", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-6',
        courseId: 'ai-cybersecurity-course',
        order: 6,
        title: 'MODULE 6 — Zero Trust Architecture',
        sections: [
            {
                title: 'Verify Explicitly',
                content: 'Zero Trust assumes no user or device is trustworthy by default. AI continuously verifies identity and context (location, device health) before granting access.',
                image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Access Control
authenticated = True
device_compliant = False
access = "Granted" if authenticated and device_compliant else "Denied"
print(f"Access Request: {access}")`,
        output: `Access Request: Denied`,
        mcqs: [
            { question: "Zero Trust means...", options: ["Never trust, always verify", "Trust everyone", "Trust internal network", "None"], correctAnswer: 0 },
            { question: "In Zero Trust, access is granted based on...", options: ["Identity and context", "Location only", "Password only", "None"], correctAnswer: 0 },
            { question: "Continuous verification means...", options: ["Checking trust constantly", "Checking once", "Never checking", "None"], correctAnswer: 0 },
            { question: "Device health is...", options: ["A context factor", "Irrelevant", "Battery level only", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-7',
        courseId: 'ai-cybersecurity-course',
        order: 7,
        title: 'MODULE 7 — AI-Powered SOC',
        sections: [
            {
                title: 'Modern SOC',
                content: 'The Security Operations Center (SOC) uses AI to aggregate alerts, reduce false positives, and prioritize incidents for human analysts.',
                image: 'https://images.unsplash.com/photo-1563986768427-bc43bd8ec47c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Alert Triage
alerts = [{"id": 1, "score": 2}, {"id": 2, "score": 9}]
high_priority = [a for a in alerts if a["score"] > 8]
print(f"High Priority Alerts: {len(high_priority)}")`,
        output: `High Priority Alerts: 1`,
        mcqs: [
            { question: "SOC stands for...", options: ["Security Operations Center", "System on Chip", "Service of Code", "None"], correctAnswer: 0 },
            { question: "A SOC's main role is to...", options: ["Monitor and respond to threats", "Develop software", "Sell products", "None"], correctAnswer: 0 },
            { question: "AI helps SOCs by...", options: ["Reducing false positives", "Creating alerts", "Shutting down", "None"], correctAnswer: 0 },
            { question: "Prioritizing incidents helps analysts...", options: ["Focus on critical threats", "Ignore everything", "Sleep", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-8',
        courseId: 'ai-cybersecurity-course',
        order: 8,
        title: 'MODULE 8 — Adversarial AI',
        sections: [
            {
                title: 'AI vs AI',
                content: 'Attackers use "Adversarial AI" to evade detection or poison models. Defenders must harden their ML models against these attacks using adversarial training.',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Adversarial Defense
def predict(input, is_adversarial=False):
    if is_adversarial: return "Blocked Attack"
    return "Normal Prediction"
print(predict(None, is_adversarial=True))`,
        output: `Blocked Attack`,
        mcqs: [
            { question: "Adversarial AI is used...", options: ["To attack AI models", "To fix bugs", "To write code", "None"], correctAnswer: 0 },
            { question: "Poisoning models involves...", options: ["Corrupting training data", "Deleting models", "Stealing hardware", "None"], correctAnswer: 0 },
            { question: "Defenders use adversarial training to...", options: ["Harden models", "Break models", "Delete models", "None"], correctAnswer: 0 },
            { question: "Evading detection is a goal of...", options: ["Attackers", "Defenders", "Auditors", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-9',
        courseId: 'ai-cybersecurity-course',
        order: 9,
        title: 'MODULE 9 — Automated Response',
        sections: [
            {
                title: 'SOAR',
                content: 'Security Orchestration, Automation, and Response (SOAR) platforms execute predefined playbooks (e.g., blocking an IP, disabling a user) to contain threats instantly.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Auto-Block
threat_ip = "192.168.1.100"
firewall_rules = []
firewall_rules.append(f"DENY {threat_ip}")
print(f"Firewall Updated: {firewall_rules}")`,
        output: `Firewall Updated: ['DENY 192.168.1.100']`,
        mcqs: [
            { question: "SOAR platforms...", options: ["Automate incident response", "Create viruses", "Hack systems", "None"], correctAnswer: 0 },
            { question: "A 'Playbook' in SOAR is...", options: ["A predefined set of actions", "A game", "A manual", "None"], correctAnswer: 0 },
            { question: "Automated response can...", options: ["Contain threats instantly", "Wait for humans", "Do nothing", "None"], correctAnswer: 0 },
            { question: "Blocking an IP is an example of...", options: ["A response action", "Detection", "Analysis", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ai-cyber-module-10',
        courseId: 'ai-cybersecurity-course',
        order: 10,
        title: 'MODULE 10 — Privacy Preserving AI',
        sections: [
            {
                title: 'Secure Learning',
                content: 'Techniques like Federated Learning allow AI models to train on decentralized data without raw data ever leaving the user device, ensuring privacy.',
                image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Federated Averaging
local_weights = [0.1, 0.2]
global_weights = [0.0, 0.0]
# Server aggregates weights, not data
global_weights = local_weights 
print("Global Model Updated safely.")`,
        output: `Global Model Updated safely.`,
        mcqs: [
            { question: "Techniques include...", options: ["Federated Learning", "Open Data", "Public Sharing", "None"], correctAnswer: 0 },
            { question: "Federated Learning keeps raw data...", options: ["On the local device", "On the server", "Public", "None"], correctAnswer: 0 },
            { question: "Privacy preserving AI is important for...", options: ["Compliance and trust", "Speed", "Accuracy", "None"], correctAnswer: 0 },
            { question: "Differential Privacy adds...", options: ["Noise to protect individuals", "More data", "Encryption keys", "None"], correctAnswer: 0 }
        ]
    },

    // --- AI IN MEDICAL CODING (ai-medical-coding-course) ---
    {
        id: 'med-coding-module-1',
        courseId: 'ai-medical-coding-course',
        order: 1,
        title: 'MODULE 1 — Intro to Medical Coding',
        sections: [
            {
                title: 'The Language of Healthcare',
                content: 'Medical coding translates healthcare diagnoses, procedures, medical services, and equipment into universal medical alphanumeric codes (ICD, CPT, HCPCS).',
                image: 'https://images.unsplash.com/photo-1576091160550-2187d80a16f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Code Lookup
def lookup_code(term):
    database = {"Headache": "R51"}
    return database.get(term, "Not Found")
print(f"Code for Headache: {lookup_code('Headache')}")`,
        output: `Code for Headache: R51`,
        mcqs: [
            { question: "Medical coding translates...", options: ["Diagnoses to codes", "English to French", "Java to Python", "None"], correctAnswer: 0 },
            { question: "Common coding systems include...", options: ["ICD, CPT, HCPCS", "HTML, CSS, JS", "ASCII, UTF-8", "None"], correctAnswer: 0 },
            { question: "Universal codes allow for...", options: ["Standardization and billing", "Creativity", "Secrecy", "None"], correctAnswer: 0 },
            { question: "Accuracy in coding affects...", options: ["Reimbursement and data quality", "Nothing", "Patient mood", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-2',
        courseId: 'ai-medical-coding-course',
        order: 2,
        title: 'MODULE 2 — ICD-10 Basics',
        sections: [
            {
                title: 'International Classification of Diseases',
                content: 'ICD-10 is used to code diagnoses and health conditions. It allows for tracking of diseases and allocation of resources worldwide.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Validate ICD Format
import re
def validate_icd(code):
    # Basic check: Letter followed by numbers
    return bool(re.match(r"^[A-Z][0-9]{2}(\.[0-9]{1,4})?$", code))
print(f"Is 'E11.9' valid? {validate_icd('E11.9')}")`,
        output: `Is 'E11.9' valid? True`,
        mcqs: [
            { question: "ICD-10 is used for...", options: ["Diagnoses", "Procedures", "Drugs", "None"], correctAnswer: 0 },
            { question: "ICD stands for...", options: ["International Classification of Diseases", "Internal Code Department", "None", "None"], correctAnswer: 0 },
            { question: "Tracking diseases globally helps...", options: ["Allocate resources", "Make money", "Stop travel", "None"], correctAnswer: 0 },
            { question: "An ICD code typically looks like...", options: ["Letter followed by numbers (e.g. E11.9)", "Just numbers", "Just letters", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-3',
        courseId: 'ai-medical-coding-course',
        order: 3,
        title: 'MODULE 3 — CPT Codes',
        sections: [
            {
                title: 'Current Procedural Terminology',
                content: 'CPT codes are used to describe medical, surgical, and diagnostic services and procedures performed by healthcare providers.',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# CPT Search
cpt_db = {"99213": "Office Visit", "90791": "Psych Evaluation"}
print(f"Procedure 99213 is: {cpt_db['99213']}")`,
        output: `Procedure 99213 is: Office Visit`,
        mcqs: [
            { question: "CPT codes describe...", options: ["Medical procedures", "Hospital beds", "Ambulance color", "None"], correctAnswer: 0 },
            { question: "CPT stands for...", options: ["Current Procedural Terminology", "Computer Processing Time", "None", "None"], correctAnswer: 0 },
            { question: "Who maintains CPT?", options: ["AMA (American Medical Association)", "Google", "FDA", "None"], correctAnswer: 0 },
            { question: "A doctor's office visit is coded with...", options: ["CPT", "ICD", "HCPCS Level II", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-4',
        courseId: 'ai-medical-coding-course',
        order: 4,
        title: 'MODULE 4 — HCPCS',
        sections: [
            {
                title: 'Healthcare Common Procedure Coding System',
                content: 'HCPCS codes cover services, supplies, and products not included in CPT, such as ambulance services and durable medical equipment (DME).',
                image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7ea76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Equipment Check
hcpcs_code = "E0607" # Glucometer
covered = True
print(f"Item {hcpcs_code} Coverage: {'Yes' if covered else 'No'}")`,
        output: `Item E0607 Coverage: Yes`,
        mcqs: [
            { question: "HCPCS covers...", options: ["Services not in CPT (Equipment)", "Only drugs", "Only surgery", "None"], correctAnswer: 0 },
            { question: "DME stands for...", options: ["Durable Medical Equipment", "Direct Medical Exam", "None", "None"], correctAnswer: 0 },
            { question: "Ambulance services are usually coded with...", options: ["HCPCS", "ICD", "CPT", "None"], correctAnswer: 0 },
            { question: "HCPCS Level II is for...", options: ["Supplies and products", "Physician services", "Diagnosis", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-5',
        courseId: 'ai-medical-coding-course',
        order: 5,
        title: 'MODULE 5 — NLP for Coding',
        sections: [
            {
                title: 'Extracting Codes from Text',
                content: 'Natural Language Processing (NLP) analyzes clinical notes to automatically suggest ICD and CPT codes, reducing manual effort and errors.',
                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# NLP Entity Extraction
note = "Patient diagnosis: Type 2 Diabetes."
entities = ["Type 2 Diabetes"]
mapped_code = "E11" if "Type 2 Diabetes" in entities else "Unknown"
print(f"Suggested Code: {mapped_code}")`,
        output: `Suggested Code: E11`,
        mcqs: [
            { question: "NLP extracts codes from...", options: ["Clinical notes", "Images", "Audio", "None"], correctAnswer: 0 },
            { question: "Benefits of NLP in coding include...", options: ["Reduced effort and errors", "More errors", "Slower process", "None"], correctAnswer: 0 },
            { question: "NLP looks for...", options: ["Keywords and entities", "Pictures", "Colors", "None"], correctAnswer: 0 },
            { question: "Automatic suggestions must be...", options: ["Validated by humans", "Blindly accepted", "Deleted", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-6',
        courseId: 'ai-medical-coding-course',
        order: 6,
        title: 'MODULE 6 — Automated Chart Review',
        sections: [
            {
                title: 'AI Auditing',
                content: 'AI systems review medical charts for completeness and accuracy, identifying missing specificities required for accurate coding (e.g., laterality, severity).',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Chart Audit
chart_data = {"fracture": "femur", "side": None}
if not chart_data["side"]:
    print("Flag: Missing Laterality (Left/Right)")`,
        output: `Flag: Missing Laterality (Left/Right)`,
        mcqs: [
            { question: "AI reviews charts for...", options: ["Missing documentation", "Spelling errors", "Font size", "None"], correctAnswer: 0 },
            { question: "Specificity in coding is...", options: ["Crucial for accuracy", "Not important", "Optional", "None"], correctAnswer: 0 },
            { question: "If 'Laterality' is missing, the code is...", options: ["Incomplete/Unspecified", "Perfect", "Better", "None"], correctAnswer: 0 },
            { question: "AI auditing works by...", options: ["Scanning for required elements", "Random sampling", "Guessing", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-7',
        courseId: 'ai-medical-coding-course',
        order: 7,
        title: 'MODULE 7 — Revenue Cycle Management',
        sections: [
            {
                title: 'Optimizing Revenue',
                content: 'AI optimizes the revenue cycle by ensuring accurate billing, reducing claim denials, and predicting payment timelines.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Claim Denial Prediction
claim_features = [0.9, 0.1] # high confidence, low risk
denial_prob = 0.05
print(f"Estimated Denial Probability: {denial_prob*100}%")`,
        output: `Estimated Denial Probability: 5.0%`,
        mcqs: [
            { question: "RCM manages...", options: ["Financial processing", "Patient health", "Doctor schedules", "None"], correctAnswer: 0 },
            { question: "Predicting claim denials helps...", options: ["Fix isues before submission", "Increase denials", "Waste time", "None"], correctAnswer: 0 },
            { question: "Accurate billing ensures...", options: ["Timely payment", "Audit failure", "No payment", "None"], correctAnswer: 0 },
            { question: "Revenue Cycle starts at...", options: ["Registration/Scheduling", "Discharge", "Payment", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-8',
        courseId: 'ai-medical-coding-course',
        order: 8,
        title: 'MODULE 8 — Compliance & Audits',
        sections: [
            {
                title: 'Fraud Detection',
                content: 'AI detects anomalies in billing patterns that may indicate fraud (upcoding, unbundling) or compliance risks, ensuring adherence to legal standards.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Upcoding Detection
billed_level = 5 # Highest level visit
patient_complexity = "Low"
if billed_level == 5 and patient_complexity == "Low":
    print("Alert: Potential Upcoding Detected")`,
        output: `Alert: Potential Upcoding Detected`,
        mcqs: [
            { question: "Audits ensure...", options: ["Coding accuracy", "Fast typing", "Low costs", "None"], correctAnswer: 0 },
            { question: "Upcoding is...", options: ["Billing for a higher service than performed", "Billing correctly", "Billing less", "None"], correctAnswer: 0 },
            { question: "Fraud detected by AI involves...", options: ["Anomalous patterns", "Normal patterns", "Paper receipts", "None"], correctAnswer: 0 },
            { question: "Unbundling is...", options: ["Separating charges for higher payment", "Packaging services", "A discount", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-9',
        courseId: 'ai-medical-coding-course',
        order: 9,
        title: 'MODULE 9 — CAC (Computer Assisted Coding)',
        sections: [
            {
                title: 'The AI Assistant',
                content: 'Computer Assisted Coding (CAC) software uses NLP to highlight keywords in medical records and automatically suggest codes for the coder to validate.',
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# CAC Suggestion
text = "Excision of malignant lesion, 2.0 cm"
keywords = ["Excision", "Malignant", "2.0 cm"]
print(f"CAC Found Keywords: {keywords}")`,
        output: `CAC Found Keywords: ['Excision', 'Malignant', '2.0 cm']`,
        mcqs: [
            { question: "CAC software...", options: ["Suggests codes", "Replaces doctors", "Writes prescriptions", "None"], correctAnswer: 0 },
            { question: "CAC stands for...", options: ["Computer Assisted Coding", "Computer Aided Design", "None", "None"], correctAnswer: 0 },
            { question: "The human coder's role with CAC is to...", options: ["Validate and audit", "Ignore", "Delete", "None"], correctAnswer: 0 },
            { question: "CAC improves productivity by...", options: ["Highlighting keywords/codes", "Playing music", "Hiding text", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'med-coding-module-10',
        courseId: 'ai-medical-coding-course',
        order: 10,
        title: 'MODULE 10 — Future of Coding',
        sections: [
            {
                title: 'Autonomous Coding',
                content: 'The future of medical coding moves towards fully autonomous coding for routine cases, with human coders focusing on complex, ambiguous cases and auditing.',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Automation Level
case_complexity = "Routine"
mode = "Autonomous" if case_complexity == "Routine" else "Manual"
print(f"Coding Mode: {mode}")`,
        output: `Coding Mode: Autonomous`,
        mcqs: [
            { question: "The future involves...", options: ["Autonomous coding", "Manual coding", "Paper records", "None"], correctAnswer: 0 },
            { question: "Autonomous coding is best for...", options: ["Routine/Simple cases", "Complex cases", "Trauma", "None"], correctAnswer: 0 },
            { question: "Human coders will focus on...", options: ["Complex cases and auditing", "Data entry", "Scanning", "None"], correctAnswer: 0 },
            { question: "The shift to automation is driven by...", options: ["Efficiency and volume", "Boredom", "Lack of paper", "None"], correctAnswer: 0 }
        ]
    },

    // --- PHARMA GEN AI (pharma-gen-ai-course) ---
    {
        id: 'pharma-gen-module-1',
        courseId: 'pharma-gen-ai-course',
        order: 1,
        title: 'MODULE 1 — GenAI in Pharma Overview',
        sections: [
            {
                title: 'A New Era',
                content: 'Generative AI is not just analyzing data but creating new data. In pharma, this means generating novel molecules, protein structures, and clinical documents.',
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# GenAI Potential
traditional_ai = "Analysis"
gen_ai = "Creation"
print(f"GenAI shifts focus from {traditional_ai} to {gen_ai}")`,
        output: `GenAI shifts focus from Analysis to Creation`,
        mcqs: [
            { question: "GenAI in Pharma is used for...", options: ["Creating new molecules/content", "Manufacturing steel", "Farming", "None"], correctAnswer: 0 },
            { question: "Traditional AI focuses on...", options: ["Analysis and prediction", "Creation", "Nothing", "None"], correctAnswer: 0 },
            { question: "Generative AI can create...", options: ["Novel data instances", "Only copies", "Physical objects directly", "None"], correctAnswer: 0 },
            { question: "A key benefit of GenAI in pharma is...", options: ["Accelerating innovation", "Slowing down research", "Increasing manual work", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-2',
        courseId: 'pharma-gen-ai-course',
        order: 2,
        title: 'MODULE 2 — Molecule Generation',
        sections: [
            {
                title: 'De Novo Design',
                content: 'Generative models (like GANs and VAEs) can design novel molecular structures with desired properties from scratch, bypassing the limitations of screening existing libraries.',
                image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Molecule Generator
desired_property = "High Solubility"
generated_molecule = "C10H15N"
print(f"Generated molecule with {desired_property}: {generated_molecule}")`,
        output: `Generated molecule with High Solubility: C10H15N`,
        mcqs: [
            { question: "Generative models create...", options: ["Novel molecular structures", "Existing drugs", "Random noise", "None"], correctAnswer: 0 },
            { question: "De Novo design means...", options: ["Designing from scratch", "Copying", "Buying", "None"], correctAnswer: 0 },
            { question: "GAN stands for...", options: ["Generative Adversarial Network", "General AI Network", "None", "None"], correctAnswer: 0 },
            { question: "VAE stands for...", options: ["Variational Autoencoder", "Virtual AI Engine", "None", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-3',
        courseId: 'pharma-gen-ai-course',
        order: 3,
        title: 'MODULE 3 — Protein Folding',
        sections: [
            {
                title: 'The Folding Problem',
                content: 'AI systems like AlphaFold can predict the 3D structure of a protein from its amino acid sequence with high accuracy, revolutionizing biology and drug target identification.',
                image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Structure Prediction
sequence = "MKTVRQERLKSIVRILERSKEPVSGAQLAEELSVSRQVIVQDIAYLRSLGYNIVATPRGYVLAGG"
confidence = 0.95
print(f"Predicted 3D Structure with {confidence*100}% confidence.")`,
        output: `Predicted 3D Structure with 95.0% confidence.`,
        mcqs: [
            { question: "AlphaFold predicts...", options: ["Protein 3D structure", "DNA sequence", "Cell count", "None"], correctAnswer: 0 },
            { question: "Protein folding is important for...", options: ["Understanding biological function", "Making paper", "Coding", "None"], correctAnswer: 0 },
            { question: "Knowing the structure helps identify...", options: ["Drug targets", "Nothing", "Colors", "None"], correctAnswer: 0 },
            { question: "AlphaFold uses...", options: ["Deep Learning / AI", "Random guessing", "Manual drawing", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-4',
        courseId: 'pharma-gen-ai-course',
        order: 4,
        title: 'MODULE 4 — Clinical Report Generation',
        sections: [
            {
                title: 'Automated Writing',
                content: 'LLMs can draft clinical study reports, safety narratives, and regulatory submissions by summarizing vast amounts of trial data, significantly speeding up timelines.',
                image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Report Auto-Draft
data_summary = "Subject 001: No adverse events."
report_draft = f"Summary: {data_summary}"
print(report_draft)`,
        output: `Summary: Subject 001: No adverse events.`,
        mcqs: [
            { question: "AI generates reports from...", options: ["Trial data", "News articles", "Social media", "None"], correctAnswer: 0 },
            { question: "Automated drafting can...", options: ["Speed up timelines", "Increase errors", "Slow down work", "None"], correctAnswer: 0 },
            { question: "LLM stands for...", options: ["Large Language Model", "Long Line Monitor", "None", "None"], correctAnswer: 0 },
            { question: "Human review of AI drafts is...", options: ["Necessary", "Optional", "Forbidden", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-5',
        courseId: 'pharma-gen-ai-course',
        order: 5,
        title: 'MODULE 5 — Marketing Content Creation',
        sections: [
            {
                title: 'Personalized Engagement',
                content: 'GenAI creates personalized marketing materials, emails, and educational content for healthcare professionals, tailored to their specific therapeutic areas and interests.',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Email Generator
doctor_specialty = "Cardiology"
email = f"Dear Dr., here are the latest updates in {doctor_specialty}..."
print(email)`,
        output: `Dear Dr., here are the latest updates in Cardiology...`,
        mcqs: [
            { question: "GenAI creates...", options: ["Personalized marketing materials", "Fake news", "Spam", "None"], correctAnswer: 0 },
            { question: "Personalization relies on...", options: ["Data about preferences/needs", "Randomness", "Nothing", "None"], correctAnswer: 0 },
            { question: "Tailored content can improve...", options: ["Engagement", "Boredom", "Costs", "None"], correctAnswer: 0 },
            { question: "HCP stands for...", options: ["Healthcare Professional", "High Cost Product", "None", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-6',
        courseId: 'pharma-gen-ai-course',
        order: 6,
        title: 'MODULE 6 — Patient Interaction Bots',
        sections: [
            {
                title: 'Empathetic AI',
                content: 'Advanced chatbots driven by GenAI can provide patients with medical information, medication reminders, and empathetic support 24/7.',
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Bot Reply
user_input = "I missed a dose."
reply = "Please take it as soon as possible, unless it's close to your next dose."
print(f"Bot: {reply}")`,
        output: `Bot: Please take it as soon as possible, unless it's close to your next dose.`,
        mcqs: [
            { question: "Bots provide...", options: ["Information/Support", "Medical advice", "Prescriptions", "None"], correctAnswer: 0 },
            { question: "24/7 support is a benefit of...", options: ["AI Chatbots", "Human doctors", "offices", "None"], correctAnswer: 0 },
            { question: "Empathetic AI tries to...", options: ["Understand/respond to emotion", "Be cold", "Ignore you", "None"], correctAnswer: 0 },
            { question: "Medication reminders help with...", options: ["Adherence", "Overdose", "Sleeping", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-7',
        courseId: 'pharma-gen-ai-course',
        order: 7,
        title: 'MODULE 7 — Ethical Considerations',
        sections: [
            {
                title: 'Bias and Hallucinations',
                content: 'Using GenAI in pharma requires careful checking for hallucinations (made-up facts) and bias in training data to ensure patient safety.',
                image: 'https://images.unsplash.com/photo-1505663912202-ac6655c61937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Fact Check
fact = "Drug X cures everything."
verified = False
if not verified:
    print("Warning: Unverified claim detected.")`,
        output: `Warning: Unverified claim detected.`,
        mcqs: [
            { question: "Ethics involve...", options: ["Bias and Safety", "Speed", "Cost", "None"], correctAnswer: 0 },
            { question: "A 'Hallucination' in AI is...", options: ["Generating false/made-up information", "Seeing ghosts", "A virus", "None"], correctAnswer: 0 },
            { question: "Bias in training data can lead to...", options: ["Unfair/Unsafe outcomes", "Better results", "Faster training", "None"], correctAnswer: 0 },
            { question: "Patient safety is...", options: ["Paramount", "Secondary", "Irrelevant", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-8',
        courseId: 'pharma-gen-ai-course',
        order: 8,
        title: 'MODULE 8 — Data Privacy in Pharma',
        sections: [
            {
                title: 'Protecting Patients',
                content: 'Strict regulations (HIPAA, GDPR) apply to the data used to train and operate GenAI models in healthcare. Privacy-preserving techniques are essential.',
                image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Privacy Check
data_contains_PII = True
action = "Anonymize" if data_contains_PII else "Process"
print(f"Action: {action}")`,
        output: `Action: Anonymize`,
        mcqs: [
            { question: "Privacy is critical for...", options: ["Patient data", "Public data", "Weather data", "None"], correctAnswer: 0 },
            { question: "PII stands for...", options: ["Personally Identifiable Information", "Public Internet Info", "None", "None"], correctAnswer: 0 },
            { question: "Anonymization...", options: ["Removes PII", "Adds PII", "Deletes files", "None"], correctAnswer: 0 },
            { question: "HIPAA is a...", options: ["US Law regarding health data", "Software", "Virus", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-9',
        courseId: 'pharma-gen-ai-course',
        order: 9,
        title: 'MODULE 9 — Integration Strategies',
        sections: [
            {
                title: 'Workflow Integration',
                content: 'For GenAI to be effective, it must be integrated into existing pharma R&D and commercial workflows, rather than existing as a standalone novelty.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Integration Status
workflow_step = "Drug Design"
tool = "AI Generator"
print(f"Integrated {tool} into {workflow_step} workflow.")`,
        output: `Integrated AI Generator into Drug Design workflow.`,
        mcqs: [
            { question: "Integration involves...", options: ["Embedding AI in workflows", "Buying servers", "Hiring staff", "None"], correctAnswer: 0 },
            { question: "AI should be...", options: ["A tool in the workflow", "A standalone toy", "Ignored", "None"], correctAnswer: 0 },
            { question: "Effective integration requires...", options: ["Change management", "Buying more computers", "Firing everyone", "None"], correctAnswer: 0 },
            { question: "Silos...", options: ["Hinder integration", "Help integration", "Are good", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'pharma-gen-module-10',
        courseId: 'pharma-gen-ai-course',
        order: 10,
        title: 'MODULE 10 — Case Studies',
        sections: [
            {
                title: 'Real-World Success',
                content: 'We examine real-world examples of how leading pharma companies are using GenAI to discover new drugs and optimize clinical trials.',
                image: 'https://images.unsplash.com/photo-1576091160550-2187d80a16f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
        ],
        code: `# Case Study Load
company = "PharmaCorp"
success = "Reduced timeline by 2 years"
print(f"Case Study: {company} - {success}")`,
        output: `Case Study: PharmaCorp - Reduced timeline by 2 years`,
        mcqs: [
            { question: "Case studies show...", options: ["Real-world applications", "Theoretical ideas", "Failures only", "None"], correctAnswer: 0 },
            { question: "Learning from others' success...", options: ["Accelerates adoption", "Slows progress", "Is cheating", "None"], correctAnswer: 0 },
            { question: "Real-world evidence...", options: ["Validates AI value", "Disproves it", "Is useless", "None"], correctAnswer: 0 },
            { question: "Pharma companies are...", options: ["Actively adopting GenAI", "Ignoring it", "Banning it", "None"], correctAnswer: 0 }
        ]
    },
];
