import unittest
import os
import sys

# Add src to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))

class TestMLPipeline(unittest.TestCase):
    def test_pipeline_components_exist(self):
        src_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../src'))
        self.assertTrue(os.path.exists(os.path.join(src_path, 'components', 'data_ingestion.py')))
        self.assertTrue(os.path.exists(os.path.join(src_path, 'components', 'data_transformation.py')))
        self.assertTrue(os.path.exists(os.path.join(src_path, 'components', 'model_trainer.py')))

    def test_app_route(self):
        app_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../app.py'))
        self.assertTrue(os.path.exists(app_path))

if __name__ == '__main__':
    unittest.main()
