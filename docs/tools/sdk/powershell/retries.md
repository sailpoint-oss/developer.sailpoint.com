# Retries with the PowerShell SDK

The SDK supports retry logic in the case of an unexpected error. You have these two retry configuration options:

- MaximumRetryCount - How many times to retry the request. Default is 10 retries.
- RetryIntervalSeconds - How many seconds to wait between retries. Default is 5 seconds.

The following code will tell the SDK to retry 2 times after an unexpected error and wait 3 seconds between retries.

```powershell
Set-DefaultConfiguration -MaximumRetryCount 2 -RetryIntervalSeconds 3
```
