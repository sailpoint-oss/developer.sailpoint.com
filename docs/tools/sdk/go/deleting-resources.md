---
id: go-sdk-delete
title: Delete resources with the Go SDK
pagination_label: Go SDK
sidebar_label: Delete a resource
sidebar_position: 4
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'delete']
description: Learn how to delete resources with the Golang SDK in this guide.
slug: /tools/sdk/go/delete
tags: ['SDK', 'Software Development Kit']
---

Here is an example script that searches for the Workgroup created in [Create a resource](./creating-resources.md) by name and calls the delete method to remove it from your environment.

```go
package main

import (
 "context"
 "fmt"
 "os"

 sailpoint "github.com/sailpoint-oss/golang-sdk"
 beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 workgroup, r, err := apiClient.Beta.GovernanceGroupsAPI.ListWorkgroups(ctx).Filters(`name eq "DB Access Governance Group"`).Execute()

 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when retrieving workgroup`: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }

 response, errorMessage := apiClient.Beta.GovernanceGroupsAPI.DeleteWorkgroup(ctx, *workgroup[0].Id).Execute()

 if errorMessage != nil {
  fmt.Fprintf(os.Stderr, "Error when updating workgroup`: %v\n", errorMessage)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", response)
 }

 fmt.Fprintf(os.Stdout, "Resource Deleted: %v\n", response.StatusCode)

}
```

To run the code, run this command:

```go
go run sdk.go
```

The deletionStatus is returned by the SDK with a value of 204.
