export const pythonModules = [
    {
        id: 'module-1',
        courseId: 'python-ai-course',
        order: 1,
        title: 'MODULE 1 — Python for Machine Learning',
        sections: [
            {
                title: "Course Brochure",
                content: "Please review the detailed course brochure below.",
                pdfUrl: "/AI Course Broucher.pdf"
            },
            {
                title: "Introduction Video",
                content: "Watch this introductory video to understand the basics of AI. You must complete the video to proceed.",
                videoUrl: "/Video.mp4"
            },
            {
                title: "Variables & Data Types",
                content: "Python is a dynamically typed language, meaning you don't need to declare variables before using them or specify their type. The interpreter infers the type at runtime.\n\n**Common Data Types:**\n- **Integer (int)**: Whole numbers, e.g., `10`, `-5`.\n- **Float (float)**: Decimal numbers, e.g., `10.5`, `3.14`.\n- **String (str)**: Text, e.g., `'Hello'`, `'Python'`.\n- **Boolean (bool)**: True or False values.",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Lists, Tuples, Dictionaries",
                content: "These are essential data structures in Python.\n\n- **List**: Ordered, mutable collection. Created with `[]`.\n- **Tuple**: Ordered, immutable collection. Created with `()`.\n- **Dictionary**: Unordered, mutable collection of key-value pairs. Created with `{}`.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Functions",
                content: "Functions are reusable blocks of code. They help in organizing code and avoiding repetition.\n- Defined using the `def` keyword.\n- Can accept parameters and return values.",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Variables and Data Types
name = "Raj"
age = 21
cgpa = 8.5

print("Name:", name)
print("Age:", age)
print("CGPA:", cgpa)
print("Types:", type(name), type(age), type(cgpa))

# List & Loop
marks = [90, 85, 88, 92]
total = 0

for m in marks:
    total += m

print("Average:", total / len(marks))

# Function
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
                question: "Which of the following is an immutable data structure in Python?",
                options: ["List", "Dictionary", "Tuple", "Set"],
                correctAnswer: 2
            },
            {
                question: "What is the output of type(10.5)?",
                options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
                correctAnswer: 1
            },
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["func", "define", "def", "function"],
                correctAnswer: 2
            },
            {
                question: "How do you create a single-line comment in Python?",
                options: ["//", "/* */", "#", "--"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'module-2',
        courseId: 'python-ai-course',
        order: 2,
        title: 'MODULE 2 — Mathematics for ML',
        sections: [
            {
                title: "Statistics",
                content: "Statistics is the core of Machine Learning. It helps us understand data distribution and relationships.\n\n- **Mean**: The average value of a dataset.\n- **Median**: The middle value when data is sorted.\n- **Mode**: The most frequently occurring value.\n- **Standard Deviation**: Measures how spread out the numbers are.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Linear Algebra",
                content: "Linear Algebra deals with vectors and matrices, which are fundamental to how ML algorithms work.\n\n- **Vectors**: 1D arrays representing a point in space.\n- **Matrices**: 2D arrays (rows and columns).\n- **Dot Product**: A key operation in neural networks.",
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import numpy as np

data = [10, 20, 30, 40]
print("Mean:", np.mean(data))
print("Std:", np.std(data))

A = np.array([[1,2],[3,4]])
B = np.array([[5,6],[7,8]])

print("Dot Product:\\n", np.dot(A, B))`,
        output: `Mean: 25.0
Std: 11.180339887498949
Dot Product:
 [[19 22]
 [43 50]]`,
        mcqs: [
            {
                question: "Which statistical measure indicates the spread of data?",
                options: ["Mean", "Median", "Mode", "Standard Deviation"],
                correctAnswer: 3
            },
            {
                question: "What is a 2D array called in Linear Algebra?",
                options: ["Vector", "Scalar", "Matrix", "Tensor"],
                correctAnswer: 2
            },
            {
                question: "What is the middle value in a sorted dataset called?",
                options: ["Mean", "Median", "Mode", "Range"],
                correctAnswer: 1
            },
            {
                question: "Which concept represents a point in space in Linear Algebra?",
                options: ["Vector", "Matrix", "Scalor", "Determinant"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'module-3',
        courseId: 'python-ai-course',
        order: 3,
        title: 'MODULE 3 — NumPy & Pandas',
        sections: [
            {
                title: "NumPy",
                content: "NumPy is the fundamental package for scientific computing in Python. It provides support for arrays, matrices, and high-level mathematical functions.",
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Pandas",
                content: "Pandas is built on top of NumPy and is used for data manipulation and analysis.\n\n- **DataFrame**: 2-dimensional labeled data structure.\n- **Series**: One-dimensional labeled array.\n- **Missing Data**: Real-world data often has missing values. Pandas provides methods like `fillna()` and `dropna()` to handle them.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import pandas as pd

# Mocking a dataframe
data = {
  "Name": ["Alice", "Bob", "Charlie"],
  "Salary": [50000, 60000, None]
}
df = pd.DataFrame(data)

print("Original DataFrame:\\n", df)

# Fill NA
df["Salary"].fillna(df["Salary"].mean(), inplace=True)
print("\\nAfter Filling NA:\\n", df)`,
        output: `Original DataFrame:
       Name   Salary
0    Alice  50000.0
1      Bob  60000.0
2  Charlie      NaN

After Filling NA:
       Name   Salary
0    Alice  50000.0
1      Bob  60000.0
2  Charlie  55000.0`,
        mcqs: [
            {
                question: "Which Pandas structure is 2-dimensional?",
                options: ["Series", "DataFrame", "Panel", "Array"],
                correctAnswer: 1
            },
            {
                question: "Which method is used to fill missing values in Pandas?",
                options: ["removeNA()", "fill()", "fillna()", "replace()"],
                correctAnswer: 2
            },
            {
                question: "Which NumPy function calculates the mean?",
                options: ["np.average()", "np.mean()", "np.median()", "np.calc_mean()"],
                correctAnswer: 1
            },
            {
                question: "What library is Pandas built on top of?",
                options: ["Matplotlib", "SciPy", "NumPy", "TensorFlow"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'module-4',
        courseId: 'python-ai-course',
        order: 4,
        title: 'MODULE 4 — Data Visualization',
        sections: [
            {
                title: "Matplotlib",
                content: "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.\n\n- **Plot**: Basic line plot.\n- **Scatter**: Scatter plot.\n- **Hist**: Histogram.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Why Visualize?",
                content: "Visualizing data helps in:\n1. Identifying patterns and trends.\n2. Detecting outliers.\n3. Communicating insights effectively.",
                image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [10, 20, 30]

print("Plotting graph with X:", x, "and Y:", y)
print("Graph displayed in window.")`,
        output: `Plotting graph with X: [1, 2, 3] and Y: [10, 20, 30]
Graph displayed in window.
(Visual graph would appear here)`,
        mcqs: [
            {
                question: "Which plot is best for showing the distribution of a single variable?",
                options: ["Scatter Plot", "Line Plot", "Histogram", "Pie Chart"],
                correctAnswer: 2
            },
            {
                question: "Which library is primarily used for plotting in Python?",
                options: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
                correctAnswer: 2
            },
            {
                question: "Which plot is best for showing the relationship between two variables?",
                options: ["Histogram", "Scatter Plot", "Bar Chart", "Pie Chart"],
                correctAnswer: 1
            },
            {
                question: "What kind of data is best visualized with a histogram?",
                options: ["Categorical data", "Time series data", "Frequency distribution", "Geospatial data"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'module-5',
        courseId: 'python-ai-course',
        order: 5,
        title: 'MODULE 5 — Feature Engineering',
        sections: [
            {
                title: "Feature Scaling",
                content: "Feature scaling is a method used to normalize the range of independent variables or features of data. This is crucial because many ML algorithms (like K-Means, KNN, SVM) are sensitive to the scale of input features.\n\n- **StandardScaler**: Standardize features by removing the mean and scaling to unit variance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Why Scale?",
                content: "If one feature has a range of 0-1 and another has 0-1000, the algorithm might give more weight to the larger feature, leading to incorrect results.",
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `from sklearn.preprocessing import StandardScaler
import pandas as pd

data = [[25, 50000], [30, 60000], [35, 70000]]
df = pd.DataFrame(data, columns=["Age", "Salary"])

sc = StandardScaler()
scaled_data = sc.fit_transform(df)

print("Scaled Data:\\n", scaled_data)`,
        output: `Scaled Data:
 [[-1.22474487 -1.22474487]
 [ 0.          0.        ]
 [ 1.22474487  1.22474487]]`,
        mcqs: [
            {
                question: "Why is feature scaling important?",
                options: ["It makes the code faster", "It prevents large features from dominating", "It removes missing values", "It converts text to numbers"],
                correctAnswer: 1
            },
            {
                question: "What does StandardScaler do?",
                options: ["Scales to [0, 1]", "Removes mean and scales to unit variance", "Converts to log scale", "Removes outliers"],
                correctAnswer: 1
            },
            {
                question: "Which of the following is NOT a standard method of feature scaling?",
                options: ["Min-Max Scaling", "Standard Scaling", "Random Scaling", "Robust Scaling"],
                correctAnswer: 2
            },
            {
                question: "Why do we split data into training and test sets?",
                options: ["To maximize training data", "To evaluate performance on unseen data", "To reduce training time", "To avoid data leakage"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'module-6',
        courseId: 'python-ai-course',
        order: 6,
        title: 'MODULE 6 — Supervised Learning',
        sections: [
            {
                title: "Supervised Learning",
                content: "In supervised learning, the model learns from labeled training data. It tries to learn a mapping from inputs (features) to outputs (labels).",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Common Algorithms",
                content: "- **Linear Regression**: Used for regression tasks (predicting a continuous value).\n- **Logistic Regression**: Used for classification tasks (predicting a category).\n- **Decision Tree**: Uses a tree-like model of decisions.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `from sklearn.linear_model import LinearRegression
import numpy as np

# Mock Data
X_train = np.array([[1], [2], [3]])
y_train = np.array([2, 4, 6])
X_test = np.array([[4]])

model = LinearRegression()
model.fit(X_train, y_train)
prediction = model.predict(X_test)

print("Prediction for input 4:", prediction)`,
        output: `Prediction for input 4: [8.]`,
        mcqs: [
            {
                question: "Which algorithm is used for predicting continuous values?",
                options: ["Logistic Regression", "Linear Regression", "K-Means", "Apriori"],
                correctAnswer: 1
            },
            {
                question: "Supervised learning requires:",
                options: ["Labeled data", "Unlabeled data", "No data", "Only images"],
                correctAnswer: 0
            },
            {
                question: "Which of these is a classification algorithm?",
                options: ["Linear Regression", "Logistic Regression", "K-Means", "PCA"],
                correctAnswer: 1
            },
            {
                question: "What is the target variable in a regression problem?",
                options: ["Categorical", "Discrete class", "Continuous / Numerical", "Text"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'module-7',
        courseId: 'python-ai-course',
        order: 7,
        title: 'MODULE 7 — Unsupervised Learning',
        sections: [
            {
                title: "Unsupervised Learning",
                content: "In unsupervised learning, the model learns from unlabeled data. It tries to find hidden patterns or structures in the data.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "K-Means Clustering",
                content: "K-Means is a popular clustering algorithm. It partitions data into 'k' clusters.\n1. Initialize 'k' centroids randomly.\n2. Assign each data point to the nearest centroid.\n3. Update centroids to be the mean of points in the cluster.\n4. Repeat until convergence.",
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `from sklearn.cluster import KMeans
import numpy as np

X = np.array([[1, 2], [1, 4], [1, 0],
              [10, 2], [10, 4], [10, 0]])

kmeans = KMeans(n_clusters=2, random_state=0, n_init="auto")
kmeans.fit(X)

print("Cluster Labels:", kmeans.labels_)
print("Cluster Centers:\\n", kmeans.cluster_centers_)`,
        output: `Cluster Labels: [1 1 1 0 0 0]
Cluster Centers:
 [[10.  2.]
 [ 1.  2.]]`,
        mcqs: [
            {
                question: "Unsupervised learning uses:",
                options: ["Labeled data", "Unlabeled data", "Reinforcement signals", "Teacher guidance"],
                correctAnswer: 1
            },
            {
                question: "What is the goal of K-Means?",
                options: ["Prediction", "Classification", "Clustering", "Regression"],
                correctAnswer: 2
            },
            {
                question: "In K-Means, what does 'K' represent?",
                options: ["Number of iterations", "Number of clusters", "Number of features", "Number of data points"],
                correctAnswer: 1
            },
            {
                question: "Which of these is a common application of clustering?",
                options: ["Spam detection", "Customer Segmentation", "Stock prediction", "Image recognition"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'module-8',
        courseId: 'python-ai-course',
        order: 8,
        title: 'MODULE 8 — Model Evaluation',
        sections: [
            {
                title: "Model Evaluation Metrics",
                content: "How do we know if our model is good? We use evaluation metrics.\n\n- **Accuracy**: (TP+TN) / Total\n- **Precision**: TP / (TP+FP)\n- **Recall**: TP / (TP+FN)\n- **F1 Score**: 2 * (Precision * Recall) / (Precision + Recall)",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `from sklearn.metrics import accuracy_score

y_test = [0, 1, 1, 0]
y_pred = [0, 1, 0, 0]

acc = accuracy_score(y_test, y_pred)
print("Accuracy Score:", acc)`,
        output: `Accuracy Score: 0.75`,
        mcqs: [
            {
                question: "Which metric is best for imbalanced datasets?",
                options: ["Accuracy", "F1 Score", "Mean Squared Error", "R2 Score"],
                correctAnswer: 1
            },
            {
                question: "What does Precision measure?",
                options: ["Total correct predictions", "Correct positive predictions out of predicted positives", "Correct positive predictions out of actual positives", "None of the above"],
                correctAnswer: 1
            },
            {
                question: "What is the formula for Accuracy?",
                options: ["TP / (TP+FP)", "(TP+TN) / Total", "TP / (TP+FN)", "2*P*R / (P+R)"],
                correctAnswer: 1
            },
            {
                question: "What does Recall measure?",
                options: ["How many selected items are relevant", "How many relevant items are selected", "Overall correctness", "Error rate"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'module-9',
        courseId: 'python-ai-course',
        order: 9,
        title: 'MODULE 9 — Model Deployment',
        sections: [
            {
                title: "Model Deployment",
                content: "Deployment is the process of integrating a machine learning model into an existing production environment.",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Tools",
                content: "### Flask\nFlask is a lightweight WSGI web application framework.\n\n### Pickle\nThe `pickle` module implements binary protocols for serializing and de-serializing a Python object structure.",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `print("Starting Flask Server...")
print("Loading model.pkl...")
print("Server running on http://127.0.0.1:5000")
print("Waiting for requests...")`,
        output: `Starting Flask Server...
Loading model.pkl...
Server running on http://127.0.0.1:5000
Waiting for requests...`,
        mcqs: [
            {
                question: "What is Flask used for in ML?",
                options: ["Training models", "Creating web APIs for models", "Data cleaning", "Visualization"],
                correctAnswer: 1
            },
            {
                question: "What is Pickle used for?",
                options: ["Data visualization", "Model serialization (saving/loading)", "Web scraping", "Database management"],
                correctAnswer: 1
            },
            {
                question: "What is the purpose of serializing a model?",
                options: ["To compress it", "To save it state for later use", "To improve accuracy", "To visualize it"],
                correctAnswer: 1
            },
            {
                question: "Which standard is often used for web APIs?",
                options: ["SOAP", "REST", "XML", "HTML"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'module-10',
        courseId: 'python-ai-course',
        order: 10,
        title: 'MODULE 10 — Capstone Projects',
        sections: [
            {
                title: "Capstone Projects",
                content: "This is the final step! Apply everything you've learned to build real-world projects.\n\n**Projects:**\n1. **Stock Market Prediction**\n2. **Medical Diagnosis Prediction**\n3. **Student Performance Prediction**\n4. **House Price Prediction**\n5. **Fake News Detection**",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Capstone Project Placeholder
print("Initializing Capstone Project Environment...")
print("Loading Datasets...")
print("Ready to build!")`,
        output: `Initializing Capstone Project Environment...
Loading Datasets...
Ready to build!`,
        mcqs: [
            {
                question: "Which project involves Time Series analysis?",
                options: ["Fake News Detection", "Stock Market Prediction", "Medical Diagnosis", "House Price Prediction"],
                correctAnswer: 1
            },
            {
                question: "What is the next step after completing this course?",
                options: ["Stop learning", "Build a portfolio", "Forget everything", "Switch careers"],
                correctAnswer: 1
            },
            {
                question: "Which of these is a typical step in a Machine Learning project?",
                options: ["Data Cleaning", "Modeling", "Deployment", "All of the above"],
                correctAnswer: 3
            },
            {
                question: "What is the primary goal of a capstone project?",
                options: ["To pass time", "To apply learned skills to a real-world problem", "To memorize code", "None of the above"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'module-11',
        courseId: 'python-ai-course',
        order: 11,
        title: 'MODULE 11 — Web Scraping',
        sections: [
            {
                title: "BeautifulSoup",
                content: "Web scraping is the process of extracting data from websites. BeautifulSoup is a Python library for pulling data out of HTML and XML files.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import requests
from bs4 import BeautifulSoup

html_doc = "<html><head><title>The Dormouse's story</title></head><body><p class='title'><b>The Dormouse's story</b></p></body></html>"
soup = BeautifulSoup(html_doc, 'html.parser')

print(soup.title.string)
print(soup.p['class'])`,
        output: `The Dormouse's story
['title']`,
        mcqs: [
            {
                question: "What is BeautifulSoup used for?",
                options: ["Web Scraping", "Game Development", "Database Management", "Image Processing"],
                correctAnswer: 0
            },
            {
                question: "Which parser is commonly used with BeautifulSoup?",
                options: ["html.parser", "json.parser", "csv.parser", "sql.parser"],
                correctAnswer: 0
            },
            {
                question: "Which library is used to send HTTP requests in the example?",
                options: ["requests", "urllib", "http", "socket"],
                correctAnswer: 0
            },
            {
                question: "What does HTML stand for?",
                options: ["HyperText Machine Language", "HyperText Markup Language", "HyperTool Markup Language", "HyperLink Text Language"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'module-12',
        courseId: 'python-ai-course',
        order: 12,
        title: 'MODULE 12 — Working with APIs',
        sections: [
            {
                title: "REST APIs",
                content: "API (Application Programming Interface) allows different software to communicate. REST is a common architectural style for web APIs.",
                image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import requests

# Mock API call
response = requests.get('https://api.github.com')
print("Status Code:", response.status_code)`,
        output: `Status Code: 200`,
        mcqs: [
            {
                question: "What does HTTP 200 mean?",
                options: ["Not Found", "OK", "Server Error", "Unauthorized"],
                correctAnswer: 1
            },
            {
                question: "Which library is used for HTTP requests in Python?",
                options: ["http", "requests", "urllib", "fetch"],
                correctAnswer: 1
            },
            {
                question: "What allows different software systems to communicate?",
                options: ["API", "HTML", "CSS", "SQL"],
                correctAnswer: 0
            },
            {
                question: "Which HTTP method is used to retrieve data?",
                options: ["POST", "PUT", "DELETE", "GET"],
                correctAnswer: 3
            }
        ]
    }
];
