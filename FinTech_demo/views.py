from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/dashboard')
def dashboard():

    return render_template('dashboard.html')


@views.route('/')
def home():
    return render_template('home.html')


@views.route('index')
def index():
    return render_template('index.html')
