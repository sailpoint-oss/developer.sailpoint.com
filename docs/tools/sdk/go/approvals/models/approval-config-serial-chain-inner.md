# ApprovalConfigSerialChainInner

# ApprovalConfigSerialChainInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | Optional Identity ID of the type of identity defined in the 'identityType' field. | [optional] 
**IdentityType** | Pointer to **string** | Type of identityId in the serial chain. | [optional] 

## Methods

### NewApprovalConfigSerialChainInner

`func NewApprovalConfigSerialChainInner() *ApprovalConfigSerialChainInner`

NewApprovalConfigSerialChainInner instantiates a new ApprovalConfigSerialChainInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigSerialChainInnerWithDefaults

`func NewApprovalConfigSerialChainInnerWithDefaults() *ApprovalConfigSerialChainInner`

NewApprovalConfigSerialChainInnerWithDefaults instantiates a new ApprovalConfigSerialChainInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *ApprovalConfigSerialChainInner) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *ApprovalConfigSerialChainInner) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *ApprovalConfigSerialChainInner) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *ApprovalConfigSerialChainInner) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetIdentityType

`func (o *ApprovalConfigSerialChainInner) GetIdentityType() string`

GetIdentityType returns the IdentityType field if non-nil, zero value otherwise.

### GetIdentityTypeOk

`func (o *ApprovalConfigSerialChainInner) GetIdentityTypeOk() (*string, bool)`

GetIdentityTypeOk returns a tuple with the IdentityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityType

`func (o *ApprovalConfigSerialChainInner) SetIdentityType(v string)`

SetIdentityType sets IdentityType field to given value.

### HasIdentityType

`func (o *ApprovalConfigSerialChainInner) HasIdentityType() bool`

HasIdentityType returns a boolean if a field has been set.


