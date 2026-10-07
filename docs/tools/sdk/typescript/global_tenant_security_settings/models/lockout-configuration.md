# LockoutConfiguration

# LockoutConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximumAttempts** | **(optional)** `number` | The maximum attempts allowed before lockout occurs. | [default to undefined]
**lockoutDuration** | **(optional)** `number` | The total time in minutes a user will be locked out. | [default to undefined]
**lockoutWindow** | **(optional)** `number` | A rolling window where authentication attempts in a series count towards the maximum before lockout occurs. | [default to undefined]

