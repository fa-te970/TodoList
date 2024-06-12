### API Documentation

#### Authentication Routes

**Register a new user**
```
POST /api/auth/register
```
- **Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```
- **Response:**
```json
{
  "message": "User registered successfully"
}
```

**Login a user**
```
POST /api/auth/login
```
- **Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
- **Response:**
```json
{
  "token": "string",
  "userId": "string",
  "username": "string"
}
```

#### Image Routes

**Upload an image**
```
POST /api/images/upload
```
- **Headers:**
    - Authorization: Bearer {token}
- **Form Data:**
    - file: image file
- **Response:**
```json
{
  "message": "Image uploaded and processed",
  "image": {
    "filename": "string",
    "metadata": {
      "size": "number",
      "mimetype": "string"
    },
    "data": "Buffer",
    "emotions": [
      {
        "emotion": "string",
        "confidence": "number",
        "timestamp": "date"
      }
    ],
    "processed": "boolean",
    "user": "string"
  }
}
```

**Get all images for the authenticated user**
```
GET /api/images
```
- **Headers:**
    - Authorization: Bearer {token}
- **Response:**
```json
[
  {
    "_id": "string",
    "filename": "string",
    "metadata": {
      "size": "number",
      "mimetype": "string"
    },
    "data": "Buffer",
    "emotions": [
      {
        "emotion": "string",
        "confidence": "number",
        "timestamp": "date"
      }
    ],
    "processed": "boolean",
    "user": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

**Get a single image by ID**
```
GET /api/images/:id
```
- **Headers:**
    - Authorization: Bearer {token}
- **Response:**
    - Content-Type: image mime type
    - Image data in response body

#### User Routes

**Get current user info**
```
GET /api/users/me
```
- **Headers:**
    - Authorization: Bearer {token}
- **Response:**
```json
{
  "_id": "string",
  "username": "string",
  "email": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

**Update user info**
```
PUT /api/users/:id
```
- **Headers:**
    - Authorization: Bearer {token}
- **Request Body:**
```json
{
  "username": "string",
  "email": "string"
}
```
- **Response:**
```json
{
  "message": "User updated successfully",
  "updatedUser": {
    "_id": "string",
    "username": "string",
    "email": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

**Delete user**
```
DELETE /api/users/:id
```
- **Headers:**
    - Authorization: Bearer {token}
- **Response:**
```json
{
  "message": "User deleted successfully"
}
```

### Mock Data

#### Users
```json
[
  {
    "_id": "60d5ec49b4dcb00022c2581a",
    "username": "user1",
    "email": "user1@example.com",
    "password": "$2a$12$KIX.MtPjK3ihQ2Fv0VV1a.4Gvs4ZVz6Y7OaxWc2v1YIKykBcVbRo6", // hashed password for 'password123'
    "createdAt": "2023-06-15T12:34:56Z",
    "updatedAt": "2023-06-15T12:34:56Z"
  },
  {
    "_id": "60d5ec49b4dcb00022c2581b",
    "username": "user2",
    "email": "user2@example.com",
    "password": "$2a$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36N9Cwr8.Q1Fb6nIvYLGbSW", // hashed password for 'password456'
    "createdAt": "2023-06-15T12:34:56Z",
    "updatedAt": "2023-06-15T12:34:56Z"
  }
]
```

#### Images
```json
[
  {
    "_id": "60d5ec49b4dcb00022c2581c",
    "filename": "image1.jpg",
    "metadata": {
      "size": 12345,
      "mimetype": "image/jpeg"
    },
    "data": "<binary data>",
    "emotions": [
      {
        "emotion": "happy",
        "confidence": 0.9,
        "timestamp": "2023-06-15T12:34:56Z"
      }
    ],
    "processed": true,
    "user": "60d5ec49b4dcb00022c2581a",
    "createdAt": "2023-06-15T12:34:56Z",
    "updatedAt": "2023-06-15T12:34:56Z"
  },
  {
    "_id": "60d5ec49b4dcb00022c2581d",
    "filename": "image2.png",
    "metadata": {
      "size": 23456,
      "mimetype": "image/png"
    },
    "data": "<binary data>",
    "emotions": [
      {
        "emotion": "sad",
        "confidence": 0.85,
        "timestamp": "2023-06-15T12:34:56Z"
      }
    ],
    "processed": true,
    "user": "60d5ec49b4dcb00022c2581b",
    "createdAt": "2023-06-15T12:34:56Z",
    "updatedAt": "2023-06-15T12:34:56Z"
  }
]
```
