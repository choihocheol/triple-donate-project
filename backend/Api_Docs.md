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
// userId 중복일 경우(400)
{
  "msg":  "UserId is already signup"
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
  "msg": "Success login"
}
// userId 없을경우 (400)
{
  "msg": "UserId is not exist"
}
// password 틀릴경우 (400)
{
  "msg": "Password is not Correct"
}
```

## /user/mylist (GET)
Fetch Logged in User data

- **Response**

```json
// 성공(200)
{
  "msg": "ok",
  "userData" : User Data,
  "postData" : Post Data,
  "nftData" : Nft Data
}
// Error (400)
{
  "msg": Err
}
```

## /user/logout (POST)
Logout user

- **Response**

```json
// 성공(200)
{
  "msg": "Success logout"
}
```
## /post (GET)
Fetch Post data list

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

## /post/save (POST)
Post Save

- **Request**

```json
{
  "title": "Post 제목",
  "nftName" : "nft 이름",
  "nftImage": "Nft 사진",
  "nftDescription": "nft 설명",
  "data": "필요한 Data label",
  "contents": "Post 내용",
}
```

- **Response**

```json
// 성공(200)
{
  "msg": "Success Post save"
}
// TDT 부족 (400)
{
  "msg": "Not sufficient TDT"
}
// Err (400)
{
  "msg": Err
}
```

## /post/fetch/{:seq} (GET)
Get post by seq

- **Response**

```json
// 성공(200)
{
  "data": Post
}
// Seq 오류 (400)
{
  "msg": "Seq is not valid"
}
// Err (400)
{
  "msg": Err
}
```





