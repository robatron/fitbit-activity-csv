# fitbit-activity-csv

> Dumb little Chrome extension I wrote for myself to download a specific set of Fitbit activity data as a CSV file

## Usage

Enable this extension, visit https://www.fitbit.com/activities, then open the JavaScript console.

## Configuration

TBD

## Dev Notes

### AJAX API

#### Example Request

##### Request

POST https://www.fitbit.com/ajaxapi

##### Form Data

```
request: {
  "serviceCalls": [
    {
      "id": "GET \/api\/2\/user\/activities\/logs",
      "name": "user",
      "method": "getActivitiesLogs",
      "args": {
        "fromDate": "2017-03-16",
        "toDate": "2017-03-16",
        "period": "day",
        "offset": 0,
        "limit": 500
      }
    }
  ],
  "template": "activities\/modules\/models\/ajax.response.json.jsp"
}
csrfToken: 67CBA974-6166-1EC7-C7AA-140633DAC75B
```

#### Example Response

```js
{
  "GET \/api\/2\/user\/activities\/logs": {
    "status": 200,
    "result": [
      {
        // Interesting fields (to me)
        "dateTime": "2017-03-12T14:48:48.000Z",
        "formattedDate": "2017-03-12",
        "formattedStartTime": "14:48",
        "startTimeHours": "14",
        "startTimeMinutes": "48",
        "distance": "4.5",
        "formattedDuration": "49:01",
        "durationHours": "",
        "durationMinutes": 49,
        "durationSeconds": 1,
        "steps": 8099,
        "calories": 625,

        // Other fields
        "activityId": 90009,
        "activityLogEntryId": 6550778766,
        "ampm": "pm",
        "canUpdateActivity": false,
        "clock": 24,
        "date": "2017-03-14", // Request date, *not* activity date
        "favoriteId": "",
        "formattedDateTime": "Mar 12, 14:48"
        "formattedDistance": "4.5 miles",
        "generalActivityId": 90009,
        "hasDistance": true,
        "hasLevels": true,
        "hasSpeed": true,
        "id": 6550778766,
        "intensity": 90009,
        "intensityDescription": "",
        "isAnnotation": false,
        "isDisabled": false,
        "isExercise": true,
        "isFavorite": false,
        "isReadOnly": false,
        "manualCalories": 625,
        "manualCaloriesEnabled": false,
        "name": "Run",
      },
      ...
    ],
    "hasMoreLogs": true,
    "isExercise": true,
    "earliestLog": "2016-08-17T09:48:44"
  }
}
```
