from requests import get
from threading import Thread
from os import system

def downlaod_legacy(version, link):
    apk = get(link)
    with open(f"Streameo-v2024.{version}.apk", "wb") as legacy:
        legacy.write(apk.content)
        legacy.close()
    
while True:
    version = input("Enter Streameo legacy version: 2024.")
    link = input("Enter legacy release link: ")
    Thread(target=downlaod_legacy, args=(version, link,)).start()