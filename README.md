# How to set up your environment

### Software requirements:

Download and install the following:

Python: https://www.python.org/downloads/
Pip and virtual environments: https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/
Node/NPM: https://www.npmjs.com/get-npm
PostgreSQL: https://www.postgresql.org/download/
VScode: https://code.visualstudio.com/download
Heroku CLI:

### Set up instructions

1. Clone the project from GitHub by opening a Command Prompt (CLI) in your Repositories folder and typing:
   git clone https://github.com/glui2/mcbc-roster-web-app.git

2. Activate your python environment by running:
   .\Scripts\activate

3. Change to the mcbcapp directory using:
   cd django-drf-react-quickstart/mcbcapp

4. In your CLI, install all required node packages by typing:
   npm install

5. In your CLI, install all required python packages by typing:
   pip install -r requirements.txt

6. Run the server using
   python manage.py runserver

7. To build the frontend, change to /frontend and run:
   npm run dev

8. Once built, navigate to http://127.0.0.1:8000/ to view the frontend.

9. To access the admin site, navigate to http://127.0.0.1:8000/rostering/mcbcadmin and login

10. Before committing, ensure you export any updated data from Django with the following command in CLI:
    python manage.py dumpdata --indent=4 > mcbc_mockdata.json

11. In order to upload new data, run the following command in CLI:
    python manage.py loaddata < mcbc_mockdata.json
