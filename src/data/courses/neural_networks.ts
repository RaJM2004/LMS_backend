export const nnModules = [
    {
        id: 'nn-module-1',
        courseId: 'neural-networks-course',
        order: 1,
        title: 'MODULE 1 — Introduction to Neural Networks',
        sections: [
            {
                title: "The Artificial Neuron (Perceptron)",
                content: "A neural network is built from artificial neurons, inspired by biological neurons.\nA simple neuron takes inputs ($x$), multiplies them by weights ($w$), adds a bias ($b$), and passes the result through an activation function.\n\nFormula: $y = f(\sum(w_i x_i) + b)$",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Activation Functions",
                content: "Activation functions decide whether a neuron should be 'fired' or not.\n\n1. **Sigmoid**: S-shaped curve, outputs between 0 and 1.\n2. **ReLU (Rectified Linear Unit)**: Outputs input if positive, else 0. Most common in hidden layers.\n3. **Tanh**: Outputs between -1 and 1.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Single Neuron Forward Pass
inputs = np.array([2.0, 3.0])
weights = np.array([0.5, 0.8])
bias = 1.0

# Linear Combination
z = np.dot(inputs, weights) + bias
output = sigmoid(z)

print(f"Linear Output (z): {z}")
print(f"Activation Output: {output:.4f}")`,
        output: `Linear Output (z): 4.4
Activation Output: 0.9879`,
        mcqs: [
            {
                question: "What is the purpose of an activation function?",
                options: ["To initialize weights", "To introduce non-linearity", "To calculate loss", "To speed up training"],
                correctAnswer: 1
            },
            {
                question: "Which function outputs values between 0 and 1?",
                options: ["ReLU", "Tanh", "Sigmoid", "Linear"],
                correctAnswer: 2
            },
            {
                question: "What is a Perceptron?",
                options: ["A multi-layer network", "A single artificial neuron", "A recurrent unit", "A loss function"],
                correctAnswer: 1
            },
            {
                question: "What is the output of ReLU if the input is negative?",
                options: ["1", "-1", "0", "Introduction"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'nn-module-2',
        courseId: 'neural-networks-course',
        order: 2,
        title: 'MODULE 2 — Feedforward Architectures',
        sections: [
            {
                title: "Multi-Layer Perceptron (MLP)",
                content: "An MLP consists of at least three layers of nodes: an input layer, a hidden layer, and an output layer. Except for the input nodes, each node is a neuron that uses a nonlinear activation function.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Hidden Layers",
                content: "Hidden layers allow the network to model complex data. Deep learning simply means having many hidden layers.",
                image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import torch
import torch.nn as nn

# Define a simple Feedforward Network
model = nn.Sequential(
    nn.Linear(2, 4),   # Input: 2, Hidden: 4
    nn.ReLU(),         # Activation
    nn.Linear(4, 1),   # Hidden: 4, Output: 1
    nn.Sigmoid()       # Final Activation
)

print(model)`,
        output: `Sequential(
  (0): Linear(in_features=2, out_features=4, bias=True)
  (1): ReLU()
  (2): Linear(in_features=4, out_features=1, bias=True)
  (3): Sigmoid()
)`,
        mcqs: [
            {
                question: "What connects the input layer to the output layer?",
                options: ["Hidden Layers", "Data pipelines", "Kernel trick", "Pooling layers"],
                correctAnswer: 0
            },
            {
                question: "In PyTorch, nn.Linear(2, 4) means:",
                options: ["2 hidden layers, 4 neurons", "2 input features, 4 output features", "2 weights, 4 biases", "None of the above"],
                correctAnswer: 1
            },
            {
                question: "What is a 'hidden' layer?",
                options: ["A layer that is not visible in code", "A layer between input and output layers", "A layer with 0 weights", "A secure layer"],
                correctAnswer: 1
            },
            {
                question: "Which structure typically defines a Multi-Layer Perceptron (MLP)?",
                options: ["Input, Hidden, Output layers", "Only Input and Output", "Only Hidden Layers", "Cluster of nodes"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'nn-module-3',
        courseId: 'neural-networks-course',
        order: 3,
        title: 'MODULE 3 — Loss Functions',
        sections: [
            {
                title: "Measuring Error",
                content: "A Loss Function measures how far the model's predictions are from the actual labels.\n\n- **MSE (Mean Squared Error)**: Used for Regression.\n- **Cross-Entropy Loss**: Used for Classification.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import torch.nn as nn
import torch

# Regression Loss
criterion_mse = nn.MSELoss()
prediction = torch.tensor([2.5])
target = torch.tensor([2.0])
loss_mse = criterion_mse(prediction, target)

# Classification Loss
criterion_ce = nn.BCELoss() # Binary Cross Entropy
pred_prob = torch.tensor([0.8])
label = torch.tensor([1.0])
loss_ce = criterion_ce(pred_prob, label)

print(f"MSE Loss: {loss_mse.item()}")
print(f"BCE Loss: {loss_ce.item():.4f}")`,
        output: `MSE Loss: 0.25
BCE Loss: 0.2231`,
        mcqs: [
            {
                question: "Which loss function is best for predicting house prices?",
                options: ["Cross-Entropy", "MSE (Mean Squared Error)", "Accuracy", "Softmax"],
                correctAnswer: 1
            },
            {
                question: "Which loss function is best for binary classification?",
                options: ["MSE", "Binary Cross-Entropy", "L1 Loss", "Hinge Loss"],
                correctAnswer: 1
            },
            {
                question: "What does MSE stand for?",
                options: ["Maximum Squared Error", "Medium Squared Error", "Mean Squared Error", "Minimum Squared Error"],
                correctAnswer: 2
            },
            {
                question: "Ideally, during training, we want the loss to:",
                options: ["Increase", "Stay constant", "Decrease", "Oscillate"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'nn-module-4',
        courseId: 'neural-networks-course',
        order: 4,
        title: 'MODULE 4 — Backpropagation',
        sections: [
            {
                title: "The Learning Algorithm",
                content: "Backpropagation is the heart of training. It calculates the gradient of the loss function with respect to each weight by the chain rule.\nThis tells the optimizer which direction to adjust the weights to minimize error.",
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import torch

x = torch.tensor([1.0], requires_grad=True)
w = torch.tensor([2.0], requires_grad=True)
b = torch.tensor([3.0], requires_grad=True)

# Forward pass: y = wx + b
y = w * x + b
loss = (y - 10)**2  # Target is 10

# Backward pass
loss.backward()

print(f"dL/dw: {w.grad}") # Gradient for weight
print(f"dL/db: {b.grad}") # Gradient for bias`,
        output: `dL/dw: tensor([-10.])
dL/db: tensor([-10.])`,
        mcqs: [
            {
                question: "Backpropagation uses which mathematical rule?",
                options: ["Product Rule", "Chain Rule", "Quotient Rule", "Power Rule"],
                correctAnswer: 1
            },
            {
                question: "What does .backward() compute in PyTorch?",
                options: ["The output", "The loss", "The gradients", "The weights"],
                correctAnswer: 2
            },
            {
                question: "What is updated during backpropagation?",
                options: ["Input data", "Hyperparameters", "Weights and Biases", "Loss function"],
                correctAnswer: 2
            },
            {
                question: "What calculates the direction of steepest descent?",
                options: ["The Gradient", "The Bias", "The Activation", "The Loss"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'nn-module-5',
        courseId: 'neural-networks-course',
        order: 5,
        title: 'MODULE 5 — Optimizers (Stochastic Gradient Descent)',
        sections: [
            {
                title: "Updating Weights",
                content: "Optimizers define how to update the network weights using the gradients.\n\n- **SGD (Stochastic Gradient Descent)**: Updates weights using a small batch of data.\n- **Adam**: Adaptive learning rates, generally faster convergence.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import torch.optim as optim

model = nn.Linear(1, 1)
optimizer = optim.SGD(model.parameters(), lr=0.1)

# Training Step
optimizer.zero_grad()   # Clear previous gradients
# ... calculate loss ...
# loss.backward()     # Calculate new gradients
optimizer.step()        # Update weights

print("Optimizer step completed.")`,
        output: `Optimizer step completed.`,
        mcqs: [
            {
                question: "What does the Learning Rate (lr) control?",
                options: ["Number of layers", "Step size of weight update", "Batch size", "Activation threshold"],
                correctAnswer: 1
            },
            {
                question: "Which optimizer is known for adaptive learning rates?",
                options: ["SGD", "Adam", "Momentum", "Vanilla GD"],
                correctAnswer: 1
            },
            {
                question: "What does SGD stand for?",
                options: ["Standard Gradient Descent", "Stochastic Gradient Descent", "Simple Gradient Descent", "Static Gradient Descent"],
                correctAnswer: 1
            },
            {
                question: "If the learning rate is too high, what might happen?",
                options: ["Slow convergence", "The model overshoots the minimum", "Training stops immediately", "Accuracy increases"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'nn-module-6',
        courseId: 'neural-networks-course',
        order: 6,
        title: 'MODULE 6 — Regularization (Dropout)',
        sections: [
            {
                title: "Preventing Overfitting",
                content: "Overfitting happens when a model memorizes training data but fails on new data.\n**Dropout** is a technique where randomly selected neurons are ignored during training. This forces the network to learn robust features.",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `m = nn.Dropout(p=0.5)
input_tensor = torch.randn(1, 5)
output = m(input_tensor)

print("Input:", input_tensor)
print("Output:", output)`,
        output: `Input: tensor([[-0.12, 1.45, -0.67, 0.92, -2.10]])
Output: tensor([[-0.24, 0.00, -0.00, 1.84, -4.20]])
(Note: Some values become 0, others are scaled up)`,
        mcqs: [
            {
                question: "What happens to a neuron during Dropout?",
                options: ["It is deleted forever", "Its output is set to 0 temporarily", "Its weight becomes infinite", "It becomes an input layer"],
                correctAnswer: 1
            },
            {
                question: "Regularization helps to:",
                options: ["Increase training error", "Decrease training speed", "Reduce overfitting", "Increase model size"],
                correctAnswer: 2
            },
            {
                question: "What is the main goal of regularization?",
                options: ["To increase model complexity", "To prevent overfitting", "To speed up data loading", "To reduce the number of layers"],
                correctAnswer: 1
            },
            {
                question: "In Dropout with p=0.5, what is the probability of a neuron being kept?",
                options: ["10%", "50%", "100%", "0%"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'nn-module-7',
        courseId: 'neural-networks-course',
        order: 7,
        title: 'MODULE 7 — Convolutional Neural Networks (CNNs)',
        sections: [
            {
                title: "Processing Images",
                content: "CNNs are specialized for grid-like data (images).\n\n**Convolution Layer**: Slides a filter (kernel) over the image to extract features like edges, textures, and shapes.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Pooling Layer",
                content: "Pooling reduces the spatial size of the representation. Max Pooling takes the maximum value in a window.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `conv = nn.Conv2d(in_channels=1, out_channels=1, kernel_size=3)
input_img = torch.randn(1, 1, 5, 5) # Batch, Channel, H, W
out = conv(input_img)

print("Input Shape:", input_img.shape)
print("Output Shape:", out.shape)`,
        output: `Input Shape: torch.Size([1, 1, 5, 5])
Output Shape: torch.Size([1, 1, 3, 3])`,
        mcqs: [
            {
                question: "What operation reduces the image size in a CNN?",
                options: ["Convolution (same padding)", "Pooling", "Activation", "Standardization"],
                correctAnswer: 1
            },
            {
                question: "What does the kernel do?",
                options: ["Extracts features", "Deletes pixels", "Colors the image", "Rotates data"],
                correctAnswer: 0
            },
            {
                question: "CNNs are primarily used for which type of data?",
                options: ["Text data", "Image data", "Time series data", "Tabular data"],
                correctAnswer: 1
            },
            {
                question: "What does 'stride' refer to in CNNs?",
                options: ["The number of filters", "The step size of the filter moving across the image", "The size of the pooling window", "The learning rate"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'nn-module-8',
        courseId: 'neural-networks-course',
        order: 8,
        title: 'MODULE 8 — Recurrent Neural Networks (RNNs)',
        sections: [
            {
                title: "Handling Sequences",
                content: "FNNs cannot remember previous inputs. RNNs have a 'memory' loop, making them suitable for sequential data like text, time series, and audio.",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `rnn = nn.RNN(input_size=10, hidden_size=20, batch_first=True)
input_seq = torch.randn(1, 5, 10) # Batch, Seq, Features
output, hn = rnn(input_seq)

print("Output Shape:", output.shape)
print("Hidden State Shape:", hn.shape)`,
        output: `Output Shape: torch.Size([1, 5, 20])
Hidden State Shape: torch.Size([1, 1, 20])`,
        mcqs: [
            {
                question: "RNNs are best suited for:",
                options: ["Image Classification", "Sequential Data", "Tabular Data", "Unsupervised Clustering"],
                correctAnswer: 1
            },
            {
                question: "What problem do basic RNNs suffer from?",
                options: ["Vanishing Gradient", "Too much memory", "Slow output", "Lack of bias"],
                correctAnswer: 0
            },
            {
                question: "What gives RNNs their 'memory'?",
                options: ["Hidden state", "Kernel", "Pooling layer", "Activation function"],
                correctAnswer: 0
            },
            {
                question: "Which task is suitable for an RNN?",
                options: ["Image segmentation", "Speech recognition", "House price prediction", "Outlier detection"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'nn-module-9',
        courseId: 'neural-networks-course',
        order: 9,
        title: 'MODULE 9 — LSTMs & GRUs',
        sections: [
            {
                title: "Long Short-Term Memory",
                content: "LSTMs are an improvement over RNNs. They use gates (Input, Forget, Output) to control information flow, allowing them to learn long-term dependencies.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `lstm = nn.LSTM(input_size=10, hidden_size=20, batch_first=True)
input_seq = torch.randn(1, 5, 10)
output, (hn, cn) = lstm(input_seq)

print("LSTM Output Shape:", output.shape)
print("Cell State Shape:", cn.shape)`,
        output: `LSTM Output Shape: torch.Size([1, 5, 20])
Cell State Shape: torch.Size([1, 1, 20])`,
        mcqs: [
            {
                question: "What is the key component of an LSTM?",
                options: ["Filters", "Gates", "Pooling", "Trees"],
                correctAnswer: 1
            },
            {
                question: "Which gate decides what information to discard?",
                options: ["Input Gate", "Output Gate", "Forget Gate", "Memory Gate"],
                correctAnswer: 2
            },
            {
                question: "What does LSTM stand for?",
                options: ["Long Short-Term Memory", "Last State Time Memory", "Linear Standard Time Model", "Logic State Transfer Model"],
                correctAnswer: 0
            },
            {
                question: "How do LSTMs address the vanishing gradient problem?",
                options: ["Using gating mechanisms", "Removing layers", "Using only ReLU", "Increasing learning rate"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 'nn-module-10',
        courseId: 'neural-networks-course',
        order: 10,
        title: 'MODULE 10 — Transformers & Attention',
        sections: [
            {
                title: "The Transformer Architecture",
                content: "Transformers have revolutionized NLP. They use 'Self-Attention' to weigh the importance of different words in a sentence, regardless of their position. This powers models like BERT and GPT.",
                image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `# Simplified Self-Attention Concept
import torch.nn.functional as F

query = torch.randn(1, 5, 8) # Batch, Seq, Dim
key   = torch.randn(1, 5, 8)
value = torch.randn(1, 5, 8)

# Attention Scores
scores = torch.bmm(query, key.transpose(1, 2))
weights = F.softmax(scores, dim=-1)

# Weighted Sum
context = torch.bmm(weights, value)
print("Context Shape:", context.shape)`,
        output: `Context Shape: torch.Size([1, 5, 8])`,
        mcqs: [
            {
                question: "Transformers rely heavily on which mechanism?",
                options: ["Recurrence", "Convolution", "Self-Attention", "Pooling"],
                correctAnswer: 2
            },
            {
                question: "Do Transformers process data sequentially like RNNs?",
                options: ["Yes", "No, they process in parallel", "Only for output", "Only for input"],
                correctAnswer: 1
            },
            {
                question: "What allows Transformers to process words in parallel?",
                options: ["Self-Attention", "Recurrence", "Filters", "Pooling"],
                correctAnswer: 0
            },
            {
                question: "Which famous model is based on the Transformer architecture?",
                options: ["VGG16", "YOLO", "BERT", "K-Means"],
                correctAnswer: 2
            }
        ]
    }
    ,
    {
        id: 'nn-module-11',
        courseId: 'neural-networks-course',
        order: 11,
        title: 'MODULE 11 — Generative Adversarial Networks (GANs)',
        sections: [
            {
                title: "Generator vs Discriminator",
                content: "GANs consist of two networks competing against each other: a Generator that creates fake data, and a Discriminator that tries to distinguish real from fake.",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import torch.nn as nn

# Simple Generator
generator = nn.Sequential(
    nn.Linear(10, 50),
    nn.ReLU(),
    nn.Linear(50, 1)
)

# Simple Discriminator
discriminator = nn.Sequential(
    nn.Linear(1, 50),
    nn.ReLU(),
    nn.Linear(50, 1),
    nn.Sigmoid()
)`,
        output: `(Generator and Discriminator models defined)`,
        mcqs: [
            {
                question: "What is the goal of the Generator?",
                options: ["To classify images", "To fool the Discriminator", "To minimize loss", "To sort data"],
                correctAnswer: 1
            },
            {
                question: "What is the goal of the Discriminator?",
                options: ["To generate images", "To distinguish real vs fake", "To compress data", "To optimize weights"],
                correctAnswer: 1
            },
            {
                question: "What does GAN stand for?",
                options: ["General AI Network", "Generative Adversarial Network", "Gradient Analysis Node", "Generic Algorithm Net"],
                correctAnswer: 1
            },
            {
                question: "The training process in GANs can be described as a:",
                options: ["Cooperative Game", "Min-Max Game (Zero-sum)", "Linear Optimization", "Clustering process"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'nn-module-12',
        courseId: 'neural-networks-course',
        order: 12,
        title: 'MODULE 12 — Transfer Learning',
        sections: [
            {
                title: "Using Pre-trained Models",
                content: "Transfer learning involves taking a model trained on a large dataset (like ImageNet) and fine-tuning it for a specific task. This saves time and computational resources.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
        ],
        code: `import torchvision.models as models
import torch.nn as nn

# Load pre-trained ResNet
resnet = models.resnet18(pretrained=True)

# Freeze weights
for param in resnet.parameters():
    param.requires_grad = False

# Replace last layer
resnet.fc = nn.Linear(resnet.fc.in_features, 2) # 2 classes`,
        output: `(ResNet model loaded and modified)`,
        mcqs: [
            {
                question: "What is the main benefit of Transfer Learning?",
                options: ["It requires more data", "It is slower", "It leverages pre-learned features", "It is only for text"],
                correctAnswer: 2
            },
            {
                question: "What does 'freezing' weights mean?",
                options: ["Setting them to 0", "Preventing them from updating during training", "Making them negative", "Deleting them"],
                correctAnswer: 1
            },
            {
                question: "Why do we freeze early layers in Transfer Learning?",
                options: ["To make the model smaller", "To preserve learned low-level features", "To increase training time", "To reset the model"],
                correctAnswer: 1
            },
            {
                question: "ImageNet is a famous:",
                options: ["Neural Network", "Dataset of labeled images", "Optimizer", "Activation Function"],
                correctAnswer: 1
            }
        ]
    }
];
