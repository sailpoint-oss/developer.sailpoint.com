---
id: go-sdk-error-handling
title: Error handling with the Go SDK
pagination_label: Go SDK
sidebar_label: Error Handling
sidebar_position: 8
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'error']
description: Learn how to handle errors with the Golang SDK in this guide.
slug: /tools/sdk/go/error-handling
tags: ['SDK', 'Software Development Kit']
---

The SDK returns the response object, request and error object for each method. The error object will be defined for any response status that falls out of the range of 2xx.

You can use an `if` statement to check whether there are any errors with the request and take actions on the results, such as logging the message or performing additional actions before exiting the program:

```go
resp, r, err := apiClient.V3.TransformsAPI.ListTransforms(ctx).Filters("This is an incorrect string").Execute()
if err != nil {
 fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\n", err)
 fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
}
```

The program will continue running unless you specify to end it. Use `os.Exit(0)` within the error check to stop execution after an error is found.

```go
resp, r, err := apiClient.V3.TransformsAPI.ListTransforms(ctx).Filters("This is an incorrect string").Execute()
if err != nil {
 fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\n", err)
 fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 os.Exit(0)
}
```
