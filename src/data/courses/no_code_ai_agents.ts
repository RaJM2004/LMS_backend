export const noCodeAiAgentModules = [
    {
        id: 'no-code-agent-week-0',
        courseId: 'no-code-low-code-ai-agents',
        order: 0,
        title: 'WEEK 0 — Onboarding & Foundations',
        sections: [
            {
                title: "Program Introduction & Expectations",
                content: "Welcome to No Code Low Code AI Agents by GenQuantaa Academy. In this onboarding module, you will understand the learning roadmap, setup essential accounts, and get introduced to the visual AI ecosystem.\n\n**Key Focus Areas:**\n- Program introduction & curriculum walk-through\n- Learning roadmap & time commitment expectations\n- Setting up accounts and no-code tools (Zapier, Make, n8n, Flowise)\n- Overview of the current AI & Agentic AI landscape\n- Community and mentorship onboarding",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                videoUrl: "https://youtu.be/qWu6nZgjteo",
                pdfUrl: "https://canva.link/rjfd8qkq4hfewxv"
            },
            {
                title: "Course Brochure & Resources",
                content: "Access your official program brochure with 14-week outcomes, career readiness guidelines, and project milestones.\n\nBrochure Link: https://canva.link/rjfd8qkq4hfewxv\n\nOutcome: You're ready to learn, build, and grow with GenQuantaa Academy.",
                pdfUrl: "https://canva.link/rjfd8qkq4hfewxv"
            }
        ],
        code: `# Verification check for No-Code Environment
tools = ["Zapier", "Make", "n8n", "Flowise", "Langflow"]
status = {t: "Ready" for t in tools}
print("Ecosystem Status:", status)`,
        output: `Ecosystem Status: {'Zapier': 'Ready', 'Make': 'Ready', 'n8n': 'Ready', 'Flowise': 'Ready', 'Langflow': 'Ready'}`,
        mcqs: [
            { question: "What is the primary objective of Week 0 onboarding?", options: ["Deploy production models", "Setup accounts, understand roadmap, and join mentorship", "Write CUDA kernels", "Train a transformer from scratch"], correctAnswer: 1 },
            { question: "Which visual platforms are introduced in the ecosystem?", options: ["Make, Zapier, n8n, Flowise", "Assembly, C, Fortran", "Photoshop, Premiere", "None of the above"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-1',
        courseId: 'no-code-low-code-ai-agents',
        order: 1,
        title: 'WEEK 1 — AI Fundamentals for Everyone',
        sections: [
            {
                title: "What is AI, GenAI and Agentic AI",
                content: "Explore the fundamental evolution from traditional predictive AI to Generative AI (LLMs) and the new frontier of Agentic AI.\n\n- **Generative AI**: Generates novel text, code, images based on user prompts.\n- **Agentic AI**: Possesses autonomy, reasoning, tool-usage, and multi-step goal execution.\n- **Real-World Impact**: Transforming enterprise operations, customer care, and automated workflows.\n- **Key Terminology**: Tokens, context window, embeddings, agents, tool calling, system prompts.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Capabilities, Limitations & Ethical AI",
                content: "Understand the boundaries of modern foundation models, hallucination risks, latency considerations, and responsible AI introduction.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Exploring Agent vs LLM Paradigm
def agent_decision_loop(goal, perception):
    thought = f"Analyze goal: {goal}"
    action = f"Execute tool for {perception}"
    return {"thought": thought, "action": action}

print(agent_decision_loop("Automate lead outreach", "New email received"))`,
        output: `{'thought': 'Analyze goal: Automate lead outreach', 'action': 'Execute tool for New email received'}`,
        mcqs: [
            { question: "What differentiates Agentic AI from simple Generative AI?", options: ["Agentic AI runs on floppy disks", "Agentic AI has autonomous goal execution, reasoning, and tool use", "Agentic AI cannot generate text", "There is no difference"], correctAnswer: 1 },
            { question: "What does the context window in an LLM represent?", options: ["The computer screen size", "The maximum tokens/characters processed in a single prompt & response", "The power consumption", "The internet speed"], correctAnswer: 1 }
        ]
    },
    {
        id: 'no-code-agent-week-2',
        courseId: 'no-code-low-code-ai-agents',
        order: 2,
        title: 'WEEK 2 — Prompt Engineering Mastery',
        sections: [
            {
                title: "Prompting Frameworks & Best Practices",
                content: "Master systematic prompting techniques: Role-Task-Context-Constraints (RTCC), Few-Shot Prompting, Chain-of-Thought (CoT), and ReAct patterns across ChatGPT, Claude, and Gemini.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Structured JSON Output Prompt Pattern
prompt_template = """
You are an enterprise AI Agent.
Analyze the incoming text and respond STRICTLY in JSON format:
{ "sentiment": "positive|neutral|negative", "priority": "high|medium|low" }
"""
print(prompt_template.strip())`,
        output: `You are an enterprise AI Agent.
Analyze the incoming text and respond STRICTLY in JSON format:
{ "sentiment": "positive|neutral|negative", "priority": "high|medium|low" }`,
        mcqs: [
            { question: "What does Chain-of-Thought (CoT) prompting encourage?", options: ["Faster response time with lower accuracy", "Step-by-step reasoning before arriving at a final answer", "Generating random tokens", "None of the above"], correctAnswer: 1 }
        ]
    },
    {
        id: 'no-code-agent-week-3',
        courseId: 'no-code-low-code-ai-agents',
        order: 3,
        title: 'WEEK 3 — No-Code AI Tools & Platforms',
        sections: [
            {
                title: "Visual Automation with Make, Zapier & n8n",
                content: "Hands-on integration connecting Webhooks, Google Sheets, Slack, and OpenAI without coding. Build trigger-action chains that automate real business tasks.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Webhook payload example for n8n/Make trigger
payload = {
    "event": "lead_created",
    "name": "Alex Smith",
    "email": "alex@company.com",
    "budget": 250000
}
print("Webhook sent successfully with status: 200 OK")`,
        output: `Webhook sent successfully with status: 200 OK`,
        mcqs: [
            { question: "Which protocol is commonly used to trigger real-time no-code automations?", options: ["Webhooks", "FTP only", "Bluetooth", "SMTP"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-4',
        courseId: 'no-code-low-code-ai-agents',
        order: 4,
        title: 'WEEK 4 — AI-Powered Productivity',
        sections: [
            {
                title: "5x Workflow Acceleration",
                content: "Automate repetitive research, documentation, email processing, and meeting summaries using custom Copilots and AI assistants.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Productivity Automation Pipeline
tasks = ["summarize_notes", "generate_action_items", "draft_followup_email"]
completed = [f"{t} -> Done" for t in tasks]
print("\\n".join(completed))`,
        output: `summarize_notes -> Done
generate_action_items -> Done
draft_followup_email -> Done`,
        mcqs: [
            { question: "What is the key benefit of personal AI productivity workflows?", options: ["Eliminating repetitive manual steps and accelerating output", "Requiring complex C++ programming", "Slowing down communications", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-5',
        courseId: 'no-code-low-code-ai-agents',
        order: 5,
        title: 'WEEK 5 — Building AI Applications (No-Code)',
        sections: [
            {
                title: "Visual AI App Builders & Data Sync",
                content: "Build front-facing web apps with Bubble, Softr, or FlutterFlow connected to AI backends, Airtable, and Google Sheets.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Simulating Airtable Record Enrichment via AI
record = {"customer": "Acme Corp", "ticket": "Login failure"}
record["ai_resolution"] = "Suggest password reset link and check SSO logs"
print("Enriched Record:", record)`,
        output: `Enriched Record: {'customer': 'Acme Corp', 'ticket': 'Login failure', 'ai_resolution': 'Suggest password reset link and check SSO logs'}`,
        mcqs: [
            { question: "How do no-code visual app builders typically connect to AI models?", options: ["Via REST APIs and Webhooks", "Via floppy disk", "They cannot connect to AI", "Using physical cables only"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-6',
        courseId: 'no-code-low-code-ai-agents',
        order: 6,
        title: 'WEEK 6 — Introduction to AI Agents',
        sections: [
            {
                title: "Agent Architectures & Autonomous Execution",
                content: "Understand how agents perceive environments, formulate thoughts (ReAct loops), use tools, and retain memory. Build your first autonomous agent using Flowise and Langflow.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# ReAct Loop Pattern
class SimpleAgent:
    def step(self, observation):
        thought = f"Observation is: {observation}"
        action = "SearchWebTool"
        return thought, action

agent = SimpleAgent()
t, a = agent.step("User wants latest pricing")
print(f"Thought: {t}\\nAction: {a}")`,
        output: `Thought: Observation is: User wants latest pricing
Action: SearchWebTool`,
        mcqs: [
            { question: "What does the ReAct framework stand for in AI Agents?", options: ["Reasoning + Acting", "React Javascript", "Reactive Electricity", "Remote Action"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-7',
        courseId: 'no-code-low-code-ai-agents',
        order: 7,
        title: 'WEEK 7 — Mini Project Week',
        sections: [
            {
                title: "End-to-End AI Solution Prototype",
                content: "Apply concepts from Weeks 1-6 to create an autonomous customer agent, lead qualifier, or automated research pipeline. Present to mentors for evaluation.",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `print("=== Mini Project Status: Milestone Completed ===")
print("Project: Automated Support Agent")
print("Evaluation: 100% Passed")`,
        output: `=== Mini Project Status: Milestone Completed ===
Project: Automated Support Agent
Evaluation: 100% Passed`,
        mcqs: [
            { question: "What is the primary deliverable for Week 7?", options: ["A working prototype solution built using visual AI tools", "Buying server hardware", "Taking a written exam only", "None of the above"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-8',
        courseId: 'no-code-low-code-ai-agents',
        order: 8,
        title: 'WEEK 8 — Advanced LLM Techniques (RAG & Embeddings)',
        sections: [
            {
                title: "RAG & Vector Knowledge Retrieval",
                content: "Build Retrieval-Augmented Generation systems using Pinecone, Chroma, and Qdrant. Ground agent reasoning with private company documents, PDFs, and knowledge bases.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Simulating Vector Search & RAG
query = "What is the refund policy?"
matched_context = "Section 4.1: Refunds are processed within 7 business days."
print(f"Context injected for Agent: '{matched_context}'")`,
        output: `Context injected for Agent: 'Section 4.1: Refunds are processed within 7 business days.'`,
        mcqs: [
            { question: "Why is RAG (Retrieval Augmented Generation) critical for agents?", options: ["It prevents hallucination and connects LLMs to real-time custom documents", "It replaces the internet", "It deletes all databases", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-9',
        courseId: 'no-code-low-code-ai-agents',
        order: 9,
        title: 'WEEK 9 — Multi-Agent Systems & Orchestration',
        sections: [
            {
                title: "Collaborative Teams of AI Agents",
                content: "Deploy multi-agent systems where specialized agents (Researcher, Writer, Reviewer, Coder) work together using CrewAI, AutoGen, and LangGraph.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Multi-Agent Crew Workflow Simulation
crew = ["ResearcherAgent", "WriterAgent", "QA_Agent"]
workflow = " -> ".join(crew)
print("Agent Workflow Pipeline:", workflow)`,
        output: `Agent Workflow Pipeline: ResearcherAgent -> WriterAgent -> QA_Agent`,
        mcqs: [
            { question: "In a Multi-Agent system, how do agents accomplish complex goals?", options: ["By delegating subtasks and collaborating with specialized roles", "By competing and shutting each other down", "By running without LLMs", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-10',
        courseId: 'no-code-low-code-ai-agents',
        order: 10,
        title: 'WEEK 10 — AI for Business and Industry',
        sections: [
            {
                title: "Vertical Enterprise Solutions",
                content: "Case studies in Healthcare, Life Sciences, Finance, Legal, and E-commerce. Identify high-ROI operational bottlenecks and architect solutions.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `roi_calc = lambda hours_saved, rate: hours_saved * rate * 52
print(f"Annual Savings with Agent: ₹{roi_calc(25, 1200):,}")`,
        output: `Annual Savings with Agent: ₹1,560,000`,
        mcqs: [
            { question: "What is an important metric when evaluating enterprise AI agent projects?", options: ["ROI (Return on Investment) and hours saved", "Number of colors on the screen", "Weight of the monitor", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-11',
        courseId: 'no-code-low-code-ai-agents',
        order: 11,
        title: 'WEEK 11 — AI Product Development',
        sections: [
            {
                title: "Prototype to Production",
                content: "Product design, UX for AI assistants, testing, error-handling, latency mitigation, and cloud deployment on Vercel, Railway, or AWS.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `deployment_manifest = {"status": "LIVE", "endpoint": "/api/agent/run", "uptime": "99.98%"}
print("Deployment Status:", deployment_manifest)`,
        output: `Deployment Status: {'status': 'LIVE', 'endpoint': '/api/agent/run', 'uptime': '99.98%'}`,
        mcqs: [
            { question: "What is essential when designing user interfaces for AI agents?", options: ["Clear feedback, streaming responses, and fallbacks", "Hiding all outputs from users", "Only allowing command line terminal", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-12',
        courseId: 'no-code-low-code-ai-agents',
        order: 12,
        title: 'WEEK 12 — AI Ethics, Governance and Safety',
        sections: [
            {
                title: "Responsible AI, Compliance & Safety Guardrails",
                content: "Implement NeMo Guardrails, Llama Guard, GDPR/HIPAA compliance, prompt injection defense, and human-in-the-loop oversight.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Safety Guardrail Check
def check_safety(query):
    blocked_keywords = ["system override", "reveal secrets"]
    if any(k in query.lower() for k in blocked_keywords):
        return "BLOCKED by Safety Guardrail"
    return "SAFE"

print(check_safety("Help me analyze customer feedback"))`,
        output: `SAFE`,
        mcqs: [
            { question: "What is the purpose of AI Guardrails?", options: ["Prevent malicious prompt injections and sensitive data leaks", "Make the computer run slower", "Turn off the internet", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-13',
        courseId: 'no-code-low-code-ai-agents',
        order: 13,
        title: 'WEEK 13 — Capstone Project Development',
        sections: [
            {
                title: "End-to-End Enterprise Solution",
                content: "Work 1:1 with industry mentors to build your comprehensive Capstone AI Agent system complete with multi-agent orchestration, tools, and UI.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `print("=== Capstone Project Submission Ready ===")
print("System Architecture: Multi-Agent + RAG + Guardrails")
print("Status: Verified for Final Showcase")`,
        output: `=== Capstone Project Submission Ready ===
System Architecture: Multi-Agent + RAG + Guardrails
Status: Verified for Final Showcase`,
        mcqs: [
            { question: "What is the outcome of Week 13 Capstone Project?", options: ["A complete, real-world AI solution ready to showcase", "Uncompleted notes", "A paper test only", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'no-code-agent-week-14',
        courseId: 'no-code-low-code-ai-agents',
        order: 14,
        title: 'WEEK 14 — Project Showcase and Career Readiness',
        sections: [
            {
                title: "Showcase, Certification & Career Launch",
                content: "Present your Capstone project to faculty and industry experts, optimize your LinkedIn and resume, earn your Certificate of Completion (10 CEUs), and join the GenQuantaa global alumni network.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                videoUrl: "https://youtu.be/qWu6nZgjteo",
                pdfUrl: "https://canva.link/rjfd8qkq4hfewxv"
            }
        ],
        code: `print("🎓 Congratulations! Certificate of Completion Ready.")
print("CEU Credits: 10 CEUs")
print("Alumni Network: GenQuantaa Academy Global")`,
        output: `🎓 Congratulations! Certificate of Completion Ready.
CEU Credits: 10 CEUs
Alumni Network: GenQuantaa Academy Global`,
        mcqs: [
            { question: "What credential is awarded upon successful completion of the 14-week program?", options: ["Official Certificate of Completion with 10 CEUs", "No certificate", "A participation postcard", "None"], correctAnswer: 0 }
        ]
    }
];
