import unittest

class TestInputValidation(unittest.TestCase):
    def test_score_range_validation(self):
        # Validate that reading and writing scores must be between 0 and 100
        def validate_scores(reading, writing):
            if not (0 <= reading <= 100 and 0 <= writing <= 100):
                raise ValueError("Scores must be between 0 and 100")
            return True

        self.assertTrue(validate_scores(85, 90))
        with self.assertRaises(ValueError):
            validate_scores(105, 50)
        with self.assertRaises(ValueError):
            validate_scores(50, -5)

if __name__ == '__main__':
    unittest.main()
