# Account Unlock

| Input/Output |  Data Type                |
|:-------------|:-------------------------:|
| Input        | StdAccountUnlockInput       |
| Output       | StdAccountUnlockOutput      |

### Example StdAccountUnlockInput
```javascript
"key": {
    "simple": {
        "id": "john.doe"
    }
}
```
### Example StdAccountUnlockOutput
```javascript
{
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
## Description
The account lock and account unlock commands provide ways to temporarily prevent access to an account. IDN only supports the unlock command, so accounts must be locked on the source level, but they can be unlocked through IDN, and IDN can store the account's status.

Implementing account unlock is similar to the other commands that update attributes on an account. The following code unlocks an account:

```javascript
.stdAccountUnlock(async (context: Context, input: StdAccountUnlockInput, res: Response<StdAccountUnlockOutput>) => {
    let account = await airtable.getAccount(input.key)
    const change: AttributeChange = {
        op: AttributeChangeOp.Set,
        attribute: 'locked',
        value: 'false'
    }
    account = await airtable.changeAccount(account, change)
    res.send(account.toStdAccountUnlockOutput())
})
```