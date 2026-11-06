# Config Options Read

| Input/Output |        Data Type         |
| :----------- | :----------------------: |
| Input        |  StdConfigOptionsInput   |
| Output       |  StdConfigOptionsOutput  |

### Example StdConfigOptionsInput

```javascript
{
    "key": "cloud-scope"
}
```

### Example StdConfigOptionsOutput

```javascript
{
    "options": {
        "cloud-scope": [
            { "scopeId": "123456789012", "name": "Production" },
            { "scopeId": "210987654321", "name": "Development" }
        ]
    }
}
```

## Description

The config options read command returns the values for a source config field. An admin chooses from these values. If the values come from the source, you cannot list them in `connector-spec.json`. Use this command for these fields.

To use this command, you must specify this value in the `commands` array: `std:config-options:read`

### Add the field to the connector spec

Use a field of type `dynamicCheckboxList` in the `sourceConfig` section of `connector-spec.json`. SailPoint Identity Security shows this field as a searchable list of checkboxes, with options to include all values and to refresh the list.

```json
{
    "key": "cloud-scope",
    "label": "Cloud Scope",
    "required": true,
    "type": "dynamicCheckboxList",
    "valuePath": "$.scopeId"
}
```

| Property    | Description |
| :---------- | :---------- |
| `key`       | The name of the field. SailPoint Identity Security sends this value in `input.key`. |
| `valuePath` | A JSONPath expression that selects the value to save from each option. If the options are objects, use this property. |

### When SailPoint Identity Security calls the command

1. The admin opens the source config page.
2. If SailPoint Identity Security has no saved options for the field, or the admin selects **Refresh**, it sends `std:config-options:read`.
3. The command runs in the background. The field is not available until the command finishes. The command times out after 180 seconds.
4. SailPoint Identity Security saves the options and shows them in the field.

The command receives the source config that the admin saved before. Use `readConfig()` to get the credentials and other values that you need to connect to the source.

### Output values

`output.options` maps the field key to its options. The value can be one of these:

- A string
- An array of strings
- An array of objects with string values. Use `valuePath` to select the value from each object.

## Implementation

```typescript
import {
    ConnectorError,
    Context,
    createConnector,
    readConfig,
    Response,
    StdConfigOptionsInput,
    StdConfigOptionsOutput,
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

export const connector = async () => {
    const config = await readConfig()
    const client = new MyClient(config)

    return createConnector()
        .stdConfigOptions(async (context: Context, input: StdConfigOptionsInput, res: Response<StdConfigOptionsOutput>) => {
            if (input.key !== 'cloud-scope') {
                throw new ConnectorError(`Unsupported config option key: ${input.key}`)
            }
            const scopes: { id: string; name: string }[] = await client.getScopes()
            res.send({
                options: {
                    'cloud-scope': scopes.map((scope) => ({ scopeId: scope.id, name: scope.name })),
                },
            })
        })
}
```
