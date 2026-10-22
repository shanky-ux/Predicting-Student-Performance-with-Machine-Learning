import sys
import os

# Add root directory to path so 'app' and 'src' can be imported correctly
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import app as application
