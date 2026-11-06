# Account Read

## Overview

Use these commands to intercept the [account-read](../../commands/account-read) command.

| Input/Output |      Data Type       |
| :----------- | :------------------: |
| Input        | StdAccountReadInput  |
| Output       | StdAccountReadOutput |

### Example StdAccountReadInput

```javascript
"identity": "john.doe",
"key": {
    "simple": {
        "id": "john.doe"
    }
}
```

### Example StdAccountReadOutput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "disabled": false,
    "locked": false,
    "attributes": {
        "id": "john.doe",
        "displayName": "John Doe",
        "email": "example@sailpoint.com",
        "entitlements": [
            "administrator",
            "sailpoint"
        ]
    }
}
```

## Implementation

### Before account-read command

Use this logic to implement the command:

```javascript
    .beforeStdAccountRead(async (context: Context, input: StdAccountReadInput) => {
        logger.info(`Running before account, for account ${input.identity}`)
        return input
    })
```

The `input` object can be mutated and returned, but the same data type must still be returned.

### After account-read command

Use this logic to implement the command:

```javascript
    .afterStdAccountRead(async (context: Context, output: StdAccountReadOutput) => {
        logger.info(`Running after account read for account ${output.identity}`)
        return output
    })
```

The `output` object can be mutated and returned, but the same data type must still be returned.
