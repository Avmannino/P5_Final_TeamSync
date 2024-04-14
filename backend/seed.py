from app import app
from models import db, Pitcher
from faker import Faker
import json

fake = Faker()

if __name__ == "__main__":
    with app.app_context():
        # Load data from JSON file
        with open("pitchers.json") as p:
            data = json.load(p)
            pitchers_list = []

            # Iterate over pitchers data and create Pitcher objects
            for d in data["pitchers"]:  # Update to match the JSON structure
                p = Pitcher(
                    name=d.get("name"),
                    age=d.get("age"),
                    wins=d.get("wins"),
                    losses=d.get("losses"),
                    era=d.get("era"),
                    games_started=d.get("games_started"),
                    innings_pitched=d.get("innings_pitched"),
                    strikeouts=d.get("strikeouts"),
                )
                pitchers_list.append(p)

            # Add all Pitcher objects to the session and commit changes
            db.session.add_all(pitchers_list)
            db.session.commit()


