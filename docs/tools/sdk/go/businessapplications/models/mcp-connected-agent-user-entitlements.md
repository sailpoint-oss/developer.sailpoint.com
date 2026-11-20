# MCPConnectedAgentUserEntitlements

# MCPConnectedAgentUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | Source ID of the entitlement. | [optional] 
**EntitlementId** | Pointer to **string** | Entitlement ID. | [optional] 
**DisplayName** | Pointer to **string** | Entitlement display name. | [optional] 
**Source** | Pointer to [**BaseReferenceDto**](base-reference-dto) | Source of the entitlement. | [optional] 

## Methods

### NewMCPConnectedAgentUserEntitlements

`func NewMCPConnectedAgentUserEntitlements() *MCPConnectedAgentUserEntitlements`

NewMCPConnectedAgentUserEntitlements instantiates a new MCPConnectedAgentUserEntitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMCPConnectedAgentUserEntitlementsWithDefaults

`func NewMCPConnectedAgentUserEntitlementsWithDefaults() *MCPConnectedAgentUserEntitlements`

NewMCPConnectedAgentUserEntitlementsWithDefaults instantiates a new MCPConnectedAgentUserEntitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *MCPConnectedAgentUserEntitlements) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MCPConnectedAgentUserEntitlements) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MCPConnectedAgentUserEntitlements) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MCPConnectedAgentUserEntitlements) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *MCPConnectedAgentUserEntitlements) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *MCPConnectedAgentUserEntitlements) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *MCPConnectedAgentUserEntitlements) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *MCPConnectedAgentUserEntitlements) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetDisplayName

`func (o *MCPConnectedAgentUserEntitlements) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *MCPConnectedAgentUserEntitlements) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *MCPConnectedAgentUserEntitlements) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *MCPConnectedAgentUserEntitlements) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSource

`func (o *MCPConnectedAgentUserEntitlements) GetSource() BaseReferenceDto`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MCPConnectedAgentUserEntitlements) GetSourceOk() (*BaseReferenceDto, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MCPConnectedAgentUserEntitlements) SetSource(v BaseReferenceDto)`

SetSource sets Source field to given value.

### HasSource

`func (o *MCPConnectedAgentUserEntitlements) HasSource() bool`

HasSource returns a boolean if a field has been set.


