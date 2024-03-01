---
id: go-sdk-create
title: Creating resources with the Go SDK
pagination_label: Go SDK
sidebar_label: Create a resource
sidebar_position: 2
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'create']
description: Learn how to create new resources the Golang SDK in this guide. 
slug: /tools/sdk/go/create
tags: ['SDK', 'Software Development Kit']
---

Here is an example create workgroup script from the beta APIs you can copy into your "sdk.go" instance to try it out:

```go showLineNumbers
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

 resp, _, err := apiClient.V3.PublicIdentitiesApi.GetPublicIdentities(ctx).Limit(1).Execute()

 identity := "IDENTITY"
 workgroupName := "DB Access Governance Group"
 workgroupDescription := "Description of the Governance Group"

 workgroup := beta.WorkgroupDto{
  Name:        &workgroupName,
  Description: &workgroupDescription,
  Owner: &beta.OwnerDto{
   Id:   resp[0].Id,
   Name: resp[0].Name,
   Type: &identity,
  },
 }

 newWorkgroup, request, errMessage := apiClient.Beta.GovernanceGroupsApi.CreateWorkgroup(ctx).WorkgroupDto(workgroup).Execute()

 if errMessage != nil {
  fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsApi.CreateWorkgroup``: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", request)
 }

 b, _ := json.MarshalIndent(newWorkgroup, "", "  ")
 fmt.Fprint(os.Stdout, string(b))
}
```

The example uses the `GetPublicIdentities` method from the `PublicIdentitiesApi` to pull an identity needed to be the owner of the Workgroup.

On lines 20-32 the new workgroup object is initialized and sent to the `CreateWorkgroup` method on line 34.

To run the code, run this command:

```go
go run sdk.go
```

The WorkGroup is assigned to the `newWorkgroup` variable and the details are printed out:

```json
{
  "created": null,
  "description": "Description of the Governance Group",
  "modified": null,
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
