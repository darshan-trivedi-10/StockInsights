# StockInsights

## Backend Deloyment 
- https://stock-insights.onrender.com/

- API to store JSON data in MongoDB
```
GET http://localhost:5000/api/dataprocessing/start
```


- API to find announcements of a company(SCRIP_CD) or multiple companies:
```
GET http://localhost:5000/api/announcements?companyIds=123,456,789

Response:
[
  // Array of announcements for the specified companyIds
]
```

- API to find announcements over a specified period (start & end dates) or announcements of a company/group of companies over a period:
```
GET http://localhost:5000/api/announcements?companyIds=123&start=2023-01-01&end=2023-07-01

Response:
[
  // Array of announcements for the specified company and date range
]

```

- API to find all the critical announcements or critical announcements of a list of companies over a given period:
```
GET http://localhost:5000/api/announcements?critical=true&start=2023-01-01&end=2023-07-01

Response:
[
  // Array of critical announcements within the specified date range
]
```

- API to retrieve announcements from the past 1-2 days in descending time order:

```
GET http://localhost:5000/api/announcements?pastDays=2

Response:
[
  // Array of announcements from the past 1-2 days in descending time order
]

```
