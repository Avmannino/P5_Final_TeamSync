import os
import base64

# Generate a random secret key
secret_key = base64.urlsafe_b64encode(os.urandom(24)).decode('utf-8')

print("Generated Flask Secret Key:", secret_key)
