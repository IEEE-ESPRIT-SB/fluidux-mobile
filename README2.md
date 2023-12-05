# FLUIDUX Backend

## Overview

This section contains the **backend codebase** for a **Waste Water Management System** that integrates a **mechanical system** to generate energy while managing water flow. The system utilizes **sensors** to calculate **energy consumption**, predicts valve energy through an **AI model**, and employs an **LSTM Autoencoder model** (`Timeseries_anomaly_detection_using_LSTM_Autoencoder_JNJ`) to detect system anomalies and engine energy waste or delays. The backend is implemented using **Django** and **Django Rest Framework**.

## Features

## 1. User Management

### Endpoints:

- **GET `/auth/users/`**
  - Returns a list of all users.

- **GET `/auth/users/<user_id>/`**
  - Retrieves details of a specific user.

- **POST `/auth/users/`**
  - Creates a new user profile. Requires a request body with 'username', 'email', and 'password'.

- **PUT `/auth/users/<user_id>/`**
  - Updates a specific user's profile. Requires a request body with updated user data.

- **DELETE `/auth/users/<user_id>/`**
  - Deletes a specific user's profile.

- **POST `/auth/jwt/create/`**
  - Authenticates a user. Requires a request body with 'email' and 'password'.

- **GET `/users/<user_id>/valves/`**
  - Retrieves valves associated with a specific user.

## 2. Valve Management
### Endpoints:

- **GET `/valves/`**
  - Retrieves a list of all valves.

- **GET `/valves/<valve_id>/`**
  - Retrieves details of a specific valve.

- **POST `/valves/`**
  - Creates a new valve. Requires a request body with 'user' (user_id) and 'reference'.

- **PUT `/valves/<valve_id>/`**
  - Updates a specific valve. Requires a request body with the updated valve data.

- **DELETE `/valves/<valve_id>/`**
  - Deletes a specific valve.


These APIs empower seamless management of valves, offering versatile functionality for:

- Retrieving lists of valves.
- Obtaining detailed information about specific valves.
- Creating new valves with precision.
- Updating existing valves with accuracy.
- Deleting specific valves judiciously.

For `'POST'` and `'PUT'` requests to create and update valves, respectively, ensure the inclusion of specific data in the request body to facilitate a smooth process of valve creation and updates.

## 3. Consumption Tracking

### Endpoints:

- **GET `/consumptions/`**
  - Retrieves a comprehensive list of all consumption logs.

- **GET `/consumptions/<consumption_id>/`**
  - Fetches details of a specific consumption log.

- **POST `/consumptions/`**
  - Records a new consumption log. Requires a request body with 'valve' (valve_id) and 'body' (amount).

- **PUT `/consumptions/<consumption_id>/`**
  - Updates a specific consumption log. Ensure the request body contains the updated consumption data.

- **DELETE `/consumptions/<consumption_id>/`**
  - Removes a specific consumption log meticulously.

These APIs facilitate meticulous tracking of consumption logs, offering functionalities to retrieve comprehensive lists, access detailed information, create new logs, update existing logs, and delete specific logs. For 'POST' and 'PUT' requests, provide the necessary data in the request body to ensure accurate recording and updating of consumption logs.

## Anomaly Detection using LSTM Autoencoder

Within this repository lies a powerful AI model, denoted as "Copie_de_Timeseries_anomaly_detection_using_LSTM_Autoencoder_JNJ." This sophisticated model is meticulously crafted based on LSTM (Long Short-Term Memory) Autoencoder architecture, showcasing its prowess in anomaly detection.

### Key Features:

- **Architecture:**
  - Leveraging the robust LSTM Autoencoder structure for enhanced anomaly detection.

- **Focus Area:**
  - Specifically designed to scrutinize system behavior, emphasizing the identification of anomalies related to engine energy waste or delays.

This AI model is an invaluable asset for ensuring the integrity and efficiency of the waste water management system. Its advanced architecture and targeted focus make it a reliable tool for detecting deviations in system behavior, particularly in the context of engine energy consumption.

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/GitHackerz/fluidux-mobile
cd fluidux-mobile
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run migrations:

```bash
python manage.py migrate
```

4. Start the development server:

```bash
python manage.py runserver
```

## Usage

1. Interact with the provided APIs to manage users, valves, and consumption logs.
2. Ensure correct data is included in request bodies, as specified in the API documentation.
3. Leverage the LSTM Autoencoder model for anomaly detection by integrating it with your system.

## System Architecture

The backend system is designed to integrate with a waste water management system that includes mechanical components for energy generation, sensors for data collection, and an AI model for anomaly detection.

## Contributors

- [IEEE ESPRIT SB](https://esprit.ieee.tn/)

