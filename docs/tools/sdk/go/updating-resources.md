---
id: go-sdk-patch
title: Updating resources with the Go SDK
pagination_label: Go SDK
sidebar_label: Update a resource
sidebar_position: 3
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'update']
description: Learn how to update resources with the Golang SDK.
slug: /tools/sdk/go/update
tags: ['SDK', 'Software Development Kit']
---

Here is an example update WorkGroup script which will update the description for the previously created Workgroup from [Create a Resource](./creating-resources.md):

```go
package main

import (
 "context"
 "encoding/json"
 "fmt"
 "os"

 sailpoint "github.com/sailpoint-oss/golang-sdk"
 "github.com/sailpoint-oss/golang-sdk/beta"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 workgroup, r, err := apiClient.Beta.GovernanceGroupsApi.ListWorkgroups(ctx).Filters(`name eq "DB Access Governance Group"`).Execute()

 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when retrieving workgroup`: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }

 updatedDescription := `This is an updated description for the workgroup.`
 newDescriptionValue := beta.JsonPatchOperationValue{String: &updatedDescription}
 patchArray := []beta.JsonPatchOperation{{Op: "replace", Path: "/description", Value: &newDescriptionValue}}

 updatedWorkgroup, request, errorMessage := apiClient.Beta.GovernanceGroupsApi.PatchWorkgroup(ctx, *workgroup[0].Id).JsonPatchOperation(patchArray).Execute()

 if errorMessage != nil {
  fmt.Fprintf(os.Stderr, "Error when updating workgroup`: %v\n", errorMessage)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", request)
 }

 b, _ := json.MarshalIndent(updatedWorkgroup, "", "  ")
 fmt.Fprint(os.Stdout, string(b))

}

```

To run the code, run this command:

```go
go run sdk.go
```

The updated WorkGroup will be returned by the SDK:

```json
{
  "created": "2023-12-04T19:37:28Z",
  "description": "This is an updated description for the workgroup.",
  "modified": "2023-12-04T19:37:28Z",
  "name": "DB Access Governance Group",
  "owner": {
    "displayName": "Brian Mendoza",
    "emailAddress": null,
    "id": "0003c25c365e492381d4e557b6159f9b",
    "name": "Brian Mendoza",
    "type": "IDENTITY"
  }
}
```
