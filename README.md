<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:1e3c72,50:2a5298,100:4facfe&height=200&section=header&text=Student%20Performance%20AI&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=35"/>
</p>

<p align="center">
  <b>Machine Learning Web Application for Predicting Student Math Performance</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge&logo=python"/>
  <img src="https://img.shields.io/badge/Flask-WebApp-black?style=for-the-badge&logo=flask"/>
  <img src="https://img.shields.io/badge/Scikit--Learn-MachineLearning-orange?style=for-the-badge&logo=scikit-learn"/>
  <img src="https://img.shields.io/badge/Data%20Science-ML%20Pipeline-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Actively%20Maintained-brightgreen?style=for-the-badge"/>
</p>

---

Website Link :https://predicting-student-performance-with.onrender.com

## 📌 Overviews

Student Performance AI is a machine learning powered web application that predicts a student's **Mathematics score** based on various demographic and academic attributes.

The system demonstrates how **machine learning models can be integrated into a web application** to generate real-time predictions using structured data.

The project implements an **end-to-end ML pipeline**, covering:

* Data ingestion
* Data preprocessing
* Feature transformation
* Model training
* Model evaluation
* Web deployment with Flask

The goal of this project is to showcase how data science and machine learning techniques can be applied to analyze and predict academic performance.

---

## 🚀 Development Status

This project is actively maintained and continuously improved.

Current improvements include:

* Machine learning pipeline optimization
* Data preprocessing enhancements
* Web interface improvements
* Code modularization
* Model retraining compatibility updates
* Deployment readiness for cloud platforms

Future updates will further improve scalability and prediction performance.

---

## 🧠 Problem Statements

Academic performance prediction is an important task in educational analytics.

Student outcomes are influenced by several factors such as:

* Family background
* Education level of parents
* Access to resources
* Preparation for exams

This project uses machine learning techniques to analyze these attributes and **predict student math scores**, enabling insights into academic performance patterns.

---

## 🏗️ System Architecture

The application follows a **modular machine learning pipeline architecture**.

### 1️⃣ User Interface Layer (Flask Web App)

Handles user input and displays prediction results.

Responsibilities include:

* Collecting student attributes
* Sending data to prediction pipeline
* Displaying predicted math score

---

### 2️⃣ Data Ingestion Layer

Responsible for loading and splitting the dataset.

Tasks include:

* Reading dataset
* Splitting into training and testing data
* Storing processed datasets inside artifacts directory

---

### 3️⃣ Data Transformation Layers

Performs preprocessing and feature engineering.

Processes include:

* Handling categorical features
* Applying encoders and transformers
* Creating preprocessing pipeline

---

### 4️⃣ Model Training Layer

Responsible for training machine learning models.

Key steps:

* Training regression models
* Evaluating model performance
* Saving the best performing model

---

### 5️⃣ Prediction Pipeline

Handles real-time inference.

Process:

* Load trained model
* Apply preprocessing pipeline
* Generate prediction
* Return predicted math score

---

## 🧩 Project Structure

Predicting-Student-Performance-with-Machine-Learning

artifacts/
Stores trained model, preprocessor, and processed datasets

src/components/
Contains ML pipeline components

* data_ingestion.py
* data_transformation.py
* model_trainer.py

src/pipeline/
Contains prediction pipeline logic

templates/
HTML files for frontend UI

static/
CSS files for styling

app.py
Flask application entry point

requirements.txt
Project dependencies

README.md
Project documentation

---

## 🧠 Model Details

* Model Type: Regression Model
* Framework: Scikit-Learn
* Input Features: Student demographic and academic attributes
* Output: Predicted Mathematics Score

Machine learning models analyze relationships between features such as **reading score, writing score, and demographic data** to predict math performance.

---

## 📊 Input Features Used

The prediction model uses the following attributes:

* Gender
* Race / Ethnicity
* Parental Level of Education
* Lunch Type
* Test Preparation Course
* Reading Score
* Writing Score

These features help the model learn patterns influencing academic performance.

---

## ⚙️ Installation & Setup

Clone repository

```bash
git clone https://github.com/shanky-ux/Predicting-Student-Performance-with-Machine-Learning.git
cd Predicting-Student-Performance-with-Machine-Learning
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the Flask application

```bash
python app.py
```

Application runs locally at

```
http://127.0.0.1:5000
```

---

## 🌍 Deployment Options

This project can be deployed using:

* Render
* Railway
* Docker
* AWS EC2
* Azure App Services

Deployment allows the model to be accessed through a live web interface.

---

## 🔐 Limitations

* Model accuracy depends on dataset quality
* Limited to trained dataset features
* Predictions are statistical estimates
* Not intended for official academic evaluation

---

## 📈 Future Enhancements

Planned improvements include:

* Model comparison with multiple regression algorithms
* Advanced feature engineering
* Interactive data visualization dashboard
* REST API integration
* Cloud deployment pipeline
* Student performance analytics dashboard

---

## 🎓 Learning Outcomes

This project demonstrates practica
