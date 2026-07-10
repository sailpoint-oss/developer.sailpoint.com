---
id: go-sdk-search
title: Search with the Go SDK
pagination_label: Go SDK
sidebar_label: Search
sidebar_position: 5
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'search']
description: Learn how to search with the Golang SDK in this guide.
slug: /tools/sdk/go/search
tags: ['SDK', 'Software Development Kit']
---

To try using the ISC [search functionality](/docs/api/search-post-v-1) along with pagination, create a file in your project called `sdk.go` with the following content:

```go
package main

import (
 "context"
 "fmt"
 "os"

 sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
 api_search "github.com/sailpoint-oss/golang-sdk/v3/search"
)

func main() {

 ctx := context.TODO()
 configuration := sailpoint.NewDefaultConfiguration()
 apiClient := sailpoint.NewAPIClient(configuration)

 search := api_search.NewSearchWithDefaults()
 search.Indices = append(search.Indices, "identities")
 searchString := []byte(`
 {
 "indices": [
  "identities"
 ],
 "query": {
  "query": "*"
 },
    "sort": [
        "-name"
    ]
 }
   `)
 search.UnmarshalJSON(searchString)
 resp, r, err := sailpoint.Paginate[map[string]interface{}](apiClient.SearchAPI.SearchPostV1(ctx).Search(*search), 0, 10, 10000)
 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when calling `SearchAPI.SearchPostV1``: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }
 // response from `search`
 for i := 0; i < len(resp); i++ {
  fmt.Println(resp[i]["name"])
 }

}
```

To run the search, run this command: `go run sdk.go` This example lists all the identities it finds in your tenant.

There are two ways to configure the search:

1. You can edit the `searchString` JSON:

```go showLineNumbers
 searchString := []byte(`
 {
 "indices": [
  "identities"
 ],
 "query": {
  "query": "*"
 },
    "sort": [
        "-name"
    ]
 }
   `)
```

In this example, changing the `"indices"` on line 3 from `"identities"` to `"access profiles"` makes the search return access profiles instead of identities.

2. You can edit the string at the end of this `search.Indices` line to do the same thing as a shortcut:

```go
search.Indices = append(search.Indices, "identities")
```

In this example, the `"identities"` string represents an unmarshalled JSON. Changing `append(search.Indices, "identities")` to `append(search.Indices, "access profiles")` does the same thing that editing the `searchString` JSON does.

### Paginate search results

The search example includes the syntax you can use to paginate search results. Edit this line to configure the search result pagination:

```go
resp, r, err := sailpoint.Paginate[map[string]interface{}](apiClient.SearchAPI.SearchPostV1(ctx).Search(*search), 0, 10, 10000)
```

The first value refers to the `initialOffset`, the starting number for the results, the second refers to the `increment`, the number of records per page, and the third refers to the `limit`, the last record that can be returned.

For example, changing the first number to `21`, the second to `20`, and the third to `40` would configure the search to return records 21 to 40 and then stop.
