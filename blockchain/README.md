# Triple Donate Contract

Repository contains smart contracts of triple donate.

## Prerequisite

- truffle

## Getting Started

To migrate smart contracts of triple donate, please follow few steps below:

Install dependencies:

```
$ npm install
```

Create `.env` file by copying `.env.template`:

```
$ cp .env.template .env
```

The below table show the descroption of each environment variable in `.env.template`:

| Variable    | Descroption                           |
| ----------- | ------------------------------------- |
| PRIVATE_KEY | Private key of baobab network account |

Migrate smart contracts to baobab:

```
$ truffle migrate --network baobab
```
