
export const aiCoreModules = [
    // --- MACHINE LEARNING & DEEP LEARNING (ml-dl-course) ---
    // --- MACHINE LEARNING & DEEP LEARNING (ml-dl-course) ---
    {
        id: 'ml-dl-module-1',
        courseId: 'ml-dl-course',
        order: 1,
        title: 'MODULE 1 — Advanced Regression',
        sections: [
            {
                title: "Linear & Polynomial Regression",
                content: "Regression analysis estimates relationships between variables. We explore Linear Regression for simple relationships and Polynomial Regression for non-linear data patterns, along with metrics like MSE and R-squared.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Regularization: Lasso & Ridge",
                content: "To prevent overfitting, we use Regularization. Lasso (L1) can eliminate features, while Ridge (L2) shrinks coefficients. Elastic Net combines both.",
                image: "https://images.unsplash.com/photo-1543286386-2f6595e96e6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Ridge Regression Example
from sklearn.linear_model import Ridge
import numpy as np

X = np.array([[1, 1], [1, 2], [2, 2], [2, 3]])
y = np.dot(X, np.array([1, 2])) + 3

clf = Ridge(alpha=1.0)
clf.fit(X, y)
print("Coefficients:", clf.coef_)
print("Intercept:", clf.intercept_)`,
        output: `Coefficients: [0.8 1.4]\nIntercept: 3.5`,
        mcqs: [
            { question: "What is the main purpose of Regularization in regression?", options: ["Increase Bias", "Reduce Overfitting", "Increase Variance", "None"], correctAnswer: 1 },
            { question: "What does Lasso (L1) regularization tend to do?", options: ["Shrink coefficients to zero", "Square the coefficients", "Increase model complexity", "None"], correctAnswer: 0 },
            { question: "What does the R-squared metric measure?", options: ["Error rate", "Proportion of variance explained", "Training time", "Number of features"], correctAnswer: 1 },
            { question: "Polynomial Regression is best used for...", options: ["Linear relationships", "Non-linear relationships", "Categorical data", "Clustering"], correctAnswer: 1 }
        ]
    },
    {
        id: 'ml-dl-module-2',
        courseId: 'ml-dl-course',
        order: 2,
        title: 'MODULE 2 — Decision Trees & Random Forests',
        sections: [
            {
                title: "Decision Trees",
                content: "Decision Trees Model decisions and their possible consequences. They splits data into branches to form a tree structure. Key concepts include Entropy, Information Gain, and Gini Impurity.",
                image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Random Forests",
                content: "Random Forest is an ensemble method that constructs a multitude of decision trees. It reduces overfitting by averaging the results of many trees (Bagging).",
                image: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Random Forest Classifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

X, y = make_classification(n_samples=1000, n_features=4)
clf = RandomForestClassifier(max_depth=2, random_state=0)
clf.fit(X, y)
print(f"Prediction for [0,0,0,0]: {clf.predict([[0, 0, 0, 0]])}")`,
        output: `Prediction for [0,0,0,0]: [1]`,
        mcqs: [
            { question: "Which metric is used to split nodes in a Decision Tree?", options: ["Gini Impurity", "Accuracy", "F1-Score", "Recall"], correctAnswer: 0 },
            { question: "Random Forest is an example of which ensemble method?", options: ["Boosting", "Bagging", "Stacking", "Clustering"], correctAnswer: 1 },
            { question: "What is the goal of Pruning?", options: ["To increase tree size", "To reduce overfitting", "To add noise", "To speed up training"], correctAnswer: 1 },
            { question: "What is Information Gain?", options: ["Increase in Entropy", "Reduction in Entropy", "Total Error", "None"], correctAnswer: 1 }
        ]
    },
    {
        id: 'ml-dl-module-3',
        courseId: 'ml-dl-course',
        order: 3,
        title: 'MODULE 3 — SVM & Kernels',
        sections: [
            {
                title: "Support Vector Machines",
                content: "SVM finds the hyperplane that best separates classes in a high-dimensional space. Support vectors are the data points closest to the hyperplane.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Kernel Trick",
                content: "When data isn't linearly separable, Kernels map input data into higher-dimensional feature spaces where it becomes separable. Common kernels: Linear, Polynomial, RBF.",
                image: "https://images.unsplash.com/photo-1509228627129-72ae075841cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# SVM Classification
from sklearn import svm
X = [[0, 0], [1, 1]]
y = [0, 1]
clf = svm.SVC()
clf.fit(X, y)
print(f"Prediction for [2,2]: {clf.predict([[2, 2]])}")`,
        output: `Prediction for [2,2]: [1]`,
        mcqs: [
            { question: "What is the role of a Kernel in SVM?", options: ["To mix data", "To map data to higher dimensions", "To lower dimensions", "To ignore outliers"], correctAnswer: 1 },
            { question: "What are Support Vectors?", options: ["All data points", "Points closest to the hyperplane", "Outliers", "Points with zero weight"], correctAnswer: 1 },
            { question: "SVM tries to find a hyperplane that maximizes the...", options: ["Error", "Margin", "Bias", "Variance"], correctAnswer: 1 },
            { question: "Which kernel is commonly used for non-linear data?", options: ["Linear", "RBF (Radial Basis Function)", "Null", "Flat"], correctAnswer: 1 }
        ]
    },
    {
        id: 'ml-dl-module-4',
        courseId: 'ml-dl-course',
        order: 4,
        title: 'MODULE 4 — Clustering Algorithms',
        sections: [
            {
                title: "K-Means Clustering",
                content: "K-Means partitions n observations into k clusters. It iteratively moves centroids to minimize the variance within clusters. It's fast but sensitive to initialization.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Hierarchical & DBSCAN",
                content: "Hierarchical clustering builds a tree of clusters. DBSCAN groups together points that are closely packed, making it robust to outliers and able to find arbitrary shapes.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# K-Means Example
from sklearn.cluster import KMeans
import numpy as np
X = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])
kmeans = KMeans(n_clusters=2, random_state=0).fit(X)
print("Labels:", kmeans.labels_)
print("Centroids:", kmeans.cluster_centers_)`,
        output: `Labels: [1 1 1 0 0 0]\nCentroids: [[10.  2.]\n [ 1.  2.]]`,
        mcqs: [
            { question: "K-Means is what type of learning?", options: ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"], correctAnswer: 1 },
            { question: "DBSCAN is particularly good at...", options: ["Finding spherical clusters", "Finding arbitrary shaped clusters and outliers", "Regression", "Classification"], correctAnswer: 1 },
            { question: "Hierarchical clustering results are often visualized as a...", options: ["Scatter plot", "Dendrogram", "Histogram", "Pie chart"], correctAnswer: 1 },
            { question: "Does K-Means clustering depend on initial centroid placement?", options: ["Yes", "No", "Only for small datasets", "Maybe"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ml-dl-module-5',
        courseId: 'ml-dl-course',
        order: 5,
        title: 'MODULE 5 — Dimensionality Reduction (PCA)',
        sections: [
            {
                title: "Principal Component Analysis",
                content: "PCA reduces the dimensionality of data while retaining most of the variation. It projects data onto new orthogonal axes (Principal Components). Useful for visualization and compression.",
                image: "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# PCA Example
from sklearn.decomposition import PCA
import numpy as np
X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
pca = PCA(n_components=2)
pca.fit(X)
print("Explained Variance Ratio:", pca.explained_variance_ratio_)`,
        output: `Explained Variance Ratio: [0.9924... 0.0075...]`,
        mcqs: [
            { question: "PCA seeks to maximize what?", options: ["Error", "Variance", "Bias", "Noise"], correctAnswer: 1 },
            { question: "PCA projects data onto...", options: ["Random axes", "Principal Components (Orthogonal axes)", "Curved lines", "None"], correctAnswer: 1 },
            { question: "Dimensionality reduction is useful for...", options: ["Data Visualization and Compression", "Increasing file size", "Making models slower", "None"], correctAnswer: 0 },
            { question: "Are Principal Components correlated?", options: ["Yes, highly", "No, they are uncorrelated", "Inverse correlation", "None"], correctAnswer: 1 }
        ]
    },
    {
        id: 'ml-dl-module-6',
        courseId: 'ml-dl-course',
        order: 6,
        title: 'MODULE 6 — Gradient Boosting (XGBoost)',
        sections: [
            {
                title: "Boosting Concepts",
                content: "Boosting combines weak learners sequentially to reduce bias. Each new model corrects the errors of previous ones.",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "XGBoost",
                content: "eXtreme Gradient Boosting (XGBoost) is an optimized, scalable implementation of gradient boosting. It is widely used in competitions for its speed and performance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# XGBoost Simulation (Conceptual)
print("Initializing XGBoost Regressor...")
print("Training on 1000 rounds...")
print("Best Score via CV: 0.985")`,
        output: `Initializing XGBoost Regressor...\nTraining on 1000 rounds...\nBest Score via CV: 0.985`,
        mcqs: [
            { question: "Gradient Boosting builds models...", options: ["In parallel", "Sequentially", "Randomly", "None"], correctAnswer: 1 },
            { question: "What does XGBoost stand for?", options: ["Extra Gradient Boosting", "eXtreme Gradient Boosting", "X-factor Boosting", "None"], correctAnswer: 1 },
            { question: "Boosting combines...", options: ["Strong learners", "Weak learners into a strong one", "Random guesses", "None"], correctAnswer: 1 },
            { question: "XGBoost is popular because...", options: ["It is slow", "It is fast and scalable", "It requires no data", "None"], correctAnswer: 1 }
        ]
    },
    {
        id: 'ml-dl-module-7',
        courseId: 'ml-dl-course',
        order: 7,
        title: 'MODULE 7 — Ensemble Methods',
        sections: [
            {
                title: "Bagging, Boosting, Stacking",
                content: "**Bagging:** Bootstrap Aggregating (e.g., Random Forest).\n**Boosting:** Sequential correction (e.g., AdaBoost, XGBoost).\n**Stacking:** A meta-model learns how to combine predictions from base models.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Voting Classifier
from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier

clf1 = LogisticRegression(random_state=1)
clf2 = RandomForestClassifier(n_estimators=50, random_state=1)
clf3 = GaussianNB()

eclf1 = VotingClassifier(estimators=[('lr', clf1), ('rf', clf2), ('gnb', clf3)], voting='hard')
print("Voting Classifier Initialized")`,
        output: `Voting Classifier Initialized`,
        mcqs: [
            { question: "Bagging stands for...", options: ["Bootstrap Aggregating", "Bagging Algorithms", "Boosted Aggregating", "None"], correctAnswer: 0 },
            { question: "Which method combines predictions from base models using a meta-model?", options: ["Stacking", "Bagging", "Boosting", "Clustering"], correctAnswer: 0 },
            { question: "A Voting Classifier is used to...", options: ["Combine different classifiers", "Vote for politicians", "Split data", "None"], correctAnswer: 0 },
            { question: "What is a main benefit of Ensemble methods?", options: ["Improved accuracy and robustness", "Faster training", "Less data needed", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ml-dl-module-8',
        courseId: 'ml-dl-course',
        order: 8,
        title: 'MODULE 8 — Neural Network Basics',
        sections: [
            {
                title: "The Perceptron",
                content: "A Perceptron is the simplest neural network unit. It takes inputs, weights them, adds a bias, and passes the result through an activation function.",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Multi-Layer Perceptron (MLP)",
                content: "MLPs consists of at least three layers of nodes: an input layer, a hidden layer and an output layer. They can distinguish data that is not linearly separable.",
                image: "https://images.unsplash.com/photo-1509228627129-72ae075841cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Simple Neural Network (Keras style pseudo-code)
model = Sequential()
model.add(Dense(12, input_dim=8, activation='relu'))
model.add(Dense(8, activation='relu'))
model.add(Dense(1, activation='sigmoid'))
print("Model created.")`,
        output: `Model created.`,
        mcqs: [
            { question: "What is a Perceptron?", options: ["A multi-layer network", "A single neuron model", "A loss function", "An optimizer"], correctAnswer: 1 },
            { question: "What does MLP stand for?", options: ["Machine Learning Process", "Multi-Layer Perceptron", "Maximum Likelihood Probability", "None"], correctAnswer: 1 },
            { question: "Which layers are between the input and output?", options: ["Hidden Layers", "Outer Layers", "Middle Layers", "None"], correctAnswer: 0 },
            { question: "What is the role of an activation function?", options: ["To introduce non-linearity", "To linearize data", "To removing noise", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ml-dl-module-9',
        courseId: 'ml-dl-course',
        order: 9,
        title: 'MODULE 9 — Backpropagation In-Depth',
        sections: [
            {
                title: "The Learning Mechanism",
                content: "Backpropagation is the essence of neural net training. It calculates the gradient of the loss function with respect to the weights by applying the chain rule, iterating backward from the last layer.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Gradient Descent Logic (Conceptual)
learning_rate = 0.01
weight = 0.5
grad = 0.1 # derived from Backprop
weight = weight - learning_rate * grad
print(f"Updated weight: {weight}")`,
        output: `Updated weight: 0.499`,
        mcqs: [
            { question: "Backpropagation is used to...", options: ["Calculate gradients", "Initialize weights", "Predict output", "Load data"], correctAnswer: 0 },
            { question: "Backpropagation relies on which Calculus rule?", options: ["Chain Rule", "Product Rule", "Sum Rule", "None"], correctAnswer: 0 },
            { question: "Weights are updated using...", options: ["Gradient Descent", "Random Guessing", "Sorting", "None"], correctAnswer: 0 },
            { question: "A Gradient is a vector of...", options: ["Partial derivatives", "Integers", "Strings", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'ml-dl-module-10',
        courseId: 'ml-dl-course',
        order: 10,
        title: 'MODULE 10 — Hyperparameter Tuning',
        sections: [
            {
                title: "Optimizing Performance",
                content: "Hyperparameters (learning rate, number of layers, batch size) control the learning process. We tune them using Grid Search, Random Search, or Bayesian Optimization to find the best configuration.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Grid Search Example
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC
parameters = {'kernel':('linear', 'rbf'), 'C':[1, 10]}
svc = SVC()
clf = GridSearchCV(svc, parameters)
print("GridSearchCV initialized.")`,
        output: `GridSearchCV initialized.`,
        mcqs: [
            { question: "Grid Search is used for...", options: ["Finding optimal hyperparameters", "Training the model", "Preprocessing", "Visualization"], correctAnswer: 0 },
            { question: "What is a Hyperparameter?", options: ["A parameter learned during training", "A configuration set before training", "The output label", "None"], correctAnswer: 1 },
            { question: "How does Random Search differ from Grid Search?", options: ["It searches all combinations", "It samples combinations randomly", "It is slower", "None"], correctAnswer: 1 },
            { question: "Bayesian Optimization builds a...", options: ["Probabilistic model of the function", "Neural Network", "Decision Tree", "None"], correctAnswer: 0 }
        ]
    },

    // --- NATURAL LANGUAGE PROCESSING (nlp-course) ---
    // --- NATURAL LANGUAGE PROCESSING (nlp-course) ---
    {
        id: 'nlp-module-1',
        courseId: 'nlp-course',
        order: 1,
        title: 'MODULE 1 — Text Preprocessing',
        sections: [
            {
                title: "Cleaning and Formatting Text",
                content: "Data preprocessing is the first step in NLP. We clean text by removing noise (special characters, HTML), converting case, and handling whitespace. Essential techniques include Tokenization, Stemming, and Lemmatization.",
                image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Tokenization & Normalization",
                content: "Tokenization splits text into individual words or sentences. Normalization involves stemming (cutting words to root) and lemmatization (reducing words to dictionary root).",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Text Preprocessing Example
import nltk
from nltk.stem import PorterStemmer
text = "Running runs runner"
stemmer = PorterStemmer()
stemmed = [stemmer.stem(word) for word in text.split()]
print(f"Original: {text}")
print(f"Stemmed: {stemmed}")`,
        output: `Original: Running runs runner
Stemmed: ['run', 'run', 'runner']`,
        mcqs: [
            { question: "Which step removes suffixes to find the root word?", options: ["Stemming", "Stopword Removal", "Tokenization", "Lemmatization"], correctAnswer: 0 },
            { question: "Tokenization splits text into...", options: ["Tokens (words/sentences)", "Pixels", "Audio waves", "None"], correctAnswer: 0 },
            { question: "Lemmatization differs from Stemming because it...", options: ["Uses a dictionary/morphology", "Just chops off ends", "Is faster", "None"], correctAnswer: 0 },
            { question: "Cleaning text often involves removing...", options: ["Special characters and HTML", "Vowels", "Nouns", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-2',
        courseId: 'nlp-course',
        order: 2,
        title: 'MODULE 2 — Bag of Words & TF-IDF',
        sections: [
            {
                title: "Bag of Words (BoW)",
                content: "BoW represents text as the bag (multiset) of its words, disregarding grammar and word order but keeping multiplicity. It creates a frequency vector.",
                image: "https://images.unsplash.com/photo-1456324855829-3228ba109a96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "TF-IDF",
                content: "Term Frequency-Inverse Document Frequency reflects how important a word is to a document in a collection. It increases with the number of times a word appears in the document but is offset by the frequency of the word in the corpus.",
                image: "https://images.unsplash.com/photo-1507842217343-583bb726cc2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# TF-IDF Example
from sklearn.feature_extraction.text import TfidfVectorizer
corpus = [
    'This is the first document.',
    'This document is the second document.',
]
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)
print(vectorizer.get_feature_names_out())
print(X.toarray())`,
        output: `['document' 'first' 'is' 'second' 'the' 'this']
[[0.469 0.584 ...]]`,
        mcqs: [
            { question: "TF-IDF stands for...", options: ["Term Frequency-Inverse Document Frequency", "Total Frequency-Inverse Data Frequency", "Text Frequency-Internal Data Format", "None"], correctAnswer: 0 },
            { question: "A Bag of Words model ignores...", options: ["Grammar and word order", "Word counts", "Vocabulary", "None"], correctAnswer: 0 },
            { question: "If a word appears in every document, its IDF score is...", options: ["Low (near zero)", "High", "Infinite", "None"], correctAnswer: 0 },
            { question: "TF measures...", options: ["How often a word appears in a document", "Total words in corpus", "Document length", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-3',
        courseId: 'nlp-course',
        order: 3,
        title: 'MODULE 3 — Word Embeddings (Word2Vec)',
        sections: [
            {
                title: "Vector Representations",
                content: "Word embeddings give us a way to use an efficient, dense representation in which similar words have a similar encoding. Word2Vec uses neural networks to learn these embeddings.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Word2Vec (Conceptual)
print("Loading Word2Vec model...")
print("Similarity('king', 'queen') = 0.78")
print("Vector('apple') approx [0.1, -0.4, 0.9, ...]")`,
        output: `Loading Word2Vec model...
Similarity('king', 'queen') = 0.78
Vector('apple') approx [0.1, -0.4, 0.9, ...]`,
        mcqs: [
            { question: "Word2Vec captures...", options: ["Semantic meaning", "Just frequency", "Document length", "None"], correctAnswer: 0 },
            { question: "In Word Embeddings, similar words have...", options: ["Similar vectors (nearby in space)", "Opposite vectors", "Zero vectors", "None"], correctAnswer: 0 },
            { question: "Word2Vec uses which architecture?", options: ["Neural Networks", "Decision Trees", "K-Means", "None"], correctAnswer: 0 },
            { question: "The famous analogy: King - Man + Woman = ...", options: ["Queen", "Prince", "Princess", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-4',
        courseId: 'nlp-course',
        order: 4,
        title: 'MODULE 4 — RNNs for NLP',
        sections: [
            {
                title: "Recurrent Neural Networks",
                content: "RNNs process sequences by iterating through the sequence elements and maintaining a 'state' containing information relative to what it has seen so far.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Simple RNN structure
import numpy as np
input_size = 10
hidden_size = 20
h = np.zeros((hidden_size, 1))
print("Initialized hidden state for RNN.")`,
        output: `Initialized hidden state for RNN.`,
        mcqs: [
            { question: "RNNs are best suited for...", options: ["Image data", "Sequential data", "Tabular data", "None"], correctAnswer: 1 },
            { question: "RNNs maintain a...", options: ["Hidden State (Memory)", "Database", "File system", "None"], correctAnswer: 0 },
            { question: "A common problem with vanilla RNNs is...", options: ["Vanishing Gradient", "Overfitting only", "Too fast", "None"], correctAnswer: 0 },
            { question: "RNNs process data...", options: ["Step-by-step (sequentially)", "All at once", "Randomly", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-5',
        courseId: 'nlp-course',
        order: 5,
        title: 'MODULE 5 — LSTMs & GRUs',
        sections: [
            {
                title: "Long Short-Term Memory",
                content: "Standard RNNs suffer from vanishing gradients. LSTMs and GRUs introduce gates (forget, input, output) to control the flow of information, allowing them to learn long-term dependencies.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# LSTM Cell (Conceptual)
print("LSTM Cell: Input Gate, Forget Gate, Output Gate initialized.")
print("Capable of retaining context over long sequences.")`,
        output: `LSTM Cell: Input Gate, Forget Gate, Output Gate initialized.
Capable of retaining context over long sequences.`,
        mcqs: [
            { question: "LSTMs solve which RNN problem?", options: ["Vanishing Gradient", "Overfitting", "Underfitting", "High Bias"], correctAnswer: 0 },
            { question: "Which gate is NOT part of a standard LSTM?", options: ["Fence Gate", "Forget Gate", "Input Gate", "Output Gate"], correctAnswer: 0 },
            { question: "The 'Cell State' in LSTM act as a...", options: ["Conveyor belt for information", "Trash can", "Filter", "None"], correctAnswer: 0 },
            { question: "GRU is generally...", options: ["Simpler/Faster than LSTM", "More complex than LSTM", "Slower than RNN", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-6',
        courseId: 'nlp-course',
        order: 6,
        title: 'MODULE 6 — Seq2Seq Models',
        sections: [
            {
                title: "Encoder-Decoder Architecture",
                content: "Seq2Seq models use an encoder to process input sequence into a context vector and a decoder to generate the output sequence. Ideal for translation and summarization.",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Seq2Seq
print("Encoder: [Hello] -> [Vector]")
print("Decoder: [Vector] -> [Bonjour]")`,
        output: `Encoder: [Hello] -> [Vector]
Decoder: [Vector] -> [Bonjour]`,
        mcqs: [
            { question: "Seq2Seq models are commonly used for...", options: ["Translation", "Classification", "Clustering", "Regression"], correctAnswer: 0 },
            { question: "The Encoder converts input into a...", options: ["Context Vector", "Picture", "Sound", "None"], correctAnswer: 0 },
            { question: "The Decoder generates output...", options: ["Token by token", "All at once", "Reverse order", "None"], correctAnswer: 0 },
            { question: "Seq2Seq is an example of...", options: ["Encoder-Decoder architecture", "Reinforcement Learning", "Unsupervised learning", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-7',
        courseId: 'nlp-course',
        order: 7,
        title: 'MODULE 7 — Attention Mechanism',
        sections: [
            {
                title: "Pay Attention",
                content: "Instead of relying on a single context vector, Attention allows the decoder to look at different parts of the source sentence at each step of the output generation.",
                image: "https://images.unsplash.com/photo-1535378437327-b71494669e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Attention Score
print("Calculating attention weights...")
print("Focusing on word 'bank' in context.")`,
        output: `Calculating attention weights...
Focusing on word 'bank' in context.`,
        mcqs: [
            { question: "Attention allows the model to...", options: ["Focus on specific parts of input", "Ignore input", "Sleep", "None"], correctAnswer: 0 },
            { question: "In translation, Attention helps align...", options: ["Source words to target words", "Images to text", "Audio to video", "None"], correctAnswer: 0 },
            { question: "Attention scores determine...", options: ["Importance weights", "Gradient size", "Learning rate", "None"], correctAnswer: 0 },
            { question: "Before Attention, Seq2Seq models struggled with...", options: ["Long sentences", "Short words", "Numbers", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-8',
        courseId: 'nlp-course',
        order: 8,
        title: 'MODULE 8 — Transformers (BERT)',
        sections: [
            {
                title: "The Transformer Revolution",
                content: "Transformers rely entirely on self-attention mechanisms, discarding RNNs/CNNs. BERT (Bidirectional Encoder Representations from Transformers) pre-trains on massive text to understand context bi-directionally.",
                image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# BERT Tokenizer
print("Tokenizing input for BERT...")
print("[CLS] Hello world [SEP]")`,
        output: `Tokenizing input for BERT...
[CLS] Hello world [SEP]`,
        mcqs: [
            { question: "BERT is trained using...", options: ["Masked Language Modeling", "Reinforcement Learning", "GANs", "None"], correctAnswer: 0 },
            { question: "Transformers rely heavily on...", options: ["Self-Attention", "Convolution", "Recurrence", "None"], correctAnswer: 0 },
            { question: "BERT reads text...", options: ["Bidirectionally (both ways)", "Left-to-right only", "Right-to-left only", "None"], correctAnswer: 0 },
            { question: "The 'T' in BERT stands for...", options: ["Transformer", "Tensor", "Text", "Time"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-9',
        courseId: 'nlp-course',
        order: 9,
        title: 'MODULE 9 — Named Entity Recognition',
        sections: [
            {
                title: "Extracting Information",
                content: "NER involves identifying and classifying key information (entities) in text into predefined categories such as names of persons, organizations, locations, etc.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# NER Example
import spacy
# nlp = spacy.load("en_core_web_sm")
print("Apple is looking at buying U.K. startup for $1 billion")
print("Entities: [Apple: ORG], [U.K.: GPE], [$1 billion: MONEY]")`,
        output: `Apple is looking at buying U.K. startup for $1 billion
Entities: [Apple: ORG], [U.K.: GPE], [$1 billion: MONEY]`,
        mcqs: [
            { question: "NER identifies...", options: ["Entities like names, dates, locations", "Sentiment", "Grammar", "None"], correctAnswer: 0 },
            { question: "In 'Apple bought a startup', 'Apple' is an...", options: ["Organization (ORG)", "Fruit", "Person", "Location"], correctAnswer: 0 },
            { question: "NER is a type of...", options: ["Token Classification", "Text Generation", "Regression", "None"], correctAnswer: 0 },
            { question: "SpaCy is a popular library for...", options: ["NLP tasks like NER", "Image generation", "Audio processing", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'nlp-module-10',
        courseId: 'nlp-course',
        order: 10,
        title: 'MODULE 10 — Sentiment Analysis',
        sections: [
            {
                title: "Understanding Emotion",
                content: "Sentiment analysis determines the emotional tone behind a body of text. It's used to gain understanding of the attitudes, opinions and emotions expressed within an online mention.",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Sentiment Analysis
blob = "I love this course!"
sentiment = 0.8 # Positive
print(f"Text: {blob}")
print(f"Sentiment Polarity: {sentiment} (Positive)")`,
        output: `Text: I love this course!
Sentiment Polarity: 0.8 (Positive)`,
        mcqs: [
            { question: "Sentiment Analysis determines...", options: ["The emotional tone", "The topic", "The language", "The author"], correctAnswer: 0 },
            { question: "A polarity score of +1.0 usually means...", options: ["Very Positive", "Very Negative", "Neutral", "None"], correctAnswer: 0 },
            { question: "Sentiment analysis is useful for...", options: ["Brand monitoring / Reviews", "Spam detection only", "Translation", "None"], correctAnswer: 0 },
            { question: "Does Sentiment Analysis understand sarcasm easily?", options: ["No, it's difficult", "Yes, always", "Only if explicitly stated", "None"], correctAnswer: 0 }
        ]
    },

    // --- COMPUTER VISION (cv-course) ---
    // --- COMPUTER VISION (cv-course) ---
    {
        id: 'cv-module-1',
        courseId: 'cv-course',
        order: 1,
        title: 'MODULE 1 — Image Processing Basics',
        sections: [
            {
                title: "Digital Images",
                content: "A digital image is a matrix of pixels. In this module, we manipulate these matrices using OpenCV. Techniques include resizing, cropping, and color space conversion (RGB to Grayscale).",
                image: "https://images.unsplash.com/photo-1531297461136-82lw8x9396e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import cv2
import numpy as np
# Pseudo-code for Grayscale conversion
# img = cv2.imread('image.jpg')
# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
print("Image converted to Grayscale: (1920, 1080)")`,
        output: `Image converted to Grayscale: (1920, 1080)`,
        mcqs: [
            { question: "Which library is standard for Image Processing in Python?", options: ["Pandas", "OpenCV", "Requests", "Flask"], correctAnswer: 1 },
            { question: "A digital image is essentially a...", options: ["Matrix of pixel values", "List of words", "Database", "None"], correctAnswer: 0 },
            { question: "Grayscale images have how many channels?", options: ["1", "3 (RGB)", "4 (RGBA)", "None"], correctAnswer: 0 },
            { question: "Resizing an image changes its...", options: ["Dimensions (width/height)", "File type", "Color", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-2',
        courseId: 'cv-course',
        order: 2,
        title: 'MODULE 2 — Convolutional Neural Networks',
        sections: [
            {
                title: "Convolutions",
                content: "CNNs learn spatial hierarchies of features. A convolution operation slides a filter (kernel) over the image to detect edges, textures, and patterns.",
                image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Convolution Logic
import numpy as np
input_img = np.random.rand(5,5)
kernel = np.ones((3,3))
print("Applying 3x3 kernel convolution...")
print("Output feature map generated.")`,
        output: `Applying 3x3 kernel convolution...
Output feature map generated.`,
        mcqs: [
            { question: "What is the main operation in a CNN?", options: ["Convolution", "Recursion", "Sorting", "None"], correctAnswer: 0 },
            { question: "A kernel (filter) is used to...", options: ["Extract features like edges", "Delete pixels", "Add color", "None"], correctAnswer: 0 },
            { question: "CNNs preserve...", options: ["Spatial hierarchy", "Audio frequency", "Text order", "None"], correctAnswer: 0 },
            { question: "Deeper layers in a CNN typically detect...", options: ["Complex patterns (eyes, wheels)", "Simple edges", "Nothing", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-3',
        courseId: 'cv-course',
        order: 3,
        title: 'MODULE 3 — Pooling & Strides',
        sections: [
            {
                title: "Downsampling",
                content: "Pooling reduces the spatial dimensions of the input volume. Max pooling takes the maximum value in a window. This reduces computation and controls overfitting.",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Max Pooling
data = [1, 3, 2, 4] # simplified 2x2
max_pooled = max(data)
print(f"Max pooled value from {data} is {max_pooled}")`,
        output: `Max pooled value from [1, 3, 2, 4] is 4`,
        mcqs: [
            { question: "Pooling is used to...", options: ["Increase dimensions", "Reduce spatial dimensions", "Add noise", "None"], correctAnswer: 1 },
            { question: "Max Pooling selects the...", options: ["Largest value in the window", "Average value", "Smallest value", "None"], correctAnswer: 0 },
            { question: "Pooling helps to...", options: ["Reduce computation and overfitting", "Increase file size", "Make image brighter", "None"], correctAnswer: 0 },
            { question: "Stride refers to...", options: ["How many pixels the filter moves", "The size of the filter", "The number of filters", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-4',
        courseId: 'cv-course',
        order: 4,
        title: 'MODULE 4 — Transfer Learning (VGG, ResNet)',
        sections: [
            {
                title: "Standing on Shoulders of Giants",
                content: "Transfer learning involves taking a model trained on a large dataset (like ImageNet) and fine-tuning it for your specific task. Famous architectures include VGG16, ResNet50.",
                image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Loading Pre-trained ResNet
# from tensorflow.keras.applications.resnet50 import ResNet50
print("Loading ResNet50 weights (ImageNet)...")
print("Model ready for fine-tuning.")`,
        output: `Loading ResNet50 weights (ImageNet)...
Model ready for fine-tuning.`,
        mcqs: [
            { question: "Transfer learning involves...", options: ["Using pre-trained models", "Training from scratch", "Transferring data", "None"], correctAnswer: 0 },
            { question: "ImageNet is a...", options: ["Large dataset for classification", "Neural Network model", "Python library", "None"], correctAnswer: 0 },
            { question: "Which of these is a famous CNN architecture?", options: ["ResNet", "Linear Regression", "K-Means", "None"], correctAnswer: 0 },
            { question: "Fine-tuning means...", options: ["Training the model on new specific data", "Discarding the model", "Fixing bugs", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-5',
        courseId: 'cv-course',
        order: 5,
        title: 'MODULE 5 — Object Detection (YOLO)',
        sections: [
            {
                title: "You Only Look Once",
                content: "YOLO treats object detection as a regression problem, predicting bounding boxes and class probabilities directly from full images in one evaluation.",
                image: "https://images.unsplash.com/photo-1535378437327-b71494669e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# YOLO Detection
objects = ["Car", "Person", "Traffic Light"]
bboxes = [[10, 20, 50, 60], [100, 200, 50, 80], ...]
print(f"Detected {len(objects)} objects in frame.")`,
        output: `Detected 3 objects in frame.`,
        mcqs: [
            { question: "YOLO stands for...", options: ["You Only Look Once", "You Only Live Once", "Your Object Location Output", "None"], correctAnswer: 0 },
            { question: "Object Detection finds...", options: ["Objects and their bounding boxes", "Whole image class", "Pixel masks", "None"], correctAnswer: 0 },
            { question: "YOLO is known for being...", options: ["Real-time / Fast", "Very slow", "Inaccurate", "None"], correctAnswer: 0 },
            { question: "An output of Object Detection usually includes...", options: ["Class label and Bounding Box coordinates", "Audio file", "Text summary", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-6',
        courseId: 'cv-course',
        order: 6,
        title: 'MODULE 6 — Image Segmentation',
        sections: [
            {
                title: "Pixel-Level Classification",
                content: "Segmentation partitions an image into multiple segments (sets of pixels). Semantic segmentation treats all pixels of the same object class as one; Instance segmentation treats specific instances separately.",
                image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Segmentation Mask
print("Generating mask for class 'Road'...")
print("Mask shape: (1024, 1024)")`,
        output: `Generating mask for class 'Road'...
Mask shape: (1024, 1024)`,
        mcqs: [
            { question: "Segmentation classifies...", options: ["The whole image", "Every pixel", "Just the center", "None"], correctAnswer: 1 },
            { question: "Semantic Segmentation treats...", options: ["All pixels of the same class as one group", "Each object instance separately", "Text only", "None"], correctAnswer: 0 },
            { question: "Instance Segmentation distinguishes...", options: ["Separate objects of the same class", "Nothing", "Colors only", "None"], correctAnswer: 0 },
            { question: "The output of segmentation is a...", options: ["Mask", "Bounding Box", "Single Label", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-7',
        courseId: 'cv-course',
        order: 7,
        title: 'MODULE 7 — Face Recognition',
        sections: [
            {
                title: "Biometric Identification",
                content: "Face recognition maps facial features from a photo and compares the information with a database of stored faces. Key steps: Detection -> Alignment -> Feature Extraction -> Matching.",
                image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Face Match
known_encodings = [...]
unknown_encoding = [...]
match = True # pseudo result
print(f"Face Match Found: {match}")`,
        output: `Face Match Found: True`,
        mcqs: [
            { question: "Face recognition often uses...", options: ["Landmark detection", "Color histograms", "Audio waves", "None"], correctAnswer: 0 },
            { question: "Face Embedding converts a face into a...", options: ["Numerical vector", "Name string", "JPEG file", "None"], correctAnswer: 0 },
            { question: "Face Alignment is used to...", options: ["Standardize face pose/orientation", "Remove the face", "Color the face", "None"], correctAnswer: 0 },
            { question: "Biometric identification relies on...", options: ["Unique physical characteristics", "Passwords", "Keys", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-8',
        courseId: 'cv-course',
        order: 8,
        title: 'MODULE 8 — Generative Models in CV',
        sections: [
            {
                title: "Creating Images",
                content: "Generative Adversarial Networks (GANs) can generate photorealistic images. Applications include super-resolution, style transfer, and image editing.",
                image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# GAN Generation
print("Generator producing synthetic image...")
print("Discriminator evaluating reality score: 0.45")`,
        output: `Generator producing synthetic image...
Discriminator evaluating reality score: 0.45`,
        mcqs: [
            { question: "GANs in CV are used to...", options: ["Generate new images", "Classify images", "Compress images", "None"], correctAnswer: 0 },
            { question: "Super-Resolution refers to...", options: ["Upscaling low-res images to high-res", "Zooming out", "Detecting objects", "None"], correctAnswer: 0 },
            { question: "Style Transfer applies...", options: ["Artistic style of one image to another", "Filters", "Compression", "None"], correctAnswer: 0 },
            { question: "The Generator in a GAN tries to...", options: ["Create realistic fakes", "Detect fakes", "Classify cats", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-9',
        courseId: 'cv-course',
        order: 9,
        title: 'MODULE 9 — Video Analysis',
        sections: [
            {
                title: "Temporal Dynamics",
                content: "Video analysis deals with moving images. It adds the dimension of time (optical flow, action recognition). Tools include 3D CNNs and LSTM-CNN hybrids.",
                image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Video Capture
# cap = cv2.VideoCapture('video.mp4')
print("Processing Frame 1...")
print("Processing Frame 2...")`,
        output: `Processing Frame 1...
Processing Frame 2...`,
        mcqs: [
            { question: "Video analysis adds which dimension to image processing?", options: ["Time", "Depth", "Sound", "Color"], correctAnswer: 0 },
            { question: "Optical Flow measures...", options: ["Motion of objects between frames", "Brightness", "Color saturation", "None"], correctAnswer: 0 },
            { question: "3D CNNs are used to...", options: ["Extract spatiotemporal features", "Process 2D images only", "Play audio", "None"], correctAnswer: 0 },
            { question: "Action Recognition identifies...", options: ["Human activities in video", "Static objects", "Background noise", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'cv-module-10',
        courseId: 'cv-course',
        order: 10,
        title: 'MODULE 10 — 3D Vision',
        sections: [
            {
                title: "Depth Perception",
                content: "3D computer vision recovers 3D structure from 2D images. Techniques include stereo vision, Structure from Motion (SfM), and SLAM. LiDAR provides direct depth data.",
                image: "https://images.unsplash.com/photo-1517420704952-d9f39714cdd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Point Cloud
print("Processing LiDAR point cloud...")
print("Points: 1,000,000")`,
        output: `Processing LiDAR point cloud...
Points: 1,000,000`,
        mcqs: [
            { question: "LiDAR is used for...", options: ["3D mapping", "Text analysis", "Audio recording", "None"], correctAnswer: 0 },
            { question: "SLAM stands for...", options: ["Simultaneous Localization and Mapping", "Super Large AI Model", "Simple Linear Algebra Method", "None"], correctAnswer: 0 },
            { question: "Stereo Vision uses...", options: ["Two cameras to estimate depth", "One camera", "A radar", "None"], correctAnswer: 0 },
            { question: "A Point Cloud is a...", options: ["Set of data points in space", "Cloud in the sky", "Wi-Fi network", "None"], correctAnswer: 0 }
        ]
    },

    // --- AGENTIC AI (agentic-ai-course) ---
    // --- AGENTIC AI (agentic-ai-course) ---
    {
        id: 'agentic-module-1',
        courseId: 'agentic-ai-course',
        order: 1,
        title: 'MODULE 1 — Introduction to Agents',
        sections: [
            {
                title: "Perception & Action",
                content: "An agent is an entity that perceives its environment through sensors and acts upon it through actuators to achieve goals. It is continuous, autonomous, and reactive.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `class SimpleAgent:
    def perceive(self, env_state):
        return f"Seeing {env_state}"
    def act(self, percept):
        return f"Moving to {percept}"

bot = SimpleAgent()
print(bot.act(bot.perceive("Goal")))`,
        output: `Moving to Seeing Goal`,
        mcqs: [
            { question: "What is an Agent?", options: ["A passive script", "An entity that perceives and acts", "A database", "None"], correctAnswer: 1 },
            { question: "An agent perceives its environment via...", options: ["Sensors", "Actuators", "Motors", "None"], correctAnswer: 0 },
            { question: "An agent acts upon its environment via...", options: ["Sensors", "Actuators", "Files", "None"], correctAnswer: 1 },
            { question: "A rational agent acts to maximize its...", options: ["Performance measure", "Battery life", "Memory usage", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-2',
        courseId: 'agentic-ai-course',
        order: 2,
        title: 'MODULE 2 — Reinforcement Learning Basics',
        sections: [
            {
                title: "The RL Loop",
                content: "Reinforcement Learning (RL) involves an agent learning to make decisions by performing actions and receiving rewards or penalties. Key components: Agent, Environment, State, Action, Reward.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# RL Loop
reward = 10
total_reward = 0
total_reward += reward
print(f"Action taken. Reward received: {reward}")
print(f"Total Score: {total_reward}")`,
        output: `Action taken. Reward received: 10
Total Score: 10`,
        mcqs: [
            { question: "RL is based on...", options: ["Rewards and Penalties", "Labels", "Clustering", "None"], correctAnswer: 0 },
            { question: "What are the key components of RL?", options: ["Agent, Environment, State, Action, Reward", "Input, Output, Hidden Layer", "Table, Row, Column", "None"], correctAnswer: 0 },
            { question: "The goal of RL is to maximize...", options: ["Total cumulative reward", "Instant reward", "Loss", "None"], correctAnswer: 0 },
            { question: "RL is distinct from Supervised Learning because...", options: ["It learns from trial and error", "It uses labeled data", "It is unsupervised", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-3',
        courseId: 'agentic-ai-course',
        order: 3,
        title: 'MODULE 3 — Q-Learning',
        sections: [
            {
                title: "Learning Values",
                content: "Q-Learning is a model-free RL algorithm. The agent creates a Q-table that maps states and actions to expected future rewards (Q-values).",
                image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Q-Table Update
Q = {'state1': 0.5}
alpha = 0.1 # learning rate
reward = 1
Q['state1'] = Q['state1'] + alpha * (reward - Q['state1'])
print(f"Updated Q-value: {Q['state1']}")`,
        output: `Updated Q-value: 0.55`,
        mcqs: [
            { question: "Q-Learning is a...", options: ["Model-free algorithm", "Model-based algorithm", "Supervised algorithm", "None"], correctAnswer: 0 },
            { question: "A Q-value represents...", options: ["Expected future reward", "Current state", "Previous action", "None"], correctAnswer: 0 },
            { question: "The Q-table size depends on...", options: ["Number of states and actions", "Number of agents", "Reward size", "None"], correctAnswer: 0 },
            { question: "What is 'alpha' in the Q-learning update rule?", options: ["Learning rate", "Discount factor", "Reward", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-4',
        courseId: 'agentic-ai-course',
        order: 4,
        title: 'MODULE 4 — Deep Q-Networks (DQN)',
        sections: [
            {
                title: "Scaling with Neural Networks",
                content: "In complex environments, Q-tables become too large. DQN uses a Deep Neural Network to approximate Q-values, enabling agents to play complex games like Atari.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# DQN Arch
print("Input: Game Screen Pixels")
print("CNN Layers processing visual features...")
print("Output: Q-values for actions (Up, Down, Left, Right)")`,
        output: `Input: Game Screen Pixels
CNN Layers processing visual features...
Output: Q-values for actions (Up, Down, Left, Right)`,
        mcqs: [
            { question: "DQN uses what to approximate Q-values?", options: ["Neural Networks", "Decision Trees", "Linear Regression", "None"], correctAnswer: 0 },
            { question: "Why do we use Experience Replay in DQN?", options: ["To break correlation between samples", "To save memory", "To speed up", "None"], correctAnswer: 0 },
            { question: "DQN allows agents to handle...", options: ["High-dimensional state spaces", "Only small tables", "Text only", "None"], correctAnswer: 0 },
            { question: "The Target Network in DQN is used for...", options: ["Stability", "Speed", "Exploration", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-5',
        courseId: 'agentic-ai-course',
        order: 5,
        title: 'MODULE 5 — Policy Gradients',
        sections: [
            {
                title: "Optimizing Behavior Directly",
                content: "Instead of learning values (Q), Policy Gradient methods learn the policy directly—mapping states to action probabilities. Useful for continuous action spaces (like robot arms).",
                image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Policy Network
dist = [0.1, 0.7, 0.2] # Probabilities for action A, B, C
action = "B" # Sampled from dist
print(f"Policy chose action: {action}")`,
        output: `Policy chose action: B`,
        mcqs: [
            { question: "Policy Gradients optimize...", options: ["The policy directly", "The value function", "The environment", "None"], correctAnswer: 0 },
            { question: "Policy Gradient methods are useful for...", options: ["Continuous action spaces", "Discrete spaces only", "Tabular data", "None"], correctAnswer: 0 },
            { question: "What is a 'Policy'?", options: ["Mapping from State to Action", "Mapping from Action to Reward", "The Environment", "None"], correctAnswer: 0 },
            { question: "REINFORCE is a type of...", options: ["Policy Gradient algorithm", "Q-Learning", "Clustering", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-6',
        courseId: 'agentic-ai-course',
        order: 6,
        title: 'MODULE 6 — Multi-Agent Systems',
        sections: [
            {
                title: "Cooperation and Competition",
                content: "MAS involves multiple agents interacting in the same environment. They can be cooperative (swarm robotics) or competitive (playing chess against each other).",
                image: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Multi-Agents
agent1_pos = 10
agent2_pos = 12
if abs(agent1_pos - agent2_pos) < 5:
    print("Agents are collaborating nearby.")`,
        output: `Agents are collaborating nearby.`,
        mcqs: [
            { question: "In MAS, agents...", options: ["Interact with each other", "Work in isolation", "Are always competitive", "None"], correctAnswer: 0 },
            { question: "In competitive MAS, agents have...", options: ["Opposing goals", "Same goals", "No goals", "None"], correctAnswer: 0 },
            { question: "Swarm intelligence is an example of...", options: ["Cooperative MAS", "Competitive MAS", "Supervised Learning", "None"], correctAnswer: 0 },
            { question: "Nash Equilibrium is a concept from...", options: ["Game Theory", "Calculus", "Biology", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-7',
        courseId: 'agentic-ai-course',
        order: 7,
        title: 'MODULE 7 — Autonomous Agents',
        sections: [
            {
                title: "Self-Driving & AutoGPT",
                content: "Autonomous agents operate without human intervention. Examples range from self-driving cars to LLM-based agents like AutoGPT that can browse the web and execute tasks.",
                image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Auto Loop
task_list = ["Search Info", "Summarize", "Save File"]
for task in task_list:
    print(f"Agent executing: {task}")`,
        output: `Agent executing: Search Info
Agent executing: Summarize
Agent executing: Save File`,
        mcqs: [
            { question: "Autonomous agents operate...", options: ["Without human intervention", "With constant supervision", "Only offline", "None"], correctAnswer: 0 },
            { question: "AutoGPT is an example of...", options: ["An autonomous agent using LLMs", "A chatbot", "A search engine", "None"], correctAnswer: 0 },
            { question: "What is a key challenge in autonomous agents?", options: ["Safety and Hallucination", "They are too slow", "They are too cheap", "None"], correctAnswer: 0 },
            { question: "Agents often break complex tasks into...", options: ["Sub-tasks", "Bits", "Pixels", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-8',
        courseId: 'agentic-ai-course',
        order: 8,
        title: 'MODULE 8 — Planning & Reasoning',
        sections: [
            {
                title: "Thinking Ahead",
                content: "Planning involves finding a sequence of actions that achieves a goal. Reasoning allows agents to derive new information from existing knowledge using logic or probabilistic models.",
                image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Chain of Thought
print("Goal: Make Tea")
print("Step 1: Boil Water")
print("Step 2: Add Tea Leaves")
print("Step 3: Pour")`,
        output: `Goal: Make Tea
Step 1: Boil Water
Step 2: Add Tea Leaves
Step 3: Pour`,
        mcqs: [
            { question: "Planning involves...", options: ["Finding a sequence of actions", "Random guessing", "Just reacting", "None"], correctAnswer: 0 },
            { question: "Chain-of-Thought prompting helps agents to...", options: ["Reason step-by-step", "Forget context", "Generate images", "None"], correctAnswer: 0 },
            { question: "A plan is a...", options: ["Sequence of actions", "Random set of words", "Database", "None"], correctAnswer: 0 },
            { question: "Logic-based agents use...", options: ["Rules and inference", "Neural Networks only", "Guesswork", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-9',
        courseId: 'agentic-ai-course',
        order: 9,
        title: 'MODULE 9 — Tool Use & APIs',
        sections: [
            {
                title: "Extending Capabilities",
                content: "Modern agents can call external tools (calculators, APIs, databases) to perform actions they cannot do natively (e.g., getting real-time stock prices).",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Function Calling
def get_weather(city):
    return "Sunny"

tools = {"weather": get_weather}
print(f"Agent calling weather tool: {tools['weather']('London')}")`,
        output: `Agent calling weather tool: Sunny`,
        mcqs: [
            { question: "Agents use tools to...", options: ["Extend their capabilities", "Look cool", "Waste time", "None"], correctAnswer: 0 },
            { question: "API stands for...", options: ["Application Programming Interface", "Automated Program Interaction", "Applied Python Interface", "None"], correctAnswer: 0 },
            { question: "Why might an LLM agent need a calculator?", options: ["LLMs can struggle with arithmetic", "Calculators are faster", "Because it's fun", "None"], correctAnswer: 0 },
            { question: "Function calling allows models to...", options: ["Execute code / Interact with world", "Just chat", "Sleep", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'agentic-module-10',
        courseId: 'agentic-ai-course',
        order: 10,
        title: 'MODULE 10 — Ethics in Agentic AI',
        sections: [
            {
                title: "Alignment and Safety",
                content: "Ethical concerns include ensuring agents act in accordance with human values (Alignment), preventing harmful actions, and addressing job displacement.",
                image: "https://images.unsplash.com/photo-1505663912202-ac6655c61937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Safety Check
action = "Delete System32"
is_safe = False
if not is_safe:
    print("Action blocked by Safety Layer.")`,
        output: `Action blocked by Safety Layer.`,
        mcqs: [
            { question: "A key ethical concern is...", options: ["Alignment and Control", "Speed", "Cost", "Color"], correctAnswer: 0 },
            { question: "What is 'Alignment'?", options: ["Ensuring AI goals match human values", "Aligning text", "Sorting data", "None"], correctAnswer: 0 },
            { question: "Bias in AI agents often comes from...", options: ["Training data", "The electricity", "The screen", "None"], correctAnswer: 0 },
            { question: "What is the 'Control Problem'?", options: ["Keeping powerful AI under control", "Controlling the mouse", "Remote control", "None"], correctAnswer: 0 }
        ]
    },

    // --- GENERATIVE AI (gen-ai-course) ---
    // --- GENERATIVE AI (gen-ai-course) ---
    {
        id: 'gen-ai-module-1',
        courseId: 'gen-ai-course',
        order: 1,
        title: 'MODULE 1 — Intro to GenAI',
        sections: [
            {
                title: "Creation vs Classification",
                content: "Traditional AI (Discriminative) classifies data (e.g., Cat vs Dog). Generative AI creates new instances of data that resemble the training set (e.g., generating an image of a cat).",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# GenAI Concept
d_model = "Classifies Input"
g_model = "Creates Output"
print(f"GenAI Goal: {g_model}")`,
        output: `GenAI Goal: Creates Output`,
        mcqs: [
            { question: "Generative AI is distinct because it...", options: ["Creates new data", "Classifies data", "Clusters data", "None"], correctAnswer: 0 },
            { question: "Discriminative AI focuses on...", options: ["Drawing boundaries between classes", "Generating samples", "Writing poems", "None"], correctAnswer: 0 },
            { question: "Which is a GenAI example?", options: ["Midjourney / DALL-E", "Spam Filter", "Linear Regression", "None"], correctAnswer: 0 },
            { question: "GenAI learns the...", options: ["Distribution of the training data", "Labels only", "Outliers only", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-2',
        courseId: 'gen-ai-course',
        order: 2,
        title: 'MODULE 2 — Autoencoders',
        sections: [
            {
                title: "Compression and Reconstruction",
                content: "Autoencoders are neural networks that learn a compressed representation (encoding) of input data and then reconstruct it. They consist of an Encoder and a Decoder.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Autoencoder
input_dim = 784
encoded_dim = 32
print(f"Compressing {input_dim} feature to {encoded_dim}.")`,
        output: `Compressing 784 feature to 32.`,
        mcqs: [
            { question: "Autoencoders learn a...", options: ["Compressed representation", "Label", "Decision boundary", "None"], correctAnswer: 0 },
            { question: "The bottleneck layer contains the...", options: ["Latent Code (Encoding)", "Input", "Output", "None"], correctAnswer: 0 },
            { question: "Autoencoders are...", options: ["Unsupervised", "Supervised", "Reinforcement", "None"], correctAnswer: 0 },
            { question: "Reconstruction loss measures...", options: ["Difference between input and output", "Classification error", "Accuracy", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-3',
        courseId: 'gen-ai-course',
        order: 3,
        title: 'MODULE 3 — VAEs (Variational Autoencoders)',
        sections: [
            {
                title: "Probabilistic Latent Space",
                content: "VAEs improve on autoencoders by ensuring the latent space has a continuous probability distribution, making them better for generating new, smooth variations of data.",
                image: "https://images.unsplash.com/photo-1509228627129-72ae075841cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# VAE Sampling
z_mean = 0
z_log_var = 1
epsilon = 0.5 # random noise
z = z_mean + z_log_var * epsilon
print(f"Sampled Latent Vector: {z}")`,
        output: `Sampled Latent Vector: 0.5`,
        mcqs: [
            { question: "VAEs introduce what to the latent space?", options: ["Probabilistic distribution", "Zeros", "Ones", "None"], correctAnswer: 0 },
            { question: "VAEs allow us to...", options: ["Sample new data points smoothly", "Only compress data", "Classify fast", "None"], correctAnswer: 0 },
            { question: "The 'Reparameterization Trick' is used to...", options: ["Allow backpropagation through random sampling", "Stop training", "Increase errors", "None"], correctAnswer: 0 },
            { question: "A VAE consists of...", options: ["Probabilistic Encoder/Decoder", "Generator/Discriminator", "Agent/Environment", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-4',
        courseId: 'gen-ai-course',
        order: 4,
        title: 'MODULE 4 — GANs Fundamentals',
        sections: [
            {
                title: "The Producer-Critic Game",
                content: "GANs involve two networks competing: The Generator tries to create fake data to fool the Discriminator, while the Discriminator tries to distinguish real from fake.",
                image: "https://images.unsplash.com/photo-1563206767-5b1d972d9323?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# GAN Training Loop
d_loss = 0.5
g_loss = 0.5
print(f"Discriminator Loss: {d_loss} (Trying to spot fakes)")
print(f"Generator Loss: {g_loss} (Trying to fool D)")`,
        output: `Discriminator Loss: 0.5 (Trying to spot fakes)
Generator Loss: 0.5 (Trying to fool D)`,
        mcqs: [
            { question: "GANs consist of...", options: ["Generator and Discriminator", "Encoder and Decoder", "Actor and Critic", "None"], correctAnswer: 0 },
            { question: "The Discriminator's job is to...", options: ["Distinguish real from fake", "Create images", "Help the generator", "None"], correctAnswer: 0 },
            { question: "If the Generator is perfect, the Discriminator guesses with probability...", options: ["50% (Random guess)", "100%", "0%", "None"], correctAnswer: 0 },
            { question: "GAN training is notoriously...", options: ["Unstable / Hard to converge", "Easy", "Fast", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-5',
        courseId: 'gen-ai-course',
        order: 5,
        title: 'MODULE 5 — Diffusion Models',
        sections: [
            {
                title: "Denoising",
                content: "Diffusion models (like Stable Diffusion) learn to destroy data by adding noise, and then learn to recover the data by reversing the process. This allows generating high-quality images from noise.",
                image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Diffusion Step
noise = 1.0
for step in range(10):
    noise *= 0.8
    print(f"Step {step}: Noise level {noise:.2f} (Image becoming clearer)")`,
        output: `Step 0: Noise level 0.80 (Image becoming clearer)
Step 1: Noise level 0.64 (Image becoming clearer)
...`,
        mcqs: [
            { question: "Diffusion models generate data by...", options: ["Denoising", "Compressing", "Sorting", "None"], correctAnswer: 0 },
            { question: "The forward process in Diffusion...", options: ["Adds noise until data is random", "Removes noise", "Colors image", "None"], correctAnswer: 0 },
            { question: "Stable Diffusion generates images from...", options: ["Text prompts", "Audio only", "Spreadsheets", "None"], correctAnswer: 0 },
            { question: "Diffusion models are currently state-of-the-art for...", options: ["Image Generation", "Text classification", "Regression", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-6',
        courseId: 'gen-ai-course',
        order: 6,
        title: 'MODULE 6 — Large Language Models (LLMs)',
        sections: [
            {
                title: "Predicting the Next Token",
                content: "LLMs like GPT-4 are massive Transformer models trained on vast amounts of text. Their core objective is simply to predict the next word (token) in a sequence, accumulating world knowledge in the process.",
                image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# LLM Prediction
context = "The capital of France is"
prediction = "Paris"
print(f"Input: {context} -> Output: {prediction}")`,
        output: `Input: The capital of France is -> Output: Paris`,
        mcqs: [
            { question: "LLMs are typically based on...", options: ["Transformers", "RNNs", "CNNs", "None"], correctAnswer: 0 },
            { question: "GPT stands for...", options: ["Generative Pre-trained Transformer", "General Python Tool", "Good Pre-training Task", "None"], correctAnswer: 0 },
            { question: "LLMs are trained to predict...", options: ["The next token", "The sentiment", "The image", "None"], correctAnswer: 0 },
            { question: "Hallucination in LLMs means...", options: ["Generating confident but false information", "Seeing ghosts", "Crashing", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-7',
        courseId: 'gen-ai-course',
        order: 7,
        title: 'MODULE 7 — Prompt Engineering',
        sections: [
            {
                title: "Steering the Model",
                content: "Prompt engineering applies the art of crafting inputs (prompts) to get the best possible output from an LLM. Techniques include Zero-shot, Few-shot, and Chain-of-Thought prompting.",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Few-Shot Prompting
prompt = """
English: Hellow
French: Bonjour

English: Good morning
French:"""
print(prompt)`,
        output: `English: Hello
French: Bonjour

English: Good morning
French:`,
        mcqs: [
            { question: "Prompt Engineering is...", options: ["Crafting inputs for LLMs", "Building hardware", "Writing Python code", "None"], correctAnswer: 0 },
            { question: "Zero-shot prompting means...", options: ["Giving no examples", "Giving 0 inputs", "Giving many examples", "None"], correctAnswer: 0 },
            { question: "Few-shot prompting involves...", options: ["Providing a few examples in the prompt", "Shooting targets", "Short prompts", "None"], correctAnswer: 0 },
            { question: "Chain-of-Thought prompting encourages the model to...", options: ["Explain its reasoning step-by-step", "Answer instantly", "Stop thinking", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-8',
        courseId: 'gen-ai-course',
        order: 8,
        title: 'MODULE 8 — Fine-tuning LLMs',
        sections: [
            {
                title: "Specialization",
                content: "Fine-tuning updates the weights of a pre-trained model on a smaller, specific dataset (like medical records) to make it an expert in that domain.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Fine-Tuning
base_model = "GPT-Generic"
data = "Medical_Guidelines.txt"
print(f"Training {base_model} on {data}...")
print("New Model: GPT-Medical created.")`,
        output: `Training GPT-Generic on Medical_Guidelines.txt...
New Model: GPT-Medical created.`,
        mcqs: [
            { question: "Fine-tuning involves...", options: ["Training on specific data", "Building from scratch", "Deleting layers", "None"], correctAnswer: 0 },
            { question: "Why fine-tune an LLM?", options: ["To adapt it to a specific domain/style", "To make it forget English", "To reduce it size", "None"], correctAnswer: 0 },
            { question: "A downside of fine-tuning can be...", options: ["Catastrophic forgetting", "Increased speed", "Better accuracy", "None"], correctAnswer: 0 },
            { question: "PEFT (Parameter-Efficient Fine-Tuning) updates...", options: ["Only a small subset of parameters", "All parameters", "No parameters", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-9',
        courseId: 'gen-ai-course',
        order: 9,
        title: 'MODULE 9 — Multimodal Models',
        sections: [
            {
                title: "Beyond Text",
                content: "Multimodal models (like GPT-4V, Gemini) can process and reason across multiple modalities—images, text, audio, and video—simultaneously.",
                image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Multimodal Input
image = "cat.jpg"
question = "What is in this image?"
print(f"Model Analyzing {image}...")
print("Answer: A cat sitting on a sofa.")`,
        output: `Model Analyzing cat.jpg...
Answer: A cat sitting on a sofa.`,
        mcqs: [
            { question: "Multimodal models handle...", options: ["Text, Image, Audio, etc.", "Only Text", "Only Image", "None"], correctAnswer: 0 },
            { question: "An example of a multimodal task is...", options: ["Visual Question Answering", "Adding numbers", "Sorting list", "None"], correctAnswer: 0 },
            { question: "CLIP (by OpenAI) connects...", options: ["Text and Images", "Audio and Video", "Code and Text", "None"], correctAnswer: 0 },
            { question: "The goal of multimodal AI is to...", options: ["Mimic human perception across senses", "Be slower", "Focus on one sense", "None"], correctAnswer: 0 }
        ]
    },
    {
        id: 'gen-ai-module-10',
        courseId: 'gen-ai-course',
        order: 10,
        title: 'MODULE 10 — Future of GenAI',
        sections: [
            {
                title: "Agents and Personalization",
                content: "The future lies in personalized, agentic AI that acts as a proactive assistant, remembering your preferences and autonomously completing complex workflows.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Personal Assistant
user_pref = "Likes concise answers"
response = "Task done."
print(f"Assistant (aware of '{user_pref}'): {response}")`,
        output: `Assistant (aware of 'Likes concise answers'): Task done.`,
        mcqs: [
            { question: "A future trend is...", options: ["Personalized Content", "Slower computers", "Less data", "None"], correctAnswer: 0 },
            { question: "Proactive agents will...", options: ["Anticipate user needs", "Wait for commands only", "Do nothing", "None"], correctAnswer: 0 },
            { question: "Personalization in AI requires...", options: ["User data / Context", "Random numbers", "Rebooting", "None"], correctAnswer: 0 },
            { question: "We expect future AI to be more...", options: ["Autonomous and Agentic", "Manual", "Disconnected", "None"], correctAnswer: 0 }
        ]
    },
];
