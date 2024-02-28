---
id: go-sdk-paginate
title: Paginate results with the Go SDK
pagination_label: Go SDK
sidebar_label: Paginate Results
sidebar_position: 5
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'paginate']
description: Learn how to paginate results with the Golang SDK in this guide. 
slug: /tools/sdk/go/paginate
tags: ['SDK', 'Software Development Kit']
---

By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to [Paginating Results](/docs/api/standard-collection-parameters/#paginating-results).

Pagination is implemented with the SDK in the following code block on line 18:

```go showLineNumbers
package main

import (
 "context"
 "fmt"
 "os"

 sailpoint "github.com/sailpoint-oss/golang-sdk"
 v3 "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 resp, r, err := sailpoint.PaginateWithDefaults[v3.Account](apiClient.V3.AccountsApi.ListAccounts(ctx))
 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when calling `PaginateWithDefaults[v3.Account]``: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }
 // response from `ListAccounts`: []Account
 fmt.Fprintf(os.Stdout, "First response from `PaginateWithDefaults[v3.Account]`: %v\n", resp[0].Name)
}
```

The `PaginateWithDefaults` function takes a return type, `v3.Account`, and the list method to invoke, in this case `ListAccounts` from the AccountsApi. By default, the `PaginateWithDefaults` method gets 10000 results at an increment of 250.

To change the limit and increment, you can use the available 'Paginate' function:

```go
package main

import (
 "context"
 "fmt"
 "os"

 sailpoint "github.com/sailpoint-oss/golang-sdk"
 v3 "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 resp, r, err := sailpoint.Paginate[v3.Account](apiClient.V3.AccountsApi.ListAccounts(ctx), 0, 250, 150000)
 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when calling `Paginate[v3.Account]``: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }
 // response from `ListAccounts`: []Account
 fmt.Fprintf(os.Stdout, "First response from `Paginate[v3.Account]`: %v\n", resp[0].Name)
}
```

You must provide the `Paginate` function with the following: the return type, `v3.Account`, the list endpoint, `ListAccounts`, the initial offset, `0`, the increment, `250`, and the limit, `150000`.
