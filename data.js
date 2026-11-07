window.STUDY_DATA = [
  {
    "id": "DL",
    "title": "Deep Learning: 15 Questions per Unit with Simple Notes",
    "units": [
      {
        "title": "UNIT I: Fundamentals of Deep Learning",
        "questions": [
          {
            "number": 1,
            "question": "What is Artificial Intelligence?",
            "answer": "AI is the field of making machines perform tasks that normally need human intelligence, such as reasoning, learning, and decision-making.",
            "example": "A chess program that chooses its next move."
          },
          {
            "number": 2,
            "question": "What is Machine Learning?",
            "answer": "Machine Learning is a part of AI where a computer learns patterns from data instead of being given fixed rules.",
            "example": "A spam filter that learns from emails marked as spam or not spam."
          },
          {
            "number": 3,
            "question": "What is Deep Learning?",
            "answer": "Deep Learning is a part of Machine Learning that uses neural networks with many layers to learn features automatically from raw data.",
            "example": "Face unlock on a phone."
          },
          {
            "number": 4,
            "question": "What is Probabilistic Modeling?",
            "answer": "It uses probability to represent uncertainty and make predictions.",
            "example": "A Naive Bayes spam filter that estimates the probability that an email is spam based on its words."
          },
          {
            "number": 5,
            "question": "What are Kernel Methods?",
            "answer": "Kernel methods (like Support Vector Machines) map data into a higher-dimensional space so that a straight dividing line can separate patterns that were not separable before.",
            "example": "Separating red and blue dots arranged in concentric circles."
          },
          {
            "number": 6,
            "question": "What is a Decision Tree?",
            "answer": "A decision tree is a model that splits data step by step using feature conditions until it reaches a final answer.",
            "example": "Deciding whether to play tennis by checking \"Is it sunny?\" and \"Is the humidity high?\""
          },
          {
            "number": 7,
            "question": "What is the difference between Random Forest and Gradient Boosting?",
            "answer": "A Random Forest builds many trees independently on random samples and combines their votes. Gradient Boosting builds trees one after another, where each new tree corrects the errors of the previous ones.",
            "example": "Predicting house prices."
          },
          {
            "number": 8,
            "question": "What are the four branches of Machine Learning?",
            "answer": "They are supervised learning (learning from labeled data), unsupervised learning (finding patterns in unlabeled data), self-supervised learning (creating labels from the data itself), and reinforcement learning (learning from rewards and penalties).",
            "example": "Email classification, customer grouping, predicting a masked word in a sentence, and game playing."
          },
          {
            "number": 9,
            "question": "What is Overfitting?",
            "answer": "Overfitting happens when a model memorizes the training data, including its noise, so it performs well on training data but poorly on new data.",
            "example": "A student who memorizes old question papers but fails when the questions change."
          },
          {
            "number": 10,
            "question": "What is Underfitting?",
            "answer": "Underfitting happens when a model is too simple to capture the patterns in the data, so it performs poorly on both training and new data.",
            "example": "Fitting a straight line to clearly curved data."
          },
          {
            "number": 11,
            "question": "How do you evaluate a Machine Learning model?",
            "answer": "The data is split into training, validation, and test sets, and the model is judged on unseen test data using metrics like accuracy, precision, recall, and F1-score.",
            "example": "A model that gets 90% correct answers on the test set."
          },
          {
            "number": 12,
            "question": "What is the difference between a parameter and a hyperparameter?",
            "answer": "Parameters (like weights) are learned from data during training, while hyperparameters (like learning rate or tree depth) are set by the person before training.",
            "example": "The learning rate is a hyperparameter, and the weights it helps tune are parameters."
          },
          {
            "number": 13,
            "question": "What is a Training Set, Validation Set, and Test Set?",
            "answer": "The training set is used to fit the model, the validation set is used to tune its settings, and the test set is used once at the end to measure final performance.",
            "example": "Splitting 1000 images into 700 for training, 150 for validation, and 150 for testing."
          },
          {
            "number": 14,
            "question": "What is Cross-Validation?",
            "answer": "Cross-validation splits the data into several folds and trains the model multiple times, using a different fold for testing each time, to get a more reliable performance estimate.",
            "example": "5-fold cross-validation on 500 samples."
          },
          {
            "number": 15,
            "question": "What is Regularization?",
            "answer": "Regularization adds a penalty for complex models to reduce overfitting.",
            "example": "L2 regularization shrinks large weights so the model does not depend too heavily on any one feature."
          }
        ]
      },
      {
        "title": "UNIT II: Introducing Deep Learning",
        "questions": [
          {
            "number": 1,
            "question": "How does biological vision relate to machine vision?",
            "answer": "The human visual system processes images in layers, from simple edges to complex objects. Convolutional neural networks copy this layered idea.",
            "example": "Edges are detected first, then shapes, then whole objects like a face."
          },
          {
            "number": 2,
            "question": "How do humans and machines handle language differently?",
            "answer": "Humans understand language through meaning and context, while machines convert words into numbers (vectors) so they can process them.",
            "example": "The words \"king\" and \"queen\" are stored as nearby number vectors."
          },
          {
            "number": 3,
            "question": "What is an Artificial Neuron?",
            "answer": "An artificial neuron takes inputs, multiplies each by a weight, adds a bias, and passes the result through an activation function.",
            "example": "Output = f(w₁x₁ + w₂x₂ + b)."
          },
          {
            "number": 4,
            "question": "What is an Activation Function?",
            "answer": "An activation function adds non-linearity so the network can learn complex patterns. Common ones are ReLU, Sigmoid, and Tanh.",
            "example": "ReLU(x) = max(0, x), so ReLU(−3) = 0 and ReLU(4) = 4."
          },
          {
            "number": 5,
            "question": "What is an Artificial Neural Network?",
            "answer": "It is a network of connected neurons arranged in an input layer, one or more hidden layers, and an output layer.",
            "example": "A network that reads 28×28 pixel images and outputs a digit from 0 to 9."
          },
          {
            "number": 6,
            "question": "What is a Loss Function?",
            "answer": "A loss function measures how far the network's prediction is from the correct answer.",
            "example": "Mean Squared Error for regression and Cross-Entropy for classification."
          },
          {
            "number": 7,
            "question": "What is Gradient Descent?",
            "answer": "Gradient descent updates the weights step by step in the direction that reduces the loss.",
            "example": "Walking downhill to reach the lowest point of a valley."
          },
          {
            "number": 8,
            "question": "What is Backpropagation?",
            "answer": "Backpropagation calculates how much each weight contributed to the error by moving the error backward through the network, and then updates the weights.",
            "example": "If the output is too high, the weights that pushed it up are reduced."
          },
          {
            "number": 9,
            "question": "What is the Vanishing Gradient Problem?",
            "answer": "In very deep networks, gradients become extremely small as they pass backward, so early layers learn very slowly. It is reduced by using ReLU and Batch Normalization.",
            "example": "Repeatedly multiplying 0.1 by itself across many layers gives a tiny number."
          },
          {
            "number": 10,
            "question": "How can Deep Networks be improved?",
            "answer": "Common methods include Dropout, Batch Normalization, regularization, better optimizers like Adam, and tuning the learning rate.",
            "example": "Dropout randomly switches off some neurons during training so the network does not depend on any single neuron."
          },
          {
            "number": 11,
            "question": "What is a Learning Rate?",
            "answer": "The learning rate controls how big each weight update is during gradient descent. Too large and training becomes unstable; too small and training becomes very slow.",
            "example": "A learning rate of 0.01 takes smaller steps than 0.5."
          },
          {
            "number": 12,
            "question": "What is Batch Normalization?",
            "answer": "Batch Normalization normalizes the inputs of a layer across each mini-batch, which stabilizes and speeds up training.",
            "example": "Keeping layer outputs around mean 0 and variance 1 during training."
          },
          {
            "number": 13,
            "question": "What is Dropout?",
            "answer": "Dropout randomly turns off a fraction of neurons during each training step to prevent overfitting.",
            "example": "With dropout rate 0.5, half the neurons are switched off in each step."
          },
          {
            "number": 14,
            "question": "What is an Optimizer?",
            "answer": "An optimizer is the algorithm that updates the weights to reduce the loss, such as SGD or Adam.",
            "example": "Adam adapts the learning rate for each weight automatically."
          },
          {
            "number": 15,
            "question": "What is a Hidden Layer?",
            "answer": "A hidden layer is a layer between the input and output layers that learns intermediate features.",
            "example": "In a digit classifier, a hidden layer may learn to detect curves and strokes."
          }
        ]
      },
      {
        "title": "UNIT III: Neural Networks and Keras",
        "questions": [
          {
            "number": 1,
            "question": "What is the Anatomy of a Neural Network?",
            "answer": "A neural network has layers, weights and biases, an activation function, a loss function, and an optimizer.",
            "example": "A three-layer network for classifying handwritten digits."
          },
          {
            "number": 2,
            "question": "What is Keras?",
            "answer": "Keras is a high-level deep learning API that makes it easy to build and train models with only a few lines of code.",
            "example": "`model = Sequential()` followed by `model.add(Dense(64, activation='relu'))`."
          },
          {
            "number": 3,
            "question": "How are Keras, TensorFlow, Theano, and CNTK related?",
            "answer": "Keras is the user-friendly interface, while TensorFlow, Theano, and CNTK are backend engines that do the actual computation. TensorFlow is developed by Google, and Theano and CNTK are older backends that are no longer actively developed.",
            "example": "Keras running on a TensorFlow backend."
          },
          {
            "number": 4,
            "question": "What is needed to set up a Deep Learning Workstation?",
            "answer": "You need Python, a deep learning library like TensorFlow with Keras, and optionally a GPU with CUDA drivers for faster training.",
            "example": "Using Anaconda on a local PC, or Google Colab, which provides free GPUs online."
          },
          {
            "number": 5,
            "question": "What is Binary Classification?",
            "answer": "Binary classification predicts one of two classes, usually with a single output neuron using Sigmoid and binary cross-entropy loss.",
            "example": "Classifying IMDB movie reviews as positive or negative."
          },
          {
            "number": 6,
            "question": "What is Multiclass Classification?",
            "answer": "Multiclass classification predicts one class out of many, usually using a Softmax output layer and categorical cross-entropy loss.",
            "example": "Classifying Reuters newswires into 46 topics."
          },
          {
            "number": 7,
            "question": "What is the Softmax function?",
            "answer": "Softmax converts the output scores into probabilities that add up to 1.",
            "example": "Outputs [2.0, 1.0, 0.1] become roughly [0.66, 0.24, 0.10]."
          },
          {
            "number": 8,
            "question": "What is one-hot encoding?",
            "answer": "One-hot encoding converts a class label into a vector with a 1 at the correct class position and 0 elsewhere.",
            "example": "Class 2 out of 4 classes becomes [0, 0, 1, 0]."
          },
          {
            "number": 9,
            "question": "What are Epoch and Batch Size?",
            "answer": "An epoch is one full pass through the training data. Batch size is the number of samples used before the weights are updated.",
            "example": "1000 samples with batch size 100 means 10 weight updates per epoch."
          },
          {
            "number": 10,
            "question": "What does compiling a Keras model mean?",
            "answer": "Compiling sets the optimizer, loss function, and evaluation metrics before training.",
            "example": "`model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])`."
          },
          {
            "number": 11,
            "question": "What is the Dense layer in Keras?",
            "answer": "A Dense layer is a fully connected layer where every input neuron connects to every output neuron.",
            "example": "`Dense(10, activation='softmax')` for a 10-class output."
          },
          {
            "number": 12,
            "question": "What is the role of the model.fit() function?",
            "answer": "`model.fit()` trains the model on the training data for a given number of epochs and batch size.",
            "example": "`model.fit(x_train, y_train, epochs=10, batch_size=32)`."
          },
          {
            "number": 13,
            "question": "What is the IMDB dataset?",
            "answer": "The IMDB dataset contains 50,000 movie reviews labeled as positive or negative, commonly used for binary text classification.",
            "example": "Training a model to predict whether a review is good or bad."
          },
          {
            "number": 14,
            "question": "What is the Reuters dataset?",
            "answer": "The Reuters dataset contains short newswires labeled with one of 46 topics, commonly used for multiclass classification.",
            "example": "Predicting whether a news article is about \"grain\" or \"earnings.\""
          },
          {
            "number": 15,
            "question": "Why do we use a validation set while training?",
            "answer": "A validation set checks how well the model generalizes during training, so you can detect overfitting before using the test set.",
            "example": "Watching validation accuracy stop improving while training accuracy keeps rising."
          }
        ]
      },
      {
        "title": "UNIT IV: Convolutional Neural Networks, RNNs, and PyTorch",
        "questions": [
          {
            "number": 1,
            "question": "What is Representation Learning?",
            "answer": "Representation learning means the network automatically discovers useful features from raw data, instead of a human designing them.",
            "example": "A CNN learns to detect edges and textures in images without being told to."
          },
          {
            "number": 2,
            "question": "What is a Convolutional Layer?",
            "answer": "A convolutional layer slides small filters (kernels) across the input to detect local features.",
            "example": "A 3×3 filter that highlights vertical edges in an image."
          },
          {
            "number": 3,
            "question": "What is Multichannel Convolution?",
            "answer": "When the input has multiple channels, such as the red, green, and blue channels of an image, the filter has the same depth and its results are summed into one output feature map.",
            "example": "A 3×3×3 filter applied to an RGB image."
          },
          {
            "number": 4,
            "question": "What is Pooling?",
            "answer": "Pooling reduces the size of feature maps while keeping the most important information. Max pooling keeps the largest value in each window.",
            "example": "A 2×2 max pooling window that takes the maximum of four values."
          },
          {
            "number": 5,
            "question": "What is a Recurrent Neural Network (RNN)?",
            "answer": "An RNN is a network with loops that carries information from previous steps, which makes it suitable for sequences.",
            "example": "Predicting the next word in \"I am going to the ___.\""
          },
          {
            "number": 6,
            "question": "Why do RNNs struggle with long sequences?",
            "answer": "RNNs suffer from vanishing gradients, so they forget information from far back in the sequence. LSTM and GRU architectures were created to solve this.",
            "example": "Remembering the subject of a long sentence until the verb appears."
          },
          {
            "number": 7,
            "question": "What are PyTorch Tensors?",
            "answer": "Tensors are multi-dimensional arrays similar to NumPy arrays, but they can run on GPUs and support automatic differentiation.",
            "example": "`x = torch.tensor([1, 2, 3])`."
          },
          {
            "number": 8,
            "question": "How is a model built in PyTorch?",
            "answer": "A model is written as a class that inherits from `nn.Module`, defines layers in `__init__`, and defines the forward pass in `forward()`.",
            "example": "A class with `self.fc = nn.Linear(10, 1)` and a `forward` method that applies it."
          },
          {
            "number": 9,
            "question": "How is a CNN built in PyTorch?",
            "answer": "A CNN uses `nn.Conv2d` for convolution, `nn.MaxPool2d` for pooling, and `nn.Linear` for the final classification layer.",
            "example": "Conv → ReLU → MaxPool → Linear."
          },
          {
            "number": 10,
            "question": "What is the difference between CNN and RNN?",
            "answer": "CNNs are designed for spatial data like images and look at local patterns, while RNNs are designed for sequential data like text or time series and remember previous steps.",
            "example": "CNN for image classification, RNN for speech recognition."
          },
          {
            "number": 11,
            "question": "What is a Stride in a convolution?",
            "answer": "Stride is the number of pixels the filter moves at each step. A larger stride produces a smaller output.",
            "example": "A stride of 2 halves the width and height of the output roughly."
          },
          {
            "number": 12,
            "question": "What is Padding in a convolution?",
            "answer": "Padding adds extra border pixels around the input so the output keeps the same size or so edge pixels are not ignored.",
            "example": "Adding a 1-pixel border of zeros around a 5×5 image before a 3×3 convolution."
          },
          {
            "number": 13,
            "question": "What is an LSTM?",
            "answer": "An LSTM is a type of RNN that uses gates to decide what to remember, forget, and output, which helps it handle long sequences.",
            "example": "Remembering a character's name across a long story."
          },
          {
            "number": 14,
            "question": "What is the difference between torch.tensor and NumPy arrays?",
            "answer": "Both store multi-dimensional data, but torch tensors can be moved to a GPU and can track gradients for training.",
            "example": "`x.to('cuda')` moves a tensor to the GPU."
          },
          {
            "number": 15,
            "question": "What is the purpose of an Optimizer in PyTorch?",
            "answer": "The optimizer updates the model's parameters after each backward pass using the computed gradients.",
            "example": "`optimizer = torch.optim.Adam(model.parameters(), lr=0.001)`."
          }
        ]
      },
      {
        "title": "UNIT V: Interactive Applications and Deep Learning Research",
        "questions": [
          {
            "number": 1,
            "question": "What are the main applications of Machine Vision?",
            "answer": "Machine vision enables computers to interpret images, including object detection, face recognition, and medical image analysis.",
            "example": "Detecting tumors in X-ray images."
          },
          {
            "number": 2,
            "question": "What is Natural Language Processing (NLP)?",
            "answer": "NLP enables computers to understand, analyze, and generate human language.",
            "example": "Google Translate, sentiment analysis, and chatbots."
          },
          {
            "number": 3,
            "question": "What is a Generative Adversarial Network (GAN)?",
            "answer": "A GAN has two networks: a generator that creates fake data, and a discriminator that tries to tell real data from fake. They compete until the generator produces realistic output.",
            "example": "Generating realistic human faces that do not belong to any real person."
          },
          {
            "number": 4,
            "question": "What is Deep Reinforcement Learning?",
            "answer": "It combines deep neural networks with reinforcement learning, where an agent learns by trial and error to maximize rewards.",
            "example": "AlphaGo learning to play Go."
          },
          {
            "number": 5,
            "question": "What is an Autoencoder?",
            "answer": "An autoencoder has an encoder that compresses the input into a smaller code and a decoder that reconstructs the input from that code. It is used for compression, denoising, and dimensionality reduction.",
            "example": "Removing noise from a blurry image."
          },
          {
            "number": 6,
            "question": "What is a Deep Generative Model?",
            "answer": "A deep generative model learns the probability distribution of the training data so it can create new samples similar to it.",
            "example": "Generating new handwritten digits."
          },
          {
            "number": 7,
            "question": "What is a Boltzmann Machine?",
            "answer": "A Boltzmann Machine is a stochastic network of connected binary units that learns a probability distribution using an energy-based model.",
            "example": "Modeling patterns in binary data."
          },
          {
            "number": 8,
            "question": "What is a Restricted Boltzmann Machine (RBM)?",
            "answer": "An RBM is a Boltzmann Machine with no connections within the visible layer or within the hidden layer, which makes it faster to train using contrastive divergence.",
            "example": "Recommending movies based on user ratings."
          },
          {
            "number": 9,
            "question": "What is a Deep Belief Network (DBN)?",
            "answer": "A DBN is a stack of RBMs trained layer by layer, often used to pre-train deep networks.",
            "example": "Pre-training a deep network before fine-tuning it for classification."
          },
          {
            "number": 10,
            "question": "What is the Discriminator in a GAN?",
            "answer": "The discriminator is the network that classifies inputs as real (from the dataset) or fake (from the generator).",
            "example": "Outputting a probability near 1 for a real photo and near 0 for a fake one."
          },
          {
            "number": 11,
            "question": "What is the Generator in a GAN?",
            "answer": "The generator takes random noise as input and produces synthetic data that tries to fool the discriminator.",
            "example": "Turning random noise vectors into face-like images."
          },
          {
            "number": 12,
            "question": "What is Reward in Reinforcement Learning?",
            "answer": "A reward is the feedback signal an agent receives after an action, telling it how good that action was.",
            "example": "+1 for winning a game point and −1 for losing one."
          },
          {
            "number": 13,
            "question": "What is a Policy in Reinforcement Learning?",
            "answer": "A policy is the strategy the agent follows to choose actions in each state.",
            "example": "A game agent that always moves left when an obstacle is on the right."
          },
          {
            "number": 14,
            "question": "What is Contrastive Divergence?",
            "answer": "Contrastive divergence is a fast approximate training method used for RBMs. It adjusts weights based on the difference between data-driven and model-generated samples.",
            "example": "Running a few Gibbs sampling steps to train an RBM quickly."
          },
          {
            "number": 15,
            "question": "What is Unsupervised Pre-training?",
            "answer": "Unsupervised pre-training trains layers on unlabeled data first, so their weights start from useful values before supervised fine-tuning.",
            "example": "Training stacked RBMs before fine-tuning a DBN for classification."
          }
        ]
      }
    ]
  },
  {
    "id": "EMI",
    "title": "2-Mark Q&A: Electronic Measurements & Instrumentation",
    "units": [
      {
        "title": "UNIT I: Measuring Instruments & Digital Instruments",
        "questions": [
          {
            "number": 1,
            "question": "What is accuracy?",
            "answer": "Accuracy is how close a measured value is to the true value.",
            "example": "A meter reading 9.9 V when the true voltage is 10 V has high accuracy."
          },
          {
            "number": 2,
            "question": "What is precision?",
            "answer": "Precision is how close repeated measurements are to each other, regardless of the true value.",
            "example": "Readings of 9.8 V, 9.8 V, and 9.8 V are precise, even if the true value is 10 V."
          },
          {
            "number": 3,
            "question": "What is resolution?",
            "answer": "Resolution is the smallest change in the input that an instrument can detect and display.",
            "example": "A digital meter that shows 0.01 V steps has a resolution of 0.01 V."
          },
          {
            "number": 4,
            "question": "What are significant figures?",
            "answer": "Significant figures are the digits in a measured value that carry meaningful information, including the last uncertain digit.",
            "example": "The value 2.50 has three significant figures."
          },
          {
            "number": 5,
            "question": "What is an error in measurement?",
            "answer": "Error is the difference between the measured value and the true value.",
            "example": "If the true voltage is 100 V and the meter reads 98 V, the error is -2 V."
          },
          {
            "number": 6,
            "question": "What is the construction of a PMMC meter?",
            "answer": "A PMMC (Permanent Magnet Moving Coil) meter has a coil mounted on a pivot inside the field of a permanent magnet, with a pointer and a spring.",
            "example": "The basic D'Arsonval galvanometer is a PMMC meter."
          },
          {
            "number": 7,
            "question": "What is the working principle of a PMMC meter?",
            "answer": "Current through the coil produces a torque that deflects the pointer, and the spring provides a restoring torque. The deflection is proportional to the current.",
            "example": "If the current doubles, the pointer deflection roughly doubles."
          },
          {
            "number": 8,
            "question": "What is range extension?",
            "answer": "Range extension increases an instrument's measuring range by adding a shunt resistor for current or a multiplier resistor for voltage.",
            "example": "A 1 mA meter with a suitable shunt can be used to measure 10 A."
          },
          {
            "number": 9,
            "question": "What is a multirange voltmeter?",
            "answer": "A multirange voltmeter uses switchable series resistors to give several voltage ranges on one meter.",
            "example": "One meter with 0-10 V, 0-50 V, and 0-250 V ranges."
          },
          {
            "number": 10,
            "question": "What is a multimeter?",
            "answer": "A multimeter is an instrument that measures voltage, current, and resistance.",
            "example": "Use it to check a battery's voltage and test whether a fuse is continuous."
          },
          {
            "number": 11,
            "question": "What is a digital voltmeter (DVM)?",
            "answer": "A DVM measures voltage and shows the result as a numerical display.",
            "example": "A DVM displaying 5.02 V."
          },
          {
            "number": 12,
            "question": "What is a V-T type DVM?",
            "answer": "A V-T DVM converts the input voltage into a time interval, and a counter measures that interval to give a digital reading.",
            "example": "A 2 V input produces a longer ramp time than a 1 V input, and the counter shows the difference."
          },
          {
            "number": 13,
            "question": "What is a V-F type DVM?",
            "answer": "A V-F DVM converts the input voltage into a frequency, and a counter counts the pulses over a fixed time.",
            "example": "A 1 V input may produce 1000 pulses per second, which the counter displays as 1000 counts."
          },
          {
            "number": 14,
            "question": "What is a successive approximation DVM?",
            "answer": "It finds the digital value by testing bits one at a time, from the most significant to the least significant, using a DAC and a comparator.",
            "example": "An 8-bit successive approximation converter needs only 8 comparisons."
          },
          {
            "number": 15,
            "question": "What is a digital frequency meter?",
            "answer": "A digital frequency meter counts the cycles of a signal within a fixed gate time and displays the frequency.",
            "example": "Counting 5000 cycles in 1 second gives a reading of 5 kHz."
          }
        ]
      },
      {
        "title": "UNIT II: Oscilloscopes",
        "questions": [
          {
            "number": 1,
            "question": "What is a CRO?",
            "answer": "A CRO (Cathode Ray Oscilloscope) displays the waveform of an electrical signal on a screen.",
            "example": "Viewing the sine wave output of an audio amplifier."
          },
          {
            "number": 2,
            "question": "What are the main blocks of a CRO?",
            "answer": "The main blocks are the CRT, vertical amplifier, horizontal (time base) system, trigger circuit, and power supply.",
            "example": "The vertical amplifier boosts the input signal before it reaches the CRT's deflection plates."
          },
          {
            "number": 3,
            "question": "What is the basic principle of a CRT?",
            "answer": "An electron beam is emitted, accelerated, focused, and deflected onto a phosphor-coated screen, where it produces a glowing spot.",
            "example": "The spot traces a waveform as the beam moves across the screen."
          },
          {
            "number": 4,
            "question": "What is the construction of a CRT?",
            "answer": "A CRT has an electron gun, deflection plates, and a phosphor screen, all sealed inside a glass envelope.",
            "example": "The inner face of the screen is coated with phosphor that glows when struck by electrons."
          },
          {
            "number": 5,
            "question": "What is the role of the vertical amplifier?",
            "answer": "It amplifies the input signal so that it deflects the beam vertically by a visible amount.",
            "example": "A 10 mV signal is amplified so the trace is clearly visible on the screen."
          },
          {
            "number": 6,
            "question": "What is the horizontal deflection system?",
            "answer": "It moves the electron beam horizontally across the screen at a controlled rate, creating a time axis.",
            "example": "A setting of 1 ms/div makes each screen division represent 1 millisecond."
          },
          {
            "number": 7,
            "question": "What is sweep?",
            "answer": "Sweep is a linear ramp voltage that moves the beam across the screen at a constant speed.",
            "example": "A sawtooth voltage is commonly used to produce the sweep."
          },
          {
            "number": 8,
            "question": "What is a trigger pulse?",
            "answer": "A trigger pulse starts the sweep at the same point on each input cycle, which keeps the waveform stable on the screen.",
            "example": "The sweep starts at the zero-crossing of the signal."
          },
          {
            "number": 9,
            "question": "What is a delay line?",
            "answer": "A delay line delays the signal reaching the vertical plates so that the leading edge of the signal is visible.",
            "example": "It lets you see the start of a fast pulse that would otherwise be missed."
          },
          {
            "number": 10,
            "question": "What is a sync selector circuit?",
            "answer": "A sync selector chooses the source of the triggering signal, such as internal, line, or external.",
            "example": "Selecting \"internal\" triggers the sweep from the signal being observed."
          },
          {
            "number": 11,
            "question": "What is a dual beam CRO?",
            "answer": "A dual beam CRO uses two electron beams in one CRT to display two signals at the same time.",
            "example": "Comparing the input and output of an amplifier on the same screen."
          },
          {
            "number": 12,
            "question": "What is a dual trace CRO?",
            "answer": "A dual trace CRO uses one beam that is switched electronically between two signals to show two traces.",
            "example": "Displaying two signals in alternate or chopped mode."
          },
          {
            "number": 13,
            "question": "What is a sampling oscilloscope?",
            "answer": "A sampling oscilloscope takes samples of a repetitive signal at slightly delayed points and builds up the waveform from them.",
            "example": "Used to view very high-frequency signals in the GHz range."
          },
          {
            "number": 14,
            "question": "What is a digital storage oscilloscope?",
            "answer": "A digital storage oscilloscope stores the waveform in digital memory so it can be held, viewed, and analysed later.",
            "example": "Capturing a single glitch that would be hard to see on an ordinary CRO."
          },
          {
            "number": 15,
            "question": "What is a Lissajous figure?",
            "answer": "A Lissajous figure is the pattern produced when sine signals are applied to the X and Y inputs of a CRO, and it is used to compare frequencies.",
            "example": "A circle appears when the two frequencies are equal and the phase difference is 90°."
          }
        ]
      },
      {
        "title": "UNIT III: Bridges",
        "questions": [
          {
            "number": 1,
            "question": "What is a bridge circuit?",
            "answer": "A bridge circuit is a null-type circuit that balances two arms to find an unknown component, with zero reading on the detector at balance.",
            "example": "The Wheatstone bridge balances to find an unknown resistance."
          },
          {
            "number": 2,
            "question": "What is a Wheatstone bridge used for?",
            "answer": "It is used to measure medium-range resistance accurately.",
            "example": "Measuring the value of a 100 Ω resistor."
          },
          {
            "number": 3,
            "question": "What is the balance condition of a Wheatstone bridge?",
            "answer": "At balance, R1/R2 = R3/R4, so the unknown resistance is Rx = R2 × R3 / R1.",
            "example": "If R1 = R2 = 100 Ω and R3 = 50 Ω, then Rx = 50 Ω."
          },
          {
            "number": 4,
            "question": "What is a Kelvin bridge used for?",
            "answer": "A Kelvin bridge measures very low resistances (below about 1 Ω) accurately by eliminating lead and contact resistance.",
            "example": "Measuring the resistance of a current shunt."
          },
          {
            "number": 5,
            "question": "What is a Maxwell's bridge used for?",
            "answer": "Maxwell's bridge measures an unknown inductance by comparing it with a known capacitance.",
            "example": "Measuring the inductance of a coil with a low Q factor."
          },
          {
            "number": 6,
            "question": "What is a Hay's bridge used for?",
            "answer": "Hay's bridge measures inductance of coils with a high Q factor (above about 10).",
            "example": "Measuring a high-quality RF coil."
          },
          {
            "number": 7,
            "question": "What is an Anderson bridge used for?",
            "answer": "Anderson's bridge measures self-inductance accurately by comparing it with a standard capacitor and resistors.",
            "example": "Finding the self-inductance of a laboratory standard coil."
          },
          {
            "number": 8,
            "question": "What is a Schering bridge used for?",
            "answer": "A Schering bridge measures capacitance and the dielectric loss of insulating materials.",
            "example": "Testing the insulation of a power cable."
          },
          {
            "number": 9,
            "question": "What is a Wien bridge used for?",
            "answer": "A Wien bridge measures capacitance and frequency, and it is also used in oscillator circuits.",
            "example": "The Wien bridge oscillator produces sine waves in the audio range."
          },
          {
            "number": 10,
            "question": "What are the source and detector in a bridge?",
            "answer": "A DC bridge uses a DC source, and an AC bridge uses an AC source. The detector is usually a galvanometer for DC, and headphones or a CRO for AC.",
            "example": "An AC bridge with headphones as detector gives a sound minimum at balance."
          },
          {
            "number": 11,
            "question": "What are the common errors in bridge measurements?",
            "answer": "Common errors include lead resistance, stray capacitance, temperature changes, and detector sensitivity.",
            "example": "Long test leads add extra resistance to a Wheatstone bridge reading."
          },
          {
            "number": 12,
            "question": "What precautions should be taken while using bridges?",
            "answer": "Use the correct source and detector, keep the source switched off when not balancing, use short leads, and shield the circuit from stray fields.",
            "example": "Switching off the battery prevents the bridge resistors from heating and changing value."
          },
          {
            "number": 13,
            "question": "Why is balancing an AC bridge more difficult than a DC bridge?",
            "answer": "An AC bridge must balance both magnitude and phase, so two adjustments are usually needed.",
            "example": "Balancing a Maxwell's bridge requires adjusting both a resistor and a variable element."
          },
          {
            "number": 14,
            "question": "Why is the Kelvin bridge preferred for low resistance?",
            "answer": "It uses a four-terminal connection that separates current and voltage leads, removing the effect of lead resistance.",
            "example": "A low-value resistor is measured accurately with the four terminals."
          },
          {
            "number": 15,
            "question": "What is the main advantage of bridge methods?",
            "answer": "Bridges give high accuracy because they measure at a null point, so the result does not depend on the exact source voltage.",
            "example": "A small change in battery voltage does not change the balance point."
          }
        ]
      },
      {
        "title": "UNIT IV: Signal Generators",
        "questions": [
          {
            "number": 1,
            "question": "What is a signal generator?",
            "answer": "A signal generator is an instrument that produces test signals of known frequency, amplitude, and waveform.",
            "example": "Feeding a sine wave into an amplifier to test its response."
          },
          {
            "number": 2,
            "question": "What is a fixed AF oscillator?",
            "answer": "A fixed AF oscillator produces one fixed audio frequency.",
            "example": "A 1 kHz test tone used for calibration."
          },
          {
            "number": 3,
            "question": "What is a variable AF oscillator?",
            "answer": "A variable AF oscillator produces audio frequencies that can be adjusted over a range.",
            "example": "An RC oscillator with a variable resistor to change its frequency."
          },
          {
            "number": 4,
            "question": "What is a standard signal generator?",
            "answer": "A standard signal generator produces an RF signal with accurately known frequency and output level, controlled by an attenuator.",
            "example": "Testing the sensitivity of a radio receiver."
          },
          {
            "number": 5,
            "question": "What is a laboratory type signal generator?",
            "answer": "It is a general-purpose generator that provides sine, square, and triangle outputs over a wide frequency range.",
            "example": "Used in college labs for many experiments."
          },
          {
            "number": 6,
            "question": "What is an AF sine wave generator?",
            "answer": "It produces a sine wave in the audio range, usually using an RC or Wien bridge oscillator.",
            "example": "A 20 Hz to 20 kHz sine wave used to test audio equipment."
          },
          {
            "number": 7,
            "question": "What is a square wave generator?",
            "answer": "It produces a square wave, often using a multivibrator or a Schmitt trigger.",
            "example": "Generating a clock signal to test digital circuits."
          },
          {
            "number": 8,
            "question": "What is a function generator?",
            "answer": "A function generator produces sine, square, and triangle waveforms from a single unit.",
            "example": "Testing a filter's response with different waveforms."
          },
          {
            "number": 9,
            "question": "What is a pulse generator?",
            "answer": "A pulse generator produces pulses with adjustable width, period, and rise time.",
            "example": "Creating a 10 µs pulse to test a digital counter."
          },
          {
            "number": 10,
            "question": "What is a sweep frequency generator?",
            "answer": "A sweep frequency generator changes its output frequency linearly over a range. It is used with a CRO to view frequency response.",
            "example": "Plotting the frequency response of an amplifier on the screen."
          },
          {
            "number": 11,
            "question": "What is the difference between a square wave and a pulse generator?",
            "answer": "A square wave has a 50% duty cycle, while a pulse generator allows the duty cycle to be adjusted.",
            "example": "A pulse with a 10% duty cycle is not a square wave."
          },
          {
            "number": 12,
            "question": "What is the function of an attenuator in a signal generator?",
            "answer": "An attenuator reduces the output amplitude in calibrated steps, usually in decibels.",
            "example": "A -20 dB step reduces the output to one-tenth of its amplitude."
          },
          {
            "number": 13,
            "question": "Why is waveform purity important in a signal generator?",
            "answer": "Distortion or harmonics in the output can give wrong test results.",
            "example": "A sine wave with strong harmonics can make an amplifier look less linear than it is."
          },
          {
            "number": 14,
            "question": "What is a triangle wave generator?",
            "answer": "A triangle wave generator produces a signal that rises and falls linearly.",
            "example": "A triangle wave is often used as a sweep signal."
          },
          {
            "number": 15,
            "question": "What is the use of a signal generator in the laboratory?",
            "answer": "It provides a known input to a circuit so that the circuit can be tested, measured, and calibrated.",
            "example": "Injecting a known signal into a radio IF stage to check its gain."
          }
        ]
      }
    ]
  },
  {
    "id": "HR",
    "title": "2-Mark Q&A: HRM, HRD, Project Management & Project Implementation",
    "units": [
      {
        "title": "UNIT I: HRM",
        "questions": [
          {
            "number": 1,
            "question": "What is HRM?",
            "answer": "HRM is the management of people in an organization. It covers hiring, training, appraising, rewarding, and retaining employees.",
            "example": "A company hires, trains, and pays its staff through an HR department."
          },
          {
            "number": 2,
            "question": "What is the nature of HRM?",
            "answer": "HRM is people-centred, continuous, pervasive across the organization, and strategic. It aims to meet both employee needs and organizational goals.",
            "example": "Good working conditions keep employees motivated and productive."
          },
          {
            "number": 3,
            "question": "What is the scope of HRM?",
            "answer": "The scope includes HR planning, recruitment, selection, training, compensation, welfare, and industrial relations.",
            "example": "A company's HR team handles salary and leave policies along with hiring."
          },
          {
            "number": 4,
            "question": "What are the functions of HRM?",
            "answer": "The managerial functions are planning, organizing, directing, and controlling. The operative functions are procurement, development, compensation, integration, and maintenance.",
            "example": "Hiring new staff is a procurement function; paying salaries is a compensation function."
          },
          {
            "number": 5,
            "question": "What is the role of an HR manager?",
            "answer": "An HR manager acts as an advisor, administrator, change agent, and employee champion.",
            "example": "An HR manager designs a new leave policy and explains it to employees."
          },
          {
            "number": 6,
            "question": "What are the emerging trends in HRM?",
            "answer": "Current trends include remote work, AI-based recruitment, employer branding, diversity and inclusion, and the gig workforce.",
            "example": "Many companies now use online video interviews to hire candidates in other cities."
          },
          {
            "number": 7,
            "question": "What is E-HRM?",
            "answer": "E-HRM is the use of internet and IT tools to perform HR functions.",
            "example": "Employees check payslips and apply for leave through an online self-service portal."
          },
          {
            "number": 8,
            "question": "What is an HR audit?",
            "answer": "An HR audit is a systematic review of HR policies, practices, and records to check their effectiveness.",
            "example": "Auditing the recruitment process to see whether hiring takes too long."
          },
          {
            "number": 9,
            "question": "What are the ethical aspects of HRM?",
            "answer": "Ethical HRM ensures fairness, non-discrimination, honest appraisals, and privacy of employee data.",
            "example": "Promotions are based on merit, not favouritism."
          },
          {
            "number": 10,
            "question": "What is HR planning and demand forecasting?",
            "answer": "HR planning is forecasting future manpower needs and matching them with the available workforce. Demand forecasting estimates how many employees, with what skills, the organization will need.",
            "example": "If sales are expected to grow 20%, the company may need about 20% more staff."
          },
          {
            "number": 11,
            "question": "What is supply forecasting of HR?",
            "answer": "Supply forecasting estimates the number of employees available internally and externally, after accounting for retirements, resignations, and promotions.",
            "example": "If 10 employees are retiring next year, the supply of staff drops by 10."
          },
          {
            "number": 12,
            "question": "What is job design?",
            "answer": "Job design is deciding the tasks, duties, and responsibilities that make up a job.",
            "example": "A customer-support job may combine answering calls, handling complaints, and updating records."
          },
          {
            "number": 13,
            "question": "What is recruitment?",
            "answer": "Recruitment is the process of attracting a pool of suitable candidates for a job.",
            "example": "Posting a job advertisement on a job portal."
          },
          {
            "number": 14,
            "question": "What are the sources of recruitment?",
            "answer": "Internal sources include promotions and transfers. External sources include campus placements, advertisements, employment agencies, and employee referrals.",
            "example": "A company promotes a senior clerk to supervisor (internal) or hires a fresh graduate from a campus drive (external)."
          },
          {
            "number": 15,
            "question": "What is selection and what is the selection procedure?",
            "answer": "Selection is choosing the best candidate from the applicants. The usual steps are application screening, written test, interview, medical examination, reference check, and appointment.",
            "example": "A candidate who passes the written test and interview receives an offer letter."
          }
        ]
      },
      {
        "title": "UNIT II: HRD, Training, Appraisal & Counselling",
        "questions": [
          {
            "number": 1,
            "question": "What is HRD?",
            "answer": "HRD is the process of developing employees' skills, knowledge, and attitudes for both personal and organizational growth.",
            "example": "A leadership development program for future managers."
          },
          {
            "number": 2,
            "question": "What is HR accounting?",
            "answer": "HR accounting measures the value of employees, or the cost of hiring and training them, in financial terms.",
            "example": "Treating the cost of a training program as an investment rather than an expense."
          },
          {
            "number": 3,
            "question": "What are the models of HRD?",
            "answer": "Common HRD models include the training model (focuses on job skills), the development model (focuses on long-term growth), and the organization development model (focuses on change and culture).",
            "example": "A short skills course is a training model activity; a multi-year leadership track is a development model activity."
          },
          {
            "number": 4,
            "question": "What are the objectives of HRD?",
            "answer": "The objectives are to improve employee skills, build capabilities for future roles, improve job satisfaction, and support organizational goals.",
            "example": "A company runs a skills program so its staff can handle new software in the next year."
          },
          {
            "number": 5,
            "question": "What is training?",
            "answer": "Training teaches employees specific skills needed to perform their current job better.",
            "example": "Safety training for factory workers."
          },
          {
            "number": 6,
            "question": "What is development?",
            "answer": "Development is a broader, long-term process that prepares employees for future roles and responsibilities.",
            "example": "A management development program that prepares a team lead to become a manager."
          },
          {
            "number": 7,
            "question": "What is the difference between training and development?",
            "answer": "Training is short-term and job-specific. Development is long-term and broader in scope.",
            "example": "Learning a new software tool is training; preparing for a managerial role is development."
          },
          {
            "number": 8,
            "question": "What is the importance of training?",
            "answer": "Training improves productivity, reduces errors and accidents, prepares employees for change, and raises job satisfaction.",
            "example": "After a safety training session, a factory sees fewer workplace accidents."
          },
          {
            "number": 9,
            "question": "What are the methods of training?",
            "answer": "On-the-job methods include coaching, job rotation, and apprenticeship. Off-the-job methods include lectures, simulation, case studies, role play, and e-learning.",
            "example": "A new employee learns machine operation by shadowing a senior worker (on-the-job)."
          },
          {
            "number": 10,
            "question": "What is performance appraisal?",
            "answer": "Performance appraisal is the systematic evaluation of an employee's work performance against set standards.",
            "example": "A manager reviews an employee's sales targets at the end of the year."
          },
          {
            "number": 11,
            "question": "What is the importance of performance appraisal?",
            "answer": "It helps in deciding promotions, salary increases, and training needs, and it gives employees feedback on their work.",
            "example": "An employee who consistently exceeds targets may be considered for promotion."
          },
          {
            "number": 12,
            "question": "What are the methods of performance appraisal?",
            "answer": "Common methods include the graphic rating scale, essay method, critical incident method, management by objectives (MBO), and 360-degree appraisal.",
            "example": "In MBO, the employee and manager agree on goals, and performance is measured against them."
          },
          {
            "number": 13,
            "question": "What is career development?",
            "answer": "Career development is the planned growth of an employee's career through training, promotions, and new assignments.",
            "example": "A software engineer moves from developer to team lead to project manager over several years."
          },
          {
            "number": 14,
            "question": "What is counselling in HRM?",
            "answer": "Counselling helps employees solve personal or work-related problems so they can perform better.",
            "example": "A counsellor helps an employee manage stress caused by heavy workload."
          },
          {
            "number": 15,
            "question": "What is group interaction?",
            "answer": "Group interaction is discussion and collaboration among team members to solve problems or share ideas.",
            "example": "Brainstorming sessions where team members propose solutions to a project issue."
          }
        ]
      },
      {
        "title": "UNIT III: Project Management Basics",
        "questions": [
          {
            "number": 1,
            "question": "What is a project?",
            "answer": "A project is a temporary effort with a defined start, end, objective, and unique output.",
            "example": "Building a new bridge or launching a mobile app."
          },
          {
            "number": 2,
            "question": "What is project management?",
            "answer": "Project management is planning, organizing, and controlling resources to finish a project within time, cost, and scope limits.",
            "example": "A project manager tracks a software build to make sure it is delivered on schedule."
          },
          {
            "number": 3,
            "question": "What is resource management in projects?",
            "answer": "It is the efficient allocation of manpower, money, materials, and equipment to project activities.",
            "example": "Assigning two developers and a tester to a module based on their availability."
          },
          {
            "number": 4,
            "question": "What is the project environment?",
            "answer": "It is the set of internal and external factors that affect a project, such as government policy, market conditions, and stakeholders.",
            "example": "A new tax rule can change the cost of a construction project."
          },
          {
            "number": 5,
            "question": "What are the types of projects?",
            "answer": "Common types include construction, IT/software, research and development, event, and maintenance projects.",
            "example": "Organizing a college fest is an event project."
          },
          {
            "number": 6,
            "question": "What is a project network?",
            "answer": "A project network is a diagram showing project activities and the dependencies between them. Techniques used include PERT and CPM.",
            "example": "Foundation work must finish before walls can be built, so the two are linked in the network."
          },
          {
            "number": 7,
            "question": "What is a DPR?",
            "answer": "A Detailed Project Report (DPR) is a document that gives full project details, including feasibility, cost, schedule, and technical design.",
            "example": "A DPR is submitted to a bank to get a loan for a factory."
          },
          {
            "number": 8,
            "question": "What is the project life cycle?",
            "answer": "The project life cycle has five stages: initiation, planning, execution, monitoring and control, and closure.",
            "example": "A software project moves from requirement gathering (planning) to coding (execution) to final delivery (closure)."
          },
          {
            "number": 9,
            "question": "What is a project proposal?",
            "answer": "A project proposal is a document presenting a project idea to sponsors, with its objectives, scope, timeline, and budget.",
            "example": "A startup pitches its app idea to investors with a budget and timeline."
          },
          {
            "number": 10,
            "question": "How is project progress monitored?",
            "answer": "Progress is tracked by comparing actual performance with the plan, using tools such as Gantt charts and milestone reviews.",
            "example": "If a task planned for 5 days takes 8, the manager adds resources or adjusts the schedule."
          },
          {
            "number": 11,
            "question": "What is project appraisal?",
            "answer": "Project appraisal is the evaluation of a project's technical, financial, economic, and social feasibility before approval.",
            "example": "Checking whether a project's expected returns justify its investment, using NPV or IRR."
          },
          {
            "number": 12,
            "question": "What is project selection?",
            "answer": "Project selection is choosing the best project from several options, based on returns, risk, and strategic fit.",
            "example": "A company picks the project with the higher expected profit and lower risk."
          },
          {
            "number": 13,
            "question": "What is the 80-20 rule?",
            "answer": "The 80-20 rule (Pareto principle) says that roughly 80% of results come from 20% of causes.",
            "example": "20% of customers may generate 80% of a business's revenue."
          },
          {
            "number": 14,
            "question": "What is production technology?",
            "answer": "Production technology is the set of methods and processes used to convert inputs into finished goods.",
            "example": "An assembly line is a mass production technology, while a job shop handles custom orders."
          },
          {
            "number": 15,
            "question": "What is a communication matrix?",
            "answer": "A communication matrix is a table that shows who needs what information, how often, and through which channel.",
            "example": "The client receives weekly progress reports by email, while the team holds daily stand-up meetings."
          }
        ]
      },
      {
        "title": "UNIT IV: Project Types and Their Management Challenges",
        "questions": [
          {
            "number": 1,
            "question": "Why do different project types need different management strategies?",
            "answer": "Each project type has its own risks, timelines, and stakeholders, so one approach does not fit all.",
            "example": "A construction project needs strict safety control, while a software project needs flexibility for changing requirements."
          },
          {
            "number": 2,
            "question": "What are the challenges and strategies for construction projects?",
            "answer": "Challenges include weather delays, safety risks, and cost overruns. Strategies include detailed scheduling and risk planning.",
            "example": "Keeping a buffer period in the schedule for monsoon delays."
          },
          {
            "number": 3,
            "question": "What are the challenges and strategies for IT/software projects?",
            "answer": "Challenges include changing requirements and integration issues. Strategies include Agile methods and frequent client reviews.",
            "example": "Releasing a working module every two weeks to get early feedback."
          },
          {
            "number": 4,
            "question": "What are the challenges and strategies for R&D projects?",
            "answer": "Challenges include high uncertainty and unpredictable results. Strategies include stage-gate reviews and flexible budgets.",
            "example": "Releasing funds in stages only when the previous stage shows promising results."
          },
          {
            "number": 5,
            "question": "What are the challenges and strategies for event projects?",
            "answer": "Challenges include tight deadlines and coordinating many vendors. Strategies include checklists and firm vendor contracts.",
            "example": "A wedding planner uses a timeline checklist for caterers, decorators, and venues."
          },
          {
            "number": 6,
            "question": "What are the challenges and strategies for infrastructure projects?",
            "answer": "Challenges include government approvals, land acquisition, and many stakeholders. Strategies include early stakeholder engagement and clear documentation.",
            "example": "Holding public consultations before starting a road project."
          },
          {
            "number": 7,
            "question": "What are the challenges and strategies for maintenance projects?",
            "answer": "Challenges include resource conflicts and unplanned breakdowns. Strategies include preventive scheduling and priority setting.",
            "example": "Scheduling machine servicing during off-peak hours to avoid stopping production."
          },
          {
            "number": 8,
            "question": "What are the challenges and strategies for manufacturing projects?",
            "answer": "Challenges include machine breakdowns, quality defects, and supply delays. Strategies include quality checks at each stage and buffer inventory.",
            "example": "A factory sets up a line inspection at each assembly step to catch defects early."
          },
          {
            "number": 9,
            "question": "What are the challenges and strategies for marketing campaign projects?",
            "answer": "Challenges include tight launch dates, shifting audience response, and budget control. Strategies include phased launches and regular performance tracking.",
            "example": "Testing an advertisement with a small audience before a full national launch."
          },
          {
            "number": 10,
            "question": "What are the challenges and strategies for healthcare projects?",
            "answer": "Challenges include strict regulations, patient safety, and specialized staffing. Strategies include compliance checks and staged rollouts.",
            "example": "Introducing a new hospital software system in one ward before the whole hospital."
          },
          {
            "number": 11,
            "question": "What are the challenges and strategies for education projects?",
            "answer": "Challenges include limited budgets, staff training, and academic calendar constraints. Strategies include planning around term schedules and pilot programs.",
            "example": "Launching a new online learning platform during the summer break."
          },
          {
            "number": 12,
            "question": "What are the challenges and strategies for government and welfare projects?",
            "answer": "Challenges include policy changes, bureaucratic approvals, and public accountability. Strategies include transparent reporting and close monitoring of budgets.",
            "example": "Publishing progress reports for a rural water supply scheme so citizens can track it."
          },
          {
            "number": 13,
            "question": "What are the challenges and strategies for film and media projects?",
            "answer": "Challenges include creative changes, location problems, and tight shooting schedules. Strategies include detailed shot planning and contingency days.",
            "example": "Booking a backup location in case of bad weather during an outdoor shoot."
          },
          {
            "number": 14,
            "question": "What are the challenges and strategies for agricultural projects?",
            "answer": "Challenges include weather dependence, seasonal timing, and input supply. Strategies include crop calendars and insurance or backup plans.",
            "example": "Planning irrigation work before the monsoon season begins."
          },
          {
            "number": 15,
            "question": "What are the challenges and strategies for international projects?",
            "answer": "Challenges include currency risk, cultural differences, and cross-border regulations. Strategies include local partners and hedging against currency changes.",
            "example": "A company uses a local partner to handle permits and language issues in a foreign country."
          }
        ]
      },
      {
        "title": "UNIT V: Project Implementation and Review",
        "questions": [
          {
            "number": 1,
            "question": "What are the forms of project organization?",
            "answer": "The main forms are functional, project (pure), and matrix organization.",
            "example": "In a matrix form, engineers report to both a functional head and a project manager."
          },
          {
            "number": 2,
            "question": "What is project planning?",
            "answer": "Project planning defines tasks, schedules, resources, and budget before execution begins.",
            "example": "Listing all tasks for a website launch and assigning each a deadline."
          },
          {
            "number": 3,
            "question": "What is project control?",
            "answer": "Project control compares actual progress with the plan and takes corrective action when deviations occur.",
            "example": "If a project is running two weeks late, extra staff are added to catch up."
          },
          {
            "number": 4,
            "question": "What are the human aspects of project management?",
            "answer": "They include motivation, team conflict, leadership, and communication among team members.",
            "example": "A manager resolves a disagreement between two team members before it affects delivery."
          },
          {
            "number": 5,
            "question": "What are the prerequisites for successful project implementation?",
            "answer": "Key prerequisites are clear objectives, committed leadership, adequate resources, stakeholder support, and a realistic schedule.",
            "example": "A project with unclear goals is likely to fail even with a big budget."
          },
          {
            "number": 6,
            "question": "What is project review?",
            "answer": "Project review is a systematic assessment of a project at milestones or at completion to identify lessons and issues.",
            "example": "After finishing a project, the team discusses what went well and what caused delays."
          },
          {
            "number": 7,
            "question": "What is performance evaluation of a project?",
            "answer": "It measures project success against time, cost, quality, and scope targets.",
            "example": "A project finished on time but 15% over budget is rated partly successful."
          },
          {
            "number": 8,
            "question": "What is abandonment analysis?",
            "answer": "Abandonment analysis decides whether a project should be stopped because it is no longer viable.",
            "example": "A product project is stopped when its expected cost is greater than its expected benefit."
          },
          {
            "number": 9,
            "question": "What is project closure?",
            "answer": "Project closure is the final stage where deliverables are handed over, contracts are closed, and lessons are documented.",
            "example": "A software team hands over the final system to the client and signs the acceptance document."
          },
          {
            "number": 10,
            "question": "What is the role of a project manager during implementation?",
            "answer": "The project manager leads the team, coordinates resources, tracks progress, and resolves issues.",
            "example": "A project manager holds weekly meetings to check task status and remove blockers."
          },
          {
            "number": 11,
            "question": "What is risk management in project implementation?",
            "answer": "It is identifying, assessing, and responding to risks that could affect the project during execution.",
            "example": "Keeping a backup supplier ready in case the main supplier delays materials."
          },
          {
            "number": 12,
            "question": "What is change control in projects?",
            "answer": "Change control is a formal process for reviewing and approving changes to scope, time, or cost.",
            "example": "A client requests an extra feature, and the team assesses its cost before accepting it."
          },
          {
            "number": 13,
            "question": "What is a project milestone?",
            "answer": "A milestone is a significant point or event in a project, used to check progress.",
            "example": "Completing the design phase is a milestone in a construction project."
          },
          {
            "number": 14,
            "question": "What is stakeholder management in projects?",
            "answer": "It is identifying stakeholders and keeping them informed and involved so their support continues.",
            "example": "Sending monthly updates to the client and the funding department."
          },
          {
            "number": 15,
            "question": "What are the common causes of project failure?",
            "answer": "Common causes include unclear objectives, poor planning, weak communication, scope creep, and lack of resources.",
            "example": "A project fails when requirements keep changing without any change control."
          }
        ]
      }
    ]
  },
  {
    "id": "PCMC",
    "title": "2-Mark Q&A: Cellular & Mobile Communication",
    "units": [
      {
        "title": "UNIT I: Cellular Systems",
        "questions": [
          {
            "number": 1,
            "question": "What is a limitation of the conventional mobile system?",
            "answer": "Conventional systems use one high-power transmitter covering a large area, so they support only a few users and waste spectrum.",
            "example": "A single tower in a city can serve only a few dozen simultaneous calls."
          },
          {
            "number": 2,
            "question": "What is a basic cellular mobile system?",
            "answer": "It divides a service area into small cells, each served by a base station, so the same frequencies can be reused in distant cells.",
            "example": "A city is split into hexagonal cells, each with its own tower."
          },
          {
            "number": 3,
            "question": "What are the first and second generation cellular systems?",
            "answer": "1G was analog voice (such as AMPS), and 2G was digital voice with SMS (such as GSM and CDMA-IS95).",
            "example": "Early GSM phones could send text messages but had slow data speeds."
          },
          {
            "number": 4,
            "question": "What are the third and fourth generation cellular systems?",
            "answer": "3G added mobile internet and video calling, while 4G (LTE) gave much faster broadband data.",
            "example": "Watching online videos smoothly on a phone uses 4G LTE."
          },
          {
            "number": 5,
            "question": "What is the operation of a cellular system?",
            "answer": "A mobile connects to the nearest base station, which links the call to the switching center and then to the telephone network.",
            "example": "When you move between cells during a call, the network hands the call to the next tower."
          },
          {
            "number": 6,
            "question": "What is fading in mobile radio environment?",
            "answer": "Fading is the rapid variation in received signal strength caused by reflections, scattering, and movement of the mobile.",
            "example": "A phone signal drops and returns while you walk between buildings."
          },
          {
            "number": 7,
            "question": "What is coherence bandwidth?",
            "answer": "Coherence bandwidth is the frequency range over which the channel response is roughly constant.",
            "example": "A narrow-band signal passes through the channel without much distortion if it is within the coherence bandwidth."
          },
          {
            "number": 8,
            "question": "What is Doppler spread?",
            "answer": "Doppler spread is the spreading of a signal's frequency caused by the motion of the mobile or surroundings.",
            "example": "A car moving fast at high speed experiences more Doppler spread than a pedestrian."
          },
          {
            "number": 9,
            "question": "What is frequency reuse?",
            "answer": "Frequency reuse means using the same set of channels in cells that are far enough apart to avoid interference.",
            "example": "Cell A and a cell three cells away can both use channel group 1."
          },
          {
            "number": 10,
            "question": "What is co-channel interference?",
            "answer": "Co-channel interference is the interference caused when two cells using the same frequency channel are too close to each other.",
            "example": "Two nearby towers using the same channel cause crossed voices in calls."
          },
          {
            "number": 11,
            "question": "What is the co-channel interference reduction factor?",
            "answer": "It is the ratio of the cluster-distance to cell-radius (D/R), which determines how much co-channel interference is present.",
            "example": "A larger D/R ratio gives less co-channel interference."
          },
          {
            "number": 12,
            "question": "What is the desired C/I in a normal omnidirectional antenna system?",
            "answer": "The desired carrier-to-interference ratio (C/I) is about 18 dB for an omnidirectional antenna system, for acceptable voice quality.",
            "example": "If the signal is 18 dB stronger than the interference, the call remains clear."
          },
          {
            "number": 13,
            "question": "What is trunking?",
            "answer": "Trunking is the method of sharing a pool of channels among many users so that each call can use any free channel.",
            "example": "50 channels shared by 500 users, where each call grabs any free channel."
          },
          {
            "number": 14,
            "question": "What is grade of service?",
            "answer": "Grade of service is the probability that a call is blocked or delayed because no channel is free during peak traffic.",
            "example": "A grade of service of 0.02 means about 2 out of 100 calls may be blocked."
          },
          {
            "number": 15,
            "question": "What is a cluster in cellular design?",
            "answer": "A cluster is a group of cells that together use the full set of available channels once.",
            "example": "A 7-cell cluster uses all channel sets once, and then the pattern repeats."
          }
        ]
      },
      {
        "title": "UNIT II: Co-Channel & Non-Co-Channel Interference",
        "questions": [
          {
            "number": 1,
            "question": "What is measurement of real-time co-channel interference?",
            "answer": "It is measuring the interference level in an operating network by comparing received signal strength with interfering signals on the same channel.",
            "example": "A drive test measures the signal and interference levels along a route."
          },
          {
            "number": 2,
            "question": "What is the design of an antenna system?",
            "answer": "Antenna system design selects the antenna type, height, gain, and direction so that coverage is good and interference is low.",
            "example": "A sectored antenna with three 120-degree sectors reduces interference in a cell."
          },
          {
            "number": 3,
            "question": "What are antenna parameters?",
            "answer": "Important antenna parameters are gain, beamwidth, radiation pattern, polarization, and front-to-back ratio.",
            "example": "A high-gain antenna sends more power in one direction, extending coverage there."
          },
          {
            "number": 4,
            "question": "What is the effect of antenna parameters on the system?",
            "answer": "Higher gain increases coverage but can increase interference, while narrow beamwidth reduces interference in unwanted directions.",
            "example": "A narrow-beam antenna pointed along a road reduces interference to nearby cells."
          },
          {
            "number": 5,
            "question": "What is diversity technique?",
            "answer": "Diversity is a method of sending or receiving the same signal over multiple independent paths to reduce fading.",
            "example": "Two receiving antennas placed apart pick up different signal levels, and the better one is used."
          },
          {
            "number": 6,
            "question": "What is space diversity?",
            "answer": "Space diversity uses two or more antennas spaced apart so that they receive signals with independent fading.",
            "example": "A base station with two antennas separated by several wavelengths."
          },
          {
            "number": 7,
            "question": "What is polarization diversity?",
            "answer": "Polarization diversity uses antennas with different polarizations, such as vertical and horizontal, to receive uncorrelated signals.",
            "example": "A mobile unit with one vertically and one horizontally polarized antenna."
          },
          {
            "number": 8,
            "question": "What is frequency diversity?",
            "answer": "Frequency diversity sends the same information on two or more different frequencies to reduce fading.",
            "example": "A signal sent on two carrier frequencies, where one may fade while the other is strong."
          },
          {
            "number": 9,
            "question": "What is time diversity?",
            "answer": "Time diversity sends the same information at different times so that burst fading does not destroy all copies.",
            "example": "Repeating a data packet after a short delay so a fade does not lose both copies."
          },
          {
            "number": 10,
            "question": "What is non-co-channel interference?",
            "answer": "It is interference caused by signals from other channels, not from the same channel.",
            "example": "A signal from a strong nearby channel leaks into your channel."
          },
          {
            "number": 11,
            "question": "What is adjacent channel interference?",
            "answer": "Adjacent channel interference occurs when signals on neighbouring frequency channels overlap and interfere with each other.",
            "example": "A strong signal on channel 10 spills into channel 11 and disturbs its calls."
          },
          {
            "number": 12,
            "question": "How can adjacent channel interference be reduced?",
            "answer": "It can be reduced by using good filters, proper channel spacing, and careful frequency assignment.",
            "example": "Leaving a guard band between two operators' channels."
          },
          {
            "number": 13,
            "question": "What is the purpose of sectoring for interference?",
            "answer": "Sectoring divides a cell into sectors with directional antennas, which reduces the number of co-channel cells that interfere.",
            "example": "A cell split into three 120-degree sectors."
          },
          {
            "number": 14,
            "question": "What is the effect of interference on call quality?",
            "answer": "Interference causes noise, crosstalk, and dropped calls, which lower call quality.",
            "example": "A user hears another conversation in the background during a call."
          },
          {
            "number": 15,
            "question": "Why is interference measurement important?",
            "answer": "It helps engineers find problem areas and adjust frequencies or antennas to improve network performance.",
            "example": "A drive test shows a weak zone, so the operator adds a tower or changes the antenna tilt."
          }
        ]
      },
      {
        "title": "UNIT III: Frequency Management & Channel Assignment",
        "questions": [
          {
            "number": 1,
            "question": "What is numbering and grouping of channels?",
            "answer": "Numbering gives each channel a unique number, and grouping organizes channels into sets for assignment to cells.",
            "example": "Channels 1 to 21 are grouped into 7 sets of 3 channels each."
          },
          {
            "number": 2,
            "question": "What are setup and access channels?",
            "answer": "Setup channels are used to set up a call, and access channels are used by mobiles to request service.",
            "example": "A phone sends a service request on the access channel before a voice channel is allotted."
          },
          {
            "number": 3,
            "question": "What is a paging channel?",
            "answer": "A paging channel is used by the base station to send incoming call alerts to mobile units.",
            "example": "Your phone rings because the network sent an incoming call alert on the paging channel."
          },
          {
            "number": 4,
            "question": "How are channels assigned to cell sites?",
            "answer": "Channels are assigned to cell sites based on the frequency reuse plan so that co-channel cells are kept far apart.",
            "example": "Cell sites in a cluster each get a different channel set."
          },
          {
            "number": 5,
            "question": "How are channels assigned to mobile units?",
            "answer": "The base station assigns an idle channel to a mobile unit when it makes or receives a call.",
            "example": "When you dial a number, the system allots a free voice channel to your phone."
          },
          {
            "number": 6,
            "question": "What is channel sharing?",
            "answer": "Channel sharing means allowing several cells or users to use a common pool of channels to improve utilization.",
            "example": "Neighbouring cells share a pool of channels during peak hours."
          },
          {
            "number": 7,
            "question": "What is channel borrowing?",
            "answer": "Channel borrowing means a congested cell temporarily takes free channels from a neighbouring cell.",
            "example": "A busy cell borrows a channel from an empty neighbouring cell during rush hour."
          },
          {
            "number": 8,
            "question": "What is sectorization?",
            "answer": "Sectorization divides a cell into sectors, each served by a directional antenna, to reduce interference and increase capacity.",
            "example": "A three-sector cell uses three 120-degree antennas."
          },
          {
            "number": 9,
            "question": "What are overlaid cells?",
            "answer": "Overlaid cells place a large macrocell over smaller microcells in the same area to handle different traffic levels.",
            "example": "A macrocell covers a city while small cells handle the busy shopping area."
          },
          {
            "number": 10,
            "question": "What is fixed channel assignment?",
            "answer": "In fixed channel assignment, each cell is permanently given a set of channels for its use.",
            "example": "A cell always uses channels 1 to 3, regardless of the traffic in nearby cells."
          },
          {
            "number": 11,
            "question": "What is non-fixed channel assignment?",
            "answer": "In non-fixed channel assignment, channels are allotted dynamically based on current demand and interference conditions.",
            "example": "A cell gets whichever free channel is best at the moment, instead of a fixed one."
          },
          {
            "number": 12,
            "question": "What is the advantage of non-fixed channel assignment?",
            "answer": "It handles changing traffic better and can reduce blocked calls compared with fixed assignment.",
            "example": "During a sudden crowd event, extra channels are allotted to the affected cell."
          },
          {
            "number": 13,
            "question": "What is the disadvantage of fixed channel assignment?",
            "answer": "A fixed assignment cannot adapt to changing traffic, so busy cells may block calls while nearby cells have free channels.",
            "example": "A busy cell rejects calls while the neighbouring cell's channels stay idle."
          },
          {
            "number": 14,
            "question": "What is the role of a base station in channel management?",
            "answer": "The base station monitors channel status, assigns free channels, and releases them when calls end.",
            "example": "When a call ends, the base station marks that channel as free for the next user."
          },
          {
            "number": 15,
            "question": "What is the purpose of channel assignment?",
            "answer": "It aims to use the limited spectrum efficiently while keeping interference low and call blocking minimal.",
            "example": "Careful assignment lets a city serve more users with the same number of channels."
          }
        ]
      },
      {
        "title": "UNIT IV: Handoffs",
        "questions": [
          {
            "number": 1,
            "question": "What is handoff?",
            "answer": "Handoff is the process of transferring an ongoing call from one base station or channel to another as the mobile moves.",
            "example": "A call continues smoothly while you drive from one cell to the next."
          },
          {
            "number": 2,
            "question": "What is handoff initiation?",
            "answer": "Handoff is initiated when the received signal strength at the current base station drops below a set threshold.",
            "example": "As you move away from a tower, the network switches your call to a nearer tower."
          },
          {
            "number": 3,
            "question": "What are the types of handoff?",
            "answer": "Common types are hard handoff, soft handoff, forced handoff, and mobile-assisted handoff.",
            "example": "In a soft handoff, the phone connects to two towers at the same time during the switch."
          },
          {
            "number": 4,
            "question": "What is a hard handoff?",
            "answer": "In a hard handoff, the old connection is released before the new connection is made.",
            "example": "A brief pause may be heard during a call when the connection switches."
          },
          {
            "number": 5,
            "question": "What is a soft handoff?",
            "answer": "In a soft handoff, the new connection is made before the old one is released, so the call is not interrupted.",
            "example": "CDMA networks use soft handoff so that calls are smooth between towers."
          },
          {
            "number": 6,
            "question": "What is delaying handoff?",
            "answer": "Delaying handoff means postponing the handoff decision for a short time to avoid unnecessary switching.",
            "example": "A phone waits a few seconds before switching, in case the signal recovers."
          },
          {
            "number": 7,
            "question": "What are the advantages of handoff?",
            "answer": "Handoff keeps calls connected during movement, improves service quality, and allows the network to manage traffic.",
            "example": "You can make a call while travelling on a highway without it dropping."
          },
          {
            "number": 8,
            "question": "What is power difference handoff?",
            "answer": "It is a handoff triggered when the received power from a neighbouring base station is greater than the current one by a set margin.",
            "example": "The phone switches to a nearby tower that is 6 dB stronger than the current one."
          },
          {
            "number": 9,
            "question": "What is forced handoff?",
            "answer": "Forced handoff is a handoff done by the network to balance traffic or handle channel problems, not because of signal weakness.",
            "example": "The network moves calls from a crowded cell to a less busy neighbour."
          },
          {
            "number": 10,
            "question": "What is mobile-assisted handoff?",
            "answer": "In mobile-assisted handoff, the mobile measures signal strength from nearby base stations and reports the values to the network.",
            "example": "The phone sends signal readings from three nearby towers to help the network choose the best one."
          },
          {
            "number": 11,
            "question": "What is the difference between intersystem and intrasystem handoff?",
            "answer": "Intrasystem handoff happens within the same network, while intersystem handoff happens between two different networks or systems.",
            "example": "Moving between two cells of the same operator is intrasystem; moving to another operator's network is intersystem."
          },
          {
            "number": 12,
            "question": "What is the difference between soft and hard handoff?",
            "answer": "A soft handoff connects to the new cell before disconnecting the old one, while a hard handoff disconnects first.",
            "example": "A soft handoff is smoother, but a hard handoff uses less network resource at a time."
          },
          {
            "number": 13,
            "question": "What is call drop rate?",
            "answer": "Call drop rate is the percentage of established calls that end unexpectedly before the user hangs up.",
            "example": "If 2 out of 100 calls drop, the drop rate is 2%."
          },
          {
            "number": 14,
            "question": "What causes call drops during handoff?",
            "answer": "Call drops can happen due to weak signal, no free channel in the new cell, or delayed handoff.",
            "example": "A call drops when you enter a cell where all channels are busy."
          },
          {
            "number": 15,
            "question": "What is power-based handoff?",
            "answer": "Power-based handoff uses received signal power levels to decide when to switch the call to another base station.",
            "example": "The call is switched when the new tower's signal becomes stronger than the current one."
          }
        ]
      },
      {
        "title": "UNIT V: Multiple Access Schemes & Modern Systems",
        "questions": [
          {
            "number": 1,
            "question": "What is TDMA?",
            "answer": "Time Division Multiple Access (TDMA) shares one frequency channel among users by giving each user a separate time slot.",
            "example": "GSM uses TDMA, so eight users can share one carrier, each in its own time slot."
          },
          {
            "number": 2,
            "question": "What is FDMA?",
            "answer": "Frequency Division Multiple Access (FDMA) gives each user a separate frequency channel.",
            "example": "AMPS, the first-generation analog system, assigned each call its own frequency."
          },
          {
            "number": 3,
            "question": "What is CDMA?",
            "answer": "Code Division Multiple Access (CDMA) lets all users share the same frequency and time, separating them by unique spreading codes.",
            "example": "Many phones in one cell transmit at the same frequency, each using its own code."
          },
          {
            "number": 4,
            "question": "What is the main difference between TDMA, FDMA, and CDMA?",
            "answer": "TDMA separates users by time, FDMA by frequency, and CDMA by code.",
            "example": "In a classroom, TDMA is like taking turns to speak, FDMA is like each person using a different language, and CDMA is like speaking with a unique accent."
          },
          {
            "number": 5,
            "question": "What is MIMO?",
            "answer": "MIMO (Multiple Input Multiple Output) uses multiple antennas at the transmitter and receiver to increase data rate and reliability.",
            "example": "A 4x4 MIMO router sends four data streams at the same time."
          },
          {
            "number": 6,
            "question": "What are the principles of CDMA cellular systems?",
            "answer": "CDMA spreads each signal over a wide band using a unique code, which allows many users and reduces interference.",
            "example": "Several calls share the same band, and each receiver recovers its own call using its code."
          },
          {
            "number": 7,
            "question": "What is OFDM?",
            "answer": "Orthogonal Frequency Division Multiplexing (OFDM) splits a high-speed data stream into many slow subcarriers that are orthogonal to each other.",
            "example": "Wi-Fi and 4G LTE use OFDM to deliver fast data."
          },
          {
            "number": 8,
            "question": "What is OFDMA?",
            "answer": "OFDMA (Orthogonal Frequency Division Multiple Access) allocates groups of OFDM subcarriers to different users at the same time.",
            "example": "In 4G LTE, different users get different subcarrier groups in the same time slot."
          },
          {
            "number": 9,
            "question": "What are the basics of 4G LTE?",
            "answer": "4G LTE uses OFDM for downlink, SC-FDMA for uplink, and MIMO to deliver high-speed broadband data.",
            "example": "Streaming an HD video on a phone uses 4G LTE's high-speed data."
          },
          {
            "number": 10,
            "question": "What is the advantage of OFDM?",
            "answer": "OFDM handles multipath fading well and uses the spectrum efficiently.",
            "example": "Even if some subcarriers are weak, the rest still carry data."
          },
          {
            "number": 11,
            "question": "What is filtered OFDM?",
            "answer": "Filtered OFDM applies a filter to each group of subcarriers to reduce out-of-band emissions and interference.",
            "example": "A filter on each sub-band keeps its signal from leaking into neighbouring bands."
          },
          {
            "number": 12,
            "question": "What is FBMC?",
            "answer": "Filter Bank Multicarrier (FBMC) is a multicarrier technique that uses well-shaped filters on each subcarrier to reduce interference.",
            "example": "FBMC is considered for 5G because it leaks less signal into nearby frequencies."
          },
          {
            "number": 13,
            "question": "What is the difference between OFDM and FBMC?",
            "answer": "OFDM uses a rectangular pulse with a cyclic prefix, while FBMC uses filtered pulses with lower out-of-band leakage.",
            "example": "FBMC gives cleaner spectrum, but OFDM is simpler and widely used."
          },
          {
            "number": 14,
            "question": "What is 5G?",
            "answer": "5G is the fifth generation of mobile networks, offering very high speed, low latency, and support for many connected devices.",
            "example": "Downloading a full movie in seconds on a 5G phone."
          },
          {
            "number": 15,
            "question": "What are the main goals of 5G?",
            "answer": "The main goals are enhanced mobile broadband, ultra-reliable low latency communication, and massive machine-type communication.",
            "example": "Self-driving cars need low latency, while smart meters need massive device connectivity."
          }
        ]
      }
    ]
  },
  {
    "id": "SADP",
    "title": "2-Mark Q&A: Object-Oriented Software Engineering & Design Patterns",
    "units": [
      {
        "title": "UNIT 1: Design Patterns (Introduction)",
        "questions": [
          {
            "number": 1,
            "question": "What is a design pattern?",
            "answer": "A design pattern is a named, reusable solution to a recurring design problem in a given context.",
            "example": "The Observer pattern is a standard solution for notifying dependent objects when one object changes."
          },
          {
            "number": 2,
            "question": "What are the four essential elements of a design pattern?",
            "answer": "They are the pattern name, the problem, the solution, and the consequences.",
            "example": "The name \"Observer\" lets designers discuss the idea quickly, while the consequences show its trade-offs."
          },
          {
            "number": 3,
            "question": "Why are design patterns useful?",
            "answer": "They speed up design, improve communication among developers, and make systems more flexible and maintainable.",
            "example": "A team says \"use Strategy here\" and everyone understands the design without a long explanation."
          },
          {
            "number": 4,
            "question": "Where did the idea of design patterns come from?",
            "answer": "The idea came from Christopher Alexander's architectural patterns, which describe proven solutions to building design problems.",
            "example": "A proven layout for a room is reused in many buildings; similarly, a proven class structure is reused in many programs."
          },
          {
            "number": 5,
            "question": "What is the Observer pattern in the MVC context?",
            "answer": "The model notifies its views whenever its data changes, so the views stay decoupled from the model.",
            "example": "A spreadsheet chart updates automatically when the numbers in the table change."
          },
          {
            "number": 6,
            "question": "What is the Composite pattern in the MVC context?",
            "answer": "Views can contain nested subviews, so individual and grouped views are treated in the same way.",
            "example": "A window contains panels, and each panel contains buttons; all are drawn using the same method."
          },
          {
            "number": 7,
            "question": "What is the Strategy pattern in the MVC context?",
            "answer": "The controller encapsulates the response algorithm for user input, and this algorithm can be swapped at run time.",
            "example": "A drawing tool's mouse behaviour can switch from \"draw line\" to \"select\" without changing the rest of the program."
          },
          {
            "number": 8,
            "question": "What are the three purpose categories of design patterns?",
            "answer": "The categories are creational, structural, and behavioral.",
            "example": "Singleton is creational, Adapter is structural, and Observer is behavioral."
          },
          {
            "number": 9,
            "question": "What is the difference between class scope and object scope patterns?",
            "answer": "Class-scope patterns deal with relationships set at compile time through inheritance. Object-scope patterns deal with relationships among objects at run time.",
            "example": "Adapter (class) uses inheritance, while Adapter (object) uses composition."
          },
          {
            "number": 10,
            "question": "Name two creational patterns.",
            "answer": "Factory Method and Singleton are creational patterns. Others include Abstract Factory, Builder, and Prototype.",
            "example": "Singleton ensures that only one logger object exists in the application."
          },
          {
            "number": 11,
            "question": "What does the Decorator pattern do?",
            "answer": "It adds responsibilities to an object dynamically, without changing its class.",
            "example": "A coffee object is wrapped with a milk decorator and a sugar decorator to add their costs."
          },
          {
            "number": 12,
            "question": "What does the Command pattern do?",
            "answer": "It encapsulates a request as an object, so the request can be executed, queued, logged, or undone.",
            "example": "Each drawn line is stored as a LineCommand object that can be undone later."
          },
          {
            "number": 13,
            "question": "What does \"program to an interface, not an implementation\" mean?",
            "answer": "It means code should depend on abstract types or interfaces rather than on concrete classes.",
            "example": "Writing `List items = new ArrayList();` lets you switch to `LinkedList` later with little change."
          },
          {
            "number": 14,
            "question": "Why is composition preferred over inheritance?",
            "answer": "Composition is decided at run time and gives looser coupling and more flexibility, while inheritance is fixed at compile time.",
            "example": "A car can be given a GPS module by composition, instead of creating a new subclass for every combination of features."
          },
          {
            "number": 15,
            "question": "What is the difference between a design pattern and a framework?",
            "answer": "A design pattern is an abstract idea, while a framework is concrete, executable code for a specific domain.",
            "example": "Observer is a pattern, but a GUI toolkit that uses it internally is a framework."
          }
        ]
      },
      {
        "title": "UNIT 2: Object-Oriented Analysis (Conceptual Classes & Relationships)",
        "questions": [
          {
            "number": 1,
            "question": "What is the core question of the analysis phase?",
            "answer": "The core question is \"What should the system do?\" It focuses on the required functionality, not on how it will be built.",
            "example": "In a library system, analysis asks what issuing a book must achieve, not which database table stores it."
          },
          {
            "number": 2,
            "question": "What is a use case?",
            "answer": "A use case is a narrative describing how an actor interacts with the system to complete a process.",
            "example": "\"Register New Member\" describes how a clerk enters a customer's details and receives an ID."
          },
          {
            "number": 3,
            "question": "What is an actor?",
            "answer": "An actor is an external agent that interacts with the system, such as a person or another system.",
            "example": "Library staff (the clerk) is the actor in the book checkout use case."
          },
          {
            "number": 4,
            "question": "What are functional requirements?",
            "answer": "Functional requirements describe the interactions between the system, its users, and other systems.",
            "example": "\"The system must record a book issue and display its due date.\""
          },
          {
            "number": 5,
            "question": "What are non-functional requirements?",
            "answer": "Non-functional requirements describe qualities and constraints such as response time, usability, accuracy, budget, and deadlines.",
            "example": "\"Member registration must complete within 2 seconds.\""
          },
          {
            "number": 6,
            "question": "What is a conceptual class?",
            "answer": "A conceptual class is a class that represents a real-world concept in the problem domain.",
            "example": "Member, Book, and Library are conceptual classes in the library system."
          },
          {
            "number": 7,
            "question": "What is noun analysis?",
            "answer": "Noun analysis extracts nouns from use cases, removes synonyms and attributes, and keeps the meaningful entities as classes.",
            "example": "\"Customer\" and \"user\" are both synonyms for Member, so only Member is kept as a class."
          },
          {
            "number": 8,
            "question": "What is a business rule?",
            "answer": "A business rule is a constraint or derived fact that controls how the system behaves.",
            "example": "Rule 1 says the due date is one month from the issue date."
          },
          {
            "number": 9,
            "question": "What is the difference between static and dynamic associations?",
            "answer": "Static associations are permanent relationships, while dynamic associations change through transactions.",
            "example": "Library maintains a collection of Members is static, while Member borrows Book is dynamic."
          },
          {
            "number": 10,
            "question": "What is an association class?",
            "answer": "An association class stores data that belongs to a relationship between two classes.",
            "example": "The Borrows association class holds the dueDate of each borrowed book."
          },
          {
            "number": 11,
            "question": "What is domain analysis?",
            "answer": "Domain analysis studies related systems in a domain to find common and variable features so they can be reused.",
            "example": "Studying several library systems to find shared concepts such as loans, holds, and fines."
          },
          {
            "number": 12,
            "question": "Why define conceptual classes?",
            "answer": "They help designers decide which classes to build, reveal missing details, and reduce errors through careful examination.",
            "example": "Drawing the Borrows association showed that the system had no limit on the number of books a member can borrow."
          },
          {
            "number": 13,
            "question": "What is functional cohesion in use case writing?",
            "answer": "A use case should encapsulate a single service the system provides.",
            "example": "\"Issue Book\" is one use case, while \"Issue and Register Member\" would mix two services."
          },
          {
            "number": 14,
            "question": "What is actor coverage?",
            "answer": "Every actor must take part in at least one use case, and every use case must have at least one actor.",
            "example": "If the clerk appears in no use case, the analysis has missed a required interaction."
          },
          {
            "number": 15,
            "question": "Why are requirements considered a contract?",
            "answer": "The requirements document is an agreement between users and developers, so errors in it are costly to fix after implementation.",
            "example": "If the client expected a fine calculation that was never specified, the project must be reworked later."
          }
        ]
      },
      {
        "title": "UNIT 4: Interactive Systems & MVC Architecture",
        "questions": [
          {
            "number": 1,
            "question": "What is the MVC pattern?",
            "answer": "MVC divides an interactive application into three parts: Model (data), View (presentation), and Controller (input and response).",
            "example": "In a drawing program, the shapes are the model, the screen is the view, and the mouse handling is the controller."
          },
          {
            "number": 2,
            "question": "What is the role of the Model?",
            "answer": "The Model stores the application data and state, and notifies observers when the data changes.",
            "example": "A Book object stores its title, author, and copy count."
          },
          {
            "number": 3,
            "question": "What is the role of the View?",
            "answer": "The View displays the model's data and captures all user input.",
            "example": "The window that shows the list of books and the mouse click on a \"Create Line\" button both belong to the View."
          },
          {
            "number": 4,
            "question": "What is the role of the Controller?",
            "answer": "The Controller decides what happens when input arrives and updates the model accordingly.",
            "example": "When the user clicks the second point, the Controller adds a line to the model."
          },
          {
            "number": 5,
            "question": "How does the Subject-Observer relationship work in MVC?",
            "answer": "The Model is the Subject and keeps references to its Views, which are the Observers. When data changes, the Model notifies all Views automatically.",
            "example": "Changing a book's status updates the catalogue view and the staff view at the same time."
          },
          {
            "number": 6,
            "question": "What are the main benefits of MVC?",
            "answer": "MVC gives high cohesion and low coupling, so parts can be changed, reused, and developed in parallel.",
            "example": "A new chart view can be added without changing the data model."
          },
          {
            "number": 7,
            "question": "What is the rule of thumb for deciding View vs Controller?",
            "answer": "If the logic depends on how the UI is implemented, it belongs in the View. If it depends on what the system does, it belongs in the Controller.",
            "example": "Colour and font selection go in the View; deciding how many points a line needs goes in the Controller."
          },
          {
            "number": 8,
            "question": "What is the Bridge pattern?",
            "answer": "The Bridge pattern decouples an abstraction from its implementation so that the two can vary independently.",
            "example": "Shapes (Line, Circle, Label) can vary separately from UI toolkits (SwingUI, HardUI, EasyUI)."
          },
          {
            "number": 9,
            "question": "What is the class explosion problem?",
            "answer": "Using inheritance alone for every combination of shape and UI creates a multiplicative number of classes.",
            "example": "3 shapes × 3 UIs require 9 concrete classes, and adding one more UI adds 3 more."
          },
          {
            "number": 10,
            "question": "How does Bridge reduce the number of classes?",
            "answer": "Bridge reduces the count from the product of two hierarchies to their sum.",
            "example": "3 item types + 3 UI types = 6 classes, instead of 9."
          },
          {
            "number": 11,
            "question": "What is the Command pattern in the drawing program?",
            "answer": "Each user action is stored as a command object that knows how to execute, undo, and redo itself.",
            "example": "A LineCommand object stores the two endpoints and reverses the line when undo is requested."
          },
          {
            "number": 12,
            "question": "What is the Composite pattern in the drawing program?",
            "answer": "A CompoundItem holds a list of child items and is treated like any other item when rendered.",
            "example": "The user selects three shapes and clicks \"Combine,\" which creates one CompoundItem containing them."
          },
          {
            "number": 13,
            "question": "Why is undo difficult to implement?",
            "answer": "Undo needs a stack for multiple levels, and undo itself must be reversible. Some operations, such as printing, cannot be undone.",
            "example": "After \"Print file,\" there is no way to take back the printed page."
          },
          {
            "number": 14,
            "question": "What is an incomplete command?",
            "answer": "An incomplete command is one that has started but not finished, such as a line with only its first point.",
            "example": "The user clicks \"Create Line\" and places one point. The command's end() returns false, so it is not added to the undo stack."
          },
          {
            "number": 15,
            "question": "What are the three levels of patterns?",
            "answer": "The three levels are architectural patterns, design patterns, and idioms.",
            "example": "MVC is architectural, Command is a design pattern, and swapping two variables with `temp = a; a = b; b = temp;` is an idiom."
          }
        ]
      },
      {
        "title": "UNIT 5: Distributed Objects (Java RMI & Web-Based Systems)",
        "questions": [
          {
            "number": 1,
            "question": "What is a distributed system?",
            "answer": "A distributed system is an application that runs across a network of interconnected computers rather than on a single machine.",
            "example": "A bank's branches in different cities connected to one central system."
          },
          {
            "number": 2,
            "question": "What are the advantages of distributed systems?",
            "answer": "They are economical, reliable, scalable, and allow shared resources.",
            "example": "If one server fails, other servers can keep the service running."
          },
          {
            "number": 3,
            "question": "What are the main challenges of distributed computing?",
            "answer": "The challenges are software complexity, slow data access due to network latency, and security risks.",
            "example": "Sending customer data across the internet must be protected from theft."
          },
          {
            "number": 4,
            "question": "What is client/server architecture?",
            "answer": "In client/server architecture, clients send requests to a server, which processes them and returns results.",
            "example": "A browser sends a request to a web server and displays the response."
          },
          {
            "number": 5,
            "question": "What is the JVM problem?",
            "answer": "Objects in different JVMs cannot directly access each other, and memory addresses are meaningless across JVM boundaries.",
            "example": "Address A3 in JVM 2 points to nothing useful inside JVM 1."
          },
          {
            "number": 6,
            "question": "What is Java RMI?",
            "answer": "Java RMI (Remote Method Invocation) lets a client call methods on objects that run in another JVM, using proxies.",
            "example": "A client calls `book.getTitle()` on a Book object that actually runs on a server."
          },
          {
            "number": 7,
            "question": "What is a stub?",
            "answer": "A stub is a client-side proxy that stands in for the remote object and forwards method calls over the network.",
            "example": "Book_Stub.class is the stub that the client uses to call the remote Book object."
          },
          {
            "number": 8,
            "question": "What is marshalling and demarshalling?",
            "answer": "Marshalling packs the object identity, method name, and parameters into a message. Demarshalling unpacks that message at the server.",
            "example": "The client's call `getAuthor()` is packaged, sent, and unpacked before the server executes it."
          },
          {
            "number": 9,
            "question": "What are the rules for a remote interface?",
            "answer": "A remote interface must extend `java.rmi.Remote`, and every method must declare `throws RemoteException`.",
            "example": "`BookInterface extends Remote` with `getTitle() throws RemoteException`."
          },
          {
            "number": 10,
            "question": "Why must remote methods throw RemoteException?",
            "answer": "Remote calls can fail because of a server crash or a network outage, and RMI reports these failures using this exception.",
            "example": "If the network drops during `getTitle()`, the client receives a RemoteException instead of a wrong answer."
          },
          {
            "number": 11,
            "question": "What are the requirements for a remote class?",
            "answer": "The class must extend UnicastRemoteObject, implement the remote interface, and implement Serializable.",
            "example": "`public class Book extends UnicastRemoteObject implements BookInterface, Serializable`."
          },
          {
            "number": 12,
            "question": "What does the rmic compiler do?",
            "answer": "The rmic compiler generates the stub class that the client uses for remote calls.",
            "example": "Running `rmic Book` produces `Book_Stub.class`."
          },
          {
            "number": 13,
            "question": "How does a server make a remote object available?",
            "answer": "The server creates the object and registers it with `Naming.rebind()`, and the client finds it with `Naming.lookup()`.",
            "example": "The server binds a Book under a name, and the client uses `Naming.lookup(name)` to get a reference to it."
          },
          {
            "number": 14,
            "question": "What is the difference between passing by reference and by value in RMI?",
            "answer": "Remote objects are passed by reference, so all clients share one instance. Non-remote objects are passed by value as a serialized copy, so changes stay local.",
            "example": "If Client 1 calls `setA(5)` on a remote object, Client 2 sees the new value. A copied object changed by Client 1 is not seen by Client 2."
          },
          {
            "number": 15,
            "question": "What is the web-based alternative to RMI?",
            "answer": "The web-based approach uses a browser to send encoded text requests over HTTP to a server, which returns HTML using servlets.",
            "example": "Submitting a form with `method=\"post\"` invokes a servlet's `doPost()` method, which returns a result page."
          }
        ]
      }
    ]
  }
];
