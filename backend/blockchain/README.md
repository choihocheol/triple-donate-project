# 블록체인 관련 함수들 명세 문서

### login.js => generateKeyring()

새로운 유저의 주소와 private key를 생성하는 함수

- **output**

return value: Object

```json
{
  "address": "0x123...", // 새로운 유저의 주소
  "privateKey": "0x123..." // 새로운 유저의 private key
}
```

### TDKIP7.js => mintTDT(userAddress, amount)

특정 유저에게 TDT를 `amount` 만큼 민팅 하는 함수

- **Input**

| Parameter   | Description            |
| ----------- | ---------------------- |
| userAddress | TDT를 받는 유저의 주소 |
| amount      | 민팅할 TDT 개수        |

- **Output**

return value: Promise

```json
{
  "userAddress": "0x123...", // 유저의 주소
  "balance": "1" // 유저가 현재 소유하고 있는 TDT 토큰의 수
}
```

### TDKIP7.js => burnTDT(userPrivateKey, amount)

특정 유저가 소유하고 있는 TDT를 `amount` 만큼 없애는 함수

- **Input**

| Parameter      | Description                   |
| -------------- | ----------------------------- |
| userPrivateKey | TDT를 없앨 유저의 private key |
| amount         | 없앨 TDT의 개수               |

- **Output**

return value: Promise

```json
{
  "userAddress": "0x123...", // 유저의 주소
  "balance": "1" // 유저가 현재 소유하고 있는 TDT 토큰의 수
}
```

### TDKIP37.js => createNFT(name, description, image)

NFT를 생성하는 함수

- **Input**

| Paramter    | Description         |
| ----------- | ------------------- |
| name        | 생성할 NFT의 이름   |
| description | 생성할 NFT의 설명   |
| image       | 생성할 NFT의 이미지 |

- **Output**

return value: Promise

```json
{
  "nftId": "1", // 생성된 NFT의 ID
  "imageURL": "https://gateway.pinata.cloud/ipfs/..." // NFT 이미지 URL
}
```

### TDKIP37.js => mintNFT(nftId, recipientAddress)

NFT를 특정 유저에게 민팅하는 함수

- **Input**

| Parameter        | Description                 |
| ---------------- | --------------------------- |
| nftId            | 민팅할 NFT의 ID             |
| recipientAddress | NFT를 민팅 받을 유저의 주소 |
