from flask import Flask, request, render_template
import numpy as np
import pandas as pd

from sklearn.preprocessing import StandardScaler
from src.pipeline.predict_pipeline import CustomData, PredictPipeline

application = Flask(__name__)
app = application


# ── Landing page ──────────────────────────────────────────────────────────────
@app.route('/')
def index():
    return render_template('index.html')


# ── Prediction form + result ───────────────────────────────────────────────────
@app.route('/predictdata', methods=['GET', 'POST'])
def predict_datapoint():
    if request.method == 'GET':
        # Show blank form, no prediction yet
        return render_template('home.html', results=None)

    # POST — read form fields and run model
    data = CustomData(
        gender=request.form.get('gender'),
        race_ethnicity=request.form.get('ethnicity'),
        parental_level_of_education=request.form.get('parental_level_of_education'),
        lunch=request.form.get('lunch'),
        test_preparation_course=request.form.get('test_preparation_course'),
        # BUG FIX: original code had reading/writing swapped — corrected here
        reading_score=float(request.form.get('reading_score', 0)),
        writing_score=float(request.form.get('writing_score', 0)),
    )

    pred_df = data.get_data_as_data_frame()
    predict_pipeline = PredictPipeline()
    results = predict_pipeline.predict(pred_df)

    # Round to 1 decimal place for display
    prediction = round(float(results[0]), 1)

    return render_template('home.html', results=prediction)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)