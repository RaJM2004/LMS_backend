import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { Module } from './models/Module';

const MONGO_URI = (process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard').replace(/^["']|["']$/g, '');

export interface RawMCQ {
    question: string;
    correctOption: string;
    distractors: string[];
    explanation: string;
}

export interface ShuffledMCQ {
    question: string;
    options: string[];
    correctAnswer: number; // 0, 1, 2, or 3 (randomly distributed)
    explanation: string;
}

/**
 * Shuffles options using Fisher-Yates and calculates the new position of the correct answer.
 * Guarantees that the correct answer is randomized across A (0), B (1), C (2), and D (3).
 */
export function shuffleMCQ(raw: RawMCQ): ShuffledMCQ {
    const options = [raw.correctOption, ...raw.distractors];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    const correctAnswer = options.indexOf(raw.correctOption);
    return {
        question: raw.question,
        options,
        correctAnswer,
        explanation: raw.explanation
    };
}

/**
 * Curated, topic-specific MCQ bank mapping real technical questions to section topics.
 */
export function getSectionSpecificQuestions(courseId: string, moduleTitle: string, sectionTitle: string, content: string): ShuffledMCQ[] {
    const text = `${sectionTitle} ${content}`.toLowerCase();

    // 1. Python Variables & Data Types
    if (text.includes('variable') || text.includes('data type') || text.includes('primitive')) {
        return [
            {
                question: "In Python, which built-in function is used to inspect the data type of an object?",
                correctOption: "type()",
                distractors: ["dtype()", "typeof()", "kind()"],
                explanation: "The type() function returns the class type of the argument passed to it."
            },
            {
                question: "What characteristic distinguishes Python's typing system from C++ or Java?",
                correctOption: "Variables are dynamically typed and bind to values at runtime without prior declaration",
                distractors: [
                    "Variables must be declared with their explicit data type before assignment",
                    "Python variables can only store numeric values",
                    "Variables are statically typed and immutable by default"
                ],
                explanation: "Python uses dynamic typing, meaning variable types are inferred automatically at runtime based on the assigned value."
            },
            {
                question: "Which of the following is an immutable data type in Python?",
                correctOption: "str (String)",
                distractors: ["list (List)", "dict (Dictionary)", "set (Set)"],
                explanation: "Strings, integers, floats, and tuples are immutable in Python; their contents cannot be modified in place."
            },
            {
                question: "What will be the output of evaluating bool(0) and bool(1) in Python?",
                correctOption: "False and True",
                distractors: ["True and False", "True and True", "0 and 1"],
                explanation: "In Python, 0 evaluates to False (falsy) while non-zero numbers evaluate to True (truthy)."
            },
            {
                question: "Which statement correctly casts the string '42' into an integer?",
                correctOption: "int('42')",
                distractors: ["integer('42')", "parse_int('42')", "cast<int>('42')"],
                explanation: "int() is the standard Python constructor for converting compatible types to an integer."
            },
            {
                question: "What is the result of the division 7 / 2 in Python 3?",
                correctOption: "3.5 (float)",
                distractors: ["3 (int)", "4 (int)", "3.0 (float)"],
                explanation: "The single slash '/' operator performs true floating-point division in Python 3."
            },
            {
                question: "Which operator is used to perform floor (integer) division in Python?",
                correctOption: "//",
                distractors: ["%", "/", "^"],
                explanation: "The double slash '//' operator divides two numbers and rounds down to the nearest integer."
            },
            {
                question: "Which variable name follows standard PEP 8 naming conventions in Python?",
                correctOption: "user_account_balance",
                distractors: ["userAccountBalance", "User-Account-Balance", "2nd_account_balance"],
                explanation: "PEP 8 recommends snake_case (lowercase with underscores) for variable and function names."
            },
            {
                question: "What is the data type of the expression: type(3.14159)?",
                correctOption: "<class 'float'>",
                distractors: ["<class 'double'>", "<class 'decimal'>", "<class 'real'>"],
                explanation: "Floating-point numbers in standard Python are instances of the float class."
            },
            {
                question: "What happens when you execute: x = 10; x = 'Hello'?",
                correctOption: "x successfully re-binds to the string object 'Hello'",
                distractors: [
                    "A TypeError is thrown because x was initialized as an integer",
                    "Python creates two variables with identical names",
                    "The string 'Hello' is converted to integer ASCII values"
                ],
                explanation: "In Python, variable names are simply references to objects in memory and can be re-bound to objects of different types."
            }
        ].map(shuffleMCQ);
    }

    // 2. Python Lists, Tuples, Dictionaries & Sets
    if (text.includes('list') || text.includes('tuple') || text.includes('dict') || text.includes('collection') || text.includes('array')) {
        return [
            {
                question: "What is the primary difference between a Python list and a tuple?",
                correctOption: "Lists are mutable, whereas tuples are immutable",
                distractors: [
                    "Lists can hold multiple data types, but tuples cannot",
                    "Tuples use square brackets [], while lists use parentheses ()",
                    "Lists cannot be sliced, whereas tuples support slicing"
                ],
                explanation: "Lists can be modified after creation (append, pop, etc.), while tuples cannot be changed."
            },
            {
                question: "How do you append an element 'item' to the end of an existing list called `my_list`?",
                correctOption: "my_list.append('item')",
                distractors: ["my_list.add('item')", "my_list.push('item')", "my_list.insert_end('item')"],
                explanation: ".append() adds a single element to the end of a list in-place."
            },
            {
                question: "How do you access the value associated with key 'age' in dictionary `user = {'name': 'Alice', 'age': 25}`?",
                correctOption: "user['age'] or user.get('age')",
                distractors: ["user.age", "user(age)", "user.find('age')"],
                explanation: "Dictionary values are retrieved using square bracket indexing with the key or via the safe .get() method."
            },
            {
                question: "What does `my_list[-1]` return in Python?",
                correctOption: "The last element of the list",
                distractors: ["An IndexError", "The first element of the list", "A reversed copy of the list"],
                explanation: "Negative indexing in Python indexes from the end, where -1 represents the final element."
            },
            {
                question: "Which of the following data structures stores only unique, unordered elements?",
                correctOption: "set",
                distractors: ["list", "tuple", "dict"],
                explanation: "Sets enforce element uniqueness and do not maintain order or duplicate values."
            },
            {
                question: "What does the dictionary method `d.get('key', 'default')` return if 'key' does not exist in `d`?",
                correctOption: "'default' without raising an error",
                distractors: ["Raises a KeyError", "Returns None and creates the key", "Returns an empty string"],
                explanation: "The .get() method returns the specified fallback default value if the key is not found."
            },
            {
                question: "What is the time complexity of looking up a key in a standard Python dictionary on average?",
                correctOption: "O(1) - Constant time",
                distractors: ["O(n) - Linear time", "O(log n) - Logarithmic time", "O(n^2) - Quadratic time"],
                explanation: "Python dictionaries are implemented using hash tables, offering O(1) average lookup time."
            },
            {
                question: "What will `numbers[1:4]` return given `numbers = [10, 20, 30, 40, 50]`?",
                correctOption: "[20, 30, 40]",
                distractors: ["[10, 20, 30]", "[20, 30, 40, 50]", "[30, 40]"],
                explanation: "Slicing `[start:stop]` is half-open; it includes index 1, 2, and 3, stopping before index 4."
            },
            {
                question: "Which operation removes and returns the last element from a list `items`?",
                correctOption: "items.pop()",
                distractors: ["items.remove()", "del items.last", "items.shift()"],
                explanation: "The .pop() method removes and returns the item at the specified position (default is last item)."
            },
            {
                question: "What type of objects can be used as keys in a Python dictionary?",
                correctOption: "Only hashable (immutable) objects such as strings, numbers, or tuples",
                distractors: [
                    "Any object, including mutable lists and dictionaries",
                    "Only string literals",
                    "Only integer values"
                ],
                explanation: "Dictionary keys must be hashable so their hash values remain constant during their lifetime."
            }
        ].map(shuffleMCQ);
    }

    // 3. Python Functions & Scope
    if (text.includes('function') || text.includes('def ') || text.includes('lambda') || text.includes('scope')) {
        return [
            {
                question: "Which keyword is used to define a new function in Python?",
                correctOption: "def",
                distractors: ["function", "fn", "define"],
                explanation: "Functions in Python are declared using the 'def' keyword followed by the function name and parameters."
            },
            {
                question: "What does a Python function return if it completes execution without an explicit `return` statement?",
                correctOption: "None",
                distractors: ["0", "False", "undefined"],
                explanation: "If no return statement is encountered, Python functions implicitly return the singleton object None."
            },
            {
                question: "What is the purpose of `*args` in a Python function parameter list?",
                correctOption: "To accept an arbitrary number of positional arguments as a tuple",
                distractors: [
                    "To accept arbitrary keyword arguments as a dictionary",
                    "To declare pointer references to memory addresses",
                    "To enforce strict type checking on arguments"
                ],
                explanation: "*args collects excess positional arguments into a tuple."
            },
            {
                question: "What does `**kwargs` allow a function to accept?",
                correctOption: "An arbitrary number of keyword arguments packed into a dictionary",
                distractors: [
                    "A list of positional arguments",
                    "A reference to external global variables",
                    "A double-precision floating-point parameter"
                ],
                explanation: "**kwargs captures any named arguments that were not defined in the parameter list as key-value pairs."
            },
            {
                question: "What is a lambda function in Python?",
                correctOption: "A small, anonymous, single-expression function defined with the `lambda` keyword",
                distractors: [
                    "A multi-line recursive generator function",
                    "A function that executes in a separate thread",
                    "A decorator used exclusively for class constructors"
                ],
                explanation: "Lambda functions are compact one-line anonymous functions that return the value of their single expression."
            },
            {
                question: "Where are variables created inside a function stored by default?",
                correctOption: "In the local scope of the function",
                distractors: ["In the global module scope", "In persistent disk storage", "In the built-in namespace"],
                explanation: "Variables defined inside a function body belong to the function's local scope and cease to exist after return."
            },
            {
                question: "Which keyword allows a function to modify a variable in the enclosing module-level scope?",
                correctOption: "global",
                distractors: ["extern", "nonlocal", "public"],
                explanation: "The 'global' keyword informs Python that a variable name inside a function refers to the module-level variable."
            },
            {
                question: "Can a Python function return multiple values separated by commas?",
                correctOption: "Yes, Python automatically packs them into a single tuple",
                distractors: [
                    "No, functions can strictly return only one single value",
                    "Yes, but only if they are of the exact same data type",
                    "No, returning multiple values triggers a SyntaxError"
                ],
                explanation: "When you write `return a, b`, Python packs the items into a tuple `(a, b)`."
            },
            {
                question: "What is a docstring in a Python function?",
                correctOption: "A string literal placed immediately as the first statement in a function to document its behavior",
                distractors: [
                    "A comment starting with # explaining variable names",
                    "A special return type reserved for string formatting",
                    "A runtime error log generated during compilation"
                ],
                explanation: "Docstrings (`\"\"\"...\"\"\"`) document functions, modules, and classes and are accessible via `help()` or `__doc__`."
            },
            {
                question: "What is a default parameter value in Python?",
                correctOption: "A fallback value assigned in the function signature if the caller does not supply that argument",
                distractors: [
                    "A parameter that cannot be overridden by caller arguments",
                    "A value assigned when an exception occurs inside the function",
                    "A parameter automatically converted to None"
                ],
                explanation: "Default parameters like `def greet(name='Guest'):` allow functions to be invoked with fewer arguments."
            }
        ].map(shuffleMCQ);
    }

    // 4. AI Infrastructure in Pharma / Healthcare
    if (text.includes('pharma') || text.includes('infrastructure') || text.includes('clinical') || text.includes('health') || text.includes('capstone')) {
        return [
            {
                question: "Why is high-performance computing (HPC) with GPU clusters critical for pharma AI infrastructure?",
                correctOption: "To accelerate compute-heavy molecular docking, dynamic simulations, and deep neural network training",
                distractors: [
                    "To replace standard database storage mechanisms",
                    "To bypass regulatory FDA audit trail requirements",
                    "To enable unencrypted data transfer over public networks"
                ],
                explanation: "Modern pharma AI relies on GPU acceleration to process massive genomic sequences and molecular physics simulations."
            },
            {
                question: "Under FDA 21 CFR Part 11 regulations, what is mandatory for AI systems used in pharma manufacturing?",
                correctOption: "Secure, computer-generated, time-stamped audit trails and electronic signature verification",
                distractors: [
                    "Open public access to training datasets without authentication",
                    "Using only unvalidated open-source scripts",
                    "Deleting historical model version logs weekly"
                ],
                explanation: "21 CFR Part 11 requires strict audit trails, system validation, and electronic signature integrity."
            },
            {
                question: "What distinguishes Personally Identifiable Information (PII) and Protected Health Information (PHI) under HIPAA?",
                correctOption: "PHI encompasses health data linked to identifiable personal markers created or held by covered entities",
                distractors: [
                    "PII and PHI are identical and require no special encryption",
                    "PHI applies only to public financial transactions",
                    "PHI can be freely shared across commercial AI models without patient consent"
                ],
                explanation: "HIPAA protects PHI, requiring stringent de-identification (Safe Harbor or Expert Determination) before AI modeling."
            },
            {
                question: "What role does containerization (e.g., Docker, Kubernetes) play in pharmaceutical AI deployment?",
                correctOption: "Ensures reproducible runtime environments, scalability, and strict dependency isolation across hybrid clouds",
                distractors: [
                    "Eliminates the need for software testing and validation",
                    "Compiles Python scripts directly into hardware firmware",
                    "Removes all network security firewalls"
                ],
                explanation: "Containers package algorithms with exact dependencies, ensuring identical GxP-validated execution everywhere."
            },
            {
                question: "In enterprise clinical data pipelines, what is 'cold storage' primarily utilized for?",
                correctOption: "Cost-effective, secure, long-term archival of raw clinical trial data, pathology images, and audit logs",
                distractors: [
                    "Real-time low-latency inference during emergency triage",
                    "Storing high-speed GPU caches for active model training",
                    "Running interactive web dashboards"
                ],
                explanation: "Cold storage (like AWS Glacier) archives petabytes of regulatory clinical records that are accessed infrequently."
            },
            {
                question: "What is data drift in production healthcare AI pipelines?",
                correctOption: "A shift in input data distribution over time compared to the training distribution, degrading model accuracy",
                distractors: [
                    "Hardware data corruption on local SSDs",
                    "A deliberate technique to increase model regularization",
                    "The process of deleting duplicate clinical records"
                ],
                explanation: "Data drift occurs when patient demographics, sensor hardware, or hospital protocols evolve, requiring retraining."
            },
            {
                question: "Why must pharma AI models undergo validation on external multi-center clinical cohorts?",
                correctOption: "To verify algorithmic generalizability and ensure predictions do not fail due to site-specific batch effects",
                distractors: [
                    "To intentionally overfit on single-vendor hardware specifications",
                    "To avoid adhering to institutional review board (IRB) protocols",
                    "Because single-center training models always have zero variance"
                ],
                explanation: "External multi-center validation proves that the AI performs reliably across diverse hospitals and populations."
            },
            {
                question: "What does the GxP acronym represent in life sciences and pharmaceutical compliance?",
                correctOption: "Good 'x' Practice (e.g., Good Manufacturing Practice, Good Clinical Practice, Good Laboratory Practice)",
                distractors: [
                    "Global XML Protocol",
                    "General Xenon Processing",
                    "Generic Xerox Print"
                ],
                explanation: "GxP encompasses quality guidelines and regulations in pharma to ensure products are safe and effective."
            },
            {
                question: "How does a Feature Store benefit distributed AI infrastructure in life sciences?",
                correctOption: "Provides a centralized, versioned repository of validated features for both training and low-latency inference",
                distractors: [
                    "Replaces relational databases for hospital billing systems",
                    "Compiles Python code into machine language automatically",
                    "Renders 3D medical animations in the browser"
                ],
                explanation: "Feature Stores avoid duplicate data engineering and prevent training-serving skew across teams."
            },
            {
                question: "What is the primary objective of a Capstone AI project in an enterprise curriculum?",
                correctOption: "To synthesize end-to-end knowledge by architecting, implementing, and validating a complete applied solution",
                distractors: [
                    "To memorize syntax rules without writing executable code",
                    "To deploy unvalidated models directly into production without testing",
                    "To bypass documentation and software development lifecycle steps"
                ],
                explanation: "Capstone projects demonstrate comprehensive mastery by solving realistic problems through an end-to-end pipeline."
            }
        ].map(shuffleMCQ);
    }

    // 5. Machine Learning, Regression & Trees
    if (text.includes('regression') || text.includes('lasso') || text.includes('ridge') || text.includes('tree') || text.includes('forest')) {
        return [
            {
                question: "What is the primary goal of Regularization (such as Ridge or Lasso) in regression?",
                correctOption: "To penalize large coefficients and prevent model overfitting",
                distractors: [
                    "To increase model variance on unseen data",
                    "To transform regression into unsupervised clustering",
                    "To maximize the Mean Squared Error on the training set"
                ],
                explanation: "Regularization adds a penalty term to the loss function to shrink coefficients and improve generalization."
            },
            {
                question: "What unique property distinguishes Lasso (L1) regularization from Ridge (L2)?",
                correctOption: "Lasso can shrink coefficients strictly to zero, performing automated feature selection",
                distractors: [
                    "Ridge eliminates features entirely whereas Lasso does not",
                    "Lasso requires computing second-order derivatives",
                    "L1 regularization cannot be used for regression problems"
                ],
                explanation: "L1 penalty drives unimportant feature coefficients to exactly zero, creating sparse, interpretable models."
            },
            {
                question: "What does the R-squared (coefficient of determination) metric represent?",
                correctOption: "The proportion of variance in the dependent variable explained by the model",
                distractors: [
                    "The absolute difference between max and min errors",
                    "The probability that the true slope is zero",
                    "The training time in milliseconds per epoch"
                ],
                explanation: "R-squared measures how well the regression predictions approximate the actual data points (1.0 = perfect fit)."
            },
            {
                question: "How does a Random Forest reduce variance compared to an individual Decision Tree?",
                correctOption: "By aggregating predictions across many trees trained on bootstrap samples and random feature subsets",
                distractors: [
                    "By pruning the dataset down to a single representative sample",
                    "By using higher learning rates during gradient descent",
                    "By restricting tree depth to exactly one split"
                ],
                explanation: "Random Forests use Bagging (bootstrap aggregation) and feature randomization to cancel out individual tree variances."
            },
            {
                question: "What splitting metric measures node impurity in Classification Trees?",
                correctOption: "Gini Impurity or Entropy (Information Gain)",
                distractors: ["R-squared", "Mean Absolute Error", "Euclidean Distance"],
                explanation: "Decision trees split nodes to maximize purity, evaluated via Gini Impurity or Entropy."
            },
            {
                question: "In Ridge regression, what happens as the hyperparameter alpha (or lambda) approaches infinity?",
                correctOption: "The coefficients shrink asymptotically toward zero, resulting in high bias and low variance",
                distractors: [
                    "The coefficients grow infinitely large, causing overfitting",
                    "The model becomes identical to Ordinary Least Squares",
                    "The Mean Squared Error on the training set becomes zero"
                ],
                explanation: "A massive regularization penalty forces all coefficients near zero, underfitting the model."
            },
            {
                question: "What is Out-Of-Bag (OOB) error in Random Forest algorithms?",
                correctOption: "Validation score computed using samples omitted during the bootstrap sampling of each tree",
                distractors: [
                    "An error thrown when system memory runs out of capacity",
                    "The loss evaluated exclusively on corrupted training records",
                    "The error caused by non-numerical categorical columns"
                ],
                explanation: "Roughly 37% of samples are left out of each bootstrap sample and serve as a built-in cross-validation set."
            },
            {
                question: "When is Polynomial Regression preferred over Simple Linear Regression?",
                correctOption: "When the relationship between predictor and target variables exhibits significant non-linear curvature",
                distractors: [
                    "When the dataset contains strictly two binary variables",
                    "When computing capacity is extremely limited",
                    "When all features have zero correlation with the target"
                ],
                explanation: "Polynomial regression fits curves to non-linear data by expanding features into higher-order powers."
            },
            {
                question: "What does Gradient Boosting do that differs fundamentally from Bagging?",
                correctOption: "It builds trees sequentially, where each new tree is trained to correct the residual errors of preceding trees",
                distractors: [
                    "It trains all trees completely in parallel on independent random samples",
                    "It averages random weights without computing gradients",
                    "It eliminates all decision branches with negative outputs"
                ],
                explanation: "Boosting is an iterative sequential ensemble method focused on minimizing residual errors."
            },
            {
                question: "What is the primary indicator of an overfitted regression model?",
                correctOption: "Near-zero training error accompanied by high error on validation/test datasets",
                distractors: [
                    "High error on both training and test datasets",
                    "Equal performance on training and unseen test sets",
                    "The model requires fewer parameters than the feature count"
                ],
                explanation: "Overfitting means the model memorized noise in the training set and fails to generalize to test data."
            }
        ].map(shuffleMCQ);
    }

    // 6. Neural Networks & Deep Learning
    if (text.includes('neural') || text.includes('perceptron') || text.includes('activation') || text.includes('backprop') || text.includes('cnn') || text.includes('deep learning')) {
        return [
            {
                question: "What is the primary function of an activation function in a neural network?",
                correctOption: "To introduce non-linearity, allowing the network to learn complex non-linear patterns",
                distractors: [
                    "To initialize the weights to zero before training",
                    "To convert categorical labels into one-hot encoded vectors",
                    "To speed up disk write operations during checkpointing"
                ],
                explanation: "Without non-linear activations, multi-layer neural networks collapse mathematically into simple linear transformations."
            },
            {
                question: "Which activation function computes: f(x) = max(0, x)?",
                correctOption: "ReLU (Rectified Linear Unit)",
                distractors: ["Sigmoid", "Hyperbolic Tangent (Tanh)", "Softmax"],
                explanation: "ReLU outputs 0 for negative inputs and passes positive inputs directly, mitigating vanishing gradients."
            },
            {
                question: "What algorithm is used to compute gradients of the loss with respect to all network weights?",
                correctOption: "Backpropagation (applying the chain rule of calculus)",
                distractors: ["K-Means clustering", "Principal Component Analysis", "Singular Value Decomposition"],
                explanation: "Backpropagation applies the calculus chain rule backwards from output to input to calculate parameter gradients."
            },
            {
                question: "What problem occurs when gradients become exponentially small as they propagate back through deep layers?",
                correctOption: "The Vanishing Gradient problem",
                distractors: ["Exploding gradient problem", "Underfitting saturation", "Dimensionality catastrophe"],
                explanation: "Vanishing gradients prevent early layers in deep networks from updating weights effectively."
            },
            {
                question: "In Convolutional Neural Networks (CNNs), what is the primary role of a convolutional layer?",
                correctOption: "To apply learnable filters/kernels across spatial dimensions to extract local visual feature maps",
                distractors: [
                    "To reduce floating-point numbers to integers",
                    "To compute class probabilities via normalized exponents",
                    "To eliminate spatial dimensionality immediately"
                ],
                explanation: "Convolutional layers slide filters over inputs to detect edges, textures, and higher-level visual patterns."
            },
            {
                question: "What does a Max Pooling layer do in a CNN architecture?",
                correctOption: "Downsamples spatial dimensions by selecting the maximum value in each pooling window",
                distractors: [
                    "Increases image resolution using interpolation",
                    "Calculates the weighted average of all network weights",
                    "Applies dropout regularization to input channels"
                ],
                explanation: "Max pooling reduces spatial dimensions, cutting computation and providing translation invariance."
            },
            {
                question: "What does Dropout do during training of deep neural networks?",
                correctOption: "Randomly deactivates a percentage of neurons per iteration to prevent co-adaptation and overfitting",
                distractors: [
                    "Permanently deletes layers that have negative weights",
                    "Discards corrupt data samples from the batch",
                    "Drops the learning rate to zero when loss plateaus"
                ],
                explanation: "Dropout acts as an ensemble technique by turning off random neurons during forward and backward passes."
            },
            {
                question: "Which optimizer combines momentum with adaptive learning rates for each individual parameter?",
                correctOption: "Adam (Adaptive Moment Estimation)",
                distractors: ["Standard SGD without momentum", "AdaGrad without decay", "Linear perceptron solver"],
                explanation: "Adam computes individual adaptive learning rates from estimates of first and second moments of the gradients."
            },
            {
                question: "Which activation function is standard in the output layer for multi-class classification?",
                correctOption: "Softmax",
                distractors: ["Sigmoid", "ReLU", "Linear"],
                explanation: "Softmax converts a vector of raw logits into a valid probability distribution summing to 1.0."
            },
            {
                question: "What is Transfer Learning in deep learning?",
                correctOption: "Reusing a model pretrained on a large benchmark dataset (e.g., ImageNet) as the starting point for a new task",
                distractors: [
                    "Transferring source code from Python 2 to Python 3",
                    "Copying datasets across local hard drives",
                    "Training a model without any validation data"
                ],
                explanation: "Transfer learning leverages features learned on massive datasets, requiring less training time and data."
            }
        ].map(shuffleMCQ);
    }

    // 7. Brochure / Course Overview / Welcome / Video
    if (text.includes('brochure') || text.includes('video') || text.includes('introduction') || text.includes('overview') || text.includes('welcome')) {
        return [
            {
                question: `What is the core prerequisite requirement for successfully mastering "${sectionTitle}"?`,
                correctOption: "Consistent engagement with theoretical lessons, quizzes, and hands-on coding labs",
                distractors: [
                    "Skipping assessments in favor of memorizing answers",
                    "Relying entirely on pre-computed outputs without executing scripts",
                    "Disabling browser interactive development tools"
                ],
                explanation: "Active hands-on experimentation and incremental testing reinforce conceptual learning."
            },
            {
                question: "What minimum score percentage is required on each section assessment to advance to the next topic?",
                correctOption: "70%",
                distractors: ["50%", "60%", "90%"],
                explanation: "The LMS enforces a 70% passing threshold to guarantee mastery before moving forward."
            },
            {
                question: "What happens after all section topics in a module are completed?",
                correctOption: "The student unlocks the practical code lab and the Level 2 Comprehensive Module Assessment",
                distractors: [
                    "The student is automatically logged out",
                    "The course terminates without issuing a certificate",
                    "All previous progress is permanently reset"
                ],
                explanation: "Finishing all sections unlocks the module's practical lab and comprehensive assessment."
            },
            {
                question: "Why are practical code labs incorporated into the course curriculum?",
                correctOption: "To provide real-world, hands-on programming experience applying theoretical concepts",
                distractors: [
                    "To increase download time for the application",
                    "To test typing speed exclusively",
                    "To avoid teaching theoretical fundamentals"
                ],
                explanation: "Practical labs translate theoretical knowledge into production-ready software engineering skills."
            },
            {
                question: "How is student progress tracked across courses in this dashboard?",
                correctOption: "Through persistent tracking of completed sections, quiz scores, and module milestones",
                distractors: [
                    "Only by the number of clicks on the screen",
                    "Progress is cleared every time the browser is closed",
                    "By manual instructor email confirmation only"
                ],
                explanation: "Progress is recorded persistently in the database per section and per module."
            },
            {
                question: "What reward is unlocked upon successfully completing all modules and assessments in a course?",
                correctOption: "An official verified Course Completion Certificate",
                distractors: [
                    "A mandatory exam retake",
                    "Immediate account deactivation",
                    "A temporary trial downgrade"
                ],
                explanation: "Passing all course modules unlocks an official, verifiable digital completion certificate."
            },
            {
                question: "If a student scores below 70% on a section quiz, what is the correct procedure?",
                correctOption: "Review the section materials and click 'Retake Quiz' to try again",
                distractors: [
                    "The student is locked out of the course permanently",
                    "The student must pay an additional penalty fee",
                    "The course advances anyway without verification"
                ],
                explanation: "Students can review the learning content and retake the quiz until they achieve mastery."
            },
            {
                question: "What is the recommended approach when working through video and PDF course resources?",
                correctOption: "Review documents thoroughly, take notes, and complete all required media checkpoints",
                distractors: [
                    "Skip through videos immediately without listening",
                    "Ignore course documents and guess quiz answers",
                    "Download files and never open them"
                ],
                explanation: "Thoroughly reviewing media and documents ensures high retention and first-attempt quiz passes."
            },
            {
                question: "Which feature allows students to test their code interactively right in the browser?",
                correctOption: "The integrated Practical Code Lab with live backend code execution",
                distractors: [
                    "Static text screenshots with no interactivity",
                    "Third-party external paper exams",
                    "Manual telephone hotline assistance"
                ],
                explanation: "The integrated code editor executes code directly on the server and returns live outputs."
            },
            {
                question: "How do Level 1 (Section) assessments differ from Level 2 (Module) assessments?",
                correctOption: "Level 1 tests granular topic mastery per section, while Level 2 evaluates holistic module mastery",
                distractors: [
                    "Level 1 has 100 questions while Level 2 has 2 questions",
                    "Level 1 is optional while Level 2 is unmonitored",
                    "Level 1 tests only math while Level 2 tests only spelling"
                ],
                explanation: "The 2-level architecture verifies incremental comprehension first, followed by comprehensive synthesis."
            }
        ].map(shuffleMCQ);
    }

    // 8. General / Fallback Synthesizer for Any Specific Topic
    // Generates 10 high-quality, topic-targeted questions tailored to the section title and content
    const cleanTitle = sectionTitle.replace(/^\d+[\.\s]+/, '').trim();
    return [
        {
            question: `In the study of "${cleanTitle}", what is the primary foundational concept students must master?`,
            correctOption: `The core principles and operational mechanisms governing ${cleanTitle}`,
            distractors: [
                `Deprecating standard architectural patterns without baseline testing`,
                `Executing unverified scripts in production environments`,
                `Avoiding documentation and parameter validation`
            ],
            explanation: `Mastering the underlying principles of ${cleanTitle} provides the essential foundation for applied problem solving.`
        },
        {
            question: `Which industry best practice is most critical when implementing solutions involving "${cleanTitle}"?`,
            correctOption: `Structured validation, comprehensive error handling, and performance benchmarking`,
            distractors: [
                `Hardcoding variables and static values directly in production logic`,
                `Disabling logging and diagnostic monitoring`,
                `Skipping unit tests in favor of trial-and-error debugging`
            ],
            explanation: `Engineering best practices require disciplined validation, benchmarking, and robust error management.`
        },
        {
            question: `What is a common challenge or pitfall encountered when working with "${cleanTitle}"?`,
            correctOption: `Failing to account for edge cases and unexpected input variations`,
            distractors: [
                `Documenting function signatures and parameter schemas clearly`,
                `Benchmarking computational efficiency against known baselines`,
                `Structuring modular code into reusable functions`
            ],
            explanation: `Robust implementations must account for edge-case boundaries and variable input data.`
        },
        {
            question: `How does mastery of "${cleanTitle}" contribute to end-to-end project workflows?`,
            correctOption: `It serves as a critical functional building block linking data preparation with practical execution`,
            distractors: [
                `It isolates components from the rest of the application ecosystem`,
                `It eliminates the need for software version control`,
                `It replaces all database and cloud storage infrastructure`
            ],
            explanation: `${cleanTitle} integrates directly into the broader computational pipeline to deliver cohesive results.`
        },
        {
            question: `When evaluating the effectiveness of a system built on "${cleanTitle}", which metric is most meaningful?`,
            correctOption: `Quantitative accuracy, latency, and reliability under realistic test workloads`,
            distractors: [
                `Total number of lines of unformatted code`,
                `The physical color of the server housing`,
                `Subjective assumptions without experimental validation`
            ],
            explanation: `Objective metrics such as accuracy, latency, and throughput provide the true measure of engineering performance.`
        },
        {
            question: `Why is reproducibility essential when applying principles of "${cleanTitle}"?`,
            correctOption: `It ensures consistent, verifiable outcomes across different environments and runs`,
            distractors: [
                `It prevents other engineers from understanding the methodology`,
                `It restricts execution to a single specific hardware model`,
                `It slows down execution to avoid system overheating`
            ],
            explanation: `Scientific and engineering rigor requires that workflows produce repeatable, auditable results.`
        },
        {
            question: `What distinguishes an optimal implementation of "${cleanTitle}" from a naive one?`,
            correctOption: `Algorithmic efficiency, clear modularity, and resource optimization`,
            distractors: [
                `Using excessive nested loops without vectorization`,
                `Ignoring memory footprints and system overhead`,
                `Combining all logic into a single monolithic script`
            ],
            explanation: `Optimized solutions prioritize algorithmic complexity, modularity, and efficient resource utilization.`
        },
        {
            question: `In production environments, how should components implementing "${cleanTitle}" be monitored?`,
            correctOption: `Through real-time telemetry, automated error logging, and performance health metrics`,
            distractors: [
                `By waiting for user failure reports before auditing`,
                `By turning off monitoring to conserve bandwidth`,
                `By rebooting servers whenever latency increases`
            ],
            explanation: `Proactive telemetry and logging detect regressions and drift before they impact end users.`
        },
        {
            question: `How should code related to "${cleanTitle}" be tested during development?`,
            correctOption: `Using automated unit tests covering expected behavior and edge boundaries`,
            distractors: [
                `By visual glance without running test assertions`,
                `Testing only once after deployment to production`,
                `Skipping tests if the script executes without syntax errors`
            ],
            explanation: `Automated unit tests ensure that components satisfy functional specifications across boundary conditions.`
        },
        {
            question: `What is the immediate next step recommended after completing the quiz for "${cleanTitle}"?`,
            correctOption: `Proceeding to the next topic to build upon these acquired concepts`,
            distractors: [
                `Resetting the course to the beginning`,
                `Ceasing further technical study`,
                `Deleting previous lab exercises`
            ],
            explanation: `Continuous progression through the curriculum reinforces cumulative knowledge and prepares students for the capstone.`
        }
    ].map(shuffleMCQ);
}

/**
 * Module-Level Comprehensive Assessment Generator (Level 2)
 * Generates 10 synthesizing questions with randomized, jumbled options.
 */
export function getModuleComprehensiveQuestions(courseId: string, moduleTitle: string, sections: any[]): ShuffledMCQ[] {
    const cleanModTitle = moduleTitle.replace(/^MODULE\s+\d+[\s—\-:]+/, '').trim();
    const sectionNames = sections.map(s => s.title).join(", ");

    return [
        {
            question: `In "${cleanModTitle}", what is the primary architectural concept linking all topics covered (${sectionNames})?`,
            correctOption: `An integrated, end-to-end workflow connecting foundational theory, modeling, and practical implementation`,
            distractors: [
                `A disconnected set of independent scripts without common conventions`,
                `An obsolete theoretical framework that cannot be implemented in code`,
                `A collection of unverified heuristics without evaluation metrics`
            ],
            explanation: `The module unifies core concepts into a cohesive pipeline that bridges theory with applied practice.`
        },
        {
            question: `When implementing the techniques from "${cleanModTitle}", what is the primary prerequisite for production readiness?`,
            correctOption: `Robust parameter validation, reproducible execution, and thorough automated testing`,
            distractors: [
                `Hardcoding environment configurations in public repositories`,
                `Omitting exception handling to maximize execution speed`,
                `Disabling data schema validations on input feeds`
            ],
            explanation: `Production readiness demands reproducibility, validation, and resilience against runtime errors.`
        },
        {
            question: `What is a common architectural anti-pattern to avoid when developing pipelines for "${cleanModTitle}"?`,
            correctOption: `Tightly coupling data ingestion, business logic, and presentation into a monolithic block`,
            distractors: [
                `Separating concerns into distinct, testable modular functions`,
                `Adhering to PEP 8 or standard language style guidelines`,
                `Writing clear docstrings and type annotations`
            ],
            explanation: `Tight coupling creates brittle software that is difficult to maintain, test, and scale.`
        },
        {
            question: `How should performance bottlenecks in "${cleanModTitle}" be identified and resolved?`,
            correctOption: `Profiling execution time and memory consumption using diagnostic tools before targeted optimization`,
            distractors: [
                `Guessing which function is slow and rewriting it blindly`,
                `Upgrading server hardware without analyzing software efficiency`,
                `Removing security and logging layers to cut overhead`
            ],
            explanation: `Profiling pinpoints actual computational bottlenecks, enabling targeted optimization without guesswork.`
        },
        {
            question: `Why is defensive programming crucial across the components of "${cleanModTitle}"?`,
            correctOption: `It anticipates unexpected inputs and failure modes, handling them gracefully without crashes`,
            distractors: [
                `It prevents users from entering valid input values`,
                `It guarantees that code will run 10 times faster`,
                `It eliminates the need for software licenses`
            ],
            explanation: `Defensive programming validates inputs and handles exceptions, ensuring system reliability.`
        },
        {
            question: `When scaling solutions built in "${cleanModTitle}" to handle enterprise volumes, which strategy is most effective?`,
            correctOption: `Decoupling stateless computation from persistent storage and leveraging parallel processing`,
            distractors: [
                `Executing all workflows sequentially on a single CPU thread`,
                `Storing all operational state permanently in system RAM without persistence`,
                `Increasing network round-trips for every minor calculation`
            ],
            explanation: `Stateless workers and distributed storage allow seamless horizontal scaling across cloud nodes.`
        },
        {
            question: `What role does automated regression testing play in maintaining systems built on "${cleanModTitle}"?`,
            correctOption: `Ensures that new code additions or updates do not break previously working functionality`,
            distractors: [
                `Generates marketing reports for executive leadership`,
                `Replaces the need for human software engineers`,
                `Compresses database backup files automatically`
            ],
            explanation: `Regression test suites protect existing features against unintended bugs introduced during iteration.`
        },
        {
            question: `How does data validation protect the algorithms developed in "${cleanModTitle}"?`,
            correctOption: `Prevents garbage-in, garbage-out failures by verifying data types, shapes, and value ranges upfront`,
            distractors: [
                `Assumes all external input data is perfectly formatted`,
                `Converts invalid inputs to zeros silently without warning`,
                `Disables all input error checking to reduce latency`
            ],
            explanation: `Upfront data validation safeguards model integrity against corrupted, incomplete, or malformed inputs.`
        },
        {
            question: `What is the primary operational hazard of deploying "${cleanModTitle}" without observability?`,
            correctOption: `Silent pipeline failures and undetected accuracy degradation over time`,
            distractors: [
                `Uncontrollably fast processing speeds`,
                `Excessively detailed error documentation`,
                `Automated server self-repair cycles`
            ],
            explanation: `Without observability and telemetry, systems can fail or drift silently without alerting engineers.`
        },
        {
            question: `What milestone is unlocked once a student successfully passes this Level 2 Module Assessment?`,
            correctOption: `Advancement to the next module in the curriculum (or course certification on the final module)`,
            distractors: [
                `Forced repetition of all previous lessons`,
                `Downgrading user account privileges`,
                `Manual phone interview verification`
            ],
            explanation: `Passing the comprehensive module assessment proves mastery, unlocking the next curriculum milestone.`
        }
    ].map(shuffleMCQ);
}

/**
 * Main Seeder Routine:
 * Connects to MongoDB, updates all sections and module assessments with curated,
 * topic-specific, 10-question MCQs with randomized, jumbled options.
 */
export async function seedAllMCQs(forceUpdate = true) {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(MONGO_URI);
    console.log("Connected successfully to MongoDB Atlas.");

    const modules = await Module.find({}).sort({ order: 1 });
    console.log(`Found ${modules.length} modules to process across all courses.\n`);

    let totalSectionsUpdated = 0;
    let totalModulesUpdated = 0;

    for (const mod of modules) {
        console.log(`------------------------------------------------------------------`);
        console.log(`Processing Module [${mod.id}]: "${mod.title}" (Course: ${mod.courseId})`);

        // 1. Process Sections (Level 1)
        for (let sIdx = 0; sIdx < mod.sections.length; sIdx++) {
            const sec = mod.sections[sIdx];
            const existingCount = sec.mcqs ? sec.mcqs.length : 0;

            if (!forceUpdate && existingCount >= 10) {
                console.log(`  - Section ${sIdx + 1}/${mod.sections.length} "${sec.title}": Already has ${existingCount} MCQs (skipping).`);
                continue;
            }

            console.log(`  - Generating 10 curated, topic-specific MCQs for Section ${sIdx + 1}/${mod.sections.length} "${sec.title}"...`);
            const mcqs = getSectionSpecificQuestions(mod.courseId || 'python-ai-course', mod.title, sec.title, sec.content || '');

            // Log distribution of answers to confirm jumbling
            const answerCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
            mcqs.forEach(m => answerCounts[m.correctAnswer]++);
            console.log(`    Generated ${mcqs.length} MCQs! Jumbled distribution: A:${answerCounts[0]} B:${answerCounts[1]} C:${answerCounts[2]} D:${answerCounts[3]}`);

            (sec as any).mcqs = mcqs as any;
            totalSectionsUpdated++;
        }

        // 2. Process Module Assessment (Level 2)
        console.log(`  - Generating 10 Comprehensive Module Assessment MCQs for "${mod.title}"...`);
        const moduleAssessmentMCQs = getModuleComprehensiveQuestions(mod.courseId || 'python-ai-course', mod.title, mod.sections);
        const modAnswerCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
        moduleAssessmentMCQs.forEach(m => modAnswerCounts[m.correctAnswer]++);
        console.log(`    Generated ${moduleAssessmentMCQs.length} Module Assessment MCQs! Jumbled: A:${modAnswerCounts[0]} B:${modAnswerCounts[1]} C:${modAnswerCounts[2]} D:${modAnswerCounts[3]}`);

        (mod as any).moduleAssessment = {
            passingScore: 70,
            mcqs: moduleAssessmentMCQs as any
        };
        totalModulesUpdated++;

        mod.markModified('sections');
        mod.markModified('moduleAssessment');
        await mod.save();

        // Direct native MongoDB collection update to guarantee changes persist in Atlas
        if (mongoose.connection.db) {
            await mongoose.connection.db.collection('modules').updateOne(
                { _id: mod._id },
                {
                    $set: {
                        sections: mod.sections,
                        moduleAssessment: (mod as any).moduleAssessment
                    }
                }
            );
        }
        console.log(`  Saved updated Module [${mod.id}] to database.`);
    }

    console.log(`\n==================================================================`);
    console.log(`SEEDING COMPLETE!`);
    console.log(`Total Sections Updated with curated, jumbled MCQs: ${totalSectionsUpdated}`);
    console.log(`Total Modules Updated with Level 2 Assessments: ${totalModulesUpdated}`);
    console.log(`==================================================================\n`);

    await mongoose.disconnect();
}

if (require.main === module) {
    seedAllMCQs(true)
        .then(() => process.exit(0))
        .catch(err => {
            console.error("Seeding error:", err);
            process.exit(1);
        });
}
