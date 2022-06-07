# 목차

- [프로젝트 소개](#프로젝트-소개)
- [사용된 기술 스택](#사용된-기술-스택)
  - [Front-End](#front-end)
  - [Back-End](#back-end)
  - [Blockchain](#blockchain)
- [유저 플로우](#유저-플로우)
- [토큰 이코노미](#토큰-이코노미)
- [API Docs](#api-docs)
- [구현해야 할 기능들 목록](#구현해야-할-기능들-목록)
  - [Bare Minimum](#bare-minimum)
  - [Advanced](#advanced)
- [규칙](#규칙)
- [회의록](#회의록)
- [팀 소개](#팀-소개)

# 프로젝트 소개

<div align="center">
<img src="https://user-images.githubusercontent.com/60258527/157661452-39133fd7-7a88-4705-83b6-e3a33521b5d5.png" alt="logo" width="500">
<h3>Triple Donate</h3>
<br>
<p>Triple Donate는 말 그대로 <b>decentralization, data, dontation</b></p>
<p>
	각각의 의미를 순서대로 가지는 <b>탈 중앙화 데이터 기부 플랫폼</b>입니다.
	<a href="./introduction_detail.md">더보기</a>
</p>

[프로젝트에 대한 더 자세한 설명 및 동작 영상](https://codestates.notion.site/5-3Donate-8b5d560b8ed240648ef46a6d9f361405)

</div>

# 사용된 기술 스택

## Front-End

![](https://img.shields.io/badge/front_end-javascript-yellow?style=for-the-badge&logo=javascript)

![](https://img.shields.io/badge/front_end-react-skyblue?style=for-the-badge&logo=react)

![](https://img.shields.io/badge/front_end-mui-blue?style=for-the-badge&logo=mui)

![](https://img.shields.io/badge/💅%20front_end-styled_components-purple?style=for-the-badge)

## Back-End

![](https://img.shields.io/badge/back_end-express-green?style=for-the-badge&logo=express)

![](https://img.shields.io/badge/back_end-mongodb-olive?style=for-the-badge&logo=mongodb)

## Blockchain

![](https://img.shields.io/badge/blockchain-solidity-red?style=for-the-badge&logo=solidity)

![](https://img.shields.io/badge/blockchain-caver_js-orange?style=for-the-badge)

# 유저 플로우

# 토큰 이코노미

![token_economy](https://user-images.githubusercontent.com/60258527/158715597-dfc0a36c-fe14-4f79-af9b-74192f4d5cf2.jpg)

# API Docs

# 구현해야 할 기능들 목록

## Bare Minimum

- 회원가입 기능 구현
- 로그인(session) 기능 구현
- 마이페이지 기능 구현
  - 보유 토큰량
  - 제안 프로젝트 목록
  - 보유 NFTs
- 게시물 리스트(pagination) 기능 구현
- 게시물 업로드 기능 구현

## Advanced

- 카테고리화된 게시판 구현
- 게시물 조회수 기능 구현
- 악의적인 유저 신고 및 패널티 기능 구현
- TDT swap 기능 구현
- 보유 NFT 개수에 따라 할인되는 기능 구현

# 규칙

1. Github Process: git pull *upstream main => git add => git commit => git push *origin main => pull request
   <br>
   (*upstream: team repository, *origin: personal forked repository)
2. Commit message 작성 시 [commit type convention](https://github.com/pvdlg/conventional-commit-types)은 꼭 지키기
3. 매일 5시는 간단한 회의하는 시간

# 회의록

[회의록 바로가기](./meeting_minutes.md)

# 팀 소개

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Role</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<a href="https://github.com/mingi3442">이민기</a>
			</td>
			<td>Front-End</td>
		</tr>
		<tr>
			<td>
				<a href="https://github.com/djshinnn">신동주</a>
			</td>
			<td>Front-End</td>
		</tr>
		<tr>
			<td>
				<a href="https://github.com/Colvet">김신학</a>
			</td>
			<td>Back-End</td>
		</tr>
		<tr>
			<td>
				<a href="https://github.com/choihocheol">최호철</a>
			</td>
			<td>Blockchain</td>
		</tr>
	</tbody>
</table>
