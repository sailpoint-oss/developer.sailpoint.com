---
id: powershell-sdk
title: PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: PowerShell
sidebar_position: 3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk']
description: Learn how to use the PowerShell SDK in this guide.
slug: /tools/sdk/powershell
tags: ['SDK']
---

## Start using the PowerShell SDK

Learn how to use the PowerShell SDK in this guide. The PowerShell SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow (IDN).

You can find the SDK and its examples in its GitHub repo [here](https://github.com/sailpoint-oss/powershell-sdk).

The PowerShell SDK includes the following functionality: 
- [APIs](#run-an-api-request): 
	- All [V3](/idn/api/v3) and [Beta](/idn/api/beta) APIs are available.
	- The following V2 APIs are available: 

		| Collection | Endpoint | 
		| --- | --- | 
		| Workgroups | GET Workgroup, PATCH Workgroup, DELETE Workgroup, GET Workgroups, POST Workgroups, GET Workgroup Members, POST Workgroup Members, GET Workgroup Connections, POST Bulk Delete Workgroups | 
		| Organizations | GET Organization, PATCH Organization | 
	- The following CC APIs are available: 

		| Collection | Endpoint | 
		| --- | --- | 
		| Accounts | GET Accounts, POST Remove Account | 
		| Applications | GET Applications, GET Application, POST Application, POST Update Application, POST Delete Application, GET Application Access Profiles | 
		| Connectors | GET Connectors, POST Connector, POST Delete Connector, GET Export Connector, POST Import Connector | 
		| User | POST Update User Permissions | 
		| Sources | POST Account Aggregation, GET Export Account Feed | 
		| System | POST Refresh Identities | 
- [Search](#search): You can use IDN's search. To learn more about IDN's search, refer to [Search](https://documentation.sailpoint.com/saas/help/search/index.html).
- [Transforms](#transform): You can use transforms, configurable JSON objects that define easy ways to manipulate attribute data without your needing to write any code. To learn more about IDN's transforms, refer to [Transforms](/idn/docs/transforms).
- [Pagination](#paginate-results): You can use the SDK's pre-built pagination functionality to paginate the responses to your SDK requests. To learn more about pagination, refer to [Paginating Results](/idn/api/standard-collection-parameters#paginating-results).

## Requirements

You need the following to use the PowerShell SDK:

- Your tenant name in IDN. To learn how to find it, refer to [Getting Started](/idn/api/getting-started#find-your-tenant-name). The SDK will use this tenant name to connect to your IDN instance. 

- A PAT with a client secret and ID. To learn how to create one in IDN, refer to [Personal Access Tokens](/idn/api/authentication#personal-access-tokens). The SDK will use this PAT to authenticate with the SailPoint APIs. 

## Setup

To set up your PowerShell SDK, follow these steps: 

1. [Install the SDK](#install-the-sdk)
2. [Configure the SDK](#configure-the-sdk)
3. [Get the default configuration](#get-the-default-configuration)

### Install the SDK 

Install the SDK with this command: 
```PowerShell
Install-Module -Name PSSailpoint
```
This command installs the SailPoint PowerShell SDK modules. You will be prompted to confirm that you are sure you want to install the modules from 'PSGallery'. Enter "A" to say "Yes to All". 

If you already have a version of the PowerShell SDK installed, you can install a new version side-by-side with it by adding the `-Force` parameter to the end of your `Install-Module` commmand. 

### Manually Install the SDK 

The Powershell SDK can be installed manually on Windows when access to the powershell gallery is not available.

:::caution

If you manually install the module on a machine without access to the powershell gallery, you will also need to manually install updates to the SDK

:::

To manually install the PowerShell module:
1. Download the source code zip from the most recent release on [GitHub](https://github.com/sailpoint-oss/powershell-sdk/releases)
2. Open the ZIP file, then open then folder labeled `powershell-sdk-x.x.x` with the `x.x.x` representing the version you downloaded
3. Extract the `PSSailpoint` module folder inside to one of the following locations:
    - To install for the Current user: `C:\Users\<username>\Documents\WindowsPowerShell\Modules\PSSailpoint`
    - To install for All users (requires Administrator privileges): `C:\Program Files\WindowsPowerShell\Modules\PSSailpoint`
4. Run `Import-Module PSSailpoint` to import the module into the current session.
5. To validate the module is installed, run `Get-Module -ListAvailable PSSailpoint` and verify that the module is listed. Additionally, you can run `Get-Command -Module PSSailpoint` to see the available commands included in the module.

### Configure the SDK
To configure the SDK, create a configuration file or save your configuration as environment variables. 
You can use any of the following ways to do so: 

#### Manual Configuration

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
- `baseurl`: This refers to the URL used to access the API of your IDN tenant. 
- `tenanturl`: This refers to the URL used to access your IDN tenant. 
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
  devrel:
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

Save your "config.yaml" file in a folder called ".sailpoint" in your home directory. The SDK will look for this file here when you use PowerShell to get the default configuration. 

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
```PowerShell
$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com
$env:SAIL_CLIENT_ID={clientID}
$env:SAIL_CLIENT_SECRET={clientSecret}
```
To get your environment variables to persist across PowerShell sessions, use these commands instead: 
```PowerShell
[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')
```
### Get the default configuration

If you manually created the "config.yaml" file, you can get the default configuration for your SDK in PowerShell. To get the default configuration, run this command: 
```PowerShell
Get-DefaultConfiguration
```
This command will look for your "config.yaml" file to get your authentication information. Your "config.yaml" file should be located in a folder called ".sailpoint" in your home directory, like in folder path example: "c:\users\adam.archer/.sailpoint\config.yaml"

When this command is successful, the SDK displays your configuration information. 

If the command is unsuccessful, the SDK outputs this message: "Configuration file not found at {folder path}. Please provide a configuration file or configure using PowerShell environment variables." 

To resolve this error, find the configuration file and copy it into the correct the specified folder path and run `Get-DefaultConfiguration` again. 

## Run an example request

Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. The SDK includes some prebuilt examples you can copy into your PowerShell instance to start learning how to use the SDK. 

Use the examples to learn how to do the following: 
- [Run an API request](#run-an-api-request)
  - [Paginate results]
- [Search](#search)
  - [Paginate search results]
- [Transform](#transforms)

### Run an API request

To start using the API, you can copy this example request into your PowerShell instance: 

```PowerShell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored. Because requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'sourceId eq "f4e73766efdf4dc6acdeed179606d694"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **identityId**: *eq*  **name**: *eq, in*  **nativeIdentity**: *eq, in*  **sourceId**: *eq, in*  **uncorrelated**: *eq* (optional)

# Accounts List
try {
    
    Get-Accounts -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling Invoke-ListAccounts: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```
This example calls the Accounts API to list the accounts in your tenant that have the sourceId ""f4e73766efdf4dc6acdeed179606d694"". 

To narrow the results you return and define how many you can return, you can specify these parameters: 
- `$Limit`: The maximum number of records to return per request. The default is 250. 
- `$Offset`: The number of the first record to return with the request. The default is 0. 
- `$Count`: This boolean, if enabled, populates the *X-Total-Count* response header with the number of results that would be returned if `limit` and `offset` were ignored. Because requesting a total count can have a performance impact, it's not recommended to enable `$count` if you aren't using it.
- `$Filters`: You can filter results using the standard syntax described in [Filtering Results](/idn/api/standard-collection-parameters#filtering-results). Filtering is supported for the following fields and operators:  `id`: `eq, in`  `identityId`: `eq`  `name`: `eq, in`  `nativeIdentity`: `eq, in`  `sourceId`: `eq, in`  `uncorrelated`: `eq` 

In the API request example, the limit is set to 250, the count is set to true, and the filters are set to filter for only accounts associated with the source with the ID "f4e73766efdf4dc6acdeed179606d694". 

#### Paginate results

You can paginate your API or transform requests' results by using the syntax shown in this example: 

```PowerShell
$Parameters = @{
    "Filters" = 'name co "Andrew"'
}

# Accounts List
try {

    Invoke-Paginate -Function "Get-Accounts" -Increment 250 -Limit 1000 -InitialOffset 0 -Parameters $Parameters

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Get-Accounts")
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example gets accounts named "Andrew" from your tenant. It can get a maximum of 1000 accounts, the `Limit`, it can get 250 accounts per page, the `Increment`, starting from the first record, the `initialOffset` of 0. 

To paginate the results, you can specify these parameters: 
-`Increment`: The number of records to return per page. 
-`Limit`: The maximum number of records to return per request. The default is 250. 
-`Offset`: The number of the first record to return with the request. The default is 0. 

To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in [Paginating Results](/idn/api/standard-collection-parameters/#paginating-results).

### Search

To start using the SDK to search IDN, you can copy this example into your PowerShell instance: 

```PowerShell
$Json = @"
{
	"indices": [
		"identities"
	],
	"query": {
		"query": "\"john.doe\"",
		"fields": [
		"name"
		]
	}
	}
"@

$Search = ConvertFrom-JsonToSearch -Json $Json

try {
    Search-Post -Search $Search
} catch {
    Write-Host ("Exception occurred when calling Search-Post: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example request uses the [Post Search V3 API endpoint](/idn/api/v3/search-post) to search your tenant for identities with the name "john.doe". 

#### Paginate search results

To paginate search results, use the syntax shown in this example: 

```PowerShell
$JSON = @"
{
	"indices": [
		"identities"
	],
	"query": {
		"query": "*",
		"fields": [
		"name"
		]
	},
	"sort": [
		"-displayName"
	]
	}
"@

$Search = ConvertFrom-JsonToSearch -Json $JSON

try {

    Invoke-PaginateSearch -Increment 50 -Limit 10000 -Search $Search

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Paginate-Search")
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example searches your IDN tenant for all identities and sorts them by their `displayName` in descending order. The search returns a maximum of 1000 records, the `Limit`, and 50 records per page, the `Increment`.  

To paginate the search results, you can specify these parameters: 
-`Increment`: The number of records to return per page. 
-`Limit`: The maximum number of records to return per request. The default is 250. 
-`Offset`: The number of the first record to return with the request. The default is 0. 

### Transform 

To start using the SDK to create, manage, and delete transforms, you can copy this example into your PowerShell instance: 

```PowerShell
# Create transform
$JSON = @"
{
    "name": "New Transform",
    "type": "lookup",
    "attributes" : {
        "table" : {
            "USA": "Americas",
            "FRA": "EMEA",
            "AUS": "APAC",
            "default": "Unknown Region"
        }
    }
}
"@

$Transform = ConvertFrom-JsonToTransform -Json $JSON

 try {
    New-Transform -Transform $Transform
} catch {
    Write-Host ("Exception occurred when calling New-Transform: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example creates a new [Lookup](/idn/docs/transforms/operations/lookup) transform named "New Transform" in your IDN tenant. The transform takes input 3-letter country codes and transforms them into their regions. 

## Get started

You can use this SDK to build new tools that extend your IDN platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss! 



