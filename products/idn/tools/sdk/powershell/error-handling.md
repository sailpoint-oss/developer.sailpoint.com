---
id: powershell-sdk-error-handling
title: Error Handling with the PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: Error Handling
sidebar_position: 7
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk', 'error']
description: Learn how to delete resources using the PowerShell SDK in this guide.
slug: /tools/sdk/powershell/error-handling
tags: ['SDK']
---

The SDK uses the Invoke-WebRequest cmdlet to handle HTTP requests. Invoke-WebRequest will throw a terminating error for any response that falls out of the range of 2xx. A non-2xx response will immediately halt the program and produce a stack trace.

Using a try/catch function, you can intercept any non success response and take actions on the results, such as logging the message or performing additional actions before exiting the program.

```powershell
# Catch any non 2xx response and log the status code and error message
try {
    Get-Transforms -Filters "id eq" 
}
catch {
    Write-Host $_.Exception.Response.StatusCode.value__
    Write-Host $_.ErrorDetails
}
```

Using the catch block will handle the error and the script execution will continue. If you wish to stop the scripts execution, include an `Exit` in the catch block.

In the following code, the `Get-AccessProfiles` cmdlet will never be called.

```powershell
# Catch any non 2xx response and log the status code and error message. Stop the script with the Exit keyword.
try {
    Get-Transforms -Filters "id eq" 
}
catch {
    Write-Host $_.Exception.Response.StatusCode.value__
    Write-Host $_.ErrorDetails
    Exit
}

Get-AccessProfiles
```
