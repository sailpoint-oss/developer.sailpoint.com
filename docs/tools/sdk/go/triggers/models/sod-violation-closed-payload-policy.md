# SODViolationClosedPayloadPolicy

# SODViolationClosedPayloadPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Policy ID. | [optional] 
**Type** | Pointer to **string** | Policy type (always **SOD** for this webhook). | [optional] 

## Methods

### NewSODViolationClosedPayloadPolicy

`func NewSODViolationClosedPayloadPolicy() *SODViolationClosedPayloadPolicy`

NewSODViolationClosedPayloadPolicy instantiates a new SODViolationClosedPayloadPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSODViolationClosedPayloadPolicyWithDefaults

`func NewSODViolationClosedPayloadPolicyWithDefaults() *SODViolationClosedPayloadPolicy`

NewSODViolationClosedPayloadPolicyWithDefaults instantiates a new SODViolationClosedPayloadPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SODViolationClosedPayloadPolicy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SODViolationClosedPayloadPolicy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SODViolationClosedPayloadPolicy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SODViolationClosedPayloadPolicy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *SODViolationClosedPayloadPolicy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SODViolationClosedPayloadPolicy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SODViolationClosedPayloadPolicy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SODViolationClosedPayloadPolicy) HasType() bool`

HasType returns a boolean if a field has been set.


