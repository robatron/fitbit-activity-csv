# fitbit-activity-csv (WORK IN PROGRESS)

## Dev Notes

### AJAX API

#### Annotated Example Response

```js
{
  "GET \/api\/2\/user\/activities\/logs": {
    "status": 200,
    "result": [
      {
        "date": "2017-03-14",
        "clock": 24,
        "isAnnotation": false,
        "id": 6580231861,
        "name": "Walk",
        "dateTime": "2017-03-14T11:27:03.000Z",
        "isExercise": true,
        "formattedStartTime": "11:27",
        "formattedDistance": "N\/A",
        "formattedDuration": "36:41",
        "calories": 278,
        "isFavorite": false,
        "favoriteId": "",
        "isReadOnly": false,
        "isDisabled": false,
        "generalActivityId": 90013,
        "canUpdateActivity": true,
        "activityLogEntryId": 6580231861,
        "activityId": 90013,
        "startTimeHours": "11",
        "startTimeMinutes": "27",
        "ampm": "am",
        "durationHours": "",
        "durationMinutes": 36,
        "durationSeconds": 41,
        "hasSpeed": true,
        "hasLevels": true,
        "hasDistance": false,
        "intensity": 90013,
        "intensityDescription": "",
        "manualCaloriesEnabled": false,
        "manualCalories": 278,
        "steps": 3365,
        "formattedDate": "2017-03-14",
        "formattedDateTime": "Today, 11:27"
      },
      {
        "date": "2017-03-14",
        "clock": 24,
        "isAnnotation": false,
        "id": 6570103188,
        "name": "Walk",
        "dateTime": "2017-03-13T18:09:20.000Z",
        "isExercise": true,
        "formattedStartTime": "18:09",
        "formattedDistance": "N\/A",
        "formattedDuration": "58:52",
        "calories": 339,
        "isFavorite": false,
        "favoriteId": "",
        "isReadOnly": false,
        "isDisabled": false,
        "generalActivityId": 90013,
        "canUpdateActivity": true,
        "activityLogEntryId": 6570103188,
        "activityId": 90013,
        "startTimeHours": "18",
        "startTimeMinutes": "09",
        "ampm": "pm",
        "durationHours": "",
        "durationMinutes": 58,
        "durationSeconds": 52,
        "hasSpeed": true,
        "hasLevels": true,
        "hasDistance": false,
        "intensity": 90013,
        "intensityDescription": "",
        "manualCaloriesEnabled": false,
        "manualCalories": 339,
        "steps": 4023,
        "formattedDate": "2017-03-13",
        "formattedDateTime": "Mar 13, 18:09"
      },
      ...
    ],
    "hasMoreLogs": true,
    "isExercise": true,
    "earliestLog": "2016-08-17T09:48:44"
  }
}
```
