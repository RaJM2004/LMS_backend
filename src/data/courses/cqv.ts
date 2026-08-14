// CQV — Commissioning Qualification and Validation Consulting
// This file provides the initial seed data for the CQV course.
// Use the Admin Dashboard to manage content after the initial seed.

export const cqvModules = [
    {
        id: 'cqv-module-1',
        courseId: 'cqv-course',
        title: 'Module 1 — Introduction to CQV',
        order: 1,
        sections: [
            {
                title: 'Welcome to CQV Consulting',
                content: `## Commissioning, Qualification, and Validation (CQV)

Welcome to the **CQV Consulting** course. This program covers the complete lifecycle of commissioning, qualification, and validation activities required in regulated industries such as pharmaceuticals, biotechnology, and medical devices.

### What You Will Learn
- **Commissioning**: Ensuring equipment and systems are installed and function correctly.
- **Qualification**: Documented evidence that equipment/systems are suitable for their intended use (IQ, OQ, PQ).
- **Validation**: Establishing documented evidence that a process consistently produces a product meeting its specifications.

### Who Should Attend
- Validation Engineers
- QA/QC Professionals
- Regulatory Affairs Specialists
- Manufacturing and Operations Teams`,
                image: '/cqv_course.png'
            },
            {
                title: 'Regulatory Framework Overview',
                content: `## Regulatory Framework for CQV

Understanding the regulatory landscape is the foundation of all CQV work.

### Key Regulations & Guidelines
- **FDA 21 CFR Part 11** – Electronic records and signatures
- **EU Annex 11** – Computerised systems in regulated environments
- **GAMP 5** – Good Automated Manufacturing Practice (ISPE)
- **ICH Q8, Q9, Q10** – Pharmaceutical development, risk management, pharmaceutical quality system
- **USP <1058>** – Analytical Instrument Qualification

### The V-Model
The V-Model is the standard framework linking user requirements to validation activities:
\`\`\`
User Requirement Spec (URS)
  └─ Functional Design Spec (FDS)
       └─ Design Qualification (DQ)
            └─ Installation Qualification (IQ)
                 └─ Operational Qualification (OQ)
                      └─ Performance Qualification (PQ)
\`\`\``,
            }
        ],
        sessions: [],
        code: '',
        output: '',
        mcqs: [
            {
                question: 'What does IQ stand for in the CQV lifecycle?',
                options: ['Installation Qualification', 'Integration Query', 'Initial Quality', 'Infrastructure Qualification'],
                correctAnswer: 0
            },
            {
                question: 'Which regulation governs electronic records and signatures in the pharmaceutical industry?',
                options: ['ICH Q10', 'FDA 21 CFR Part 11', 'EU GMP Annex 15', 'GAMP 5'],
                correctAnswer: 1
            },
            {
                question: 'What is the purpose of Performance Qualification (PQ)?',
                options: [
                    'To verify that equipment is installed correctly',
                    'To confirm the equipment operates correctly',
                    'To demonstrate a process consistently produces product meeting specifications under normal conditions',
                    'To document the design of the system'
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'cqv-module-2',
        courseId: 'cqv-course',
        title: 'Module 2 — Installation Qualification (IQ)',
        order: 2,
        sections: [
            {
                title: 'IQ Fundamentals',
                content: `## Installation Qualification (IQ)

Installation Qualification provides documented evidence that equipment or systems have been delivered and installed in accordance with the approved design and manufacturer's recommendations.

### Key IQ Activities
1. **Document Review** – Verify calibration certificates, drawings, manuals
2. **Physical Verification** – Confirm equipment identity, model, serial numbers
3. **Utility Connections** – Verify power, water, gas connections meet specifications
4. **Safety Checks** – Emergency stops, interlocks, alarms
5. **Software Version** – Record software/firmware versions

### IQ Protocol Structure
- **Purpose & Scope**
- **Responsibilities**
- **Prerequisites**
- **Acceptance Criteria**
- **Test Steps with Pass/Fail checkboxes**
- **Deviations section**
- **Conclusion & Approval signatures**`,
            }
        ],
        sessions: [],
        code: '',
        output: '',
        mcqs: [
            {
                question: 'Which document is reviewed during IQ to verify the equipment meets design intent?',
                options: ['Performance Qualification Protocol', 'Functional Design Specification (FDS)', 'User Requirement Specification (URS)', 'Risk Assessment Report'],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'cqv-module-3',
        courseId: 'cqv-course',
        title: 'Module 3 — Operational & Performance Qualification (OQ/PQ)',
        order: 3,
        sections: [
            {
                title: 'OQ — Operational Qualification',
                content: `## Operational Qualification (OQ)

OQ provides documented evidence that the equipment or system operates as intended across all anticipated operating ranges.

### OQ Key Activities
- Testing equipment at **minimum, nominal, and maximum** operating parameters
- Verifying alarms and interlocks function correctly
- Confirming software functionality
- Stress testing (worst-case scenarios)

### Common OQ Tests
| Test | Acceptance Criterion |
|------|---------------------|
| Temperature Mapping | ±2°C of setpoint |
| Alarm Verification | Alarm triggers within 30 seconds |
| Software Access Controls | Role-based access enforced |
| Emergency Stop | System halts within 2 seconds |`
            },
            {
                title: 'PQ — Performance Qualification',
                content: `## Performance Qualification (PQ)

PQ provides documented evidence that the equipment or process consistently produces product meeting its specifications under normal conditions of use.

### PQ Key Principles
- Uses **actual production materials** (or simulated loads)
- Conducted over **multiple runs** (typically 3 consecutive)
- Demonstrates **reproducibility** and **robustness**

### PQ vs Process Validation
PQ of equipment → **Equipment is qualified**
Process Validation → **The process is validated**

Both are required before commercial manufacturing.`
            }
        ],
        sessions: [],
        code: '',
        output: '',
        mcqs: [
            {
                question: 'How many consecutive successful runs are typically required for Performance Qualification?',
                options: ['1', '2', '3', '5'],
                correctAnswer: 2
            },
            {
                question: 'OQ testing should cover which operating ranges?',
                options: ['Only nominal conditions', 'Only worst-case conditions', 'Minimum, nominal, and maximum', 'Maximum only'],
                correctAnswer: 2
            }
        ]
    }
];
