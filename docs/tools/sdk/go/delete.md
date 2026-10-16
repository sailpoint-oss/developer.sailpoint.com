# Delete resources with the Go SDK

Here is an example script that searches for the Workgroup created in [Create a resource](./creating-resources.md) by name and calls the delete method to remove it from your environment.

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

 workgroup, r, err := apiClient.GovernanceGroupsAPI.ListWorkgroupsV1(ctx).Filters(`name eq "DB Access Governance Group"`).Execute()

 if err != nil {
  fmt.Fprintf(os.Stderr, "Error when retrieving workgroup`: %v\n", err)
  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 }

 response, errorMessage := apiClient.GovernanceGroupsAPI.DeleteWorkgroupV1(ctx, *workgroup[0].Id).Execute()

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
