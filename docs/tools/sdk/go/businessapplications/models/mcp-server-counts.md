# MCPServerCounts

# MCPServerCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegistryEntries** | Pointer to **int64** | Total number of MCP servers in the tenant. | [optional] 
**Remote** | Pointer to **int64** | Number of MCP servers that have at least one remote endpoint. | [optional] 
**ConnectedAgentCount** | Pointer to **int64** | Number of distinct AI agents connected to at least one MCP server. An agent connected to several MCP servers is counted once, so this can be less than the sum of each server's `connectedAgentCount`. | [optional] 

## Methods

### NewMCPServerCounts

`func NewMCPServerCounts() *MCPServerCounts`

NewMCPServerCounts instantiates a new MCPServerCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMCPServerCountsWithDefaults

`func NewMCPServerCountsWithDefaults() *MCPServerCounts`

NewMCPServerCountsWithDefaults instantiates a new MCPServerCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegistryEntries

`func (o *MCPServerCounts) GetRegistryEntries() int64`

GetRegistryEntries returns the RegistryEntries field if non-nil, zero value otherwise.

### GetRegistryEntriesOk

`func (o *MCPServerCounts) GetRegistryEntriesOk() (*int64, bool)`

GetRegistryEntriesOk returns a tuple with the RegistryEntries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistryEntries

`func (o *MCPServerCounts) SetRegistryEntries(v int64)`

SetRegistryEntries sets RegistryEntries field to given value.

### HasRegistryEntries

`func (o *MCPServerCounts) HasRegistryEntries() bool`

HasRegistryEntries returns a boolean if a field has been set.

### GetRemote

`func (o *MCPServerCounts) GetRemote() int64`

GetRemote returns the Remote field if non-nil, zero value otherwise.

### GetRemoteOk

`func (o *MCPServerCounts) GetRemoteOk() (*int64, bool)`

GetRemoteOk returns a tuple with the Remote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemote

`func (o *MCPServerCounts) SetRemote(v int64)`

SetRemote sets Remote field to given value.

### HasRemote

`func (o *MCPServerCounts) HasRemote() bool`

HasRemote returns a boolean if a field has been set.

### GetConnectedAgentCount

`func (o *MCPServerCounts) GetConnectedAgentCount() int64`

GetConnectedAgentCount returns the ConnectedAgentCount field if non-nil, zero value otherwise.

### GetConnectedAgentCountOk

`func (o *MCPServerCounts) GetConnectedAgentCountOk() (*int64, bool)`

GetConnectedAgentCountOk returns a tuple with the ConnectedAgentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedAgentCount

`func (o *MCPServerCounts) SetConnectedAgentCount(v int64)`

SetConnectedAgentCount sets ConnectedAgentCount field to given value.

### HasConnectedAgentCount

`func (o *MCPServerCounts) HasConnectedAgentCount() bool`

HasConnectedAgentCount returns a boolean if a field has been set.


