---
id: entitlement-read
slug: /idn/saas-connectivity/commands/entitlement-read
---
# Entitlement Read

>📘 At this time Entitlement Read is not triggered from IDN for any specific workflow and as such it is not necessary to implement this in order to have a fully functional connector.

| Input/Output |  Data Type                  |
|:-------------|:---------------------------:|
| Input        | StdEntitlementReadInput       |
| Output       | StdEntitlementReadOutput      |

### Example StdEntitlementReadInput
```javascript
{
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "type": "group"
}
```
### Example StdEntitlementReadOutput
```javascript
{
    "key": {
        "simple": {
            "id": "administrator"
        }
    },
    "type": "group",
    "attributes": {
        "id": "administrator",
        "name": "Administrator"
    }
}
```
## Response Schema

Entitlement read fetches a single entitlement’s attributes and returns the resulting object to IDN, similar to how entitlement list does. You can implement this in the main connector file, [index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts): 

```javascript
...
.stdEntitlementRead(async (context: Context, input: StdEntitlementReadInput, res: Response<StdEntitlementReadOutput>) => {
    const group = await airtable.getEntitlement(input.key)

    res.send(group.toStdEntitlementReadOutput())
})
...
...
...
public toStdEntitlementReadOutput(): StdEntitlementReadOutput {
    return this.buildStandardObject();
}

private buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {
    return {
        key: SimpleKey(this.id),
        type: 'group',
        attributes: {
            id: this.id,
            name: this.name
        }
    }
}
```