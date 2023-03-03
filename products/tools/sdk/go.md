---
id: go-sdk
title: Go SDK
pagination_label: Go SDK
sidebar_label: Golang
sidebar_position: 1
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk']
description: Learn how to use the Golang SDK in this guide. 
slug: /tools/sdk/go
tags: ['SDK']
---

## Start using the Go SDK

Learn how to use the Golang SDK in this guide. The Go SDK has some pre-built code examples you can use to build tools that can interact with IdentityNow (IDN).

The Go SDK includes the following functionality:

- [APIs](#apis): 
	- All [V3](https://developer.sailpoint.com/idn/api/v3) and [Beta](https://developer.sailpoint.com/idn/api/beta) APIs are available.
	- The following V2 APIs are available: 
		| Collection | Endpoint | 
		| --- | --- | 
		| Workgroups | GET Workgroup<br>PATCH Workgroup<br>DELETE Workgroup<br>GET Workgroups<br>POST Workgroups<br>GET Workgroup Members<br>POST Workgroup Members<br>GET Workgroup Connections<br>POST Bulk Delete Workgroups | 
		| Organizations | GET Organization <br>PATCH Organization | 
	- The following CC APIs are available: 
		| Collection | Endpoint | 
		| --- | --- | 
		| Accounts | GET Accounts<br>POST Remove Account | 
		| Applications | GET Applications<br>GET Application<br>POST Application<br>POST Update Application<br>POST Delete Application<br>GET Application Access Profiles | 
		| Connectors | GET Connectors<br>POST Connector<br>POST Delete Connector<br>GET Export Connector<br>POST Import Connector | 
		| User | POST Update User Permissions | 
		| Sources | POST Account Aggregation<br>GET Export Account Feed | 
		| System | POST Refresh Identities | 

- [Search](#search): You can use IDN's search. To learn more about IDN's search, refer to [Search](https://documentation.sailpoint.com/saas/help/search/index.html).

- [Transforms](#transforms): You can use transforms, configurable JSON objects that define easy ways to manipulate attribute data without your needing to write any code. To learn more about IDN's transforms, refer to [Transforms](https://developer.sailpoint.com/idn/docs/transforms).

- [Pagination](#pagination): You can use the SDK's pre-built pagination functionality to paginate the responses to your SDK requests. To learn more about pagination, refer to [Paginating Results](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results).

## Requirements

You need the following to use the Go SDK:

- Golang version 1.18 or above. You can download it [here](https://go.dev/dl/). You can use `go version` to check your version. 

- Your tenant name in IDN. To learn how to find it, refer to [Getting Started](https://developer.sailpoint.com/idn/api/getting-started#find-your-tenant-name). The SDK will use this tenant name to connect to your IDN instance. 

- A PAT with a client secret and ID. To learn how to create one in IDN, refer to [Personal Access Tokens](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens). The SDK will use this PAT to authenticate with the SailPoint APIs. 

## Setup

To set up your Go SDK, follow these steps:
1. [Create a Go module for the SDK](#create-a-go-module-for-the-sdk)
2. [Create a Go application for the SDK](#create-a-go-application-for-the-sdk)
3. [Configure the SDK](#configure-the-sdk)
4. [Install the SDK](#install-the-sdk)
5. [Run the example request](#run-the-example-api-request)

### Create a Go module for the SDK
 Use the `go mod init github.com/github-repo-name/projectname` command to create your project. This command creates a "go.mod" file in your project. This "go.mod" file defines your Go module's properties, including its dependencies on other modules and on versions of Go. The "go.mod" file will list your Go module's module path and your current version of Go. 


### Create a Go application for the SDK
Create an "sdk.go" file in your project and copy this code example into the file to get started:

```go
package main

import (
    "context"`
    "fmt"
    "os"

    sailpoint "github.com/sailpoint-oss/golang-sdk/sdk-output"
 )

func main() {

	ctx := context.TODO()
	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)

	resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()
	if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAccounts`: []Account
	fmt.Fprintf(os.Stdout, "First response from `AccountsApi.ListAccount`: %v\n", resp[0].Name)

}
```
You'll be able to use this code example to run the application. The application will call the [Accounts List](https://developer.sailpoint.com/idn/api/v3/list-accounts) V3 API endpoint to get the accounts in your tenant and return the first account it finds. 

Your project should now have both a "go.mod" file and an "sdk.go" file. 

### Configure the SDK
To configure the SDK, create a configuration file or save your configuration as environment variables. 
You can use any of the following ways to do so: 

#### Manual configuration 
One way to create a configuration file is to create a "config.yaml" file in your project and specify the following information in it: 

```yaml
activeenvironment: example # the key that identifies the currently active environment
authtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value
customexporttemplatespath: "" # the path to the users custom export templates file if one is provided
customsearchtemplatespath: "" # the path to the users custom search templates file if one is provided
debug: false # the debug setting  
environments: # the configured environments  
  example:
    baseurl: https://example.api.identitynow.com
    pat:
      accesstoken: example-access-token
      clientid: example-client-id
      clientsecret: example-client-secret
      expiry: example-access-token-expiry
    tenanturl: https://example.identitynow.com
```

You must specify the following information: 
- `activeenvironment`: This key identifies the current active environment the SDK is connecting to. This environment name refers to your IDN tenant name. In the example, the key is "example". You must also make sure the environment name listed under `environments` matches the `activeenvironment`. 
- `authtype`: The authentication type. Currently only "pat" and "pipeline" are supported. Configuring ENV VAR SAIL_AUTH_TYPE to "pipeline" overrides this value. In the example, the authentication type is "pat". You must also make sure the authentication type listed under the environment name "example" matches the `authtype`. 
- `baseurl` and `tenanturl`: These refer to your IDN tenant URL. 
- `clientsecret`: The PAT's client secret. 
- `clientid`: The PAT's client ID. 

Here's an example: 

```yaml
activeenvironment: devrel # the key that identifies the currently active environment
authtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value
customexporttemplatespath: "" # the path to the users custom export templates file if one is provided
customsearchtemplatespath: "" # the path to the users custom search templates file if one is provided
debug: false # the debug setting  
environments: # the configured environments 
  example:
    baseurl: https://devrel.api.identitynow.com
    pat:
      accesstoken: example-access-token
      clientid: g0567b766b413b22c05c66e75d532f1b
      clientsecret: cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7
      expiry: example-access-token-expiry
    tenanturl: https://devrel.identitynow.com
```

You can also specify this optional information: 
- `customexporttemplatespath`: Specifies the folder path to save your custom export templates file in. 
- `customsearchtemplatespath`: Specifies the folder path to save your custom search templates file in.
- `debug`: The debug setting. By default, it's set to "false".
- `accesstoken`: The PAT's name. 
- `expiry`: The PAT's expiry date.

#### CLI assisted configuration 
Another way to create a configuration file is to use the SailPoint CLI. To learn how to use the SailPoint CLI to create a configuration file, refer to [Assisted Configuration](https://github.com/sailpoint-oss/sailpoint-cli#manual-configuration).

#### Environment variable configuration 
You can also store your configuration in environment variables. 

On **Linux/Mac**, export the following environment variables:
```shell
export SAIL_BASE_URL=https://{tenant}.api.identitynow.com
export SAIL_CLIENT_ID={clientID}
export SAIL_CLIENT_SECRET={clientSecret}
```
To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like `~/.bash_profile`.
On **Windows PowerShell**, run the following commands: 
```powershell
$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com
$env:SAIL_CLIENT_ID={clientID}
$env:SAIL_CLIENT_SECRET={clientSecret}
```
To get your environment variables to persist across PowerShell sessions, use these commands instead: 

```powershell
[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')
```

### Install the SDK
Install the SDK with the `go mod tidy` command. Using `go mod tidy` downloads the required dependencies from the source files and updates the "go.mod" file to match those dependencies.

### Run the example API request
Run the example request with the `go run sdk.go` command.

You can use this example request as a model for how to call APIs and configure your error messages: 

```go
package main

import (
    "context"
    "fmt"
    "os"

    sailpoint "github.com/sailpoint-oss/golang-sdk/sdk-output"
 )

func main() {

	ctx := context.TODO()
	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)

	resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()
	if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAccounts`: []Account
	fmt.Fprintf(os.Stdout, "First response from `AccountsApi.ListAccount`: %v\n", resp[0].Name)

}
```

The example API request calls the SailPoint [Accounts List](https://developer.sailpoint.com/idn/api/v3/list-accounts) V3 API endpoint to get the accounts in your tenant and returns the first account it finds. 

In this line, you can make changes to the API you're calling: 

```go
resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()
``` 

- To call a different version of the APIs, change `V3` to `Beta`, `V2`, or `CC`. 
- To call a different API collection, change `AccountsApi` to another collection, like `SourcesApi`, for example. 
- To call a different endpoint, change `ListAcounts` to another endpoint, like `GetAccountEntitlements`, for example.

## Other functionality

Once you are configured and you have your SDK running, you can start trying out the SDK's other functionality. 

Read further to learn more about the following functionality: 
- [APIs](#apis)
- [Paginating results](#paginating-results)
- [Search](#search)
- [Paginating search results](#paginating-search-results)
- [Transforms](#transforms)

### API
You can manipulate the example API request to call different APIs and write different messages for the users. 

In this line, you can make changes to the API you're calling: 

```go
resp, r, err := apiClient.V3.AccountsApi.ListAccounts(ctx).Execute()
``` 

- To call a different version of the APIs, change `V3` to `Beta`, `V2`, or `CC`. 
- To call a different API collection, change `AccountsApi` to another collection, like `SourcesApi`, for example. 
- To call a different endpoint, change `ListAcounts` to another endpoint, like `GetAccountEntitlements`, for example.

You can edit the messages produced for successful responses as well as errors in the following lines by editing the messages enclosed in the quotes. 

### Pagination
The SDK has a built-in pagination function you can use to automatically call and collect responses from the APIs that support pagination. Use this syntax to call it: 

```go
import (
	"context"
	"fmt"
	"os"

	sailpoint "github.com/sailpoint-oss/golang-sdk/sdk-output"
	// You must import the v3 library so the SDK is aware of the sailpointsdk.Account struct.
	sailpointsdk "github.com/sailpoint-oss/golang-sdk/sdk-output/v3"
)

func main() {

	ctx := context.TODO()
	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)

	// Use the paginate function to get 1000 results instead of hitting the normal 250 limit
	resp, r, err := sailpoint.PaginateWithDefaults[sailpointsdk.Account](apiClient.V3.AccountsApi.ListAccounts(ctx))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAccounts`: []Account
	fmt.Fprintf(os.Stdout, "First response from `AccountsApi.ListAccount`: %v\n", resp[0].Name)

}

```

To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in [Paginating Results](https://developer.sailpoint.com/idn/api/standard-collection-parameters/#paginating-results).

### Search 

To try using the IDN [search functionality](https://developer.sailpoint.com/idn/api/v3/search-post) along with pagination, copy this code into your "sdk.go" file following the main code:

```go
func getSearchResults(ctx context.Context, apiClient *sailpoint.APIClient) {
	search := v3.NewSearchWithDefaults()
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
	resp, r, err := sailpoint.PaginateSearchApi(ctx, apiClient, *search, 0, 10, 10000)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsApi.ListAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `search`
	for i := 0; i < len(resp); i++ {
		fmt.Println(resp[i]["name"])
	}
}
```

Use `go run sdk.go` to run the search. This example lists all the identities it finds in your tenant.

There are two ways to configure the search: 
1. You can edit the `searchString` JSON:
```go
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
In this example, changing the `"indices"` from `"identities"` to `"access profiles"` makes the search return access profiles instead of identities. 

2. You can edit the string at the end of this `search.Indices` line to do the same thing as a shortcut: 

```go
search.Indices = append(search.Indices, "identities")
```

In this example, the `"identities"` string represents an unmarshalled JSON. Changing `append(search.Indices, "identities")` to `append(search.Indices, "access profiles")` does the same thing editing the `searchString` JSON does.

### Paginating search results
The search example includes the syntax you can use to paginate search results. Edit this line to configure the search result pagination: 

```go
resp, r, err := sailpoint.PaginateSearchApi(ctx, apiClient, *search, 0, 10, 10000)
```

The first value refers to the `initialOffset`, the starting number for the results, the second refers to the `increment`, the number of records per page, and the third refers to the `limit`, the last record that can be returned. 

For example, changing the first number to `21`, the second to `20`, and the third to `40` would configure the search to return records 21 to 40 and then stop. 

### Transforms

Transforms refer to configurable objects you can use to manipulate data without using code. The SDK includes all the transforms SailPoint has created. To learn more about the transforms that are available, refer to [Operations](https://developer.sailpoint.com/idn/docs/transforms/operations). To learn more about transforms and how to write your own, refer to [Transforms](https://developer.sailpoint.com/idn/docs/transforms)

To try using the IDN [transform functionality](https://developer.sailpoint.com/idn/api/v3/transforms), copy this code into your "sdk.go" file: 

```go
func getTransformResults(ctx context.Context, apiClient *sailpoint.APIClient) {
	resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.GetTransformsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	b, _ := json.Marshal(resp[0].Attributes)
	fmt.Fprintf(os.Stdout, "First response from `TransformsApi.GetTransformsList`: %v\n", string(b))
}
```

This example calls the [List Transforms](https://developer.sailpoint.com/idn/api/v3/list-transforms) V3 API endpoint to get the transforms in your tenant and list the results for the first transform it finds, along with the transform inputs and outputs. 

## Get started

You can use this SDK to build new tools that extend your IDN platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss! 

