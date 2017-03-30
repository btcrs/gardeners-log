# gardeners-log 

![banner](./img/log.png)

> Serverless gateway for a CRUD API that maintains my garden's data

This API was built to serve and recieve data entries from various IOT sensors. The 
data's schema is very simple and expected to be arrive on a semi-regular basis. Data is meant 
to be accessible by everyone, but modified only by authenticated users. Data is sent to the API 
autonomously, so creation of entries requires only an API key. However, detetion and modification
of data, both user actions, requires an Oauth token to be sent with the request. 

This API is currently hosted with AWS Lambda, so the authorized functions found in the authentication 
module are used to grant or deny access.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install

The project utilizes the `Serverless` framework. Assuming you have `Serverless` installed 
and your AWS account confiured, installation requires only a single command.

```serverless deploy```

Make sure to update the `api` authorizers with your authentication function's URL.

## Usage

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/datum --data '{ }'
```

### Read all

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/datum
```

### Read one

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/datum/<id>
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/datum/<id> --data '{}'
```

### DELETE

```bash
curl -X DELETE https://XXXX.execute-api.region.amazonaws.com/dev/datum/<id>
```
## Contribute

PRs accepted.

## License

MIT © Ben Carothers
