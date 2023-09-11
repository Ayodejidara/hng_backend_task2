<h1>REST API</h1>
<div>This REST API provides endpoints that handle the basic CRUD operations on a "person" resource.</div>

<h2>Base URL</h2>
<div>The base URL for all API endoints is: <a href= "http://localhost:3000"> http://localhost:3000/api </a> </div>

## Endpoints

### Create person

```
POST /
```

Create a new Person using their name.

Request Body:


```json
{
  "name": "person_name"
}

```
#### Response

* `201 Created:` Person created successfully.
* `400 Bad Request:` Something went wrong. Returns error message.

## Get person by ID

```
GET /:id
```

Retrieve person information by ID.

### Request Parameters:

* id (number): Person ID
  
#### Response: 


* `200 OK:` Person found. Returns the person's data.
* `404 Not Found:` Person with the provided ID not found.
* `400 Bad Request:` Something went wrong. Returns error message.


## Update Person

```  
PATCH /:id
 ```

Update person name by ID.

### Request Parameters:

* `id`(number): Person ID

#### Request Body

```json
{
  "name": "updated_name"
}
```

#### Response: 


* `200 OK:` Person found. Returns the updated data.
* `404 Not Found:`Person with the provided ID not found.
* `400 Bad Request:` Something went wrong. Returns error message.



## Delete User

```
DELETE /:id
```

Delete a person by ID.

### Request Parameters:

* `id`(number): person ID

#### Response: 


* `204 DELETED:` Person found and deleted.
* `404 Not Found:` Person with the provided ID not found.
* `400 Bad Request:` Something went wrong. Returns error message.

* ## Setup and run
To set up this project, run the following commands on your terminal
```bash
1. Clone the repo `git clone https://github.com/Ayodejidara/hng_backend_task2.git` 
2. Navigate to the project directory `cd hng_backend_task2`
3. Install necessary dependencies `npm install`
4. To run the project `npm run start`

