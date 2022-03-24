# API Docs

## /user/signup (POST)

Create new user

- **Request**

```json
{
  "userId": "userId",
  "userName" : "abcd",
  "password": "1234"
}
```

- **Response**

```json
// userId 중복일 경우(400)
{
  "msg": "UserId is already signup"
}
// userName 중복일 경우(400)
{
  "msg":  "UserName is already signup"
}
// 성공(200)
{
  "msg":  "Success signup"
}
```

## /user/login (POST)

Login user

- **Request**

```json
{
  "userId": "userId",
  "password": "1234"
}
```

- **Response**

```json
// 성공(200)
{
  "msg": "Success login",
}
// 실패(400)
{
  "msg": "UserName, password is not Correct"
}
```

## /user/logout (POST)

Logout user

- **Response**

```json
// 성공(200)
{
  "msg": "Success logout",
}
```


## /post (GET)

Get Post List

- **Response**

```json
// 성공(200)
{
  "data": {{Post1, Post2, Post3 ...} }
}
// 실패(400)
{
  "msg": err
}
```