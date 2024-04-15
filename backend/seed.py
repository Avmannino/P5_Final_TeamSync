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
                    name=Pitcher["name"],
                    age=Pitcher["age"],
                    wins=Pitcher["wins"],
                    losses=Pitcher["losses"],
                    era=Pitcher["era"],
                    games_started=Pitcher["games_started"],
                    innings_pitched=Pitcher["innings_pitched"],
                    strikeouts=Pitcher["strikeouts"],
                )
                pitchers_list.append(p)

            # Add all Pitcher objects to the session and commit changes
            db.session.add_all(pitchers_list)
            db.session.commit()


