---
id: go-sdk-retries
title: Retries with the Go SDK
pagination_label: Go SDK
sidebar_label: Retries
sidebar_position: 7
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'retry']
description: Learn how to paginate results with the Golang SDK in this guide. 
slug: /tools/sdk/go/retries
tags: ['SDK', 'Software Development Kit']
---

The SDK uses the [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) module to support retry logic. 

On line 17-18 of the following example, the SDK is set to retry if there is an unexpected error up to 10 times and wait 2 seconds between each retry:

```go showLineNumbers
package main

import (
 "context"
 "fmt"
 "os"

 sailpoint "github.com/sailpoint-oss/golang-sdk"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 configuration.HTTPClient.RetryMax = 10
 configuration.HTTPClient.RetryWaitMax = time.Second * 2

 resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Filters("This is an incorrect string").Execute()
 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }
 // response from `ListAccounts`: []Account
 fmt.Fprintf(os.Stdout, "First response from `TransformsApi.ListTransforms`: %v\n", resp)

}
```
