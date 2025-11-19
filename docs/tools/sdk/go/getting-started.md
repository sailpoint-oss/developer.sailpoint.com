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

 sailpoint "github.com/sailpoint-oss/golang-sdk"
 v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 resp, r, err := apiClient.V3.TransformsAPI.ListTransforms(ctx).Execute()
 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }
 fmt.Fprintf(os.Stdout, "All Transforms from `TransformsApi.ListTransforms`: %v\n", resp)

}
```

To run the code, run this command:

```go
go run sdk.go
```

You can make changes to the API you are calling by changing this line:

```go
resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Execute()
```

- To call a different version of the APIs, change `V3` to `Beta`, `V2`, or `CC`.
- To call a different API collection, change `TransformsApi` to another collection, like `SourcesApi`, for example.
- To call a different endpoint, change `ListTransforms` to another endpoint, like `GetTransform`, for example.
