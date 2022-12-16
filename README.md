
# Location Validator 

calculates if the current location is inside any of the Location+Radius defined so far. If yes it will alert True otherwise it will alert False.


## Installation

Clone project
```bash
  git clone "https://github.com/lanslord11/LocationValidator.git"
```

Navigate into backend folder and install dependencies

```bash
  cd ./backend
  npm install
```
add environment variables in backend/config/config.env

 ```bash
  PORT = 4000
  DB_URI = 
```
NOTE:If you want to change the port number change it in the data-services file of the frontend too.

start the server by running following command inside the backend folder
```bash
  npm start
```

Navigate into frontend which is present in the LocationValidator folder. Install dependencies there using 
```bash
  cd ../LocationValidator
  npm install
  ng serve --open
```
## 

- Asks you for latitudes and longitudes of a location . 
- Add a radius for that location . 
- submit to send the data to remote mongoDB server. 
- Table displays the data fetched from mongoDB .
- Click validate and grant location access to check if your current location is inside any of the locations you entered.

## Improvement

- App is currently not responsive 
- All the errors are not handled in the backend
- Front End design could have been improved
- Proper Transitions could have been added.
- Instead of alerting a Toast could have been used for better viewing experience.

## Dependencies used backend
- body-parser : for parsing body of http request
- cors: to support cross-origin requests and data transfers
- dotenv : creating environment variables
- express : backend as asked  
- mongoose : storing data in cloud mongoDB server as asked
- nodemon: for development 

No extra dependency used in the front end expect the default angular dependencies.


## Screenshot

![App Screenshot](https://res.cloudinary.com/dncviqda8/image/upload/v1671187331/personal/Screenshot_2022-12-16_160742_mfnyek.png)





