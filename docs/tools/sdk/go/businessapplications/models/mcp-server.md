# MCPServer

# MCPServer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | MCP server ID. | [optional] 
**ServerName** | Pointer to **string** | MCP server name. | [optional] 
**SanctionedStatus** | Pointer to **SanctionedStatus** | Sanctioned status of the MCP server. MCP servers are currently always `UNKNOWN`. | [optional] 
**Description** | Pointer to **NullableString** | MCP server description. | [optional] 
**Version** | Pointer to **NullableString** | MCP server version. | [optional] 
**Remotes** | Pointer to **[]string** | Remote endpoints the MCP server can be reached at. | [optional] 
**Packages** | Pointer to [**[]MCPPackage**](mcp-package) | Packages the MCP server can be installed or launched from. | [optional] 
**ConnectedAgentCount** | Pointer to **int64** | Number of AI agents connected to the MCP server. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time the MCP server was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | Date and time the MCP server was last modified. | [optional] 

## Methods

### NewMCPServer

`func NewMCPServer() *MCPServer`

NewMCPServer instantiates a new MCPServer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMCPServerWithDefaults

`func NewMCPServerWithDefaults() *MCPServer`

NewMCPServerWithDefaults instantiates a new MCPServer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MCPServer) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MCPServer) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MCPServer) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MCPServer) HasId() bool`

HasId returns a boolean if a field has been set.

### GetServerName

`func (o *MCPServer) GetServerName() string`

GetServerName returns the ServerName field if non-nil, zero value otherwise.

### GetServerNameOk

`func (o *MCPServer) GetServerNameOk() (*string, bool)`

GetServerNameOk returns a tuple with the ServerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerName

`func (o *MCPServer) SetServerName(v string)`

SetServerName sets ServerName field to given value.

### HasServerName

`func (o *MCPServer) HasServerName() bool`

HasServerName returns a boolean if a field has been set.

### GetSanctionedStatus

`func (o *MCPServer) GetSanctionedStatus() SanctionedStatus`

GetSanctionedStatus returns the SanctionedStatus field if non-nil, zero value otherwise.

### GetSanctionedStatusOk

`func (o *MCPServer) GetSanctionedStatusOk() (*SanctionedStatus, bool)`

GetSanctionedStatusOk returns a tuple with the SanctionedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSanctionedStatus

`func (o *MCPServer) SetSanctionedStatus(v SanctionedStatus)`

SetSanctionedStatus sets SanctionedStatus field to given value.

### HasSanctionedStatus

`func (o *MCPServer) HasSanctionedStatus() bool`

HasSanctionedStatus returns a boolean if a field has been set.

### GetDescription

`func (o *MCPServer) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MCPServer) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MCPServer) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MCPServer) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *MCPServer) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *MCPServer) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetVersion

`func (o *MCPServer) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *MCPServer) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *MCPServer) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *MCPServer) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### SetVersionNil

`func (o *MCPServer) SetVersionNil(b bool)`

 SetVersionNil sets the value for Version to be an explicit nil

### UnsetVersion
`func (o *MCPServer) UnsetVersion()`

UnsetVersion ensures that no value is present for Version, not even an explicit nil
### GetRemotes

`func (o *MCPServer) GetRemotes() []string`

GetRemotes returns the Remotes field if non-nil, zero value otherwise.

### GetRemotesOk

`func (o *MCPServer) GetRemotesOk() (*[]string, bool)`

GetRemotesOk returns a tuple with the Remotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemotes

`func (o *MCPServer) SetRemotes(v []string)`

SetRemotes sets Remotes field to given value.

### HasRemotes

`func (o *MCPServer) HasRemotes() bool`

HasRemotes returns a boolean if a field has been set.

### GetPackages

`func (o *MCPServer) GetPackages() []MCPPackage`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *MCPServer) GetPackagesOk() (*[]MCPPackage, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *MCPServer) SetPackages(v []MCPPackage)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *MCPServer) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetConnectedAgentCount

`func (o *MCPServer) GetConnectedAgentCount() int64`

GetConnectedAgentCount returns the ConnectedAgentCount field if non-nil, zero value otherwise.

### GetConnectedAgentCountOk

`func (o *MCPServer) GetConnectedAgentCountOk() (*int64, bool)`

GetConnectedAgentCountOk returns a tuple with the ConnectedAgentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedAgentCount

`func (o *MCPServer) SetConnectedAgentCount(v int64)`

SetConnectedAgentCount sets ConnectedAgentCount field to given value.

### HasConnectedAgentCount

`func (o *MCPServer) HasConnectedAgentCount() bool`

HasConnectedAgentCount returns a boolean if a field has been set.

### GetCreated

`func (o *MCPServer) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MCPServer) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MCPServer) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MCPServer) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MCPServer) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MCPServer) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MCPServer) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MCPServer) HasModified() bool`

HasModified returns a boolean if a field has been set.


