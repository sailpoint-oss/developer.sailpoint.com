---
id: go-sdk-getting-started
title: Getting started with the Go SDK
pagination_label: Go SDK
sidebar_label: Getting Started
sidebar_position: 1
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'start']
description: Learn how to use the Golang SDK in this guide.
slug: /tools/sdk/go/getting-started
tags: ['SDK', 'Software Development Kit']
---

Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. This guide will walk through some examples of this functionality. To learn how to install and configure the Golang SDK, refer to [Installation and Configuration](./index.mdx).

### List transforms

Create a file in your project called `sdk.go` with the following content:

```go
package main

import (
 "context"
 "fmt"
 "os"

 sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 resp, r, err := apiClient.TransformsAPI.ListTransformsV1(ctx).Execute()
 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.ListTransformsV1``: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }
 fmt.Fprintf(os.Stdout, "All Transforms from `TransformsAPI.ListTransformsV1`: %v\n", resp)

}
```

To run the code, run this command:

```go
go run sdk.go
```

You can make changes to the API you are calling by changing this line:

```go
resp, r, err := apiClient.TransformsAPI.ListTransformsV1(ctx).Execute()
```

- To call a different API collection, change `TransformsAPI` to another collection, like `SourcesAPI`, for example.
- To call a different endpoint, change `ListTransformsV1` to another endpoint, like `GetTransformV1`, for example. Each method name includes the endpoint's version as a suffix (for example, `V1`).
