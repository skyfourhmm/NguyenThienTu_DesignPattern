import os

app_env = os.getenv("APP_ENV", "default_value")
print(f"Current APP_ENV: {app_env}")
